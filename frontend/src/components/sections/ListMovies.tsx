'use client';
import React from 'react';
import { movieService } from '@/services/movie.service';
import { toast } from 'react-toastify';
import { Movie } from '@/types/movie';
import MovieCard from '@/components/movies/MovieCard';
import MovieCardSkeleton from '../skeletons/MovieCardSkeleton';
import { Button } from '../ui/Button';

type FilterType = 'all' | 'watched' | 'unwatched';

function NewMovie() {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [filter, setFilter] = React.useState<FilterType>('all');

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

  const filteredMovies = React.useMemo(() => {
    if (filter === 'watched') {
      return movies.filter((movie) => movie.watched);
    }

    if (filter === 'unwatched') {
      return movies.filter((movie) => !movie.watched);
    }

    return movies;
  }, [movies, filter]);

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
      <>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Button
            className={filter === 'all' ? '' : 'bg-zinc-700 hover:bg-zinc-600'}
            onClick={() => setFilter('all')}
          >
            Todos
          </Button>

          <Button
            className={
              filter === 'watched' ? '' : 'bg-zinc-700 hover:bg-zinc-600'
            }
            onClick={() => setFilter('watched')}
          >
            Assistidos
          </Button>

          <Button
            className={
              filter === 'unwatched' ? '' : 'bg-zinc-700 hover:bg-zinc-600'
            }
            onClick={() => setFilter('unwatched')}
          >
            Para assistir
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {movies.length === 0 && (
            <h2 className="text-2xl font-regular col-span-full">
              Você ainda não adicionou filmes
            </h2>
          )}
          {filteredMovies.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} onUpdated={fetchMovies} />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default NewMovie;
