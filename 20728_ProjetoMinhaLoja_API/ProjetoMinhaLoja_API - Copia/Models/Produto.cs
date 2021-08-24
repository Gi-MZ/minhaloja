namespace ProjetoMinhaLoja_API.Models
{
    public class Produto
    {
        public int id { get; set; }
      
        public string nome { get; set; }
        public string foto { get; set; }
        public double valor { get; set; }
        public string descricao { get; set; }
        public int qtd { get; set; }
    }
}