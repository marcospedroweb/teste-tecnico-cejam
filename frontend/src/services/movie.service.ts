import { api } from "./api";

import { Movie } from "@/types/movie";
import { CreateMovieDto, UpdateMovieDto } from "@/types/dto";

export const movieService = {
  async create(data: CreateMovieDto): Promise<Movie> {
    const response = await api.post<Movie>("/movies", data);

    return response.data;
  },

  async getAll(): Promise<Movie[]> {
    const response = await api.get<Movie[]>("/movies");
    return response.data;
  },

  async getById(id: number): Promise<Movie> {
    const response = await api.get<Movie>(`/movies/${id}`);
    return response.data;
  },

  async update(id: number, data: UpdateMovieDto): Promise<Movie> {
    const response = await api.put<Movie>(`/movies/${id}`, data);
    return response.data;
  },

  async rate(id: number, rating: number, watched: boolean): Promise<Movie> {
    const response = await api.post<Movie>(`/movies/${id}/watch`, { rating, watched });
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`/movies/${id}`);
  }
}
