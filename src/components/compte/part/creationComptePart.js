import React, {Component} from 'react'
import API_URL from '../../constants/apiUrl'
import axios from 'axios'
import chargement from '../../../assets/images/chargement/chargement.gif'
import {confirmAlert} from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

class creationComptePart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //data
            username: '',
            nom: '',
            prenom: '',
            email: '',
            civilite: '',
            nomSociete: '',
            adresseSociete: '',
            numStat: '',
            telSociete: '',
            password: '',
            conf_password: '',
            //utils
            loading: false,
            message: '',
            //redirection
            redirect: false,
            //validation
            checkbox_notif: false,
            checkbox_condition: false,
            errors: {}
        }
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;

        //nom
        if (!this.state.username) {
            formIsValid = false;
            errors["username"] = "*";
        }

        if (typeof this.state.username !== "undefined") {
            if (!this.state.username.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["username"] = "lettres";
            }
        }

        //email
        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "email obligatoire";
        }

        if (typeof this.state.email !== "undefined") {
            if (!this.state.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["email"] = "email invalide";
            }
        }

        //password
        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "Mot de passe obligatoire";
        }
        /**
         if (this.state.password !== "undefined") {
            if (!this.state.password.match(/[a-zA-Z0-9]{6,100}$/)) {
                formIsValid = false;
                errors["password"] = "mot de passe trop courte";
            }
        }
         **/
        //conf_password
        if (this.state.password !== this.state.conf_password) {
            formIsValid = false;
            errors["conf_password"] = " ne sont pas identique.";
        }
        if (this.state.conf_password === '') {
            formIsValid = false;
            errors["conf_password"] = "confirmation vide.";
        }

        //checkbox
        if (!this.state.checkbox_notif) {
            formIsValid = false;
            errors["checkbox_notif"] = "*";
        }

        if (!this.state.checkbox_condition) {
            formIsValid = false;
            errors["checkbox_condition"] = "vous devez accepter les conditions";
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
            confirmAlert({
                title: 'Confirmation',
                message: 'Vous-voulez vraiment enrégistrer',
                buttons: [
                    {
                        label: 'Oui',
                        onClick: () => {
                            this.setState({
                                loading: true
                            })

                            let request = {
                                method: 'POST',
                                url: API_URL.REGISTER,
                                data: {
                                    username: this.state.username,
                                    nom: "_",
                                    prenom: "_",
                                    email: this.state.email,
                                    civilite: "_",
                                    nomSociete: "_",
                                    adresseSociete: "_",
                                    numStat: "_",
                                    telSociete: "_",
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
                            console.log(request)
                            axios(request)
                                .then(res => {
                                    console.log("Reponse reçevé ", res);
                                    this.setState({
                                        loading: false,
                                        //redirect: true
                                        message: res.data.message,
                                    })
                                })
                                .catch(err => {
                                    console.log("AXIOS ERROR: ", err);
                                    this.setState({
                                        loading: false,
                                        message: err.data
                                        //message: "tsy mety"
                                    })
                                })
                        }
                    },
                    {
                        label: 'Nom',
                        onClick: () => {
                            return null;
                        }
                    }
                ]
            })
        }

        else {
            //alert("erreur sur la formulaire");
            return null;
        }


    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/compte/emailConfirmation'/>
        }
    }

    loadOrShowMsg() {
        if (this.state.loading) {
            return <img className="chargement" src={chargement}/>

        } else {
            return <p>{this.state.message}</p>
        }
    }


    render() {
        return (
            <div className="App">
                <h2>Créer Votre Compte</h2>
                <p>En créant un compte, vous pouvez publier, consulter et accéder à plusieurs annonces.
                    Vous pouvez aussi modifier ou supprimer vos annonces.</p>
                <div className="panel-warning panel">
                    <ul class="nav nav-tabs nav-menu-compte">
                        <li className="active nav-tabs-li nav-menu-compte-li"><Link to='#'><b>Particulier</b></Link></li>
                        <li className="nav-tabs-li nav-menu-compte-li"><Link to='/compte/pro/creationComptePro'>Professionnel</Link></li>
                    </ul>
                    <div className="panel-body">
                        <form ref="signForm" className="form-group"
                              onSubmit={this.postData.bind(this)}>
                            <fieldset>
                                <input ref="nom" name="nom" type="hidden" onChange={this.handleChange.bind(this)}
                                       value={this.state.nom}
                                       className="formField"/>
                                <input ref="prenom" name="prenom" type="hidden" onChange={this.handleChange.bind(this)}
                                       value={this.state.prenom}
                                       className="formField"/>
                                <input ref="civilite" name="civilite" type="hidden" onChange={this.handleChange.bind(this)}
                                       value={this.state.civilite}
                                       className="formField"/>
                                <input ref="nomSociete" name="nomSociete" type="hidden" onChange={this.handleChange.bind(this)}
                                       value={this.state.nomSociete}
                                       className="formField"/>
                                <input ref="adresseSociete" name="adresseSociete" type="hidden" onChange={this.handleChange.bind(this)}
                                       value={this.state.adresseSociete}
                                       className="formField"/>
                                <input ref="numStat" name="numStat" type="hidden" onChange={this.handleChange.bind(this)}
                                       value={this.state.numStat}
                                       className="formField"/>
                                <input ref="telSociete" name="telSociete" type="hidden" onChange={this.handleChange.bind(this)}
                                       value={this.state.telSociete}
                                       className="formField"/>

                                <p><label><span class="exiger">*</span> : Champs obligatoires</label></p>
                                <br/>
                                <label for="username">Nom d'utilisateur(Pseudo)<span class="exiger"> *</span>
                                    <span
                                        style={{color: "red"}}>  {this.state.errors["nom"]}</span></label>
                                <input ref="username" name="username" type="text" placeholder="nom d'utilisateur"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.username}
                                       className="formField"/><br/>
                                <label for="email">Adresse mail<span class="exiger"> *</span><span
                                    style={{color: "red"}}>  {this.state.errors["email"]}</span></label>
                                <input ref="email" name="email" type="text" placeholder="Email"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.email}
                                       className="formField"/><br/>
                                <label for="password">Mot de passe<span class="exiger"> *</span><span
                                    style={{color: "red"}}>  {this.state.errors["password"]}</span></label>
                                <input ref="password" name="password" type="password" placeholder="mot de passe"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.password}
                                       className="formField"/>
                                <br/>
                                <label for="confirm_password">Confirmer mot de passe<span class="exiger"> *</span><span
                                    style={{color: "red"}}>  {this.state.errors["conf_password"]}</span></label>
                                <input ref="conf_password" name="conf_password" type="password"
                                       placeholder="confirmer mot de passe"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.conf_password}
                                       className="formField"/>
                                <br/>
                                <div className="div-checkbox">
                                    <input onChange={this.handleChange.bind(this)} ref="checkbox_notif"
                                           name="checkbox_notif" value={this.state.checkbox_notif} type="checkbox"/>
                                    <span>  « Je souhaite recevoir mensuellement les affiches récentes</span>
                                    <span class="exiger"> *</span>
                                    <span style={{color: "red"}}>{this.state.errors["checkbox_notif"]}</span><br/>
                                    <input onChange={this.handleChange.bind(this)} ref="checkbox_condition"
                                           name="checkbox_condition" value={this.state.checkbox_condition}
                                           type="checkbox"/>
                                    <span>  « J'accepte les<a><strong>Termes et Conditions Générales</strong></a> de vente »</span>
                                    <span class="exiger"> *</span>
                                    <br/><span style={{color: "red"}}>  {this.state.errors["checkbox_condition"]}</span>
                                </div>
                            </fieldset>
                            <div className="col-md-12">
                                <fieldset>
                                    {this.renderRedirect()}
                                    <button className="btn btn-lg pro myButton" id="submit"
                                            value="Submit">Valider
                                    </button>
                                </fieldset>
                            </div>
                        </form>
                        {this.loadOrShowMsg()}
                    </div>
                </div>
            </div>
        )
    }
}

export default creationComptePart;
