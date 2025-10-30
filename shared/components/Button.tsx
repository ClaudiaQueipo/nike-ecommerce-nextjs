import Link from "next/link"
import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick
}: Readonly<ButtonProps>) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 tracking-wide"

  const variantClasses = {
    primary: "bg-dark-900 text-light-100 hover:bg-dark-700 hover:shadow-lg",
    secondary: "bg-light-100 text-dark-900 hover:bg-light-300 hover:shadow-md",
    outline: "border-2 border-current text-current hover:bg-current hover:text-light-100 hover:shadow-lg"
  }

  const sizeClasses = {
    sm: "px-6 py-3 text-sm rounded-full",
    md: "px-8 py-4 text-base rounded-full",
    lg: "px-10 py-5 text-lg rounded-full"
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
