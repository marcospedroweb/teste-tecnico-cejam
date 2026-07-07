import { Movie } from '@/types/movie';
import { RatingStars } from './RatingStars';
import { Button } from '../ui/Button';
import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-[#333333] shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <img
        src={movie.posterUrl || 'https://placehold.co/400x600'}
        alt={movie.title}
        className="aspect-2/3 w-full object-cover"
      />

      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-lg font-semibold text-white">
          {movie.title}
        </h3>
        <p className="text-sm text-zinc-400">
          {movie.year} | {movie.genre}
        </p>
        <span
          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
            movie.watched
              ? 'bg-green-500/20 text-green-400'
              : 'bg-yellow-500/20 text-yellow-400'
          }`}
        >
          {movie.watched ? 'Assistido' : 'Para assistir'}
        </span>

        <RatingStars value={movie.rating ?? 0} size={18} />
        <div className="flex justify-center gap-2 mt-6">
          <Button className="bg-blue-400 hover:bg-blue-500 transition-all duration-300 ease-in w-full">
            <FaPen />
          </Button>
          <Button>
            <MdDelete />
          </Button>
        </div>
      </div>
    </div>
  );
}
