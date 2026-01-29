export default function Footer() {
  return (
    <footer className="bg-[--color-dark] text-white py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Branding */}
          <div>
            <h2 className="text-[--color-primary] text-[50px] font-semibold leading-[30px] mb-6">
              Biccas
            </h2>
            <p className="text-white/70 text-[18px] leading-[30px] mb-8">
              Get started noew try our product
            </p>
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[--color-primary] focus:outline-none transition-colors"
              />
              <button className="w-12 h-12 bg-[--color-primary] rounded-lg flex items-center justify-center hover:bg-[--color-primary-hover] transition-colors flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Column 2 - Support */}
          <div>
            <h3 className="text-white text-[20px] font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  Help centre
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  Account information
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Help and Solution */}
          <div>
            <h3 className="text-white text-[20px] font-semibold mb-6">Help and Solution</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  Talk to support
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  Support docs
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  System status
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  Covid responde
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Product */}
          <div>
            <h3 className="text-white text-[20px] font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  Update
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  Beta test
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[18px] hover:text-[--color-primary] transition-colors">
                  Pricing product
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-[18px]">
            © 2022 Biccas Inc. Copyright and rights reserved
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/70 text-[18px] hover:text-white transition-colors">
              Terms and Condtions
            </a>
            <span className="w-1 h-1 bg-white/50 rounded-full" />
            <a href="#" className="text-white/70 text-[18px] hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
