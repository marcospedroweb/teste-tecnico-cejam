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
  public IActionResult Get()
  {
    var movies = _movieService.GetAll();

    return Ok(movies);
  }

  [HttpPost]
  public IActionResult Create([FromBody] CreateMovieDto createMovieDto)
  {
    if (string.IsNullOrWhiteSpace(createMovieDto.Title))
    {
      return BadRequest(new
      {
        message = "Title is required."
      });
    }

    var newMovie = _movieService.Create(createMovieDto);

    return CreatedAtAction(nameof(Get), new { id = newMovie.Id }, newMovie);
  }
}