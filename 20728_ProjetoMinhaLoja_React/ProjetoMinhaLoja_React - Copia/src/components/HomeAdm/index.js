import React, { Component } from 'react';
import "./styleHomeAdm.css";
import { Link } from 'react-router-dom';
const apiUrl = 'https://localhost:5001/api/produtos/';

export default class HomeAdm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dadosProdutos: []
        };
    }
    componentDidMount() {

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
    //adicionar produto
    async AdicionarProd(event) {

        const url = 'http://localhost:5000/api/produtos/';
        var qualID = Number(document.querySelector("#inputID").value);
        var qualNome = document.querySelector("#inputNome").value;
        var qualFoto = document.querySelector("#urlFoto").value;
        var qualValor = Number(document.querySelector("#inputValor").value);
        var qualDescricao = document.querySelector("#inputDescricao").value;
        var qualQtd = Number(document.querySelector("#inputQtd").value);


        const Produto = { id: qualID, nome: qualNome, foto: qualFoto, valor: qualValor, descricao: qualDescricao, qtd: qualQtd }

        const methods = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Produto)
        }

        const res = await (await fetch(url, methods)).json()


    }


    //listagem






    render() {
        const { dadosProdutos } = this.state;
        return (
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Cadastro de produtos</h2>
                    </div>
                    <div>
                        <div className="col-lg-12 mt-15 mt-lg-0 d-flex ">

                            <div className="form-group mt-9">
                                <label>Nome:</label>
                                <input type="text" name="inputNome" className="form-control" id="inputNome" required />
                            </div>
                            <div className="form-group mt-9">
                                <label>Id:</label>
                                <input type="text" name="inputID" className="form-control" id="inputID" required />
                            </div>
                            <div className="form-group mt-9">
                                <label>URL foto:</label>
                                <input type="text" name="urlFoto" className="form-control" id="urlFoto" required />
                            </div>
                            <div className="form-group mt-9">
                                <label>Valor:</label>
                                <input type="text" name="inputValor" className="form-control" id="inputValor" required />
                            </div>
                            <div className="form-group mt-9">
                                <label>Quantidade:</label>
                                <input type="text" name="inputQtd" className="form-control" id="inputQtd" required />
                            </div>
                            <div className="form-group mt-9">
                                <label>Descrição:</label>
                                <input type="text" name="inputDescricao" className="form-control" id="inputDescricao" required />
                            </div>
                            <div className="mx-auto">
                            </div>
                            <button id="btnSalvarHome" align="center" onClick={event => this.AdicionarProd(event)}>Adicionar</button>


                        </div>

                    </div>
                </div>
                <hr></hr>
                <br />
                <br />
                <br />
                <br />

                <div className="section-title">
                <h2>Catálogo de produtos</h2>
                </div>
                <div className=" row cards-container">
                            {dadosProdutos.map(
                                (prod) =>
                                    <div className="card" style={{ width: "300px" }}>
                                        <img className="card-img-bottom" src={prod.foto} alt="Card image" style={{ width: "100%" }} />
                                        <div className="card-body">
                                            <h4 className="card-title">{prod.nome}</h4>
                                            <p className="card-text">
                                                <b>Id: </b> {prod.id} 
                                            </p>
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
                    
                 
            </section >


                        );
    }




}

//forms para adicionar novos produtos
//listagem dos produtos
/*

criarProduto(event) {

    var qualNome = document.querySelector("#inputUserame").value;
            var qualTel = document.querySelector("#inputTel").value;
            var qualEmail = document.querySelector("#inputEmail").value;
            var qualSenha = document.querySelector("#inputPassword").value;
            var qualID = Number(document.querySelector("#inputID").value);
            if (qualNome === "" || qualTel === "" || qualEmail === "" || qualSenha === "") {
                alert("[ERROR] Informe todos os dados!")

}









import React, { Component, useState } from 'react';
import "./styleHomeAdm.css";
import fotoPerfil from "../../assets/img/perfil.png";
import { useParams } from "react-router";

    CarregarDados();

    function mudarFoto(event)
    {
        const srcFoto = document.querySelector("#fotoUser");
        const urlFoto = document.querySelector("#urlFoto");
        const novoSrc = urlFoto.value;
        srcFoto.setAttribute('src', novoSrc);
        urlFoto.value = '';
    }

    async function CarregarDados()
    {
        var qualUrl = "https://localhost:5000/api/Cliente/" + nome;
        const usuario = await (await fetch(qualUrl)).json();
        const inputNome = document.querySelector("#nome");
        const inputSenha = document.querySelector("#senha");
        const inputTel = document.querySelector("#tel");
        const inputEmail = document.querySelector("#email");
        const fotoUser = document.querySelector("#fotoUser");
        const inputID = document.querySelector("#idAluno");
        inputNome.setAttribute('value', usuario.nome);
        inputID.setAttribute('value', usuario.id);
        inputSenha.setAttribute('value', usuario.senha);
        inputTel.setAttribute('value', usuario.telefone);
        inputEmail.setAttribute('value', usuario.email);
        fotoUser.setAttribute('src', usuario.foto);
    }
    function AtualizarConta()
    {

        const qualNome = document.querySelector("#nome").value;
        const qualSenha = document.querySelector("#senha").value;
        const qualTel = document.querySelector("#tel").value;
        const qualEmail = document.querySelector("#email").value;
        const qualFoto = document.querySelector("#fotoUser").src;
        const qualID = Number(document.querySelector("#idAluno").value);
        const url = 'https://localhost:5001/api/Cliente/'  +  qualEmail;
        fetch(url,
            {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": qualID,
                    "nome": qualNome,
                    "email": qualEmail,
                    "senha": qualSenha,
                    "telefone": qualTel,
                    "foto": qualFoto
                })
            }
        )

    }
    return(
    <div id="corpo" >
        <input type="number" hidden="true" id="idAluno"></input>
            <Menu email={email} ></Menu>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Dados Pessoais</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" className="php-email-form">
                                <div className="form-group mt-3">
                                    <label>Nome:</label>
                                    <input type="text" name="nome" className="form-control" id="nome" required />
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Senha:</label>
                                        <img id="olho" height="20px" width="20px"
                                            src="https://image.flaticon.com/icons/png/512/37/37090.png"
                                            onClick={event => mostrarSenha(event)}
                                        >
                                        </img>
                                        <input type="password" maxLength="10" name="senha" className="form-control" id="senha" required />
                                    </div>
                                    <div className="form-group col-md-6 mt-3 mt-md-0">
                                        <label>Email: </label>
                                        <input type="email" disabled="true" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <label>Telefone:</label>
                                    <input type="tel" name="tel" className="form-control" id="tel" required />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Carregando.</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Suas alterações foram salvas.</div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="form-group mt-3">
                                    <label>URL foto:</label>
                                    <input type="text" name="urlFoto" className="form-control" id="urlFoto" required />
                                </div>
                                <div className="form-group mt-3">
                                    <img id="fotoUser" alt="" src={fotoPerfil} />
                                </div>
                                <div className="text-center" ><button id="btnVerImg" type="submit" onClick={event => mudarFoto(event)}> Visualizar </button></div>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <button id="btnSalvarHome" type="submit" align="center" onClick={event => AtualizarConta(event)}>Salvar</button>
                        </div>
                    </div>
                </div>
            </section>
        </div >

    )
}


export default HomeAdm;

*/
