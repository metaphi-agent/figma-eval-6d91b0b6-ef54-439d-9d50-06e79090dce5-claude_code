import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative pt-8 pb-20 overflow-hidden">
      {/* Background gradient blurs */}
      <div className="absolute -top-40 -left-40 w-[634px] h-[634px] rounded-full bg-primary/30 blur-[500px]" />
      <div className="absolute top-20 right-0 w-[634px] h-[634px] rounded-full bg-primary/20 blur-[500px]" />
      <div className="absolute -top-20 left-1/4 w-[634px] h-[634px] rounded-full bg-white/50 blur-[500px]" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-[555px]">
            <h1 className="text-[48px] lg:text-[80px] font-bold leading-[1.1] text-text-dark mb-6">
              We're here to Increase your Productivity
            </h1>

            {/* Underline decoration */}
            <svg className="w-full max-w-[479px] h-[26px] mb-8 -mt-2" viewBox="0 0 479 26" fill="none">
              <path
                d="M4 14C60 8 120 6 180 8C240 10 300 14 360 16C420 18 475 18 475 18"
                stroke="#54BD95"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>

            <p className="text-lg font-medium text-black leading-[30px] mb-8 max-w-[461px]">
              Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Button size="lg" className="!rounded-full !px-[30px] !py-5">
                Get Started
              </Button>

              <button className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-light-bg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-150">
                  <svg className="w-4 h-4 text-primary ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-base font-medium text-text-dark">Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="flex-1 relative">
            {/* Main card with person */}
            <div className="relative">
              <div className="bg-primary rounded-[10px] w-full max-w-[410px] h-[400px] lg:h-[526px] overflow-hidden">
                <img
                  src="./assets/images/hero-person.png"
                  alt="Professional using Biccas"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating card - Enter amount */}
              <div className="absolute -left-12 top-8 bg-white rounded-[10px] p-4 shadow-lg w-[262px]">
                <p className="text-xs text-gray-400 mb-1">Enter amount</p>
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium">$450.00</span>
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded">
                    <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
                    <span className="text-sm font-medium">USD</span>
                    <svg className="w-3 h-3" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="border-t border-gray-200 mt-3 pt-2">
                </div>
              </div>

              {/* Small decorative squares */}
              <div className="absolute -left-4 bottom-40 w-12 h-12 bg-purple rounded-[10px] rotate-[-15deg]"></div>

              {/* Stats card */}
              <div className="absolute -left-8 bottom-20 bg-white rounded-[10px] p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-gray">Growth</p>
                    <p className="text-sm font-semibold text-primary">+32.40%</p>
                  </div>
                </div>
              </div>

              {/* Dark analytics card */}
              <div className="absolute -right-4 bottom-32 bg-dark rounded-[10px] p-4 rotate-[15deg] w-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">Total Revenue</span>
                  <span className="text-primary text-xs">+2.5%</span>
                </div>
                <p className="text-white font-bold text-lg mb-3">$75,500</p>
                <div className="flex items-end gap-1 h-12">
                  {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 5 ? '#54BD95' : '#374151'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-14 h-14 bg-primary/30 rounded-full blur-xl"></div>
              <div className="absolute -top-6 right-12 w-8 h-8 border-4 border-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
