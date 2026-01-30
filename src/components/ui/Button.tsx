import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-[10px] transition-all duration-150 cursor-pointer';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark active:scale-[0.98]',
    secondary: 'bg-dark text-white hover:bg-dark/90 active:scale-[0.98]',
    outline: 'bg-transparent border-2 border-text-gray text-text-gray hover:border-primary hover:text-primary',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-5 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
