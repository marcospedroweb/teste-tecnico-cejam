'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { FaCheck } from 'react-icons/fa';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className="flex items-center gap-3 cursor-pointer select-none"
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className="peer hidden"
          {...props}
        />

        <div
          className="
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-md
            border
            border-zinc-600
            bg-[#2b2b2b]
            transition-all
            duration-200

            peer-checked:border-[#e5234b]
            peer-checked:bg-[#e5234b]
          "
        >
          <FaCheck
            size={12}
            className="scale-0 text-white transition-transform peer-checked:scale-100"
          />
        </div>

        <span className="text-zinc-200">{label}</span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
