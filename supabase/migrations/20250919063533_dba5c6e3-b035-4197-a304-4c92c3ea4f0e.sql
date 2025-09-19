-- TARGETED SECURITY PATCH: Fix remaining policy gaps and function security

-- Step 1: Add missing policies for tables that still need them (check if they exist first)
DO $$
BEGIN
  -- Alerts policies 
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'alerts' AND policyname = 'Authenticated users can view alerts') THEN
    CREATE POLICY "Authenticated users can view alerts"
    ON public.alerts FOR SELECT TO authenticated USING (true);
  END IF;

  -- Backups policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'backups' AND policyname = 'Authenticated users can view backups') THEN
    CREATE POLICY "Authenticated users can view backups"
    ON public.backups FOR SELECT TO authenticated USING (true);
  END IF;

  -- Compliance logs policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'compliance_logs' AND policyname = 'Authenticated users can view compliance logs') THEN
    CREATE POLICY "Authenticated users can view compliance logs"
    ON public.compliance_logs FOR SELECT TO authenticated USING (true);
  END IF;

  -- Security logs policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'security_logs' AND policyname = 'Authenticated users can view security logs') THEN
    CREATE POLICY "Authenticated users can view security logs"
    ON public.security_logs FOR SELECT TO authenticated USING (true);
  END IF;

  -- Settings policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'settings' AND policyname = 'Authenticated users can view settings') THEN
    CREATE POLICY "Authenticated users can view settings"
    ON public.settings FOR SELECT TO authenticated USING (true);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'settings' AND policyname = 'Authenticated users can update settings') THEN
    CREATE POLICY "Authenticated users can update settings"
    ON public.settings FOR UPDATE TO authenticated USING (true);
  END IF;

  -- Integration settings policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'integration_settings' AND policyname = 'Authenticated users can view integration settings') THEN
    CREATE POLICY "Authenticated users can view integration settings"
    ON public.integration_settings FOR SELECT TO authenticated USING (true);
  END IF;

  -- Invoice automation logs
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'invoice_automation_logs' AND policyname = 'Users can view invoice automation logs from their company') THEN
    CREATE POLICY "Users can view invoice automation logs from their company"
    ON public.invoice_automation_logs FOR SELECT TO authenticated
    USING (
      EXISTS (
        SELECT 1 FROM public.invoices 
        WHERE invoices.id = invoice_automation_logs.invoice_id 
        AND invoices.company_id = public.get_user_company_id()
      )
    );
  END IF;

  -- Users table policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'users' AND policyname = 'Users can view users from their company') THEN
    CREATE POLICY "Users can view users from their company"
    ON public.users FOR SELECT TO authenticated USING (company_id = public.get_user_company_id());
  END IF;

  -- Company creation policy
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'companies' AND policyname = 'New users can create companies') THEN
    CREATE POLICY "New users can create companies"
    ON public.companies FOR INSERT TO authenticated WITH CHECK (true);
  END IF;

END $$;

-- Step 2: Fix function search path issues (UPDATE existing functions)
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

-- Step 3: Create admin helper function
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

-- Step 4: Create company assignment helper function
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

-- Step 5: Ensure proper permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated;