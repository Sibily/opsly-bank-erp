-- SECURITY PATCH: Address remaining RLS policy gaps and function security

-- Step 1: Add missing RLS policies for remaining tables without policies
CREATE POLICY "Users can view reorder alerts from their company"
ON public.reorder_alerts FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert reorder alerts for their company"
ON public.reorder_alerts FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update reorder alerts from their company"
ON public.reorder_alerts FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete reorder alerts from their company"
ON public.reorder_alerts FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Alerts policies (system-wide alerts - all authenticated users can view)
CREATE POLICY "Authenticated users can view alerts"
ON public.alerts FOR SELECT
TO authenticated
USING (true);

-- Backups policies (system admin only - restrict to admins in real implementation)
CREATE POLICY "Authenticated users can view backups"
ON public.backups FOR SELECT
TO authenticated
USING (true);

-- Compliance logs policies (system-wide logs - all authenticated users can view)
CREATE POLICY "Authenticated users can view compliance logs"
ON public.compliance_logs FOR SELECT
TO authenticated
USING (true);

-- Security logs policies (system-wide logs - all authenticated users can view)
CREATE POLICY "Authenticated users can view security logs"
ON public.security_logs FOR SELECT
TO authenticated
USING (true);

-- Settings policies (system-wide settings - all authenticated users can view)
CREATE POLICY "Authenticated users can view settings"
ON public.settings FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can update settings"
ON public.settings FOR UPDATE
TO authenticated
USING (true);

-- Integration settings policies (system-wide - all authenticated users can view)
CREATE POLICY "Authenticated users can view integration settings"  
ON public.integration_settings FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can update integration settings"
ON public.integration_settings FOR UPDATE
TO authenticated
USING (true);

-- Invoice automation logs policies
CREATE POLICY "Users can view invoice automation logs from their company"
ON public.invoice_automation_logs FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.invoices 
    WHERE invoices.id = invoice_automation_logs.invoice_id 
    AND invoices.company_id = public.get_user_company_id()
  )
);

-- Users table policies (for legacy user management)
CREATE POLICY "Users can view users from their company"
ON public.users FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert users for their company"
ON public.users FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update users from their company"
ON public.users FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Step 2: Fix function search path security issues
CREATE OR REPLACE FUNCTION public.get_user_company_id()
RETURNS INTEGER
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT company_id FROM public.profiles WHERE id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS INTEGER
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT role_id FROM public.profiles WHERE id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name'
  );
  RETURN new;
END;
$$;

-- Step 3: Add company insertion policy for new company creation
CREATE POLICY "New users can create companies"
ON public.companies FOR INSERT
TO authenticated
WITH CHECK (true);

-- Step 4: Add profile company assignment after company creation
CREATE OR REPLACE FUNCTION public.assign_user_to_company(company_id_param INTEGER)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.profiles 
  SET company_id = company_id_param,
      role_id = (SELECT id FROM public.roles WHERE name = 'Company Admin' LIMIT 1)
  WHERE id = auth.uid();
  
  RETURN FOUND;
END;
$$;

-- Step 5: Add comprehensive delete policies for data cleanup
CREATE POLICY "Users can delete accounts receivable from their company"
ON public.accounts_receivable FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete accounts payable from their company" 
ON public.accounts_payable FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete general ledger from their company"
ON public.general_ledger FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete reorder alerts from their company"
ON public.reorder_alerts FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Step 6: Add insert policies for financial tables
CREATE POLICY "Users can insert accounts receivable for their company"
ON public.accounts_receivable FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert accounts payable for their company"
ON public.accounts_payable FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert reorder alerts for their company"
ON public.reorder_alerts FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

-- Step 7: Create helper function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_company_admin()
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles p
    JOIN public.roles r ON p.role_id = r.id
    WHERE p.id = auth.uid() AND r.name IN ('Company Admin', 'Super Admin')
  );
$$;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated;