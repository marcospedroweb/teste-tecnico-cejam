using MyFlix.DTOs;
using MyFlix.Models;

namespace MyFlix.Services.Interfaces;

public interface IMovieService
{
  Task<Movie> CreateAsync(CreateMovieDto createMovieDto);

  Task<List<Movie>> GetAllAsync();

  Task<Movie?> GetByIdAsync(int id);

  Task<Movie?> UpdateAsync(int id, UpdateMovieDto updateMovieDto);

  Task<Movie?> WatchAsync(int id, WatchMovieDto watchMovieDto);

  Task<bool> DeleteAsync(int id);
}