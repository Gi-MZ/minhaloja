/*using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ProjetoMinhaLoja_API.Data;
using ProjetoMinhaLoja_API.Models;


using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace ProjetoMinhaLoja_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComentarioController : Controller
    {
        private readonly MinhaLojaContext _context;
        public ComentarioController(MinhaLojaContext context)
        {
            // construtor
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Comentario>> GetAll()
        {
            return _context.Comentario.ToList();
        }

        
    }
}*/