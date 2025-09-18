import { ArrowRight, Shield, Users, BarChart3, CreditCard, Building2, Smartphone } from "lucide-react";
import { BankingButton } from "@/components/ui/banking-button";
import { BankingCard, BankingCardContent, BankingCardDescription, BankingCardTitle } from "@/components/ui/banking-card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-banking.jpg";

const Landing = () => {
  const features = [
    {
      icon: Building2,
      title: "Multi-Tenant Architecture",
      description: "Secure company isolation with role-based access control for teams of any size."
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description: "Live financial metrics, inventory tracking, and sales analytics at your fingertips."
    },
    {
      icon: Shield,
      title: "Banking-Grade Security",
      description: "Enterprise-level security with audit trails and compliance-ready features."
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Customized dashboards for Sales, Finance, Inventory, and Management teams."
    },
    {
      icon: CreditCard,
      title: "Financial Management",
      description: "Complete invoice management, expense tracking, and financial reporting."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Essential operations available on mobile with offline capability."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Opsly</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/auth">
                <BankingButton variant="outline">Sign In</BankingButton>
              </Link>
              <Link to="/auth">
                <BankingButton variant="banking">Get Started</BankingButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Enterprise ERP
                <span className="block text-primary-light">Made Simple</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Streamline your business operations with Opsly's multi-tenant SaaS ERP. 
                From financial management to inventory control, everything you need in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/auth">
                  <BankingButton variant="hero" size="banking" className="w-full sm:w-auto">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </BankingButton>
                </Link>
                <BankingButton variant="outline" size="banking" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">
                  Watch Demo
                </BankingButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Opsly ERP Dashboard" 
                className="rounded-lg banking-shadow w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-banking-deep/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful ERP features designed for modern businesses, with the security and reliability you can trust.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <BankingCard key={index} variant="elevated" className="text-center group hover:scale-105 transition-all duration-300">
                <BankingCardContent className="p-8">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <BankingCardTitle className="mb-4">{feature.title}</BankingCardTitle>
                  <BankingCardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </BankingCardDescription>
                </BankingCardContent>
              </BankingCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-banking">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of businesses already using Opsly to streamline their operations
            and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <BankingButton variant="hero" size="banking" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </BankingButton>
            </Link>
            <BankingButton variant="outline" size="banking" className="w-full sm:w-auto text-white border-white hover:bg-white/10">
              Contact Sales
            </BankingButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-banking-deep text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="text-lg font-semibold">Opsly</span>
            </div>
            <p className="text-white/70">
              © 2024 Opsly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;