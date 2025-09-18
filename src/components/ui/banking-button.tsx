import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const bankingButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-banking focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        banking: "bg-gradient-banking text-banking-deep-foreground hover:opacity-90 banking-shadow",
        hero: "bg-gradient-hero text-white hover:opacity-90 banking-shadow",
        success: "bg-success text-success-foreground hover:bg-success-light",
        warning: "bg-warning text-warning-foreground hover:bg-warning-light",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        banking: "h-12 px-6 py-3 text-base font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BankingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof bankingButtonVariants> {
  asChild?: boolean
}

const BankingButton = React.forwardRef<HTMLButtonElement, BankingButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(bankingButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
BankingButton.displayName = "BankingButton"

export { BankingButton, bankingButtonVariants }