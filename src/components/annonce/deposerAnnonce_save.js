import React, {Component} from 'react'
import axios from 'axios';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class deposerAnnonce extends React.Component {
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

        //nom vide
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
            errors["usr_email"] = "*email obligatoire";
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
            let fields = this.state.fields;
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
            };

            axios.post('http://localhost/leboncoin_api/web/app_dev.php/deposer/annonce', axiosConfig, {
                username: fields["usr_username"],
                typeUser: fields["typeUser"],
                typeAnnonc: fields["typeAnnonc"],
                titre: fields["titre"],
                text: fields["text"],
                prix: fields["prix"],
                flyer: fields["flyer"],
                codePostal: fields["codePostal"],
                adresse: fields["adresse"],
                startDate: fields["startDate"],
                endDate: fields["endDate"],
            }).then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
            })
                .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                })
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
                <h2>Déposer une annonce</h2>
                <p>En déposant une annonce, vous acceptez nos <a>conditions d'utilisations</a></p>

                <div class="panel panel-default">
                    <div class="panel-heading custom-header-panel">
                        <h3 class="panel-title custom-title-panel">Détails de votre annonce</h3>
                    </div>
                    <div className="panel-body">
                        <form ref="signForm" className="form-group"
                              onSubmit={this.enregistrerSubmit.bind(this)}>
                            <fieldset>
                                <span style={{color: "red"}}>{this.state.errors["categorie"]}</span>
                                <input ref="categorie" type="text" placeholder="Categorie"
                                       onChange={this.handleChange.bind(this, "categorie")}
                                       value={this.state.fields["categorie"]}
                                       className="formField"/><br/>

                                <span style={{color: "red"}}>{this.state.errors["typeUser"]}</span>
                                <input ref="typeUser" type="text" placeholder="type d'user"
                                       onChange={this.handleChange.bind(this, "typeUser")}
                                       value={this.state.fields["typeUser"]}
                                       className="formField"/><br/>

                                <span style={{color: "red"}}>{this.state.errors["typeAnnonc"]}</span>
                                <input ref="typeAnnonc" type="text" placeholder="type annonce"
                                       onChange={this.handleChange.bind(this, "typeAnnonc")}
                                       value={this.state.fields["typeAnnonc"]}
                                       className="formField"/><br/>

                                <span style={{color: "red"}}>{this.state.errors["titre"]}</span>
                                <input ref="titre" type="text" placeholder="titre de l'annonce"
                                       onChange={this.handleChange.bind(this, "titre")}
                                       value={this.state.fields["titre"]}
                                       className="formField"/><br/>

                                <span style={{color: "red"}}>{this.state.errors["text"]}</span>
                                <input ref="text" type="text" placeholder="text"
                                       onChange={this.handleChange.bind(this, "text")}
                                       value={this.state.fields["text"]}
                                       className="formField"/><br/>

                                <span style={{color: "red"}}>{this.state.errors["prix"]}</span>
                                <input ref="prix" type="text" placeholder="prix"
                                       onChange={this.handleChange.bind(this, "prix")}
                                       value={this.state.fields["prix"]}
                                       className="formField"/><br/>

                                <span style={{color: "red"}}>{this.state.errors["flyer"]}</span>
                                <input ref="flyer" type="text" placeholder="image"
                                       onChange={this.handleChange.bind(this, "flyer")}
                                       value={this.state.fields["flyer"]}
                                       className="formField"/><br/>

                                <span style={{color: "red"}}>{this.state.errors["codePostal"]}</span>
                                <input ref="codePostal" type="text" placeholder="code postal ville"
                                       onChange={this.handleChange.bind(this, "codePostal")}
                                       value={this.state.fields["codePostal"]}
                                       className="formField"/><br/>

                                <span style={{color: "red"}}>{this.state.errors["adresse"]}</span>
                                <input ref="adresse" type="text" placeholder="Adresse"
                                       onChange={this.handleChange.bind(this, "adresse")}
                                       value={this.state.fields["adresse"]}
                                       className="formField"/><br/>

                                <span style={{color: "red"}}>{this.state.errors["startDate"]}</span>
                                <input ref="startDate" type="text" placeholder="startDate"
                                       onChange={this.handleChange.bind(this, "startDate")}
                                       value={this.state.fields["startDate"]}
                                       className="formField"/><br/>

                                <span style={{color: "red"}}>{this.state.errors["endDate"]}</span>
                                <input ref="endDate" type="text" placeholder="endDate"
                                       onChange={this.handleChange.bind(this, "endDate")}
                                       value={this.state.fields["endDate"]}
                                       className="formField"/><br/>
                                <button className="btn btn-primary my-btn-valider" id="submit"
                                        value="Submit">Valider
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

            /*
            <p><label><span class="exiger">*</span> : Champs obligatoires</label></p>
            <br/>
            <label for="categorie" class="control-label">Catégorie<span
                class="exiger"> *</span></label>
            <select id="categorie" name="categorie" class="formField"  value={this.state.fields["categorie"]}>
                <option value="" disabled="" selected="">Selectionner catégorie</option>
                <option value="Voiture">Voiture</option>
                <option value="Maison">Maison</option>
                <option value="Terrain">Terrain</option>
                <option value="Immobilier">Immobilier</option>
            </select>
            <br/>
            <label for="typeAnnonce">Type d'annonce<span class="exiger"> *</span></label>
            <span style={{color: "red"}}>{this.state.errors["typeAnnonce"]}</span><br/>
            <div className="radio">
                <label><input type="radio" name="optradio" value={this.state.fields["Offre"]}checked/>Offre</label><br/>
                <label><input type="radio" name="optradio" value={this.state.fields["Offre"]}/>Demande</label>
            </div>
            <br/>
            <label for="titreAnnonc">Titre de l'annonce<span class="exiger"> *</span></label>
            <span style={{color: "red"}}>{this.state.errors["titreAnnonc"]}</span>
            <input ref="titreAnnonc" type="text" placeholder="titre de l'annonce"
                   onChange={this.handleChange.bind(this, "titreAnnonc")}
                   value={this.state.fields["titreAnnonc"]}
                   className="formField"/><br/>
            <label for="description">Description</label>
            <textarea class="formField" id="" rows="3"></textarea>
            <br/>


            <label for="prix">Prix<span class="exiger"> *</span></label>
            <div class="input-group">
                <span class="input-group-addon">Ar</span>
                <input type="text" class="formField_ar" aria-label="Amount (Ariary)"/>
                <span class="input-group-addon">.00</span>
            </div>
            <br/>
            <label for="image">Inssérer un ou des photos<span class="exiger"> *</span></label>
            <input type="file" alt="image"/>


        </fieldset>
    </form>
</div>
</div>

<br/>
/*

<div class="panel panel-default">
<div class="panel-heading custom-header-panel">
    <h3 class="panel-title custom-title-panel">Informations complémentaires</h3>
</div>
<div className="panel-body">
    <form ref="signForm" className="form-group"
          onSubmit={this.enregistrerSubmit.bind(this)}>
        <fieldset>
            <label for="adresse">Adresse</label>
                                <input ref="adresse" name="adresse" type="text" placeholder="ex: Lot: AB..."
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.adresse}
                                       className="formField"/><br/>
                                <label for="email">Adresse mail</label>
                                <input ref="email" name="email" type="text"
                                       placeholder="ex: Lot: exemple@adresse.com"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.email}
                                       className="formField"/><br/>
                                <p className="text-flot-lef">
                                    <input ref="usr_checkbox" value="true" type="checkbox"/>
                                    <span> Utiliser l'adresse email de mon compte</span>
                                </p>
                                <br/><br/>
                                <label for="t">Téléphone<span class="exiger"> *</span></label>
                                <input ref="contactAnnonce" type="text"
                                       placeholder="ex: +261 XX XX XX XX"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.contactAnnonce}
                                       className="formField"/><br/>
                                <p className="text-flot-lef">
                                    <input ref="usr_checkbox" value="true" type="checkbox"/>
                                    <span> Utiliser le numero téléphone de mon compte</span>
                                </p>
                                <br/>
        </fieldset>
        <div className="col-md-12">
            <fieldset>
                <span>  En cliquant sur publier, vous acceptez nos<a><strong> Conditions d'utilisation.</strong></a></span>
            </fieldset>
        </div>
    </form>
</div>
</div>
<button className="btn btn-primary my-btn-valider" id="submit"
    value="Submit">Valider
</button>
&nbsp;&nbsp;
<button className="btn btn-warning my-btn-annuler" id="submit"
    value="Submit">Annuler
</button>
*/

        );
    }
}


export default deposerAnnonce;
