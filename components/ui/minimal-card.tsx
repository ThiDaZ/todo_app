import * as React from "react"
import { cn } from "@/lib/utils"

const MinimalCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl bg-neutral-50 dark:bg-neutral-800 p-2 no-underline",
      "border border-neutral-200/60 dark:border-neutral-700/50",
      "shadow-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/80",
      className,
    )}
    {...props}
  >
    
    {children}
  </div>
))
MinimalCard.displayName = "MinimalCard"

const MinimalCardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { src: string; alt: string }
>(({ className, alt, src, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-[190px] w-full rounded-xl mb-6 overflow-hidden",
      "border border-neutral-200/60 dark:border-neutral-700/50",
      "shadow-sm",
      className,
    )}
    {...props}
  >
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={800}
      height={600}
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
))
MinimalCardImage.displayName = "MinimalCardImage"

const MinimalCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-lg mt-2 font-semibold leading-tight px-1", className)} {...props} />
  ),
)
MinimalCardTitle.displayName = "MinimalCardTitle"

const MinimalCardEmoji = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { symbol: string; label?: string }
>(({ className, symbol, label, ...props }, ref) => (
  <span
    ref={ref}
    role="img"
    aria-label={label ? label : "emoji"}
    className={cn(
      "block px-1 mb-2 text-6xl md:text-7xl leading-none select-none",
      "transform-gpu will-change-transform",
      "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out",
      "hover:motion-safe:-translate-y-1 hover:motion-safe:scale-105",
      className,
    )}
    {...props}
  >
    {symbol}
  </span>
))
MinimalCardEmoji.displayName = "MinimalCardEmoji"

const MinimalCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
MinimalCardContent.displayName = "MinimalCardContent"

const MinimalCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
MinimalCardFooter.displayName = "MinimalCardFooter"

export { MinimalCard, MinimalCardImage, MinimalCardTitle, MinimalCardEmoji, MinimalCardContent, MinimalCardFooter }

export default MinimalCard
