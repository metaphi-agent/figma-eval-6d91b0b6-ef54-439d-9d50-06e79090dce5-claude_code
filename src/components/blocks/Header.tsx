import { useState } from 'react';
import Button from '../ui/Button';

const navLinks = [
  { name: 'Home', href: '#', active: true },
  { name: 'Product', href: '#product' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Blog', href: '#blog' },
  { name: 'About Us', href: '#about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-6 relative z-50">
      <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-primary font-semibold text-[32px] leading-none">
          Biccas
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition-colors duration-150 ${
                link.active
                  ? 'text-black'
                  : 'text-text-gray hover:text-black'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#login" className="text-base font-medium text-text-gray hover:text-black transition-colors duration-150">
            Login
          </a>
          <Button size="sm" className="!px-6 !py-2.5">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium ${
                  link.active ? 'text-black' : 'text-text-gray'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="my-2" />
            <a href="#login" className="text-base font-medium text-text-gray">
              Login
            </a>
            <Button size="sm">Sign Up</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
