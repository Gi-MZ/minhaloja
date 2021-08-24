import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import "./styleLogin.css"

export default class Login extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		redirect: false
	}
	async login(event) {
		event.preventDefault();
		var apiUrlLogin = "https://localhost:5001/api/usuario/";
		var qualNome = document.querySelector("#inputNome").value;
		var qualSenha = document.querySelector("#inputPassword").value;
		//alert(qualSenha + "++++++++" + qualNome);
		if (qualNome === "" || qualSenha === "") {
			alert("[ERROR] Informe todas os dados!")
		}

		else {

			const qualUrl = apiUrlLogin + qualNome;
			//alert(qualSenha + "-------" + qualNome);
			//const usuario = (await fetch(qualUrl)).json();
			await fetch(qualUrl)
				.then(res => 
					res.json()					
				)
				.then(
					(result) => {
						//alert(qualSenha + result[0].senha)
						if (result[0].senha === qualSenha) {
							//alert("entrouuuu")
							//window.location.href = `http://localhost:3000/homeAdm/` + usuario.nome;
							this.setState({ redirect: true })
						}
						
						else if (result[0].nome === qualNome && result[0].senha !== qualSenha) {
							alert("[ERROR] Senha Incorreta!");
						}
						else {
							alert("[ERROR] Usuario inexistente ou erro no Servidor!");
						}

					},
					(error) => {
						alert(error);
					}
				)

			
		}

	}

	mostrarSenha(event) {
		var senha = document.querySelector('#inputPassword');
		if (senha.type === 'text') {
			senha.setAttribute('type', 'password');
		}
		else {
			senha.setAttribute('type', 'text');
		}

	}

	render() {
		const { redirect } = this.state;
		if (redirect) {
			return <Redirect to='/homeAdm' />;
		}
		return (
			<div id="bodyLogin">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 col-xl-9 mx-auto">
							<div className="card card-signin flex-row my-5">
								<div className="card-img-left-login d-none d-md-flex">
								</div>
								<div className="card-body">
									<h2 className="card-title text-center">Login</h2>
									<form className="form-signin">

										<hr></hr><br></br>

										<div className="form-label-group">
											<input type="text" id="inputNome" className="form-control" placeholder=""
												maxLength="150" required />
											<label for="inputNome">Nome</label>
										</div>

										<p>   Ver a senha:
											<img id="olho" height="20px" width="20px"
												src="https://image.flaticon.com/icons/png/512/37/37090.png"
												onClick={event => this.mostrarSenha(event)}
											>
											</img></p>
										<div className="form-label-group">
											<input type="password" id="inputPassword" className="form-control" placeholder="" maxLength="10"
												required />
											<label for="inputPassword">Senha</label>
										</div>

										<br></br>
										<hr></hr>
										<a>
											<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={event => this.login(event)}> Login</button>

										</a>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}