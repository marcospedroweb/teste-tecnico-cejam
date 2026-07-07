'use client';

import { FaStar } from 'react-icons/fa';

interface RatingStarsProps {
  value: number;
  onChange: (rating: number) => void;
  max?: number;
}

export function RatingStars({ value, onChange, max = 5 }: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, index) => {
        const rating = index + 1;

        return (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className="transition-transform duration-150 hover:scale-110 active:scale-95"
          >
            <FaStar
              size={30}
              className={`transition-colors duration-200 ${
                rating <= value
                  ? 'text-[#e5234b]'
                  : 'text-zinc-600 hover:text-[#e5234b]/60'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
