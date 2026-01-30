const benefits = [
  { icon: 'check', text: 'Free Counsulting With Expert Conslutant' },
  { icon: 'check', text: 'Free Contracting' },
  { icon: 'check', text: 'Easy Scheduling' },
  { icon: 'check', text: 'Sales Easily' },
  { icon: 'x', text: 'Getting Closen To Pro Seller' },
  { icon: 'x', text: 'Easy Transaction' },
];

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-[36px] lg:text-[50px] font-bold text-text-dark leading-tight mb-10">
              What Benifit Will You Get
            </h2>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      benefit.icon === 'check' ? 'bg-primary' : 'bg-red-100'
                    }`}
                  >
                    {benefit.icon === 'check' ? (
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <span className="text-base font-medium text-text-dark">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-[20px] overflow-hidden bg-gray-200 aspect-[450/529]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=1060&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>

              {/* Floating card - Project Info */}
              <div className="absolute -left-8 top-8 bg-white rounded-[10px] p-4 shadow-lg max-w-[304px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-dark">Project Completed</p>
                    <p className="text-xs text-text-gray">1,250+ projects</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      style={{ backgroundColor: ['#54BD95', '#4535AF', '#FFB800', '#FF6B6B'][i - 1] }}
                    />
                  ))}
                </div>
              </div>

              {/* Stats card */}
              <div className="absolute -right-4 top-1/3 bg-white rounded-[10px] p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-gray">Progress</p>
                    <p className="text-lg font-bold text-text-dark">75%</p>
                  </div>
                </div>
              </div>

              {/* Bottom floating card */}
              <div className="absolute -left-4 bottom-8 bg-white rounded-[10px] px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-text-dark">Manage Your Data Tracker</span>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 left-1/4 w-12 h-12 rounded-[10px] bg-light-green rotate-[-15deg]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
