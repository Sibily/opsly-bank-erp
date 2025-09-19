import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { BankingCard, BankingCardContent, BankingCardHeader, BankingCardTitle } from "@/components/ui/banking-card";
import { BankingButton } from "@/components/ui/banking-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const NewInvoice = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-8 flex items-center space-x-4">
        <Link to="/dashboard">
          <BankingButton variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </BankingButton>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Create New Invoice</h1>
          <p className="text-muted-foreground">Generate a professional invoice for your customer.</p>
        </div>
      </div>

      <div className="max-w-4xl">
        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle>Invoice Details</BankingCardTitle>
          </BankingCardHeader>
          <BankingCardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="customer">Customer</Label>
                <Input id="customer" placeholder="Select or enter customer name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="invoice-number">Invoice Number</Label>
                <Input id="invoice-number" placeholder="INV-001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="issue-date">Issue Date</Label>
                <Input id="issue-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="due-date">Due Date</Label>
                <Input id="due-date" type="date" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Invoice Items</h3>
                <BankingButton variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Item
                </BankingButton>
              </div>
              
              <div className="border border-card-border rounded-lg p-4 space-y-4">
                <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
                  <div className="col-span-4">Description</div>
                  <div className="col-span-2">Quantity</div>
                  <div className="col-span-2">Rate</div>
                  <div className="col-span-2">Amount</div>
                  <div className="col-span-2">Actions</div>
                </div>
                
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-4">
                    <Input placeholder="Item description" />
                  </div>
                  <div className="col-span-2">
                    <Input type="number" placeholder="1" />
                  </div>
                  <div className="col-span-2">
                    <Input type="number" placeholder="0.00" />
                  </div>
                  <div className="col-span-2">
                    <Input placeholder="$0.00" disabled />
                  </div>
                  <div className="col-span-2">
                    <BankingButton variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </BankingButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Additional notes or payment terms..." rows={3} />
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-card-border">
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Subtotal: $0.00</div>
                <div className="text-sm text-muted-foreground">Tax (10%): $0.00</div>
                <div className="text-lg font-bold">Total: $0.00</div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Link to="/dashboard">
                <BankingButton variant="outline">Cancel</BankingButton>
              </Link>
              <BankingButton variant="banking">Create Invoice</BankingButton>
            </div>
          </BankingCardContent>
        </BankingCard>
      </div>
    </div>
  );
};

export default NewInvoice;