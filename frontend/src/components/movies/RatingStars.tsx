'use client';

import { FaStar } from 'react-icons/fa';

interface RatingStarsProps {
  value: number;
  max?: number;
  editable?: boolean;
  size?: number;
  onChange?: (rating: number) => void;
}

export function RatingStars({
  value,
  max = 5,
  editable = false,
  size = 30,
  onChange,
}: RatingStarsProps) {
  const stars = Array.from({ length: max }, (_, index) => {
    const rating = index + 1;

    const star = (
      <FaStar
        size={size}
        className={`transition-colors duration-200 ${
          rating <= value ? 'text-[#e5234b]' : 'text-zinc-600'
        }`}
      />
    );

    if (!editable) {
      return <div key={rating}>{star}</div>;
    }

    return (
      <button
        key={rating}
        type="button"
        onClick={() => onChange?.(rating)}
        className="transition-transform duration-150 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {star}
      </button>
    );
  });

  return <div className="flex items-center gap-1">{stars}</div>;
}
