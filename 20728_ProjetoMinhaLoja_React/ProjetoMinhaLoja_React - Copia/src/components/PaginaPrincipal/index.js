import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../PaginaPrincipal/stylePaginaPrincipal.css'
import Carrossel from '../Carrossel'




export default class PaginaPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosProdutos: []
        };
    }
    componentDidMount() {
        const apiUrl = 'https://localhost:5001/api/produtos';
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosProdutos: result
                    });
                    console.log("buscaProdutos:" + result);
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }
    render() {
        const {dadosProdutos} = this.state;
        return (
            <div id="bodyPrincipal">
                <section id="topbar" className="d-flex align-items-center">
                    <div className="container d-flex justify-content-center justify-content-md-between">
                        <div className="contact-info d-flex align-items-center">
                            <i class="fas fa-envelope"></i><a style={{ textDecoration: "none" }} href="mailto:minhaloja@gmail.com">minhaloja@gmail.com </a>
                            <i class="fas fa-phone-alt" style={{ marginLeft: "10px" }}></i> +11 5588 34489 55
                             </div>
                    </div>
                </section>
                <div id="header" className="d-flex align-items-center" >
                    <div className="container d-flex align-items-center">
                        <h1 className="logo me-auto"><a style={{ font:"font", textDecoration: "none", marginRight: "250px" }} href="index.html">minha loja</a></h1>
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a>    </a></li>
                                <li><a>    </a></li>
                                <li><a>    </a></li>
                                <li><a>    </a></li>
                                <li><a>    </a></li>
                                <li><a>    </a></li>
                                <li><a>    </a></li>
                                <li><a>    </a></li>
                                <li></li>
                                <li><a style={{ textDecoration: "none" }} className="nav-link scrollto active" href="#hero">home</a></li>
                                <li><a style={{ textDecoration: "none" }} className="nav-link scrollto " href="#portfolio">produtos</a></li>
                                <li><a style={{ textDecoration: "none" }} className="nav-link scrollto" href="#contact">contatos</a></li>
                                <Link to="/login">
                                    <li><a style={{ textDecoration: "none" }} className="getstarted scrollto">ADM</a></li>
                                </Link>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                </div>
                <section style={{ marginBottom: "-60px", marginTop: "-10px" }}>
                    <Carrossel />
                </section>
                <main id="main" >
                    
                    <section id="cta" className="cta">
                        <div className="container">

                            <div className="row">
                                <div >
                                    <h3 style={{ textAlign:'center' }}> O seu dia pode mudar completamente com uma dose de criatividade ;) </h3>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="portfolio">
                    <div className="section-title">
                                <h2>Produtos</h2>
                            </div>
                    <div className=" row cards-container">
                            {dadosProdutos.map(
                                (prod) =>
                                    <div className="card" style={{ width: "300px" }}>
                                        <img className="card-img-bottom" src={prod.foto} alt="Card image" style={{ width: "100%" }} />
                                        <div className="card-body">
                                            <h4 className="card-title">{prod.nome}</h4>
                                            <p className="card-text">
                                                <b>Valor: </b> {prod.valor} reais
                                            </p>
                                            <p className="card-text">
                                                <b>Descrição: </b> {prod.descricao}
                                            </p>
                                         </div>
                                    </div>
                            )}
                        </div>
                    </section>
                    
                    <section id="contact" className="contact">
                        <div className="container">
                            <div className="section-title">
                                <h2>Contatos</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 d-flex align-items-stretch">
                                    <div className="info">
                                        <div className="address"> 
                                            <h4>Sede:</h4>
                                            <p>Avenida Alexandria, nº 3001, bairro Betel, Paulínia/SP</p>
                                        </div>
                                        <div className="email">
                                            <h4>Email:</h4>
                                            <p>minhaloja@gmail.com</p>
                                        </div>

                                        <div className="phone">
                                            <h4>Ligue:</h4>
                                            <p>+11 5588 34489 55</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="form-group mt-3">
                                            <label for="name">Comentário</label>
                                            <br/>
                                            <textarea className="form-control" name="message" rows="8" required></textarea>
                                        </div>
                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message">Erro ao enviar comentário.</div>
                                            <div className="sent-message">Obrigada por comentar!!</div>
                                        </div>
                                        <div ><button type="submit">Enviar comentário</button></div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </section>

                </main>
                <footer id="footer">
                    
                    <div className="container">
                        <h3>minha loja</h3>
                        <p>Seja você cada dia melhor!</p>         
                    </div>

                </footer>
                <a style={{ textDecoration: "none" }} href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                    className="bi bi-arrow-up-short"></i></a>
                <script src="../src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="../src/assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="../src/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                <script src="../src/assets/vendor/php-email-form/validate.js"></script>
                <script src="../src/assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="../src/assets/js/main.js"></script>
            </div>
        )
    }
}
