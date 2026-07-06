using FluentValidation;
using MyFlix.DTOs;

namespace MyFlix.Validators;

public class UpdateMovieValidator : AbstractValidator<UpdateMovieDto>
{
  public UpdateMovieValidator()
  {
    RuleFor(x => x.Title)
        .NotEmpty()
        .MaximumLength(100);

    RuleFor(x => x.Year)
        .InclusiveBetween(1888, DateTime.Now.Year);

    RuleFor(x => x.Genre)
        .NotEmpty()
        .MaximumLength(50);

    RuleFor(x => x.PosterUrl)
        .Must(url =>
            string.IsNullOrWhiteSpace(url) ||
            Uri.IsWellFormedUriString(url, UriKind.Absolute))
        .WithMessage("PosterUrl must be a valid URL.");
  }
}