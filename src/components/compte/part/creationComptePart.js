import React, {Component} from 'react'
import creationComptePro from '../pro/creactionComptePro'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class creationComptePart extends React.Component {
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
                        <li className="active nav-tabs-li"><Link to='#'><b>Particulier</b></Link></li>
                        <li className="nav-tabs-li"><Link to='/compte/pro/creationComptePro'>Professionnel</Link></li>
                    </ul>
                    <br/>
                    <div className="panel-body">
                        <form ref="signForm" className="form-group"
                              onSubmit={this.enregistrerSubmit.bind(this)}>
                            <fieldset>
                                <label for="nom">Nom</label>
                                <span style={{color: "red"}}>{this.state.errors["usr_username"]}</span>
                                <input ref="usr_username" type="text" placeholder="nom d'utilisateur"
                                       onChange={this.handleChange.bind(this, "usr_username")}
                                       value={this.state.fields["usr_username"]}
                                       className="formField"/><br/>
                                <label for="email">Adresse mail</label>
                                <span style={{color: "red"}}>{this.state.errors["usr_email"]}</span>
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
                                <input name="" value="true" class="" type="checkbox"/>
                                <span>  « Je souhaite recevoir mensuellement les affiches récentes</span>
                                <br/>
                                <input name="" value="true" class="" type="checkbox"/>
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

export default creationComptePart;
