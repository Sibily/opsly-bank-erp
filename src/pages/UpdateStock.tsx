import { ArrowLeft, Package, Plus, Minus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { BankingCard, BankingCardContent, BankingCardHeader, BankingCardTitle } from "@/components/ui/banking-card";
import { BankingButton } from "@/components/ui/banking-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UpdateStock = () => {
  const products = [
    { id: 1, name: "Premium Widget A", sku: "PWA-001", current: 45, price: "$299.99" },
    { id: 2, name: "Standard Component B", sku: "SCB-002", current: 12, price: "$149.99" },
    { id: 3, name: "Deluxe Package C", sku: "DPC-003", current: 8, price: "$449.99" },
    { id: 4, name: "Basic Tool D", sku: "BTD-004", current: 67, price: "$79.99" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-8 flex items-center space-x-4">
        <Link to="/dashboard">
          <BankingButton variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </BankingButton>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Update Stock Levels</h1>
          <p className="text-muted-foreground">Adjust inventory quantities for your products.</p>
        </div>
      </div>

      <div className="space-y-6">
        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Search Products
            </BankingCardTitle>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input placeholder="Search by product name or SKU..." />
              </div>
              <BankingButton variant="outline">Search</BankingButton>
            </div>
          </BankingCardContent>
        </BankingCard>

        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <Package className="mr-2 h-5 w-5" />
              Product Inventory
            </BankingCardTitle>
          </BankingCardHeader>
          <BankingCardContent>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 border border-card-border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{product.name}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
                      <span className="text-sm text-muted-foreground">Price: {product.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <Label className="text-sm text-muted-foreground">Current Stock</Label>
                      <div className="text-lg font-medium">{product.current}</div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <BankingButton variant="outline" size="sm">
                        <Minus className="h-4 w-4" />
                      </BankingButton>
                      <Input 
                        type="number" 
                        defaultValue="0" 
                        className="w-20 text-center"
                        placeholder="Adjust"
                      />
                      <BankingButton variant="outline" size="sm">
                        <Plus className="h-4 w-4" />
                      </BankingButton>
                    </div>
                    
                    <BankingButton variant="banking" size="sm">
                      Update
                    </BankingButton>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center pt-6 border-t border-card-border">
              <div className="text-sm text-muted-foreground">
                Showing 4 of 147 products
              </div>
              <div className="flex space-x-2">
                <BankingButton variant="outline" size="sm">Previous</BankingButton>
                <BankingButton variant="outline" size="sm">Next</BankingButton>
              </div>
            </div>
          </BankingCardContent>
        </BankingCard>

        <div className="flex justify-end space-x-4">
          <Link to="/dashboard">
            <BankingButton variant="outline">Back to Dashboard</BankingButton>
          </Link>
          <BankingButton variant="banking">Save All Changes</BankingButton>
        </div>
      </div>
    </div>
  );
};

export default UpdateStock;