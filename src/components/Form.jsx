import React, {Component} from 'react'

class Form extends React.Component {
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
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Nom Obligatoire";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "seulement des lettres";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*email est obligatoire";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email n'est pas valide";
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            alert("Form submitted");
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
                    <h2>S'inscrire</h2>
                </div>
                <form ref="signForm" name="signForm" className="form-group"
                      onSubmit={this.contactSubmit.bind(this)}>
                    <fieldset>
                        <input ref="name" type="text" placeholder="Name"
                               onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}
                               className="formField"/><br/>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                        <br/>
                        <input ref="email" type="text" placeholder="Email"
                               onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}
                               className="formField"/><br/>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                        <br/>
                        <input ref="phone" type="text" placeholder="Phone"
                               onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}
                               className="formField"/>
                        <br/><br/>
                        <input ref="address" type="text" placeholder="Address"
                               onChange={this.handleChange.bind(this, "addresse")}
                               value={this.state.fields["address"]} className="formField"/>
                        <br/>
                    </fieldset>
                    <div className="col-md-12">
                        <fieldset>
                            <button className="btn btn-lg pro myButton" id="submit"
                                    value="Submit">Enregistrer
                            </button>
                        </fieldset>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;

//React.render(<Form />, document.getElementById('container'));