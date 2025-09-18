import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const bankingCardVariants = cva(
  "rounded-lg border bg-card text-card-foreground transition-banking",
  {
    variants: {
      variant: {
        default: "border-card-border card-shadow",
        elevated: "border-card-border elevated-shadow",
        banking: "border-card-border banking-shadow bg-gradient-to-br from-card to-secondary/20",
        success: "border-success/20 bg-success/5",
        warning: "border-warning/20 bg-warning/5",
        danger: "border-destructive/20 bg-destructive/5",
      },
      padding: {
        none: "",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        banking: "p-6",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

export interface BankingCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bankingCardVariants> {}

const BankingCard = React.forwardRef<HTMLDivElement, BankingCardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(bankingCardVariants({ variant, padding, className }))}
      {...props}
    />
  )
)
BankingCard.displayName = "BankingCard"

const BankingCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
))
BankingCardHeader.displayName = "BankingCardHeader"

const BankingCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
BankingCardTitle.displayName = "BankingCardTitle"

const BankingCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
BankingCardDescription.displayName = "BankingCardDescription"

const BankingCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
BankingCardContent.displayName = "BankingCardContent"

const BankingCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
))
BankingCardFooter.displayName = "BankingCardFooter"

export {
  BankingCard,
  BankingCardHeader,
  BankingCardFooter,
  BankingCardTitle,
  BankingCardDescription,
  BankingCardContent,
  bankingCardVariants,
}