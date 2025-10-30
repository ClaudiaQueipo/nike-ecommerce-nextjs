import Image from "next/image"
import Link from "next/link"

export interface CardProps {
  id: string
  title: string
  description?: string
  price: number
  currency?: string
  image: string
  imageAlt?: string
  category?: string
  colors?: number
  badge?: {
    text: string
    variant?: "new" | "sale" | "exclusive"
  }
  href?: string
  className?: string
}

export default function Card({
  id,
  title,
  description,
  price,
  currency = "USD",
  image,
  imageAlt,
  category,
  colors,
  badge,
  href,
  className = ""
}: Readonly<CardProps>) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2
  }).format(price)

  const badgeStyles = {
    new: "bg-green text-light-100",
    sale: "bg-red text-light-100",
    exclusive: "bg-orange text-light-100"
  }

  const CardContent = () => (
    <div className={`group w-full ${className}`}>
      <div className="relative w-full aspect-square bg-light-200 rounded-lg overflow-hidden mb-3">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {badge && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded text-sm font-medium ${badgeStyles[badge.variant || "new"]}`}
          >
            {badge.text}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-base font-medium text-dark-900 line-clamp-1 group-hover:text-dark-700 transition-colors duration-200">
          {title}
        </h3>

        {description && <p className="text-sm text-dark-500 line-clamp-1">{description}</p>}

        {colors && colors > 1 && <p className="text-sm text-dark-500">{colors} Colour</p>}

        <p className="text-base font-medium text-dark-900 pt-1">{formattedPrice}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block" aria-label={`View ${title}`}>
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}

interface CardCompactProps extends CardProps {
  compact?: boolean
}

export function CardCompact(props: Readonly<CardCompactProps>) {
  const { compact = true, ...cardProps } = props

  if (!compact) {
    return <Card {...cardProps} />
  }

  return <Card {...cardProps} className={`${cardProps.className} scale-95`} />
}
