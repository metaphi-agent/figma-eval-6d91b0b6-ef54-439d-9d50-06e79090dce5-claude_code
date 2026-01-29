export default function Support() {
  const features = [
    {
      icon: '📝',
      title: 'Publishing',
      description: 'Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Analyze your performance and create gorgeous report'
    },
    {
      icon: '💬',
      title: 'Engagement',
      description: 'Quiuckly navigate you anda engage with your adience'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Text content */}
          <div>
            <h2 className="text-[40px] font-bold leading-[48px] text-[--color-text-primary] mb-8">
              How we support our pratner all over the world
            </h2>
            <p className="text-[18px] text-[--color-text-secondary] leading-[30px] mb-12">
              SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software
            </p>

            <div className="flex items-center gap-8 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#FFD700">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <span className="text-[18px] font-semibold text-[--color-text-primary]">
                4.9 / 5 rating
              </span>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#FFD700">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <span className="text-[18px] font-semibold text-[--color-text-primary]">
                4.8 / 5 rating
              </span>
            </div>
          </div>

          {/* Right column - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[--color-primary]/10 flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-[24px] font-bold text-[--color-text-primary] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] text-[--color-text-secondary] leading-[26px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
