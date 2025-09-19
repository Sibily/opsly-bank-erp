import { BarChart3, FileText, TrendingUp, Download, Calendar } from "lucide-react";
import { BankingCard, BankingCardContent, BankingCardDescription, BankingCardHeader, BankingCardTitle } from "@/components/ui/banking-card";
import { BankingButton } from "@/components/ui/banking-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Reports = () => {
  const reportTypes = [
    { 
      title: "Sales Report", 
      description: "Detailed sales performance and revenue analysis",
      icon: TrendingUp,
      lastGenerated: "2 hours ago"
    },
    { 
      title: "Inventory Report", 
      description: "Stock levels, movement, and valuation",
      icon: BarChart3,
      lastGenerated: "1 day ago"
    },
    { 
      title: "Customer Report", 
      description: "Customer demographics and engagement metrics",
      icon: FileText,
      lastGenerated: "3 days ago"
    },
    { 
      title: "Financial Report", 
      description: "Profit & loss, cash flow, and financial health",
      icon: FileText,
      lastGenerated: "1 week ago"
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Analytics</h1>
        <p className="text-muted-foreground">Generate comprehensive reports and analyze your business performance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <BankingCard variant="elevated">
            <BankingCardHeader>
              <BankingCardTitle>Available Reports</BankingCardTitle>
              <BankingCardDescription>Select and generate business reports</BankingCardDescription>
            </BankingCardHeader>
            <BankingCardContent>
              <div className="space-y-4">
                {reportTypes.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-card-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-primary p-2 rounded-lg">
                        <report.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{report.title}</h3>
                        <p className="text-sm text-muted-foreground">{report.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">Last generated: {report.lastGenerated}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BankingButton variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </BankingButton>
                      <BankingButton variant="banking" size="sm">
                        Generate
                      </BankingButton>
                    </div>
                  </div>
                ))}
              </div>
            </BankingCardContent>
          </BankingCard>
        </div>

        <div className="space-y-6">
          <BankingCard variant="elevated">
            <BankingCardHeader>
              <BankingCardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Date Range
              </BankingCardTitle>
            </BankingCardHeader>
            <BankingCardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" type="date" />
              </div>
              <BankingButton variant="outline" className="w-full">
                Apply Filter
              </BankingButton>
            </BankingCardContent>
          </BankingCard>

          <BankingCard variant="elevated">
            <BankingCardHeader>
              <BankingCardTitle>Quick Stats</BankingCardTitle>
            </BankingCardHeader>
            <BankingCardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">$124,563</div>
                <p className="text-sm text-muted-foreground">Total Revenue (This Month)</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">1,245</div>
                <p className="text-sm text-muted-foreground">Active Customers</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">89</div>
                <p className="text-sm text-muted-foreground">Pending Orders</p>
              </div>
            </BankingCardContent>
          </BankingCard>
        </div>
      </div>
    </div>
  );
};

export default Reports;