using FluentValidation;
using MyFlix.DTOs;

namespace MyFlix.Validators;

public class WatchMovieValidator : AbstractValidator<WatchMovieDto>
{
  public WatchMovieValidator()
  {
    RuleFor(x => x.Rating)
        .InclusiveBetween(0, 5)
        .When(x => x.Rating.HasValue);
  }
}