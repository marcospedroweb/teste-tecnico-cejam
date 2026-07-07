export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  posterUrl?: string;
  watched: boolean;
  rating?: number;
}