using Microsoft.EntityFrameworkCore;
using MyFlix.Data;
using MyFlix.Services;
using MyFlix.Services.Interfaces;
using FluentValidation;
using MyFlix.Validators;
using Microsoft.AspNetCore.Mvc;
using FluentValidation.AspNetCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlite("Data Source=myflix.db");
});
builder.Services
    .AddControllers()
    .ConfigureApiBehaviorOptions(options =>
    {
        options.InvalidModelStateResponseFactory = context =>
        {
            var errors = context.ModelState
                .Where(x => x.Value!.Errors.Count > 0)
                .ToDictionary(
                    x => x.Key,
                    x => x.Value!.Errors
                        .Select(e => e.ErrorMessage)
                        .ToArray()
                );

            return new BadRequestObjectResult(new
            {
                message = "Validation failed",
                errors
            });
        };
    });
builder.Services.AddValidatorsFromAssemblyContaining<CreateMovieValidator>();
builder.Services.AddFluentValidationAutoValidation();

builder.Services.AddScoped<IMovieService, MovieService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();
