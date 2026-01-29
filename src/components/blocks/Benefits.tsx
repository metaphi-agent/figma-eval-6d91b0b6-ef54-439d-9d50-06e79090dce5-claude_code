export default function Benefits() {
  const benefits = [
    'Free Consulting With Experet Saving Money',
    'Online Banking',
    'Investment Report Every Month',
    'Saving Money For The Future',
    'Online Transection'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-6">
        <h2 className="text-[40px] font-bold text-[--color-text-primary] text-center mb-20">
          What Benefit Will You Get
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Benefits list */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[--color-primary] flex items-center justify-center">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M1 6L6 11L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[18px] text-[--color-text-primary]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Right column - Image */}
          <div className="relative">
            <div className="rounded-[20px] overflow-hidden">
              <img
                src="./assets/images/laptop.png"
                alt="Laptop showing Money Transfer Success"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
