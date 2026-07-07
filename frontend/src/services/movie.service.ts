import { api } from "./api";

import { Movie } from "@/types/movie";
import { CreateMovieDto } from "@/types/dto";

export const movieService = {
  async create(data: CreateMovieDto): Promise<Movie> {
    const response = await api.post<Movie>("/movies", data);

    return response.data;
  },
}
