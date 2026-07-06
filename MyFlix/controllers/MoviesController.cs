using Microsoft.AspNetCore.Mvc;

namespace MyFlix.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MoviesController : ControllerBase
{
  [HttpGet]
  public IActionResult Get()
  {
    return Ok(new
    {
      Message = "API funcionando!"
    });
  }
}