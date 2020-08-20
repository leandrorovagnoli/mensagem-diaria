using mensagem_diaria_core.Data;
using mensagem_diaria_core.Interfaces;
using mensagem_diaria_core.Models;
using mensagem_diaria_core.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;

namespace mensagem_diaria_core
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            // requires using Microsoft.Extensions.Options
            services.Configure<DailyMessageDatabaseSettings>(
                Configuration.GetSection(nameof(DailyMessageDatabaseSettings)));

            services.AddSingleton<IDailyMessageDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<DailyMessageDatabaseSettings>>().Value);

            services.AddControllers();

            services.AddSingleton<DailyMessageService>();

            services.AddSingleton<SeedingService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, SeedingService seedingService)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                seedingService.Seed();
            }

            app.UseCors(options =>
                options
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
