using FluentValidation;
using MyFlix.DTOs;

namespace MyFlix.Validators;

public class CreateMovieValidator : AbstractValidator<CreateMovieDto>
{
  public CreateMovieValidator()
  {
    RuleFor(x => x.Title)
        .NotEmpty()
        .MaximumLength(100);

    RuleFor(x => x.Genre)
        .NotEmpty()
        .MaximumLength(50);

    RuleFor(x => x.Year)
        .InclusiveBetween(1888, DateTime.Now.Year);

    RuleFor(x => x.PosterUrl)
        .Must(url =>
            string.IsNullOrWhiteSpace(url) ||
            Uri.IsWellFormedUriString(url, UriKind.Absolute))
        .WithMessage("PosterUrl must be a valid URL.");
  }
}