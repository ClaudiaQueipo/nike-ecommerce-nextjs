export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-light-100/90 via-light-100/70 to-transparent" />

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
        <div className="text-left">
          <p className="text-[#FF5A5F] text-lg md:text-xl font-semibold mb-4">Bold & Sporty</p>

          <h1 className="text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px] font-black text-dark-900 leading-[1.1] mb-6">
            Style That Moves
            <br />
            With You.
          </h1>

          <p className="text-lg md:text-xl text-dark-700 max-w-xl mb-8 leading-relaxed">
            Not just style. Not just comfort. Footwear that effortlessly moves with your every step.
          </p>

          <button className="bg-dark-900 text-light-100 px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-dark-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Find Your Shoe
          </button>
        </div>

        <div className="relative flex justify-center items-center px-4 lg:px-8">
          <img
            src="/images/hero-shoe.png"
            alt="Nike Air Max"
            className="relative z-10 w-full max-w-[400px] md:max-w-[450px] lg:max-w-[800px] h-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  )
}
