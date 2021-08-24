using Microsoft.EntityFrameworkCore;
using ProjetoMinhaLoja_API.Models;


namespace ProjetoMinhaLoja_API.Data
{
    public class MinhaLojaContext: DbContext
    {
         public MinhaLojaContext(DbContextOptions<MinhaLojaContext> options) : base(options)
        {
        }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Produto> Produto { get; set; }

        public DbSet<Produto> Comentario { get; set; }
        
    }
}