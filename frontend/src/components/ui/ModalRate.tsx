import React from 'react';
import Modal from './Modal';
import { Button } from './Button';
import { CreateMovieDto } from '@/types/dto';
import { movieService } from '@/services/movie.service';
import { toast } from 'react-toastify';
import { RatingStars } from '../movies/RatingStars';
import { Checkbox } from './Checkbox';

interface DeleteMovieModalProps {
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  movieId: number;
  onSuccess: () => Promise<void>;
}

function ModalRate({
  open,
  onClose,
  movieId,
  onSuccess,
}: DeleteMovieModalProps) {
  const [loading, setLoading] = React.useState(false);
  const [rating, setRating] = React.useState<number>(0);
  const [watched, setWatched] = React.useState<boolean>(false);
  const onSubmit = async () => {
    try {
      setLoading(true);
      await movieService.rate(movieId, rating, watched);

      await onSuccess();
      toast.success('Avaliação enviada com sucesso!');
      onClose();
    } catch (error) {
      console.error(error);
      toast.error('Erro ao enviar avaliação.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} title="Avaliar filme" onClose={onClose}>
      <div className="mb-4">
        <h4 className="text-zinc-200 text-xl font-bold mb-2">
          {' '}
          Você já assistiu este filme?
        </h4>
        <Checkbox
          label="Sim, já assisti"
          checked={watched}
          onChange={() => {
            setWatched(true);
          }}
        />
        <Checkbox
          label="Não, ainda não assisti"
          checked={!watched}
          onChange={() => {
            setWatched(false);
            setRating(0);
          }}
        />
      </div>

      {watched && <RatingStars editable value={rating} onChange={setRating} />}

      <div className="flex justify-end gap-3 mt-6">
        <Button className="bg-zinc-600 !hover:bg-zinc-500" onClick={onClose}>
          Cancelar
        </Button>

        <Button onClick={onSubmit} disabled={loading}>
          {loading ? 'Salvando...' : 'Salvar'}
        </Button>
      </div>
    </Modal>
  );
}

export default ModalRate;
