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
    public class UsuarioController : Controller
    {
        private readonly MinhaLojaContext _context;
        public UsuarioController(MinhaLojaContext context)
        {
            // construtor
            _context = context;
        }

    //pegar tds
        [HttpGet]
        public ActionResult<List<Usuario>> GetAll()
        {
            return _context.Usuario.ToList();
        }



        //pegar um usuario
        [HttpGet("{nome}")]
        public ActionResult<List<Usuario>> Get(string nome)
        {
            try
            {
                var result = _context.Usuario.Where(o => o.nome == nome);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }

        }



    }


}