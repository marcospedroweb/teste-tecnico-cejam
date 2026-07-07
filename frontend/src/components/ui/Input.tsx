import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, className = '', ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          id={id}
          placeholder=" "
          className={`
            peer
            h-14
            w-full
            rounded-lg
            border
            border-zinc-700
            bg-[#222222]
            px-4
            pt-5
            pb-2
            text-white
            outline-none
            transition-all
            duration-200

            placeholder:text-transparent

            focus:border-[#e5234b]
            focus:ring-2
            focus:ring-[#e5234b]/20

            disabled:cursor-not-allowed
            disabled:opacity-50

            ${className}
          `}
          {...props}
        />

        <label
          htmlFor={id}
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            bg-[#222222]
            px-1
            text-zinc-400
            transition-all
            duration-200
            peer-placeholder-shown:text-base
            peer-focus:top-0
            peer-focus:text-xs
            peer-focus:text-[#e5234b]
            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:text-xs
          "
        >
          {label}
        </label>
      </div>
    );
  },
);

Input.displayName = 'Input';
