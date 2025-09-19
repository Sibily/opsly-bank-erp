import { Users, UserPlus, Mail, Phone } from "lucide-react";
import { BankingCard, BankingCardContent, BankingCardDescription, BankingCardHeader, BankingCardTitle } from "@/components/ui/banking-card";
import { BankingButton } from "@/components/ui/banking-button";

const Customers = () => {
  const recentCustomers = [
    { name: "Acme Corporation", email: "contact@acme.com", phone: "+1 (555) 123-4567", status: "Active" },
    { name: "Tech Solutions Inc", email: "hello@techsolutions.com", phone: "+1 (555) 987-6543", status: "Active" },
    { name: "Global Industries", email: "info@global.com", phone: "+1 (555) 456-7890", status: "Pending" },
    { name: "Innovation Labs", email: "team@innovation.com", phone: "+1 (555) 321-0987", status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Customer Management</h1>
          <p className="text-muted-foreground">Manage customer relationships, track interactions, and grow your business.</p>
        </div>
        <BankingButton variant="banking">
          <UserPlus className="mr-2 h-4 w-4" />
          Add New Customer
        </BankingButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Total Customers
            </BankingCardTitle>
            <BankingCardDescription>Active accounts</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">1,245</div>
            <p className="text-sm text-success">+8.2% this month</p>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <UserPlus className="mr-2 h-5 w-5" />
              New This Month
            </BankingCardTitle>
            <BankingCardDescription>Recently added</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">87</div>
            <p className="text-sm text-success">+23% vs last month</p>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Campaigns
            </BankingCardTitle>
            <BankingCardDescription>Active campaigns</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">12</div>
            <p className="text-sm text-muted-foreground">3 scheduled this week</p>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Support Tickets
            </BankingCardTitle>
            <BankingCardDescription>Open tickets</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">5</div>
            <p className="text-sm text-warning">2 urgent</p>
          </BankingCardContent>
        </BankingCard>
      </div>

      <BankingCard variant="elevated">
        <BankingCardHeader>
          <BankingCardTitle>Recent Customers</BankingCardTitle>
          <BankingCardDescription>Latest customer additions and updates</BankingCardDescription>
        </BankingCardHeader>
        <BankingCardContent>
          <div className="space-y-4">
            {recentCustomers.map((customer, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-card-border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{customer.name}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Mail className="mr-1 h-3 w-3" />
                      {customer.email}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Phone className="mr-1 h-3 w-3" />
                      {customer.phone}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    customer.status === 'Active' 
                      ? 'bg-success text-success-foreground' 
                      : 'bg-warning text-warning-foreground'
                  }`}>
                    {customer.status}
                  </span>
                  <BankingButton variant="outline" size="sm">
                    View Details
                  </BankingButton>
                </div>
              </div>
            ))}
          </div>
        </BankingCardContent>
      </BankingCard>
    </div>
  );
};

export default Customers;