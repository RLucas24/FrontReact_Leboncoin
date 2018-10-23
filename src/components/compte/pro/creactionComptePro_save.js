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

            if (!(lastAtPos < lastDotPos || lastAtPos > 0 || fields["usr_email"].indexOf('@@') == -1 || lastDotPos > 2 || (fields["email"].length - lastDotPos) > 2)) {
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
                                <p><label><span class="exiger">*</span> : Champs obligatoires</label></p>
                                <br/>
                                <label for="nom">Civiliter<span class="exiger"> *</span></label>
                                <span style={{color: "red"}}>{this.state.errors["usr_civilite"]}</span>
                                <input name="" value="true" type="checkbox"/>
                                <span> Mr</span>
                                <input name="" value="true" type="checkbox"/>
                                <span> Mme</span>
                                <input name="" value="true" type="checkbox"/>
                                <span> Mlle</span>
                                <br/><p></p>
                                <div class="form-row">
                                    <div class="col col-sm-6">
                                        <label for="nom">Nom<span class="exiger"> *</span></label>
                                        <span style={{color: "red"}}>{this.state.errors["usr_username"]}</span>
                                        <input ref="usr_username" type="text" placeholder="nom d'utilisateur"
                                               onChange={this.handleChange.bind(this, "usr_username")}
                                               value={this.state.fields["usr_username"]}
                                               className="formField"/>
                                    </div>
                                    <div class="col col-sm-6">
                                        <label for="prenom">Prénom<span class="exiger"> *</span></label>
                                        <span style={{color: "red"}}>{this.state.errors["usr_prenom"]}</span>
                                        <input ref="usr_prenom" type="text" placeholder="prénom"
                                               onChange={this.handleChange.bind(this, "usr_prenom")}
                                               value={this.state.fields["usr_prenom"]}
                                               className="formField"/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col col-sm-6">
                                        <label for="nom">Nom de la Société<span class="exiger"> *</span></label>
                                        <span style={{color: "red"}}>{this.state.errors["usr_obliga"]}</span>
                                        <input ref="usr_nomSociete" type="text" placeholder="Nom de la Société"
                                               onChange={this.handleChange.bind(this, "usr_nomSociete")}
                                               value={this.state.fields["usr_nomSociete"]}
                                               className="formField mb-2"/>
                                    </div>
                                    <div class="col col-sm-6">
                                        <label for="prenom">Adresse de la Société<span class="exiger"> *</span></label>
                                        <span style={{color: "red"}}>{this.state.errors["usr_obliga"]}</span>
                                        <input ref="usr_adressSociete" type="text" placeholder="Adresse de la Société"
                                               onChange={this.handleChange.bind(this, "usr_adressSociete")}
                                               value={this.state.fields["usr_adressSociete"]}
                                               className="formField"/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col col-sm-6">
                                        <label for="nom">Numéro STAT<span class="exiger"> *</span></label>
                                        <span style={{color: "red"}}>{this.state.errors["usr_obliga"]}</span>
                                        <input ref="usr_numStat" type="text" placeholder="Numero STAT"
                                               onChange={this.handleChange.bind(this, "usr_numStat")}
                                               value={this.state.fields["usr_numStat"]}
                                               className="formField"/>
                                    </div>
                                    <div class="col col-sm-6">
                                        <label for="prenom">Téléphone de la Société<span
                                            class="exiger"> *</span></label>
                                        <span style={{color: "red"}}>{this.state.errors["usr_obliga"]}</span>
                                        <input ref="usr_telSociete" type="text" placeholder="téléphone de la société"
                                               onChange={this.handleChange.bind(this, "usr_telSociete")}
                                               value={this.state.fields["usr_telSociete"]}
                                               className="formField  mb-2"/>
                                    </div>
                                </div>
                                <label for="email" className="col">Adresse mail<span class="exiger"> *</span>
                                    <span
                                        style={{color: "red"}}>  {this.state.errors["usr_email"]}</span></label>
                                <input ref="usr_email" type="text" placeholder="Email"
                                       onChange={this.handleChange.bind(this, "usr_email")}
                                       value={this.state.fields["usr_email"]}
                                       className="formField"/><br/>
                                <label for="password">Mot de passe
                                    <span class="exiger"> *</span><span
                                        style={{color: "red"}}>  {this.state.errors["usr_pwd"]}</span></label>
                                <input ref="usr_pwd" type="password" placeholder="mot de passe"
                                       onChange={this.handleChange.bind(this, "usr_pwd")}
                                       value={this.state.fields["usr_pwd"]}
                                       className="formField"/>
                                <br/>
                                <label for="confirm_password">Confirmer mot de passe<span class="exiger"> *</span>
                                    <span
                                        style={{color: "red"}}>  {this.state.errors["usr_repwd"]}</span></label>
                                <input ref="usr_repwd" type="password" placeholder="confirmer mot de passe"
                                       onChange={this.handleChange.bind(this, "usr_repwd")}
                                       value={this.state.fields["usr_repwd"]}
                                       className="formField"/>
                                <br/><span style={{color: "red"}}>  {this.state.errors["usr_checkbox"]}</span>
                                <input ref="usr_checkbox" value="true" type="checkbox"/>
                                <span>  « J'accepte les<a><strong>Termes et Conditions Générales de vente »</strong></a></span>
                                <span class="exiger"> *</span>
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
