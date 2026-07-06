using MyFlix.Models;

namespace MyFlix.Services.Interfaces;

public interface IMovieService
{
  IReadOnlyList<Movie> GetAll();
}