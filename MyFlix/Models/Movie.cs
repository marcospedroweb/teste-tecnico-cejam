namespace MyFlix.Models;

public class Movie
{
  public int Id { get; set; }
  public string Title { get; set; } = string.Empty;
  public string? PosterUrl { get; set; }
  public int Year { get; set; }
  public string Genre { get; set; } = string.Empty;
  public bool Watched { get; set; }
  public int? Rating { get; set; }
}