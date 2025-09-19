export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      accounts_payable: {
        Row: {
          amount_due: number | null
          company_id: number | null
          due_date: string | null
          id: number
          invoice_id: number | null
          paid: boolean | null
          supplier_id: number
        }
        Insert: {
          amount_due?: number | null
          company_id?: number | null
          due_date?: string | null
          id?: number
          invoice_id?: number | null
          paid?: boolean | null
          supplier_id: number
        }
        Update: {
          amount_due?: number | null
          company_id?: number | null
          due_date?: string | null
          id?: number
          invoice_id?: number | null
          paid?: boolean | null
          supplier_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "accounts_payable_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounts_payable_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "supplier_invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounts_payable_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      accounts_receivable: {
        Row: {
          amount_due: number | null
          company_id: number | null
          customer_id: number
          due_date: string | null
          id: number
          invoice_id: number | null
          paid: boolean | null
        }
        Insert: {
          amount_due?: number | null
          company_id?: number | null
          customer_id: number
          due_date?: string | null
          id?: number
          invoice_id?: number | null
          paid?: boolean | null
        }
        Update: {
          amount_due?: number | null
          company_id?: number | null
          customer_id?: number
          due_date?: string | null
          id?: number
          invoice_id?: number | null
          paid?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_receivable_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounts_receivable_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounts_receivable_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      alerts: {
        Row: {
          alert_type: string | null
          id: number
          message: string | null
          sent_date: string
        }
        Insert: {
          alert_type?: string | null
          id?: number
          message?: string | null
          sent_date: string
        }
        Update: {
          alert_type?: string | null
          id?: number
          message?: string | null
          sent_date?: string
        }
        Relationships: []
      }
      backups: {
        Row: {
          backup_date: string
          id: number
          status: string | null
        }
        Insert: {
          backup_date: string
          id?: number
          status?: string | null
        }
        Update: {
          backup_date?: string
          id?: number
          status?: string | null
        }
        Relationships: []
      }
      companies: {
        Row: {
          address: string | null
          created_at: string | null
          email: string | null
          id: number
          name: string
          phone: string | null
          subdomain: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          name: string
          phone?: string | null
          subdomain?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string
          phone?: string | null
          subdomain?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      compliance_logs: {
        Row: {
          compliance_type: string | null
          description: string | null
          event_time: string
          id: number
        }
        Insert: {
          compliance_type?: string | null
          description?: string | null
          event_time: string
          id?: number
        }
        Update: {
          compliance_type?: string | null
          description?: string | null
          event_time?: string
          id?: number
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string | null
          company_id: number | null
          email: string | null
          id: number
          name: string
          phone: string | null
        }
        Insert: {
          address?: string | null
          company_id?: number | null
          email?: string | null
          id?: number
          name: string
          phone?: string | null
        }
        Update: {
          address?: string | null
          company_id?: number | null
          email?: string | null
          id?: number
          name?: string
          phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      expenses: {
        Row: {
          amount: number | null
          company_id: number | null
          description: string | null
          expense_date: string
          id: number
        }
        Insert: {
          amount?: number | null
          company_id?: number | null
          description?: string | null
          expense_date: string
          id?: number
        }
        Update: {
          amount?: number | null
          company_id?: number | null
          description?: string | null
          expense_date?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "expenses_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      financial_summary_reports: {
        Row: {
          id: number
          net_profit: number | null
          report_date: string
          total_expenses: number | null
          total_revenue: number | null
        }
        Insert: {
          id?: number
          net_profit?: number | null
          report_date: string
          total_expenses?: number | null
          total_revenue?: number | null
        }
        Update: {
          id?: number
          net_profit?: number | null
          report_date?: string
          total_expenses?: number | null
          total_revenue?: number | null
        }
        Relationships: []
      }
      general_ledger: {
        Row: {
          account_type: string | null
          company_id: number | null
          credit_amount: number | null
          debit_amount: number | null
          description: string | null
          id: number
          transaction_date: string
        }
        Insert: {
          account_type?: string | null
          company_id?: number | null
          credit_amount?: number | null
          debit_amount?: number | null
          description?: string | null
          id?: number
          transaction_date: string
        }
        Update: {
          account_type?: string | null
          company_id?: number | null
          credit_amount?: number | null
          debit_amount?: number | null
          description?: string | null
          id?: number
          transaction_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "general_ledger_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      integration_settings: {
        Row: {
          config_json: string | null
          id: number
          name: string
        }
        Insert: {
          config_json?: string | null
          id?: number
          name: string
        }
        Update: {
          config_json?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      inventory_items: {
        Row: {
          company_id: number | null
          description: string | null
          id: number
          name: string
          price: number | null
          sku: string | null
          warehouse_id: number | null
        }
        Insert: {
          company_id?: number | null
          description?: string | null
          id?: number
          name: string
          price?: number | null
          sku?: string | null
          warehouse_id?: number | null
        }
        Update: {
          company_id?: number | null
          description?: string | null
          id?: number
          name?: string
          price?: number | null
          sku?: string | null
          warehouse_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_items_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_reports: {
        Row: {
          id: number
          report_date: string
          total_items: number | null
          total_stock_value: number | null
        }
        Insert: {
          id?: number
          report_date: string
          total_items?: number | null
          total_stock_value?: number | null
        }
        Update: {
          id?: number
          report_date?: string
          total_items?: number | null
          total_stock_value?: number | null
        }
        Relationships: []
      }
      invoice_automation_logs: {
        Row: {
          generated_date: string
          id: number
          invoice_id: number | null
          status: string | null
        }
        Insert: {
          generated_date: string
          id?: number
          invoice_id?: number | null
          status?: string | null
        }
        Update: {
          generated_date?: string
          id?: number
          invoice_id?: number | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoice_automation_logs_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          company_id: number | null
          customer_id: number
          due_date: string | null
          id: number
          invoice_date: string
          status: string | null
          total_amount: number | null
        }
        Insert: {
          company_id?: number | null
          customer_id: number
          due_date?: string | null
          id?: number
          invoice_date: string
          status?: string | null
          total_amount?: number | null
        }
        Update: {
          company_id?: number | null
          customer_id?: number
          due_date?: string | null
          id?: number
          invoice_date?: string
          status?: string | null
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company_id: number | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          role_id: number | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          company_id?: number | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          role_id?: number | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          company_id?: number | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          role_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_orders: {
        Row: {
          company_id: number | null
          id: number
          order_date: string
          status: string | null
          supplier_id: number
          total_amount: number | null
        }
        Insert: {
          company_id?: number | null
          id?: number
          order_date: string
          status?: string | null
          supplier_id: number
          total_amount?: number | null
        }
        Update: {
          company_id?: number | null
          id?: number
          order_date?: string
          status?: string | null
          supplier_id?: number
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "purchase_orders_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_orders_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      reorder_alerts: {
        Row: {
          company_id: number | null
          id: number
          inventory_item_id: number
          min_quantity: number
        }
        Insert: {
          company_id?: number | null
          id?: number
          inventory_item_id: number
          min_quantity: number
        }
        Update: {
          company_id?: number | null
          id?: number
          inventory_item_id?: number
          min_quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "reorder_alerts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reorder_alerts_inventory_item_id_fkey"
            columns: ["inventory_item_id"]
            isOneToOne: false
            referencedRelation: "inventory_items"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      sales_orders: {
        Row: {
          company_id: number | null
          customer_id: number
          id: number
          order_date: string
          status: string | null
          total_amount: number | null
        }
        Insert: {
          company_id?: number | null
          customer_id: number
          id?: number
          order_date: string
          status?: string | null
          total_amount?: number | null
        }
        Update: {
          company_id?: number | null
          customer_id?: number
          id?: number
          order_date?: string
          status?: string | null
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_orders_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_quotes: {
        Row: {
          company_id: number | null
          customer_id: number | null
          id: number
          quote_date: string
          status: string | null
          total_amount: number | null
          valid_until: string | null
        }
        Insert: {
          company_id?: number | null
          customer_id?: number | null
          id?: number
          quote_date: string
          status?: string | null
          total_amount?: number | null
          valid_until?: string | null
        }
        Update: {
          company_id?: number | null
          customer_id?: number | null
          id?: number
          quote_date?: string
          status?: string | null
          total_amount?: number | null
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_quotes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_quotes_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_reports: {
        Row: {
          id: number
          report_date: string
          total_sales: number | null
        }
        Insert: {
          id?: number
          report_date: string
          total_sales?: number | null
        }
        Update: {
          id?: number
          report_date?: string
          total_sales?: number | null
        }
        Relationships: []
      }
      security_logs: {
        Row: {
          description: string | null
          event_time: string
          event_type: string | null
          id: number
        }
        Insert: {
          description?: string | null
          event_time: string
          event_type?: string | null
          id?: number
        }
        Update: {
          description?: string | null
          event_time?: string
          event_type?: string | null
          id?: number
        }
        Relationships: []
      }
      settings: {
        Row: {
          id: number
          key: string
          value: string | null
        }
        Insert: {
          id?: number
          key: string
          value?: string | null
        }
        Update: {
          id?: number
          key?: string
          value?: string | null
        }
        Relationships: []
      }
      stock_levels: {
        Row: {
          company_id: number | null
          id: number
          inventory_item_id: number
          quantity: number
          warehouse_id: number | null
        }
        Insert: {
          company_id?: number | null
          id?: number
          inventory_item_id: number
          quantity: number
          warehouse_id?: number | null
        }
        Update: {
          company_id?: number | null
          id?: number
          inventory_item_id?: number
          quantity?: number
          warehouse_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_levels_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_levels_inventory_item_id_fkey"
            columns: ["inventory_item_id"]
            isOneToOne: false
            referencedRelation: "inventory_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_levels_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      supplier_invoices: {
        Row: {
          company_id: number | null
          due_date: string | null
          id: number
          invoice_date: string
          purchase_order_id: number
          status: string | null
          total_amount: number | null
        }
        Insert: {
          company_id?: number | null
          due_date?: string | null
          id?: number
          invoice_date: string
          purchase_order_id: number
          status?: string | null
          total_amount?: number | null
        }
        Update: {
          company_id?: number | null
          due_date?: string | null
          id?: number
          invoice_date?: string
          purchase_order_id?: number
          status?: string | null
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "supplier_invoices_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "supplier_invoices_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      suppliers: {
        Row: {
          address: string | null
          company_id: number | null
          contact_person: string | null
          email: string | null
          id: number
          name: string
          phone: string | null
        }
        Insert: {
          address?: string | null
          company_id?: number | null
          contact_person?: string | null
          email?: string | null
          id?: number
          name: string
          phone?: string | null
        }
        Update: {
          address?: string | null
          company_id?: number | null
          contact_person?: string | null
          email?: string | null
          id?: number
          name?: string
          phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "suppliers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          company_id: number | null
          created_at: string | null
          email: string | null
          id: number
          password_hash: string | null
          role_id: number | null
          updated_at: string | null
          username: string
        }
        Insert: {
          company_id?: number | null
          created_at?: string | null
          email?: string | null
          id?: number
          password_hash?: string | null
          role_id?: number | null
          updated_at?: string | null
          username: string
        }
        Update: {
          company_id?: number | null
          created_at?: string | null
          email?: string | null
          id?: number
          password_hash?: string | null
          role_id?: number | null
          updated_at?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      warehouses: {
        Row: {
          company_id: number | null
          id: number
          location: string | null
          name: string
        }
        Insert: {
          company_id?: number | null
          id?: number
          location?: string | null
          name: string
        }
        Update: {
          company_id?: number | null
          id?: number
          location?: string | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "warehouses_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      assign_user_to_company: {
        Args: { company_id_param: number }
        Returns: boolean
      }
      get_user_company_id: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_user_role: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      is_company_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
