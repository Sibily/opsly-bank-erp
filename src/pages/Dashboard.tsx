import { useState } from "react";
import { Building2, Menu, Bell, Search, User, BarChart3, DollarSign, Package, Users, TrendingUp, AlertTriangle } from "lucide-react";
import { BankingButton } from "@/components/ui/banking-button";
import { BankingCard, BankingCardContent, BankingCardDescription, BankingCardHeader, BankingCardTitle } from "@/components/ui/banking-card";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Revenue",
      value: "$124,563",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Active Customers",
      value: "1,245",
      change: "+8.2%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Inventory Items",
      value: "3,456",
      change: "-2.1%",
      trend: "down",
      icon: Package,
    },
    {
      title: "Pending Orders",
      value: "89",
      change: "+15.3%",
      trend: "up",
      icon: BarChart3,
    },
  ];

  const recentActivities = [
    { action: "New invoice generated", customer: "Acme Corp", amount: "$5,432", time: "2 min ago" },
    { action: "Payment received", customer: "Tech Solutions", amount: "$12,000", time: "15 min ago" },
    { action: "Stock alert", customer: "Low inventory", amount: "25 items", time: "1 hour ago" },
    { action: "New customer added", customer: "Global Industries", amount: "", time: "3 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="bg-card border-b border-card-border sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <BankingButton
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </BankingButton>
              
              <Link to="/" className="flex items-center space-x-2">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Opsly</span>
              </Link>
            </div>

            <div className="flex-1 max-w-lg mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search customers, invoices, products..." 
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <BankingButton variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </BankingButton>
              <BankingButton variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </BankingButton>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} lg:w-64 bg-card border-r border-card-border transition-all duration-300 overflow-hidden`}>
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Main Menu
                </h3>
                <nav className="space-y-2">
                  <BankingButton variant="banking" className="w-full justify-start">
                    <BarChart3 className="mr-3 h-4 w-4" />
                    Dashboard
                  </BankingButton>
                  <BankingButton 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => navigate('/financial')}
                  >
                    <DollarSign className="mr-3 h-4 w-4" />
                    Financial
                  </BankingButton>
                  <BankingButton 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => navigate('/sales')}
                  >
                    <TrendingUp className="mr-3 h-4 w-4" />
                    Sales
                  </BankingButton>
                  <BankingButton 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => navigate('/inventory')}
                  >
                    <Package className="mr-3 h-4 w-4" />
                    Inventory
                  </BankingButton>
                  <BankingButton 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => navigate('/customers')}
                  >
                    <Users className="mr-3 h-4 w-4" />
                    Customers
                  </BankingButton>
                </nav>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your business today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <BankingCard key={index} variant="elevated" className="hover:scale-105 transition-all duration-200">
                <BankingCardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                      <p className={`text-sm mt-1 flex items-center ${
                        stat.trend === 'up' ? 'text-success' : 'text-destructive'
                      }`}>
                        <TrendingUp className={`h-3 w-3 mr-1 ${
                          stat.trend === 'down' ? 'rotate-180' : ''
                        }`} />
                        {stat.change}
                      </p>
                    </div>
                    <div className="bg-gradient-primary p-3 rounded-full">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </BankingCardContent>
              </BankingCard>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Recent Activity */}
            <BankingCard variant="elevated">
              <BankingCardHeader>
                <BankingCardTitle>Recent Activity</BankingCardTitle>
                <BankingCardDescription>Latest transactions and updates</BankingCardDescription>
              </BankingCardHeader>
              <BankingCardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-card-border last:border-b-0">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.customer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{activity.amount}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </BankingCardContent>
            </BankingCard>

            {/* Quick Actions */}
            <BankingCard variant="elevated">
              <BankingCardHeader>
                <BankingCardTitle>Quick Actions</BankingCardTitle>
                <BankingCardDescription>Common tasks and shortcuts</BankingCardDescription>
              </BankingCardHeader>
              <BankingCardContent>
                <div className="grid grid-cols-2 gap-4">
                  <BankingButton 
                    variant="banking" 
                    className="h-20 flex-col"
                    onClick={() => navigate('/new-invoice')}
                  >
                    <DollarSign className="h-6 w-6 mb-2" />
                    New Invoice
                  </BankingButton>
                  <BankingButton 
                    variant="outline" 
                    className="h-20 flex-col"
                    onClick={() => navigate('/add-customer')}
                  >
                    <Users className="h-6 w-6 mb-2" />
                    Add Customer
                  </BankingButton>
                  <BankingButton 
                    variant="outline" 
                    className="h-20 flex-col"
                    onClick={() => navigate('/update-stock')}
                  >
                    <Package className="h-6 w-6 mb-2" />
                    Update Stock
                  </BankingButton>
                  <BankingButton 
                    variant="outline" 
                    className="h-20 flex-col"
                    onClick={() => navigate('/reports')}
                  >
                    <BarChart3 className="h-6 w-6 mb-2" />
                    View Reports
                  </BankingButton>
                </div>
              </BankingCardContent>
            </BankingCard>
          </div>

          {/* Alerts */}
          <BankingCard variant="warning">
            <BankingCardContent className="p-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <div>
                  <p className="text-sm font-medium text-foreground">Low Stock Alert</p>
                  <p className="text-sm text-muted-foreground">3 items are running low on inventory</p>
                </div>
                <BankingButton variant="warning" size="sm" className="ml-auto">
                  View Details
                </BankingButton>
              </div>
            </BankingCardContent>
          </BankingCard>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;