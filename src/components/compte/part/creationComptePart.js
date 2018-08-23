import React, {Component} from 'react'

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
            <div className="App panel panel-warning">

                <div className="panel-body">
                    <h2>Créez Votre Compte Personnel</h2>
                </div>
                <form ref="signForm" name="signForm" className="form-group"
                      onSubmit={this.enregistrerSubmit.bind(this)}>
                    <fieldset>
                        <input ref="usr_username" type="text" placeholder="nom d'utilisateur"
                               onChange={this.handleChange.bind(this, "usr_username")} value={this.state.fields["usr_username"]}
                               className="formField"/><br/>
                        <span style={{color: "red"}}>{this.state.errors["usr_username"]}</span>
                        <br/>
                        <input ref="usr_email" type="text" placeholder="Email"
                               onChange={this.handleChange.bind(this, "usr_email")} value={this.state.fields["usr_email"]}
                               className="formField"/><br/>
                        <span style={{color: "red"}}>{this.state.errors["usr_email"]}</span>
                        <br/>
                        <input ref="usr_pwd" type="password" placeholder="mot de passe"
                               onChange={this.handleChange.bind(this, "usr_pwd")} value={this.state.fields["usr_pwd"]}
                               className="formField"/>
                        <br/><br/>
                        <input ref="usr_pwd" type="password" placeholder="confirmer mot de passe"
                               onChange={this.handleChange.bind(this, "usr_repwd")} value={this.state.fields["usr_repwd"]}
                               className="formField"/>
                        <br/>
                        <input name="cgv" value="true" id="cgv" class="" data-qa-id="checkbox-cgv" data-reactid="125" type="checkbox" />
                            <span data-reactid="126">« J'accepte les<a data-reactid="129"><strong data-reactid="130">Conditions Générales de leboncoin »</strong></a></span>
                    </fieldset>
                    <div className="col-md-12">
                        <fieldset>
                            <button className="btn btn-lg pro myButton" id="submit"
                                    value="Submit">Crée mon Compte Personnel
                            </button>
                        </fieldset>
                    </div>
                </form>
            </div>
        )
    }
}

export default creationComptePart;
