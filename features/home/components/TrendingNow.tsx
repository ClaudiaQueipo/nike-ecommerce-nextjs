export function TrendingNow() {
  return (
    <section className="bg-light-100 py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] md:text-[40px] font-medium text-dark-900 mb-8">Trending Now</h2>

        <div className="space-y-6">
          <a
            href="/products/react-presto"
            className="group relative overflow-hidden rounded-lg bg-dark-900 hover:shadow-2xl transition-all duration-300 block"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              <img src="/trending-1.png" alt="React Presto" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-[32px] md:text-[40px] font-bold text-light-100 mb-2 tracking-wide">REACT PRESTO</h3>
                <p className="text-light-100 text-base md:text-lg mb-4">
                  With React foam for the most comfortable Presto ever.
                </p>
                <button className="bg-light-100 text-dark-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-light-200 transition-colors duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/products/air-max-dia"
              className="group relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9]">
                <img
                  src="/trending-2.png"
                  alt="Summer Must-Haves: Air Max Dia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-light-100">
                    Summer Must-Haves: Air Max Dia
                  </h3>
                </div>
              </div>
            </a>

            <a
              href="/products/air-jorden-11-retro"
              className="group relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9]">
                <img src="/trending-3.png" alt="Air Jorden 11 Retro Low LE" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-light-100">
                    Air Jorden 11 Retro Low LE
                  </h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
