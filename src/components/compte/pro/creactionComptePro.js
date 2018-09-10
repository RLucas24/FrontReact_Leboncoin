import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class creationComptePro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["usr_username"]) {
            formIsValid = false;
            errors["usr_username"] = "*Nom Obligatoire";
        }

        if (typeof fields["usr_username"] !== "undefined") {
            if (!fields["usr_username"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["usr_username"] = "seulement des lettres";
            }
        }

        //Email
        if (!fields["usr_email"]) {
            formIsValid = false;
            errors["usr_email"] = "*email est obligatoire";
        }

        if (typeof fields["usr_email"] !== "undefined") {
            let lastAtPos = fields["usr_email"].lastIndexOf('@');
            let lastDotPos = fields["usr_email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["usr_email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["usr_email"] = "Email n'est pas valide";
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    enregistrerSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            alert("Enregistrement avec succés");
        } else {
            alert("Y a une erreur sur la formulaire")
        }

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {
        return (
            <div className="App">
                <h2>Créer Votre Compte</h2>
                <p>En créant un compte, vous pouvez publier, consulter et accéder à plusieurs annonces.
                    Vous pouvez aussi modifier ou supprimer vos annonces.</p>
                <div className="panel-warning  panel">
                    <ul class="nav nav-tabs">
                        <li className="nav-tabs-li"><Link to='/compte/part/creationComptePart'>Particulier</Link></li>
                        <li className="active nav-tabs-li"><Link to='#'><b>Professionnel</b></Link></li>
                    </ul>
                    <br/>
                    <div className="panel-body">
                        <form ref="signForm" className="form-group"
                              onSubmit={this.enregistrerSubmit.bind(this)}>
                            <fieldset>

                                <label for="nom">Civiliter</label>
                                <br/>
                                <input name="" value="true" type="checkbox"/>
                                <span> Mr</span>
                                <input name="" value="true" type="checkbox"/>
                                <span> Mme</span>
                                <input name="" value="true" type="checkbox"/>
                                <span> Mlle</span>

                                <div class="form-row">
                                    <div class="col col-sm-6">
                                        <label for="nom">Nom</label><span
                                        style={{color: "red"}}>{this.state.errors["usr_username"]}</span>
                                        <input type="text" class="formField mb-2" placeholder="Nom"/>
                                    </div>
                                    <div class="col col-sm-6">
                                        <label for="prenom">Prénom</label>
                                        <input type="text" class="formField  mb-2" placeholder="Prénom"/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col col-sm-6">
                                        <label for="nom">Nom de la Société</label>
                                        <input type="text" class="formField mb-2" placeholder="Nom de la Société"/>
                                    </div>
                                    <div class="col col-sm-6">
                                        <label for="prenom">Adresse de la Société</label>
                                        <input type="text" class="formField  mb-2" placeholder="Adresse de la Société"/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col col-sm-6">
                                        <label for="nom">Numéro STAT</label>
                                        <input type="text" class="formField mb-2" placeholder="Numero STAT"/>
                                    </div>
                                    <div class="col col-sm-6">
                                        <label for="prenom">Téléphone de la Société</label>
                                        <input type="text" class="formField  mb-2"
                                               placeholder="Téléphone de la Société"/>
                                    </div>
                                </div>
                                <label for="email" className="col">Adresse mail<span
                                    style={{color: "red"}}>  {this.state.errors["usr_email"]}</span></label>
                                <input ref="usr_email" type="text" placeholder="Email"
                                       onChange={this.handleChange.bind(this, "usr_email")}
                                       value={this.state.fields["usr_email"]}
                                       className="formField"/><br/>
                                <label for="password">Mot de passe</label>
                                <input ref="usr_pwd" type="password" placeholder="mot de passe"
                                       onChange={this.handleChange.bind(this, "usr_pwd")}
                                       value={this.state.fields["usr_pwd"]}
                                       className="formField"/>
                                <br/>
                                <label for="confirm_password">Confirmer mot de passe</label>
                                <input ref="usr_pwd" type="password" placeholder="confirmer mot de passe"
                                       onChange={this.handleChange.bind(this, "usr_repwd")}
                                       value={this.state.fields["usr_repwd"]}
                                       className="formField"/>
                                <br/>
                                <input name="" value="true" type="checkbox"/>
                                <span>  « J'accepte les<a><strong>Termes et Conditions Générales de vente »</strong></a></span>
                            </fieldset>
                            <div className="col-md-12">
                                <fieldset>
                                    <button className="btn btn-lg pro myButton" id="submit"
                                            value="Submit">Valider
                                    </button>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default creationComptePro;
