import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute top-[-200px] left-[-300px] w-[634px] h-[634px] rounded-full bg-[--color-primary] opacity-30 blur-[1000px]" />
      <div className="absolute top-[-100px] right-[-200px] w-[634px] h-[634px] rounded-full bg-[--color-secondary-pink] opacity-30 blur-[1000px]" />
      <div className="absolute top-[50px] left-[20%] w-[634px] h-[634px] rounded-full bg-white opacity-50 blur-[1000px]" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div>
            <h1 className="text-[50px] font-bold leading-[73px] text-[--color-text-primary] mb-6">
              We're here to Increase your Productivity
            </h1>
            <p className="text-[18px] text-[--color-text-secondary] leading-[30px] mb-8 max-w-[520px]">
              Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featurees in managing work every day.
            </p>

            <div className="flex items-center gap-6">
              <Button variant="primary" size="lg">
                Try for free
              </Button>
              <button className="flex items-center gap-3 text-[--color-text-primary] text-[18px] font-medium hover:text-[--color-primary] transition-colors">
                <div className="w-12 h-12 rounded-full border-2 border-[--color-text-primary] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 2L12 8L4 14V2Z" fill="currentColor" />
                  </svg>
                </div>
                View Demo
              </button>
            </div>
          </div>

          {/* Right column - Illustration */}
          <div className="relative">
            <img
              src="./assets/images/hero-illustration.png"
              alt="Productivity Dashboard Illustration"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
