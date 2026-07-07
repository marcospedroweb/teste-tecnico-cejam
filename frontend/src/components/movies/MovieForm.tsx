import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import {
  SubmitHandler,
  UseFormReturn,
} from 'node_modules/react-hook-form/dist/types/form';
import { MovieFormData } from '@/types/movie';

interface MovieFormProps {
  form: UseFormReturn<MovieFormData>;
  onSubmit: SubmitHandler<MovieFormData>;
  submitLabel: string;
  loading?: boolean;
}

export default function MovieForm({
  form,
  onSubmit,
  submitLabel,
  loading = false,
}: MovieFormProps) {
  const { register, handleSubmit, watch, setValue } = form;
  const watched = watch('watched');

  return (
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
      <Input label="Poster" {...register('posterUrl')} />
      <Button type="submit" disabled={loading}>
        {loading ? 'Salvando...' : submitLabel}
      </Button>
    </form>
  );
}
