using Microsoft.AspNetCore.Mvc;
using MyFlix.DTOs;
using MyFlix.Services.Interfaces;

namespace MyFlix.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MoviesController : ControllerBase
{
  private readonly IMovieService _movieService;

  public MoviesController(IMovieService movieService)
  {
    _movieService = movieService;
  }

  [HttpGet]
  public async Task<IActionResult> Get()
  {
    var movies = await _movieService.GetAllAsync();

    return Ok(movies);
  }

  [HttpPost]
  public async Task<IActionResult> Create(CreateMovieDto createMovieDto)
  {
    var newMovie = await _movieService.CreateAsync(createMovieDto);

    return CreatedAtAction(
      nameof(Get),
      new { id = newMovie.Id },
      newMovie);
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> Update(int id, UpdateMovieDto updateMovieDto)
  {
    var updatedMovie = await _movieService.UpdateAsync(id, updateMovieDto);

    if (updatedMovie == null)
      return NotFound(new
      {
        message = "Movie not found."
      });

    return Ok(updatedMovie);
  }

}