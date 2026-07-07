import { api } from "./api";

import { Movie } from "@/types/movie";
import { CreateMovieDto } from "@/types/dto";

export const movieService = {
  async create(data: CreateMovieDto): Promise<Movie> {
    const response = await api.post<Movie>("/movies", data);

    return response.data;
  },

  async getAll(): Promise<Movie[]> {
    const response = await api.get<Movie[]>("/movies");
    return response.data;
  }
}
