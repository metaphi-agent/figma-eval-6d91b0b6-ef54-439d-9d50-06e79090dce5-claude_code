import { useState } from 'react';
import Button from '../ui/Button';

const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'Have a go and test your superpowers',
    features: [
      { text: '2 Team Members', included: true },
      { text: '20GB Cloud Storage', included: true },
      { text: 'Integration Help', included: true },
      { text: 'Sketch Files', included: false },
      { text: 'API Access', included: false },
      { text: 'Complete documentation', included: false },
      { text: '24x7 Phone and Email support', included: false },
    ],
    buttonVariant: 'outline' as const,
    popular: false,
  },
  {
    name: 'Pro',
    price: 6,
    description: 'Unveil new satisfactions',
    features: [
      { text: '2 Team Members', included: true },
      { text: '20GB Cloud Storage', included: true },
      { text: 'Integration Help', included: true },
      { text: 'Sketch Files', included: true },
      { text: 'API Access', included: true },
      { text: 'Complete documentation', included: false },
      { text: '24x7 Phone and Email support', included: false },
    ],
    buttonVariant: 'secondary' as const,
    popular: true,
  },
  {
    name: 'Business',
    price: 16,
    description: 'Unveil new satisfactions',
    features: [
      { text: '2 Team Members', included: true },
      { text: '20GB Cloud Storage', included: true },
      { text: 'Integration Help', included: true },
      { text: 'Sketch Files', included: true },
      { text: 'API Access', included: true },
      { text: 'Complete documentation', included: true },
      { text: '24x7 Phone and Email support', included: true },
    ],
    buttonVariant: 'outline' as const,
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="py-20">
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] lg:text-[50px] font-bold text-text-dark leading-tight mb-4">
            Choose Plan<br />That's Right For You
          </h2>
          <p className="text-lg font-bold text-text-gray">
            Choose plan that works best for you, feel free to contact us
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-[10px] p-2 shadow-md">
            <div className="flex">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-8 py-3 rounded-[10px] text-lg font-medium transition-colors duration-150 ${
                  !isYearly ? 'bg-transparent text-text-dark' : 'bg-transparent text-text-gray'
                }`}
              >
                Bil Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-8 py-3 rounded-[10px] text-lg font-medium transition-colors duration-150 ${
                  isYearly ? 'bg-primary text-white' : 'bg-transparent text-text-gray'
                }`}
              >
                Bil Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[20px] p-8 ${
                plan.popular
                  ? 'bg-primary text-white'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Plan Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    plan.popular ? 'bg-white/20' : 'bg-light-bg'
                  }`}
                >
                  <svg
                    className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-primary'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className={`text-xl font-semibold ${plan.popular ? 'text-white' : 'text-text-dark'}`}>
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-text-dark'}`}>
                  ${isYearly ? plan.price * 10 : plan.price}
                </span>
                <span className={`text-base ${plan.popular ? 'text-white/70' : 'text-text-gray'}`}>
                  /{isYearly ? 'year' : 'month'}
                </span>
              </div>

              <p className={`text-base mb-8 ${plan.popular ? 'text-white/70' : 'text-text-gray'}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.included
                          ? plan.popular
                            ? 'bg-white/20'
                            : 'bg-primary'
                          : plan.popular
                            ? 'bg-white/10'
                            : 'bg-gray-200'
                      }`}
                    >
                      {feature.included ? (
                        <svg
                          className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-white'}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg
                          className={`w-3 h-3 ${plan.popular ? 'text-white/50' : 'text-gray-400'}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-base ${
                        feature.included
                          ? plan.popular
                            ? 'text-white'
                            : 'text-text-dark'
                          : plan.popular
                            ? 'text-white/50'
                            : 'text-text-gray'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? 'secondary' : plan.buttonVariant}
                className={`w-full !py-4 ${
                  plan.popular ? '!bg-dark !text-white hover:!bg-dark/90' : ''
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
