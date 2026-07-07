'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { movieService } from '@/services/movie.service';
import { CreateMovieDto } from '@/types/dto';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import MovieForm from '../movies/MovieForm';
import { MovieFormData } from '@/types/movie';

type FormValues = {
  title: string;
  year: number;
  genre: string;
  posterUrl: string;
  watched: boolean;
  rating: number;
};

function NewMovie() {
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

  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (data: CreateMovieDto) => {
    try {
      setLoading(true);
      await movieService.create(data);

      toast.success('Filme adicionado com sucesso!');
      router.push('/');
    } catch (error) {
      console.error(error);
      toast.error('Erro ao adicionar filme.');
    } finally {
      setLoading(false);
    }
  };
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 w-full bg-[#222222] p-8 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        Adicione o filme
      </h2>
      <MovieForm
        form={form}
        onSubmit={onSubmit}
        submitLabel="Adicionar Filme"
        loading={loading}
      />
    </div>
  );
}

export default NewMovie;
