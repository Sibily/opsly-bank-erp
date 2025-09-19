import { ArrowLeft, Building, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { BankingCard, BankingCardContent, BankingCardHeader, BankingCardTitle } from "@/components/ui/banking-card";
import { BankingButton } from "@/components/ui/banking-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AddCustomer = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-8 flex items-center space-x-4">
        <Link to="/dashboard">
          <BankingButton variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </BankingButton>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Add New Customer</h1>
          <p className="text-muted-foreground">Create a new customer profile for your business.</p>
        </div>
      </div>

      <div className="max-w-2xl">
        <BankingCard variant="elevated">
          <BankingCardHeader>
            <BankingCardTitle className="flex items-center">
              <Building className="mr-2 h-5 w-5" />
              Customer Information
            </BankingCardTitle>
          </BankingCardHeader>
          <BankingCardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name *</Label>
                <Input id="company-name" placeholder="Enter company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-person">Contact Person</Label>
                <Input id="contact-person" placeholder="Primary contact name" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="mr-1 h-4 w-4" />
                  Email Address *
                </Label>
                <Input id="email" type="email" placeholder="contact@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center">
                  <Phone className="mr-1 h-4 w-4" />
                  Phone Number
                </Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                Business Address
              </Label>
              <Textarea id="address" placeholder="Street address, city, state, ZIP code" rows={3} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" placeholder="e.g., Technology, Manufacturing" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://company.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" placeholder="Any additional information about this customer..." rows={3} />
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t border-card-border">
              <Link to="/dashboard">
                <BankingButton variant="outline">Cancel</BankingButton>
              </Link>
              <BankingButton variant="banking">Create Customer</BankingButton>
            </div>
          </BankingCardContent>
        </BankingCard>
      </div>
    </div>
  );
};

export default AddCustomer;