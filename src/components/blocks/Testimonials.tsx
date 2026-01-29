export default function Testimonials() {
  const testimonials = [
    {
      avatar: './assets/images/testimonial-1.png',
      text: 'Very good app. It\'s a definitely essential part of I get my head around how I\'m spending my money. Very good app. It\'s a definitely essential part of I get my head around how I\'m spending my money. Very good app. It\'s a definitely essential part of'
    }
  ];

  const avatars = [
    './assets/images/testimonial-1.png',
    './assets/images/testimonial-2.png',
    './assets/images/testimonial-3.png',
    './assets/images/testimonial-4.png'
  ];

  return (
    <section className="py-20 bg-[--color-dark] text-white">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Testimonial */}
          <div>
            <h2 className="text-[40px] font-bold leading-[56px] mb-8">
              People are Saying About DoWhith
            </h2>
            <p className="text-white/70 text-[18px] leading-[30px] mb-12">
              Everything you need to accept to payment and grow your money of manage anywhere on planet
            </p>

            <div className="bg-[--color-dark-alt] rounded-[20px] p-8 mb-8">
              <p className="text-white/90 text-[18px] leading-[30px] mb-2">
                {testimonials[0].text}
              </p>
              <span className="text-[#FF6B6B]">❤️</span>
            </div>

            <div className="flex items-center gap-4">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`User ${index + 1}`}
                  className="w-[66px] h-[66px] rounded-full border-2 border-[--color-dark-alt] object-cover"
                  loading="lazy"
                />
              ))}
              <button className="w-[66px] h-[66px] rounded-full bg-[--color-dark-alt] flex items-center justify-center hover:bg-[--color-primary] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right column - Get Started Form */}
          <div className="bg-[--color-dark-alt] rounded-[20px] p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[--color-primary] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M4 8L16 2L28 8V14C28 22 16 30 16 30C16 30 4 22 4 14V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[32px] font-bold mb-2">Get Started</h3>
            </div>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 rounded-lg bg-[--color-dark] border border-gray-700 text-white placeholder-gray-500 focus:border-[--color-primary] focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Message"
                className="w-full px-6 py-4 rounded-lg bg-[--color-dark] border border-gray-700 text-white placeholder-gray-500 focus:border-[--color-primary] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg bg-[--color-primary] text-white font-semibold hover:bg-[--color-primary-hover] transition-colors"
              >
                Request Demo
              </button>
              <p className="text-center text-white/50 text-sm">
                or Start Free Trial
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
