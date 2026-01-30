const features = [
  {
    title: 'Collboration Teams',
    description: 'Here you can handle collaborative projects easily with your team and its simply futuristic climate.',
    image: (
      <div className="h-full flex items-center justify-center p-8">
        <div className="relative w-full">
          {/* Chat bubbles illustration */}
          <div className="flex items-end gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary"></div>
            <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <p className="text-sm text-text-dark">Hi, let's discuss about our product</p>
            </div>
          </div>
          <div className="flex items-end gap-3 flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-purple"></div>
            <div className="bg-primary rounded-2xl rounded-br-sm px-4 py-3">
              <p className="text-sm text-white">Sure, I have free time now</p>
            </div>
          </div>
          {/* Avatars row */}
          <div className="flex -space-x-3 mt-8 justify-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white"
                style={{ backgroundColor: ['#54BD95', '#4535AF', '#FFB800', '#FF6B6B'][i - 1] }}
              ></div>
            ))}
            <div className="w-10 h-10 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white text-xs font-medium">
              +5
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Cloud Storage',
    description: 'No need to worry about storage idcapacity and your documents safely stored on cloud',
    image: (
      <div className="h-full flex items-center justify-center p-8">
        <div className="relative">
          {/* Cloud icon with files */}
          <div className="w-32 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center relative">
            <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
            </svg>
            {/* Upload indicator */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-6 w-40 mx-auto">
            <div className="flex justify-between text-xs text-text-gray mb-2">
              <span>Uploading...</span>
              <span>75%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Daily Analytics',
    description: 'We always provide useful information to make it easier for you every day.',
    image: (
      <div className="h-full flex items-center justify-center p-8">
        <div className="relative w-full max-w-[280px]">
          {/* Chart */}
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-text-dark">Analytics</span>
              <span className="text-xs text-primary font-medium">+25%</span>
            </div>
            <div className="flex items-end gap-2 h-24">
              {[40, 65, 45, 70, 55, 90, 60, 75].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 5 ? '#54BD95' : '#E5E7EB'
                  }}
                />
              ))}
            </div>
          </div>
          {/* Small stat card */}
          <div className="absolute -bottom-4 -right-4 bg-dark text-white rounded-xl px-4 py-3">
            <p className="text-xs text-gray-400">Visitors</p>
            <p className="text-lg font-bold">12,580</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-16">
          <h2 className="text-[36px] lg:text-[50px] font-semibold text-text-dark leading-tight max-w-[331px]">
            Our Features you cab get
          </h2>
          <p className="text-lg font-medium text-text-gray leading-[30px] max-w-[461px] lg:text-left">
            We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly
          </p>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full border border-text-gray/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-150">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors duration-150">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div className="bg-light-bg rounded-[20px] h-[430px] overflow-hidden mb-6">
                {feature.image}
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">{feature.title}</h3>
              <p className="text-base text-text-gray leading-[28px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
