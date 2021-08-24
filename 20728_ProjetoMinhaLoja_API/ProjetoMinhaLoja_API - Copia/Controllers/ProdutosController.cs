using System.Collections.Generic;
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
    public class ProdutosController : Controller
    {
        private readonly MinhaLojaContext _context;
        public ProdutosController(MinhaLojaContext context)
        {
            // construtor
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Produto>> GetAll()
        {
            return _context.Produto.ToList();
        }
        [HttpPost]
        public async Task<ActionResult> post(Produto model)
        {
            try
            {
                _context.Produto.Add(model);
                if (await _context.SaveChangesAsync() == 1)
                {
                    //return Ok();
                    return Created($"/api/produto/{model.id}", model);
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
            
            return BadRequest();
        }
        
    }


}