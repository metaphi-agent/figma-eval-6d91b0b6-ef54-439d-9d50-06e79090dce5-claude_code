import Button from '../ui/Button';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      description: 'Have a go and test your superpowers',
      price: '0',
      features: [
        { text: '2 Users', available: true },
        { text: '2 Files', available: true },
        { text: 'Public Share & Comments', available: true },
        { text: 'Chat Support', available: true },
        { text: 'New income apps', available: false }
      ],
      buttonText: 'Signup for free',
      buttonVariant: 'outline' as const,
      highlighted: false
    },
    {
      name: 'Pro',
      description: 'Experiment the power of infinite possibilities',
      price: '8',
      features: [
        { text: '4 Users', available: true },
        { text: 'All apps', available: true },
        { text: 'Unlimited editable exports', available: true },
        { text: 'Folders and collaboration', available: true },
        { text: 'All incoming apps', available: true }
      ],
      buttonText: 'Go to pro',
      buttonVariant: 'primary' as const,
      highlighted: true
    },
    {
      name: 'Business',
      description: 'Unveil new superpowers and join the Design Leaque',
      price: '16',
      features: [
        { text: 'All the features of pro plan', available: true },
        { text: 'Account success Manager', available: true },
        { text: 'Single Sign-On (SSO)', available: true },
        { text: 'Co-conception program', available: true },
        { text: 'Collaboration-Soon', available: true }
      ],
      buttonText: 'Go to Business',
      buttonVariant: 'outline' as const,
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-6">
        <h2 className="text-[50px] font-bold text-center text-[--color-text-primary] leading-[73px] mb-4">
          Choose Plan<br />That's Right For You
        </h2>
        <p className="text-[18px] text-center text-[--color-text-secondary] mb-12">
          Choose plan that works best for you, feel free to contact us
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <button className="px-8 py-3 rounded-lg bg-white text-[--color-text-primary] font-semibold border border-gray-200">
            Bill Monthly
          </button>
          <button className="px-8 py-3 rounded-lg bg-[--color-primary] text-white font-semibold">
            Bill Yearly
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[20px] p-8 ${
                plan.highlighted
                  ? 'bg-[--color-primary] text-white scale-105 shadow-2xl'
                  : 'bg-white border border-gray-100'
              } transition-transform duration-300`}
            >
              <h3
                className={`text-[30px] font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-[--color-text-primary]'
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-[16px] mb-8 ${
                  plan.highlighted ? 'text-white/80' : 'text-[--color-text-secondary]'
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-8">
                <span
                  className={`text-[60px] font-bold ${
                    plan.highlighted ? 'text-white' : 'text-[--color-text-primary]'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-[18px] ${
                    plan.highlighted ? 'text-white/80' : 'text-[--color-text-secondary]'
                  }`}
                >
                  /month
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    {feature.available ? (
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          plan.highlighted ? 'bg-white' : 'bg-[--color-primary]'
                        }`}
                      >
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path
                            d="M1 5L4.5 8.5L11 1"
                            stroke={plan.highlighted ? '#54BD95' : 'white'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-6 h-6" />
                    )}
                    <span
                      className={`text-[16px] ${
                        plan.highlighted ? 'text-white' : 'text-[--color-text-primary]'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'secondary' : plan.buttonVariant}
                size="lg"
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
