'use client';
import React from 'react';
import { movieService } from '@/services/movie.service';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { Movie } from '@/types/movie';
import MovieCard from '@/components/movies/MovieCard';
import MovieCardSkeleton from '../skeletons/MovieCardSkeleton';

function NewMovie() {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const router = useRouter();

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const allMovies = await movieService.getAll();
        console.log('Fetched movies:', allMovies);
        setMovies(allMovies);
      } catch (error) {
        console.error(error);
        toast.error('Erro ao retornar filmes.');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

export default NewMovie;
