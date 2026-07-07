export interface CreateMovieDto {
  title: string;
  year: number;
  genre: string;
  posterUrl?: string;
}

export interface UpdateMovieDto {
  title: string;
  year: number;
  genre: string;
  posterUrl?: string;
}

export interface WatchMovieDto {
  watched: boolean;
  rating?: number;
}