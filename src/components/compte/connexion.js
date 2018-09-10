import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class connexion extends React.Component {
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

        //Email
        if (!fields["usr_email"]) {
            formIsValid = false;
            errors["usr_email"] = "*email ou nom d'utilisateur est obligatoire";
        }
        //password
        if (!fields["usr_pwd"]) {
            formIsValid = false;
            errors["usr_pwd"] = "*mot de passe obligatoire";
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
                <h2>Connecter-vous à votre Compte</h2>
                <p>Accéder à votre compte pour publier vos annonces. Modifier ou supprimer vos annonces pour les metter à jour</p>
                <div className="panel-warning  panel">
                    <br/>
                    <div className="panel-body">
                        <form ref="signForm" className="form-group"
                              onSubmit={this.enregistrerSubmit.bind(this)}>
                            <fieldset>
                                <label for="email">Adresse mail</label>
                                <span style={{color: "red"}}>{this.state.errors["usr_email"]}</span>
                                <input ref="usr_email" type="text" placeholder="Email"
                                       onChange={this.handleChange.bind(this, "usr_email")}
                                       value={this.state.fields["usr_email"]}
                                       className="formField"/><br/>
                                <label for="password">Mot de passe</label>
                                <span style={{color: "red"}}>{this.state.errors["usr_pwd"]}</span>
                                <input ref="usr_pwd" type="password" placeholder="mot de passe"
                                       onChange={this.handleChange.bind(this, "usr_pwd")}
                                       value={this.state.fields["usr_pwd"]}
                                       className="formField"/>
                                <br/>
                                <span className="span-left"><a><strong>Vous n'avez pas du compte?</strong></a></span>
                                <span className="span-right"><a><strong>Mot de passe oublié</strong></a></span>
                            </fieldset>
                            <div className="col-md-12">
                                <fieldset>
                                    <button className="btn btn-lg pro myButton" id="submit"
                                            value="Submit">Connexion
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

export default connexion;
