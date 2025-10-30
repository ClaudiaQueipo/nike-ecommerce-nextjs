import { HeroSection, BestOfAirMax, TrendingNow } from "@/features/home/components"

export default function HomePage() {
  return (
    <div className="bg-light-100">
      <HeroSection />
      <BestOfAirMax />
      <TrendingNow />
    </div>
  )
}
