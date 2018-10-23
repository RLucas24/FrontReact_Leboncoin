import React, {Component} from 'react'
import API_URL from '../../constants/apiUrl'
import axios from 'axios'
import chargement from '../../../assets/images/chargement/chargement.gif'
import {confirmAlert} from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import NumberFormat from 'react-number-format';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

class creationComptePro extends React.Component {
    constructor(props) {
        super(props)

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
            errors: {}
        }


    }


    handleValidation() {
        let errors = {};
        let formIsValid = true;

        //nom
        if (!this.state.nom) {
            formIsValid = false;
            errors["nom"] = "*";
        }

        if (typeof this.state.nom !== "undefined") {
            if (!this.state.nom.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["nom"] = "lettres";
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

        //civilite
        if (!this.state.civilite) {
            formIsValid = false;
            errors["civilite"] = "obligatoire";
        }

        //nomSociete
        if (!this.state.nomSociete) {
            formIsValid = false;
            errors["nomSociete"] = "*";
        }

        //adresseSociete
        if (!this.state.adresseSociete) {
            formIsValid = false;
            errors["adresseSociete"] = "*";
        }

        //numStat
        if (!this.state.numStat) {
            formIsValid = false;
            errors["numStat"] = "*";
        }

        if (typeof this.state.numStat !== "undefined") {
            if (!this.state.numStat.match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["numStat"] = "nombre";
            }
        }

        //telSociete
        if (!this.state.telSociete) {
            formIsValid = false;
            errors["telSociete"] = "telephone obligatoire";
        }

        if (typeof this.state.telSociete !== "undefined") {
            if (!this.state.telSociete.match(/^[+0-9]|[]+$/)) {
                formIsValid = false;
                errors["telSociete"] = "nombre";
            }
        }

        if (typeof this.state.telSociete !== "undefined") {
            if (!this.state.telSociete.match(/^03[2-4]{1}[ ]{1}[0-9]{2}[ ]{1}[0-9]{3}[ ]{1}[0-9]{2}|039[0-9]{7}|\+2613[2-4][0-9]{7}|\+26139[0-9]{7}$/)) {
                formIsValid = false;
                errors["telSociete"] = "invalide";
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
                                    nom: this.state.nom,
                                    prenom: this.state.prenom,
                                    email: this.state.email,
                                    civilite: this.state.civilite,
                                    nomSociete: this.state.nomSociete,
                                    adresseSociete: this.state.adresseSociete,
                                    numStat: this.state.numStat,
                                    telSociete: this.state.telSociete,
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
        }
        else {
            return <p>{this.state.message}</p>
        }
    }

    render() {
        return (
            <div className="App">
                <h2>Créer Votre Compte</h2>
                <p>En créant un compte, vous pouvez publier, consulter et accéder à plusieurs annonces.
                    Vous pouvez aussi modifier ou supprimer vos annonces.</p>
                <div className="panel-warning  panel">
                    <ul class="nav nav-tabs nav-menu-compte">
                        <li className="nav-tabs-li nav-menu-compte-li"><Link to='/compte/part/creationComptePart'>Particulier</Link></li>
                        <li className="active nav-tabs-li nav-menu-compte-li"><Link to='#'><b>Professionnel</b></Link></li>
                    </ul>
                    <div className="panel-body">
                        <form ref="signForm" className="form-group"
                              onSubmit={this.postData.bind(this)}>
                            <fieldset>

                                <p><label><span class="exiger">*</span> : Champs obligatoires</label></p>
                                <br/>
                                <p>
                                    <label for="civilite">Civiliter<span class="exiger"> *</span>
                                        <span
                                            style={{color: "red"}}>  {this.state.errors["civilite"]}</span></label>

                                    <input onChange={this.handleChange.bind(this)} type="checkbox" name="civilite"
                                           value="Mr"/>&nbsp;Mr&nbsp;
                                    <input onChange={this.handleChange.bind(this)} type="checkbox" name="civilite"
                                           value="Mme"/>&nbsp;Mme&nbsp;
                                    <input onChange={this.handleChange.bind(this)} type="checkbox" name="civilite"
                                           value="Mlle"/>&nbsp;Mlle&nbsp;
                                </p>
                                <div class="form-row">
                                    <input ref="username" name="username" type="hidden"
                                           placeholder="pseudo"
                                           onChange={this.handleChange.bind(this)}
                                           value={this.state.username}
                                           className="formField"/>
                                    <div class="col-sm-6">
                                        <label for="nom">nom<span class="exiger"> *</span>
                                            <span
                                                style={{color: "red"}}>  {this.state.errors["nom"]}</span></label>
                                        <input ref="nom" name="nom" type="text"
                                               placeholder="nom d'utilisateur"
                                               onChange={this.handleChange.bind(this)}
                                               value={this.state.nom}
                                               className="formField"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="prenom">Prénom<span class="exiger"> *</span></label>
                                        <input ref="prenom" name="prenom" type="text" placeholder="prénom"
                                               onChange={this.handleChange.bind(this)}
                                               value={this.state.prenom}
                                               className="formField"/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-sm-6">
                                        <label for="nom">Nom de la Société<span class="exiger"> *</span>
                                            <span
                                                style={{color: "red"}}>  {this.state.errors["nomSociete"]}</span></label>
                                        <input ref="nomSociete" name="nomSociete" type="text"
                                               placeholder="Nom de la Société"
                                               onChange={this.handleChange.bind(this)}
                                               value={this.state.nomSociete}
                                               className="formField mb-2"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="adresseSociete">Adresse de la Société<span class="exiger"> *</span>
                                            <span
                                                style={{color: "red"}}>  {this.state.errors["adresseSociete"]}</span></label>
                                        <input ref="adresseSociete" name="adresseSociete" type="text"
                                               placeholder="Adresse de la Société"
                                               onChange={this.handleChange.bind(this)}
                                               value={this.state.adresseSociete}
                                               className="formField"/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-sm-6">
                                        <label for="nom">Numéro STAT<span class="exiger"> *</span>
                                            <span
                                                style={{color: "red"}}>  {this.state.errors["numStat"]}</span></label>
                                        <input ref="numStat" name="numStat" type="text" placeholder="Numero STAT"
                                               onChange={this.handleChange.bind(this)}
                                               value={this.state.numStat}
                                               className="formField"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="telSociete">Téléphone<span
                                            class="exiger"> *</span><span
                                            style={{color: "red"}}>  {this.state.errors["telSociete"]}</span></label>
                                        <NumberFormat
                                            format="### ## ### ##"
                                            mask=""
                                            name="telSociete"
                                            ref="telSociete"
                                            type="text"
                                            placeholder="ex: 03X XX XXX XX"
                                            onChange={this.handleChange.bind(this)}
                                            value={this.state.telSociete}
                                            className="formField mb-2"
                                        />
                                        {/*<input ref="telSociete" name="telSociete" type="text"
                                               placeholder="téléphone de la société"
                                               onChange={this.handleChange.bind(this)}
                                               value={this.state.telSociete}
                                               className="formField  mb-2"/>*/}
                                    </div>
                                </div>
                                <label for="email" className="">Adresse mail<span class="exiger"> *</span>
                                    <span
                                        style={{color: "red"}}>  {this.state.errors["email"]}</span></label>
                                <input ref="email" name="email" type="text" placeholder="Email"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.email}
                                       className="formField"/><br/>
                                <label for="password">Mot de passe
                                    <span class="exiger"> *</span><span
                                        style={{color: "red"}}>  {this.state.errors["password"]}</span></label>
                                <input ref="password" name="password" type="password" placeholder="mot de passe"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.password}
                                       className="formField"/>
                                <label for="conf_password">Confirmation Mot de passe
                                    <span class="exiger"> *</span><span
                                        style={{color: "red"}}>  {this.state.errors["conf_password"]}</span></label>
                                <input ref="conf_password" name="conf_password" type="password"
                                       placeholder="confirmation mot de passe"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.conf_password}
                                       className="formField"/>
                                <br/>

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

export default creationComptePro;
