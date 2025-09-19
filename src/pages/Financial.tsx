import { DollarSign, TrendingUp, CreditCard, FileText } from "lucide-react";
import { BankingCard, BankingCardContent, BankingCardDescription, BankingCardHeader, BankingCardTitle } from "@/components/ui/banking-card";

const Financial = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Financial Management</h1>
        <p className="text-muted-foreground">Track your revenue, expenses, and financial performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5" />
              Revenue Overview
            </BankingCardTitle>
            <BankingCardDescription>Monthly revenue tracking</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">$124,563</div>
            <p className="text-sm text-success">+12.5% from last month</p>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Expenses
            </BankingCardTitle>
            <BankingCardDescription>Monthly expense tracking</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">$89,432</div>
            <p className="text-sm text-destructive">+5.2% from last month</p>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <CreditCard className="mr-2 h-5 w-5" />
              Net Profit
            </BankingCardTitle>
            <BankingCardDescription>Current month profit</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">$35,131</div>
            <p className="text-sm text-success">+18.3% from last month</p>
          </BankingCardContent>
        </BankingCard>
      </div>
    </div>
  );
};

export default Financial;