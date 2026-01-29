import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-[1180px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-[--color-primary] text-[50px] font-semibold leading-[30px]">
              Biccas
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[--color-text-primary] text-[18px] font-medium hover:text-[--color-primary] transition-colors">
              Home
            </a>
            <a href="#" className="text-[--color-text-primary] text-[18px] font-medium hover:text-[--color-primary] transition-colors">
              Product
            </a>
            <a href="#" className="text-[--color-text-primary] text-[18px] font-medium hover:text-[--color-primary] transition-colors">
              FAQ
            </a>
            <a href="#" className="text-[--color-text-primary] text-[18px] font-medium hover:text-[--color-primary] transition-colors">
              Blog
            </a>
            <a href="#" className="text-[--color-text-primary] text-[18px] font-medium hover:text-[--color-primary] transition-colors">
              About Us
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm">
              Login
            </Button>
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
