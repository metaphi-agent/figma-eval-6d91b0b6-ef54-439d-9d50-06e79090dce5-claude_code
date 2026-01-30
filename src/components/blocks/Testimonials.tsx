export default function Testimonials() {
  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=132&h=132&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=132&h=132&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=132&h=132&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=132&h=132&fit=crop&crop=face',
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-[36px] lg:text-[50px] font-semibold text-white leading-tight mb-6">
              People are Saying About DoWhith
            </h2>

            <p className="text-lg font-medium text-text-gray leading-[30px] mb-10 max-w-[461px]">
              Everything you need to accept to payment and grow your money of manage anywhere on planet
            </p>

            {/* Quote */}
            <div className="mb-10">
              <div className="text-primary text-6xl font-serif leading-none mb-4">"</div>
              <p className="text-white text-lg leading-[30px] mb-6 max-w-[461px]">
                "I just wanted to share a quick note and let you know that you guys do a really good job.
                I'm glad I decided to work with you."
              </p>
              <p className="text-text-gray text-base">
                — Bonnie Green, CEO at Dropbox
              </p>
            </div>

            {/* Avatars */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="Customer"
                    className="w-[66px] h-[66px] rounded-full border-2 border-dark object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <button className="w-[66px] h-[66px] rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors duration-150">
                <svg className="w-5 h-5 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - CTA Card */}
          <div className="flex-1">
            <div className="bg-dark-card rounded-[20px] p-10 h-full flex flex-col">
              {/* Rocket Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <svg className="w-20 h-24 text-primary" viewBox="0 0 72 86" fill="currentColor">
                    <path d="M36 0C28 10 20 25 20 40c0 10 7 18 16 20v16c0 5.5 4.5 10 10 10h-20c5.5 0 10-4.5 10-10V60c9-2 16-10 16-20C52 25 44 10 36 0z" />
                  </svg>
                  {/* Decorative elements */}
                  <div className="absolute -left-4 bottom-4 w-3 h-3 bg-primary rounded-full opacity-50"></div>
                  <div className="absolute -right-4 bottom-8 w-2 h-2 bg-primary rounded-full opacity-30"></div>
                </div>
              </div>

              <h3 className="text-[30px] font-medium text-white text-center mb-6">
                Get Started
              </h3>

              {/* Form Elements */}
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-white text-base">Start your 30-days free trial</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-white text-base">Powerful cloud documents</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-white text-base">24/7 Great Support</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full mt-8 bg-primary text-white py-4 px-6 rounded-[10px] text-lg font-medium hover:bg-primary-dark transition-colors duration-150 flex items-center justify-center gap-3">
                Try Free Trial
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <p className="text-text-gray text-sm text-center mt-4">
                or <span className="text-white">Start Free Trial</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
