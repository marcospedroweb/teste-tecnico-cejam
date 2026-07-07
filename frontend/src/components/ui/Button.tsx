import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly link?: boolean;
  readonly href?: string;
}

export function Button({
  children,
  className = '',
  link = false,
  href = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-lg
        bg-[#e5234b]
        px-4 py-2
        font-medium
        text-white
        transition-all
        duration-200
        hover:bg-[#cf1f43]
        active:scale-95
        active:bg-[#b91c3d]
        disabled:cursor-not-allowed
        disabled:opacity-50
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {link ? (
        <Link
          href={href}
          className="flex items-center justify-center w-full h-full"
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
}
