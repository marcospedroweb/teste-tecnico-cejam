using Microsoft.AspNetCore.Mvc;
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
}