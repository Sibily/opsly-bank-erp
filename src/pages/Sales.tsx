import { TrendingUp, Users, ShoppingCart, Target } from "lucide-react";
import { BankingCard, BankingCardContent, BankingCardDescription, BankingCardHeader, BankingCardTitle } from "@/components/ui/banking-card";

const Sales = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Sales Management</h1>
        <p className="text-muted-foreground">Monitor sales performance, track leads, and manage customer relationships.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Total Sales
            </BankingCardTitle>
            <BankingCardDescription>This month</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">$98,456</div>
            <p className="text-sm text-success">+15.2% vs last month</p>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              New Leads
            </BankingCardTitle>
            <BankingCardDescription>This week</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">47</div>
            <p className="text-sm text-success">+8.1% vs last week</p>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Orders
            </BankingCardTitle>
            <BankingCardDescription>Pending processing</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">23</div>
            <p className="text-sm text-warning">Needs attention</p>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5" />
              Conversion Rate
            </BankingCardTitle>
            <BankingCardDescription>Lead to customer</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">24.8%</div>
            <p className="text-sm text-success">+3.2% vs last month</p>
          </BankingCardContent>
        </BankingCard>
      </div>
    </div>
  );
};

export default Sales;