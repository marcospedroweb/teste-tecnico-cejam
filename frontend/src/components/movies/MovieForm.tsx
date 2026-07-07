import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
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
      <Input label="Título" {...register('title')} required />
      <Input
        label="Ano"
        type="number"
        {...register('year', {
          valueAsNumber: true,
        })}
        min={1888}
        max={new Date().getFullYear()}
        required
      />
      <Input label="Gênero" {...register('genre')} required />
      <Input label="Poster" {...register('posterUrl')} required />
      <Button type="submit" disabled={loading}>
        {loading ? 'Salvando...' : submitLabel}
      </Button>
    </form>
  );
}
