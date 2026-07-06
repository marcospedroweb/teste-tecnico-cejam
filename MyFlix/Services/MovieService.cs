using MyFlix.DTOs;
using MyFlix.Models;
using MyFlix.Services.Interfaces;

namespace MyFlix.Services;

public class MovieService : IMovieService
{
  private readonly List<Movie> _movies = new()
  {
    new Movie
    {
        Id = 1,
        Title = "The Shawshank Redemption",
        Year = 1994,
        Genre = "Drama",
        PosterUrl = "https://placehold.co/300x450?text=No+Poster",
        Watched = true,
        Rating = 5
    },
    new Movie
    {
        Id = 2,
        Title = "The Godfather",
        Year = 1972,
        Genre = "Crime",
        PosterUrl = "https://placehold.co/300x450?text=No+Poster",
        Watched = true,
        Rating = 5
    },
    new Movie
    {
        Id = 3,
        Title = "The Dark Knight",
        Year = 2008,
        Genre = "Action",
        PosterUrl = "https://placehold.co/300x450?text=No+Poster",
        Watched = false
    }
  };

  public IReadOnlyList<Movie> GetAll()
  {
    return _movies;
  }

  public Movie Create(CreateMovieDto createMovieDto)
  {
    var newMovie = new Movie
    {
      Id = _movies.Count + 1,
      Title = createMovieDto.Title,
      Year = createMovieDto.Year,
      Genre = createMovieDto.Genre,
      PosterUrl = createMovieDto.PosterUrl
    };

    _movies.Add(newMovie);
    return newMovie;
  }
}