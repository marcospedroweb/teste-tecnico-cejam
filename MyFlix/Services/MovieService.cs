using MyFlix.DTOs;
using MyFlix.Models;
using MyFlix.Services.Interfaces;
using MyFlix.Data;
using Microsoft.EntityFrameworkCore;

namespace MyFlix.Services;

public class MovieService : IMovieService
{
  private readonly AppDbContext _context;

  public MovieService(AppDbContext context)
  {
    _context = context;
  }

  public async Task<Movie> CreateAsync(CreateMovieDto createMovieDto)
  {
    var newMovie = new Movie
    {
      Title = createMovieDto.Title,
      Year = createMovieDto.Year,
      Genre = createMovieDto.Genre,
      PosterUrl = createMovieDto.PosterUrl,
      Watched = false,
      Rating = null
    };

    _context.Movies.Add(newMovie);
    await _context.SaveChangesAsync();

    return newMovie;
  }

  public async Task<List<Movie>> GetAllAsync()
  {
    return await _context.Movies.ToListAsync();
  }

  public async Task<Movie?> UpdateAsync(int id, UpdateMovieDto updateMovieDto)
  {
    var movie = await _context.Movies.FindAsync(id);

    if (movie == null)
      return null;


    movie.Title = updateMovieDto.Title;
    movie.Year = updateMovieDto.Year;
    movie.Genre = updateMovieDto.Genre;
    movie.PosterUrl = updateMovieDto.PosterUrl;

    await _context.SaveChangesAsync();

    return movie;
  }

  public async Task<Movie?> WatchAsync(int id, WatchMovieDto watchMovieDto)
  {
    var movie = await _context.Movies.FindAsync(id);

    if (movie == null)
      return null;

    movie.Watched = true;
    movie.Rating = watchMovieDto.Rating;

    await _context.SaveChangesAsync();

    return movie;
  }

  public async Task<bool> DeleteAsync(int id)
  {
    var movie = await _context.Movies.FindAsync(id);

    if (movie == null)
      return false;

    _context.Movies.Remove(movie);
    await _context.SaveChangesAsync();

    return true;
  }
}