'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { FaCheck } from 'react-icons/fa';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center gap-3 select-none"
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={`
            h-5 w-5
            cursor-pointer
            rounded
            border-zinc-600
            bg-[#2b2b2b]
            accent-[#e5234b]
            focus:ring-2
            focus:ring-[#e5234b]
            focus:ring-offset-2
            focus:ring-offset-[#222222]
          `}
          {...props}
        />

        <span className="text-zinc-200">{label}</span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
