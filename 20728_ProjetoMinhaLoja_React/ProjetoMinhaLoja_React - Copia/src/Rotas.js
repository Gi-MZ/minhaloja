import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

//LOJA
//Geral
// PaginaPrincipalLoja, LoginAdm, HomeAdm
import PaginaPrincipal from './components/PaginaPrincipal';
import Login from './components/Login';
import HomeAdm from './components/HomeAdm';


export default class Rotas extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={PaginaPrincipal} />
                <Route path="/login" component={Login}/> 
                <Route path="/homeAdm" component={HomeAdm}/>  
                <Redirect from='*' to='/' />
            </Switch>
        )
    }
}

