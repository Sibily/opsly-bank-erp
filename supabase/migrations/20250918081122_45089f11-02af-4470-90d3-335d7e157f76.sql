-- CRITICAL SECURITY FIX: Enable RLS and implement multi-tenant policies for Opsly ERP

-- Step 1: Create user profiles table for proper authentication
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id INTEGER REFERENCES public.companies(id) ON DELETE CASCADE,
  role_id INTEGER REFERENCES public.roles(id),
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(id)
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Step 2: Create role-based access function (security definer to avoid recursion)
CREATE OR REPLACE FUNCTION public.get_user_company_id()
RETURNS INTEGER
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT company_id FROM public.profiles WHERE id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS INTEGER
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT role_id FROM public.profiles WHERE id = auth.uid();
$$;

-- Step 3: Enable RLS on ALL tables
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sales_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sales_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.purchase_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.supplier_invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stock_levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.warehouses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reorder_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounts_receivable ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounts_payable ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.general_ledger ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.financial_summary_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sales_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.backups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.compliance_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.security_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.integration_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoice_automation_logs ENABLE ROW LEVEL SECURITY;

-- Step 4: Create RLS policies for profiles
CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
ON public.profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

-- Step 5: Create multi-tenant policies for companies
CREATE POLICY "Users can view their own company"
ON public.companies FOR SELECT
TO authenticated
USING (id = public.get_user_company_id());

CREATE POLICY "Company admins can update their company"
ON public.companies FOR UPDATE
TO authenticated
USING (id = public.get_user_company_id());

-- Step 6: Create multi-tenant policies for core business tables
-- Customers policies
CREATE POLICY "Users can view customers from their company"
ON public.customers FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert customers for their company"
ON public.customers FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update customers from their company"
ON public.customers FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete customers from their company"
ON public.customers FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Suppliers policies
CREATE POLICY "Users can view suppliers from their company"
ON public.suppliers FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert suppliers for their company"
ON public.suppliers FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update suppliers from their company"
ON public.suppliers FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete suppliers from their company"
ON public.suppliers FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Invoices policies
CREATE POLICY "Users can view invoices from their company"
ON public.invoices FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert invoices for their company"
ON public.invoices FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update invoices from their company"
ON public.invoices FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete invoices from their company"
ON public.invoices FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Sales Orders policies
CREATE POLICY "Users can view sales orders from their company"
ON public.sales_orders FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert sales orders for their company"
ON public.sales_orders FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update sales orders from their company"
ON public.sales_orders FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete sales orders from their company"
ON public.sales_orders FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Sales Quotes policies
CREATE POLICY "Users can view sales quotes from their company"
ON public.sales_quotes FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert sales quotes for their company"
ON public.sales_quotes FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update sales quotes from their company"
ON public.sales_quotes FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete sales quotes from their company"
ON public.sales_quotes FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Purchase Orders policies
CREATE POLICY "Users can view purchase orders from their company"
ON public.purchase_orders FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert purchase orders for their company"
ON public.purchase_orders FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update purchase orders from their company"
ON public.purchase_orders FOR UPDATE  
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete purchase orders from their company"
ON public.purchase_orders FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Supplier Invoices policies
CREATE POLICY "Users can view supplier invoices from their company"
ON public.supplier_invoices FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert supplier invoices for their company"
ON public.supplier_invoices FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update supplier invoices from their company"
ON public.supplier_invoices FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete supplier invoices from their company"
ON public.supplier_invoices FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Inventory Items policies
CREATE POLICY "Users can view inventory items from their company"
ON public.inventory_items FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert inventory items for their company"
ON public.inventory_items FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update inventory items from their company"
ON public.inventory_items FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete inventory items from their company"
ON public.inventory_items FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Stock Levels policies
CREATE POLICY "Users can view stock levels from their company"
ON public.stock_levels FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert stock levels for their company"
ON public.stock_levels FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update stock levels from their company"
ON public.stock_levels FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete stock levels from their company"
ON public.stock_levels FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Warehouses policies
CREATE POLICY "Users can view warehouses from their company"
ON public.warehouses FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert warehouses for their company"
ON public.warehouses FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update warehouses from their company"
ON public.warehouses FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete warehouses from their company"
ON public.warehouses FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Step 7: Create policies for financial tables
CREATE POLICY "Users can view expenses from their company"
ON public.expenses FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert expenses for their company"
ON public.expenses FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update expenses from their company"
ON public.expenses FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can delete expenses from their company"
ON public.expenses FOR DELETE
TO authenticated
USING (company_id = public.get_user_company_id());

-- General Ledger policies
CREATE POLICY "Users can view general ledger from their company"
ON public.general_ledger FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert general ledger entries for their company"
ON public.general_ledger FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update general ledger from their company"
ON public.general_ledger FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Accounts Receivable policies
CREATE POLICY "Users can view accounts receivable from their company"
ON public.accounts_receivable FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert accounts receivable for their company"
ON public.accounts_receivable FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update accounts receivable from their company"
ON public.accounts_receivable FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Accounts Payable policies
CREATE POLICY "Users can view accounts payable from their company"
ON public.accounts_payable FOR SELECT
TO authenticated
USING (company_id = public.get_user_company_id());

CREATE POLICY "Users can insert accounts payable for their company"
ON public.accounts_payable FOR INSERT
TO authenticated
WITH CHECK (company_id = public.get_user_company_id());

CREATE POLICY "Users can update accounts payable from their company"
ON public.accounts_payable FOR UPDATE
TO authenticated
USING (company_id = public.get_user_company_id());

-- Step 8: Create trigger to automatically create profile on user signup
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

-- Create trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Step 9: Create roles policies (everyone can see roles)
CREATE POLICY "Anyone can view roles"
ON public.roles FOR SELECT
TO authenticated
USING (true);

-- Step 10: System-wide tables (reports, logs) - restricted access
CREATE POLICY "Authenticated users can view financial reports"
ON public.financial_summary_reports FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can view sales reports"
ON public.sales_reports FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can view inventory reports"
ON public.inventory_reports FOR SELECT
TO authenticated
USING (true);

-- Step 11: Create basic roles if they don't exist
INSERT INTO public.roles (name) VALUES 
  ('Super Admin'),
  ('Company Admin'),
  ('Sales Manager'),
  ('Inventory Manager'),
  ('Finance Manager'),
  ('Employee')
ON CONFLICT (name) DO NOTHING;

-- Step 12: Update timestamp function for profiles
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();