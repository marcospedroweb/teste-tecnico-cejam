import React from 'react';
import Modal from '../ui/Modal';
import { Button } from '../ui/Button';
import { CreateMovieDto } from '@/types/dto';
import { movieService } from '@/services/movie.service';
import { toast } from 'react-toastify';

interface DeleteMovieModalProps {
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  movieId: number;
  onSuccess: () => Promise<void>;
}

function ModalDelete({
  open,
  onClose,
  movieId,
  onSuccess,
}: DeleteMovieModalProps) {
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async () => {
    try {
      setLoading(true);
      await movieService.delete(movieId);

      await onSuccess();
      toast.success('Filme excluído com sucesso!');
      onClose();
    } catch (error) {
      console.error(error);
      toast.error('Erro ao excluir filme.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} title="Excluir filme" onClose={onClose}>
      <p className="mb-6 text-zinc-300">
        Tem certeza que deseja excluir este filme?
      </p>

      <div className="flex justify-end gap-3">
        <Button className="bg-zinc-600 !hover:bg-zinc-500" onClick={onClose}>
          Cancelar
        </Button>

        <Button onClick={onSubmit} disabled={loading}>
          {loading ? 'Excluindo...' : 'Excluir'}
        </Button>
      </div>
    </Modal>
  );
}

export default ModalDelete;
