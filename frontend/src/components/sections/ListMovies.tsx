'use client';
import React from 'react';
import { movieService } from '@/services/movie.service';
import { toast } from 'react-toastify';
import { Movie } from '@/types/movie';
import MovieCard from '@/components/movies/MovieCard';
import MovieCardSkeleton from '../skeletons/MovieCardSkeleton';

function NewMovie() {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchMovies = async () => {
    try {
      const allMovies = await movieService.getAll();

      setMovies(allMovies);
    } catch (error) {
      console.error(error);
      toast.error('Erro ao retornar filmes.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
            <MovieCard movie={movie} onUpdated={fetchMovies} />
          </div>
        ))}
      </div>
    );
  }
}

export default NewMovie;
