import { useState } from 'react';

const footerLinks = {
  Support: ['Help Centre', 'Account Information', 'About', 'Contact Us'],
  'Help and Solution': ['Talk to Support', 'Support Docs', 'System Status', 'Covid respense'],
  'Product & Service': ['Update', 'Security', 'Beta test', 'Pricing product'],
};

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="bg-dark pt-20 pb-10">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left Column - Brand & Newsletter */}
          <div className="lg:w-[410px]">
            <a href="/" className="text-primary font-semibold text-[32px] leading-none block mb-6">
              Biccas
            </a>
            <p className="text-text-gray text-lg leading-[30px] mb-8">
              Get started noew try our product
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                className="w-full bg-transparent border-2 border-text-gray rounded-full py-4 px-6 text-white placeholder:text-text-gray focus:border-primary focus:outline-none transition-colors duration-150"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-[46px] h-[46px] bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-150"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Columns - Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-lg mb-6">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-text-gray hover:text-white transition-colors duration-150"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-lg">
            &copy; 2022 Biccas Inc. Copyright and rights reserved
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-primary transition-colors duration-150">
              Terms and Condtions
            </a>
            <span className="w-1 h-1 rounded-full bg-text-gray"></span>
            <a href="#" className="text-white hover:text-primary transition-colors duration-150">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
