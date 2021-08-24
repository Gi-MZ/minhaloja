import React, { Component } from 'react';
import "./styleCarrosel.css";
import TutoHora from "../../assets/img/slide/loja.png";
import TutoHora2 from "../../assets/img/slide/loja1.png";
import TutoHora3 from "../../assets/img/slide/loja2.png";
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';

export default class Carrossel extends Component {
    render() {
        return (
            <div style={{marginTop: "-50px"}}>
               <Carousel id="hero" fade>
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src={TutoHora}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="container" style={{color:"black",textAlign:"center", marginBottom: "100px"}}>
                                <h2 className="animate__animated animate__fadeInDown">MINHA LOJA, SUA LOJA!</h2>
                                <p className="animate__animated animate__fadeInUp">Seja a melhor versão de você mesma <br /> autocuidado é um sinal de amor consigo mesm@.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src={TutoHora2}                  
                        alt="Second slide"
                        />
                        <Carousel.Caption >
                        <div className="container"style={{marginBottom: "110px"}}>                        
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src={TutoHora3}                        
                        alt="Third slide"
                        />
                        <Carousel.Caption >
                            <div className="container" style={{marginBottom: "110px"}}>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}