namespace MyFlix.DTOs;

public class UpdateMovieDto
{
  public string Title { get; set; } = string.Empty;
  public int Year { get; set; }
  public string Genre { get; set; } = string.Empty;
  public string? PosterUrl { get; set; }
}