import Button from '../ui/Button';

export default function Features() {
  const features = [
    {
      title: 'Collaboration Teams',
      description: 'Here you can handle projects together with team virtually',
      image: './assets/images/feature-collaboration.png',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Cloud Storage',
      description: 'No need to worry about storage because we provide storage up to 2 TB',
      image: './assets/images/feature-cloud.png',
      bgColor: 'bg-[--color-primary]/10'
    },
    {
      title: 'Daily Analytics',
      description: 'We always provide useful information to make it easier for you every day',
      image: './assets/images/feature-analytics.png',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-[40px] font-bold text-[--color-text-primary] mb-3">
              Our Features you cab get
            </h2>
            <p className="text-[18px] text-[--color-text-secondary] max-w-[520px]">
              We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly
            </p>
          </div>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-11">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[20px] bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className={`${feature.bgColor} p-8 flex items-center justify-center h-[240px]`}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="text-[24px] font-bold text-[--color-text-primary] mb-3">
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
    </section>
  );
}
