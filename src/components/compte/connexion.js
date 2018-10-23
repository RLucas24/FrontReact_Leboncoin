import React, {Component} from 'react'
import chargement from '../../assets/images/chargement/chargement.gif'
import axios from 'axios'
import API_URL from '../constants/apiUrl'
import cookie from 'react-cookies'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

class connexion extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            //data
            username: '',
            password: '',
            //utils
            loading: false,
            message: '',
            redirect: false,
            //validation
            errors: {}

        }
    }

    renderRedirect() {
        if (this.state.redirect) {
            localStorage.setItem('API_Key', this.state.API_Key);
            localStorage.setItem('isToggleOn', false);
            //return <Redirect to={"/annonce/deposerAnnonce/"+this.state.API_Key}/>
            return <Redirect to={"/annonce/deposerAnnonce"}/>
        }
    }


    loadOrShowMsg() {
        if (this.state.loading) {
            return <img className="chargement" src={chargement}/>
        }
        else {
            return <p>{this.state.message}</p>
        }
    }


    handleValidation() {
        let errors = {};
        let formIsValid = true;

        //email
        if (!this.state.username) {
            formIsValid = false;
            errors["username"] = "username or email obligatoire";
        }

        //password
        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "Mot de passe obligatoire";
        }

        this.setState({errors: errors});
        return formIsValid;
    }


    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }


    postData(ev) {
        ev.preventDefault();

        if (this.handleValidation()) {
            this.setState({
                loading: true
            })

            let request = {
                method: 'POST',
                url: API_URL.CONNEXION,
                data: {
                    username: this.state.username,
                    password: this.state.password
                },
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*',
                },
                withCredentials: true,
                credentials: 'same-origin',
                crossdomain: true
            }
            axios(request)
                .then(res => {
                    console.log("Reponse reçevé ", res);
                    if (res.data === "login ou mot de passe incorrect") {
                        this.setState({
                            loading: false,
                            message: res.data,
                        })
                    }
                    else
                        this.setState({
                            loading: false,
                            API_Key: res.data.api_key,
                            isToggleOn: false,
                            redirect: true,
                        }),
                            window.location.reload();
                })
                .catch(err => {
                    console.log("AXIOS ERROR: ", err);
                    this.setState({
                        loading: false
                    })
                })
        }
        else {
            alert("Y a une erreur sur la formulaire")
        }
    }

    render() {
        return (
            <div className="App">
                <h2>Connecter-vous à votre Compte</h2>
                <p>Accéder à votre compte pour publier vos annonces. Modifier ou supprimer vos annonces pour les metter
                    à jour</p>
                <div className="panel-warning  panel">
                    <br/>
                    <div className="panel-body">
                        <form ref="signForm" className="form-group"
                              onSubmit={this.postData.bind(this)}>
                            <fieldset>
                                <label for="email">Adresse mail<span class="exiger"> *</span>
                                    <span
                                        style={{color: "red"}}>  {this.state.errors["username"]}</span></label>
                                <input ref="username" name="username" type="text" placeholder="Pseudo ou Email"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.username}
                                       className="formField"/><br/>
                                <label for="password">Mot de passe
                                    <span class="exiger"> *</span><span
                                        style={{color: "red"}}>  {this.state.errors["password"]}</span></label>
                                <input ref="password" name="password" type="password" placeholder="mot de passe"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.password}
                                       className="formField"/>
                                <br/>
                                <strong><Link to='/compte/part/creationComptePart' className="span-left">Vous n'avez pas
                                    du compte?</Link></strong>
                                <span className="span-right"><a><strong>Mot de passe oublié</strong></a></span>
                            </fieldset>
                            <div className="col-md-12">
                                <fieldset>
                                    {this.renderRedirect()}
                                    <button className="btn btn-lg pro myButton" id="submit"
                                            value="Submit">Connexion
                                    </button>
                                </fieldset>
                            </div>
                        </form>
                        <div className="message">{this.loadOrShowMsg()}</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default connexion;


class Deconnecter extends React.Component {
    render() {
        return (<div><label>Deconnecter</label>&nbsp;<span class="glyphicon glyphicon-log-out"></span></div>)
    }
}


class Connecter extends React.Component {
    componentDidMount() {
        localStorage.removeItem('API_Key');
        localStorage.removeItem('isToggleOn');
    }

    render() {
        return (<div><label>Connecter</label>&nbsp;<span class="glyphicon glyphicon-log-in"></span></div>)
    }
}