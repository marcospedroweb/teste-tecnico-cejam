'use client';
import { RatingStars } from '../movies/RatingStars';
import { Input } from '../ui/Input';
import { Checkbox } from '../ui/Checkbox';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { movieService } from '@/services/movie.service';
import { CreateMovieDto } from '@/types/dto';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

type FormValues = {
  title: string;
  year: number;
  genre: string;
  posterUrl: string;
  watched: boolean;
  rating: number;
};

function NewMovie() {
  const { register, handleSubmit, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      title: '',
      year: 1888,
      genre: '',
      posterUrl: '',
      watched: false,
      rating: 0,
    },
  });
  const watched = watch('watched');
  const onSubmit = async (data: CreateMovieDto) => {
    try {
      await movieService.create(data);

      toast.success('Filme adicionado com sucesso!');
      router.push('/');
    } catch (error) {
      console.error(error);
      toast.error('Erro ao adicionar filme.');
    }
  };
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 w-full bg-[#222222] p-8 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        Adicione o filme
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input label="Título" {...register('title')} />
        <Input
          label="Ano"
          type="number"
          {...register('year', {
            valueAsNumber: true,
          })}
          min={1888}
          max={new Date().getFullYear()}
        />
        <Input label="Gênero" {...register('genre')} />
        <Checkbox label="Já assisti esse filme" {...register('watched')} />
        {watched && (
          <div className="space-y-2">
            <span className="text-white">Qual nota você dá ao filme?</span>

            <RatingStars
              value={watch('rating')}
              onChange={(value) => setValue('rating', value)}
            />
          </div>
        )}
        <Input label="Poster" {...register('posterUrl')} />
        <Button>Adicionar filme</Button>
      </form>
    </div>
  );
}

export default NewMovie;
