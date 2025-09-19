import { Package, AlertTriangle, TrendingDown, Plus } from "lucide-react";
import { BankingCard, BankingCardContent, BankingCardDescription, BankingCardHeader, BankingCardTitle } from "@/components/ui/banking-card";
import { BankingButton } from "@/components/ui/banking-button";

const Inventory = () => {
  const lowStockItems = [
    { name: "Premium Widget A", current: 5, minimum: 20, status: "critical" },
    { name: "Standard Component B", current: 12, minimum: 25, status: "low" },
    { name: "Deluxe Package C", current: 8, minimum: 15, status: "low" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Inventory Management</h1>
        <p className="text-muted-foreground">Monitor stock levels, track inventory movements, and manage suppliers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <Package className="mr-2 h-5 w-5" />
              Total Items
            </BankingCardTitle>
            <BankingCardDescription>In stock</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-foreground">3,456</div>
            <p className="text-sm text-muted-foreground">Across 147 products</p>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Low Stock
            </BankingCardTitle>
            <BankingCardDescription>Needs attention</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-warning">25</div>
            <p className="text-sm text-warning">Items below minimum</p>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <TrendingDown className="mr-2 h-5 w-5" />
              Out of Stock
            </BankingCardTitle>
            <BankingCardDescription>Unavailable items</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-destructive">8</div>
            <p className="text-sm text-destructive">Immediate reorder needed</p>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <Plus className="mr-2 h-5 w-5" />
              New Stock
            </BankingCardTitle>
            <BankingCardDescription>Added this week</BankingCardDescription>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="text-2xl font-bold text-success">156</div>
            <p className="text-sm text-success">Items received</p>
          </BankingCardContent>
        </BankingCard>
      </div>

      <BankingCard variant="elevated">
        <BankingCardHeader>
          <BankingCardTitle>Low Stock Alerts</BankingCardTitle>
          <BankingCardDescription>Items that need immediate attention</BankingCardDescription>
        </BankingCardHeader>
        <BankingCardContent>
          <div className="space-y-4">
            {lowStockItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-card-border rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Current: {item.current} | Minimum: {item.minimum}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'critical' 
                      ? 'bg-destructive text-destructive-foreground' 
                      : 'bg-warning text-warning-foreground'
                  }`}>
                    {item.status}
                  </span>
                  <BankingButton variant="outline" size="sm">
                    Reorder
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

export default Inventory;