import { Card } from "@/shared/components"

interface Shoe {
  id: string
  title: string
  description: string
  price: number
  image: string
  imageAlt: string
  colors: number
  badge: { text: string; variant: "sale" | "new" }
  href: string
}

export function BestOfAirMax() {
  const featuredShoes: Shoe[] = [
    {
      id: "1",
      title: "Nike Air Force 1 Mid '07",
      description: "Men's Shoes",
      price: 98.3,
      image: "/shoes/shoe-1.jpg",
      imageAlt: "Nike Air Force 1 Mid '07",
      colors: 6,
      badge: { text: "Best Seller", variant: "sale" },
      href: "/products/nike-air-force-1-mid-07"
    },
    {
      id: "2",
      title: "Nike Court Vision Low Next Nature",
      description: "Men's Shoes",
      price: 98.3,
      image: "/shoes/shoe-2.webp",
      imageAlt: "Nike Court Vision Low Next Nature",
      colors: 4,
      badge: { text: "Extra 20% off", variant: "new" },
      href: "/products/nike-court-vision-low"
    },
    {
      id: "3",
      title: "Nike Dunk Low Retro",
      description: "Men's Shoes",
      price: 98.3,
      image: "/shoes/shoe-3.webp",
      imageAlt: "Nike Dunk Low Retro",
      colors: 6,
      badge: { text: "Extra 10% off", variant: "new" },
      href: "/products/nike-dunk-low-retro"
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-light-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] md:text-[40px] font-medium text-dark-900 mb-8">Best of Air Max</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredShoes.map((shoe) => (
            <Card key={shoe.id} {...shoe} />
          ))}
        </div>
      </div>
    </section>
  )
}
