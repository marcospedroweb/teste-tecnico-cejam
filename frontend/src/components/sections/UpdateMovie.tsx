'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { movieService } from '@/services/movie.service';
import { CreateMovieDto } from '@/types/dto';
import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';
import MovieForm from '../movies/MovieForm';
import { Movie, MovieFormData } from '@/types/movie';

type FormValues = {
  title: string;
  year: number;
  genre: string;
  posterUrl: string;
  watched: boolean;
  rating: number;
};

function UpdateMovie() {
  const form = useForm<MovieFormData>({
    defaultValues: {
      title: '',
      year: 1888,
      genre: '',
      posterUrl: '',
      watched: false,
      rating: 0,
    },
  });
  const params = useParams<{ id: string }>();

  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (data: CreateMovieDto) => {
    try {
      setLoading(true);
      await movieService.update(Number(params.id), data);

      toast.success('Filme atualizado com sucesso!');
      router.push('/');
    } catch (error) {
      console.error(error);
      toast.error('Erro ao atualizar filme.');
    } finally {
      setLoading(false);
    }
  };
  const router = useRouter();

  React.useEffect(() => {
    const fetchMovie = async () => {
      const movie = await movieService.getById(Number(params.id));

      form.reset({
        title: movie.title,
        year: movie.year,
        genre: movie.genre,
        posterUrl: movie.posterUrl,
        watched: movie.watched,
        rating: movie.rating ?? 0,
      });
    };

    fetchMovie();
  }, [params.id, form]);

  return (
    <div className="flex flex-col gap-4 w-full bg-[#222222] p-8 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        Atualize o filme
      </h2>
      <MovieForm
        form={form}
        onSubmit={onSubmit}
        submitLabel="Atualizar Filme"
        loading={loading}
      />
    </div>
  );
}

export default UpdateMovie;
