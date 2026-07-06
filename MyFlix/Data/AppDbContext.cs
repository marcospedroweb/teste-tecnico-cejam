using Microsoft.EntityFrameworkCore;
using MyFlix.Models;

namespace MyFlix.Data;

public class AppDbContext : DbContext
{
  public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
  {
  }

  public DbSet<Movie> Movies => Set<Movie>();
}