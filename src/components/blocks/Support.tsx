const features = [
  {
    title: 'Publishing',
    description: 'Plan, collaborate, and publishing your content that drives meaningful engagment and growth for your barnd',
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/>
      </svg>
    ),
    rating: 4.5,
  },
  {
    title: 'Analytics',
    description: 'Analyze your performance and create gourgeous report',
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    ),
  },
  {
    title: 'Engagement',
    description: 'Quickly navigate your inboox with the new Gmail app',
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
  },
];

const stats = [
  { value: '10k+', label: 'Users Active' },
  { value: '470+', label: 'Download' },
];

export default function Support() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="text-[36px] lg:text-[50px] font-semibold text-text-dark leading-tight mb-6">
              How we support our pratner all over the world
            </h2>

            <p className="text-base font-medium text-text-gray leading-[30px] mb-10 max-w-[644px]">
              SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software
            </p>

            <div className="flex gap-16">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[40px] font-bold text-text-dark mb-2">{stat.value}</p>
                  <p className="text-sm font-medium text-text-gray flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-dark mb-2 flex items-center gap-3">
                    {feature.title}
                    {feature.rating && (
                      <span className="flex items-center gap-1 text-sm font-medium text-text-gray">
                        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {feature.rating}
                      </span>
                    )}
                  </h3>
                  <p className="text-base text-text-gray leading-[28px]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
