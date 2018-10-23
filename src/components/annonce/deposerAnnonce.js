import React, {Component} from 'react'
import API_URL from '../constants/apiUrl'
import {confirmAlert} from 'react-confirm-alert'
import {FormGroup, Radio} from 'react-bootstrap'
import axios from 'axios'
import '../../../node_modules/react-dates/lib/css/_datepicker.css'
import '../../assets/css/react_dates_overrides.css'
import chargement from '../../assets/images/chargement/chargement.gif'

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import NumberFormat from 'react-number-format';

import Deconnecter from '../../App'
import Connecter from '../../App'

//data picker
import 'react-dates/initialize'
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

class deposerAnnonce extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //select categorie
            categories: [],
            typeAnnonces: [],

            //data
            categorie: '',
            //typeUtilisa: '',
            typeAnnonce: '',
            titre: '',
            text: '',
            prix: '',
            //flyerFile: '',
            flyer: '',
            ville: '',
            adresse: '',
            emailAnnonce: '',
            telAnnonce: '',
            date_start: '',
            date_end: '',
            //utils
            loading: false,
            message: '',
            //redirection
            redirect: false,
            //validation
            errors: {},
            //Image
            image: null
        }
    }

    componentDidMount() {
        //API key validation
        if (!localStorage.getItem('API_Key')) {
            this.setState({redirect: true})
        }
        else {
            this.render()
        }
        //Select categorie
        let requestCathegorie = {
            method: 'GET',
            url: API_URL.CATEGORIE
        }
        axios(requestCathegorie)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    categories: res.data
                })
            })
            .catch(err => {
                console.log("AXIOS ERROR: ", err);
                this.setState({
                    message: "categorie non trouvé"//message: "tsy mety"
                })
            });

        //Select categorie
        let requestTypeAnnonc = {
            method: 'GET',
            url: API_URL.TYPEANNONCE
        }
        axios(requestTypeAnnonc)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    typeAnnonces: res.data
                })
            })
            .catch(err => {
                console.log("AXIOS ERROR: ", err);
                this.setState({
                    message: "Type Annonces non trouvé"//message: "tsy mety"
                })
            });
    }


    renderToggle() {
        if (!this.state.isToggleOn) {
            return <Deconnecter/>
        }
        else return <Connecter/>
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to={"/compte/connexion/"}/>
        }
    }


    handleValidation() {
        let errors = {};
        let formIsValid = true;


        //categorie
        if (!this.state.categorie) {
            formIsValid = false;
            errors["categorie"] = "categorie obligatoire";
        }

        //typeAnnonce
        if (!this.state.typeAnnonce) {
            formIsValid = false;
            errors["typeAnnonce"] = "type annonce obligatoire";
        }

        //titre
        if (!this.state.titre) {
            formIsValid = false;
            errors["titre"] = "titre obligatoire";
        }

        //text
        if (!this.state.text) {
            formIsValid = false;
            errors["text"] = "description obligatoire";
        }

        //prix
        if (!this.state.prix) {
            formIsValid = false;
            errors["prix"] = "prix obligatoire";
        }

        if (typeof this.state.prix !== "undefined") {
            if (!this.state.prix.match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["prix"] = "nombre";
            }
        }

        //telAnnonce
        if (!this.state.telAnnonce) {
            formIsValid = false;
            errors["telAnnonce"] = "telephone obligatoire";
        }

        if (typeof this.state.telAnnonce !== "undefined") {
            if (!this.state.telAnnonce.match(/^[+0-9]|[]+$/)) {
                formIsValid = false;
                errors["telAnnonce"] = "nombre";
            }
        }

        if (typeof this.state.telAnnonce !== "undefined") {
            if (!this.state.telAnnonce.match(/^03[2-4]{1}[ ]{1}[0-9]{2}[ ]{1}[0-9]{3}[ ]{1}[0-9]{2}|039[0-9]{7}|\+2613[2-4][0-9]{7}|\+26139[0-9]{7}$/)) {
                formIsValid = false;
                errors["telAnnonce"] = "invalide";
            }
        }

        //emailAnnonce
        if (typeof this.state.emailAnnonce !== "undefined") {
            if (!this.state.emailAnnonce.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["emailAnnonce"] = "email invalide";
            }
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
                                url: API_URL.ANNONCE,
                                data: {
                                    libelleTypeCategorie: this.state.categorie,
                                    //libelleTypeUtilisa: this.state.typeUtilisa,
                                    libelleTypeAnnonce: this.state.typeAnnonce,
                                    titre: this.state.titre,
                                    text: this.state.text,
                                    prix: this.state.prix,
                                    //flyerFile: formData,
                                    flyer: this.state.flyer,
                                    codePostal: this.state.codePostal,
                                    adresse: this.state.adresse,
                                    emailAnnonce: this.state.emailAnnonce,
                                    telAnnonce: this.state.telAnnonce,
                                    startDate: '2018-12-20', //this.state.startDate,
                                    endDate: '2018-12-24' //this.state.endDate
                                },
                                headers: {
                                    'Content-Type': 'application/json;multipart/form-data;charset=UTF-8',
                                    'X-AUTH-TOKEN': localStorage.getItem('API_Key'),
                                },
                                withCredentials: true,
                                credentials: 'same-origin',
                                crossdomain: true
                            }
                            console.log(request);
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
            alert("erreur sur la formulaire");
            //return null;
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
        let datasCategorie = this.state.categories;
        let datasTypeAnnonce = this.state.typeAnnonces;
        return (
            <div className="App">
                <h2>Déposer une annonce</h2>
                <p>En déposant une annonce, vous acceptez nos <a>conditions d'utilisations</a></p>
                <form ref="signForm" className="form-group" onSubmit={this.postData.bind(this)}
                      enctype="multipart/form-data">
                    <div class="panel panel-default">
                        <div class="panel-heading custom-header-panel">
                            <h3 class="panel-title custom-title-panel">Détails de votre annonce</h3>
                        </div>
                        <div className="panel-body">
                            <fieldset>
                                <p><label><span class="exiger">*</span> : Champs obligatoires</label></p>
                                <br/>
                                <label for="categorie" class="control-label">Catégorie<span
                                    class="exiger"> *</span><span
                                    style={{color: "red"}}>  {this.state.errors["categorie"]}</span></label>
                                <select ref="categorie" name="categorie"
                                        class="formField"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.categorie}>
                                    <option value="" disabled="" selected="">Selectionner catégorie</option>
                                    {datasCategorie.map((categories) => <option
                                        value={categories.libelle_type_categorie}>
                                        {categories.libelle_type_categorie}
                                    </option>)}
                                </select>
                                <br/>
                                <label for="typeAnnonce">Type d'annonce<span class="exiger"> *</span>
                                    <span
                                        style={{color: "red"}}>  {this.state.errors["typeAnnonce"]}</span></label><br/>

                                <FormGroup className="checked_radio_typeAnnonce" value={this.state.typeAnnonce}
                                           onChange={this.handleChange.bind(this)}>
                                    <Radio name="typeAnnonce" ref="typeAnnonce" value="Offres">
                                        Offres
                                    </Radio><br/>
                                    <Radio name="typeAnnonce" ref="typeAnnonce" value="Demandes">
                                        Demandes
                                    </Radio><br/>
                                </FormGroup>

                                <br/>
                                <label for="titre">Titre de l'annonce<span class="exiger"> *</span>
                                    <span
                                        style={{color: "red"}}>  {this.state.errors["titre"]}</span></label>
                                <input type="titre" name="titre" placeholder="titre de l'annonce"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.titre}
                                       className="formField"/><br/>
                                <label for="text">Description<span class="exiger"> *</span>
                                    <span
                                        style={{color: "red"}}>  {this.state.errors["text"]}</span></label>
                                <textarea ref="text" name="text" type="text" onChange={this.handleChange.bind(this)}
                                          class="formField" rows="3"></textarea>
                                <br/>
                                <label for="prix">Prix<span class="exiger"> *</span>
                                    <span
                                        style={{color: "red"}}>  {this.state.errors["prix"]}</span></label>
                                <div class="input-group">
                                    <span class="input-group-addon">Ar</span>
                                    <input ref="prix" name="prix" type="text"
                                           onChange={this.handleChange.bind(this)}
                                           value={this.state.prix} class="formField_ar"
                                           aria-label="Amount (Ariary)"/>
                                    <span class="input-group-addon">.00</span>
                                </div>
                                <br/>
                                <label for="image">Inssérer une ou des photos<span class="exiger"> *</span></label>

                                <input type="text" ref="flyer" name="flyer"
                                       onChange={this.handleChange.bind(this)}
                                       value={this.state.flyer}
                                       className="formField"/><br/>
                                {/*<input type="file" ref="flyerFile" name="flyerFile"
                                       onChange={this.fileSelectedHandler}/><br/>
                                <input type="file" ref="flyerFile" name="flyerFile" onChange={this.fileSelectedHandler} /><br/>
                                <p><ImagesUploader
                                    url=""
                                    optimisticPreviews
                                    onLoadEnd={(err) => {
                                        if (err) {
                                            console.error(err);
                                        }
                                    }}
                                    label=""
                                /></p><br/>


                                <label for="image">Date debut à date fin<span class="exiger"> *</span></label>
                                <DateRangePicker
                                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                    startDateId="date_start" // PropTypes.string.isRequired,
                                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                    endDateId="date_end" // PropTypes.string.isRequired,
                                    onDatesChange={({startDate, endDate}) => this.setState({
                                        startDate,
                                        endDate
                                    })} // PropTypes.func.isRequired,
                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={focusedInput => this.setState({focusedInput})} // PropTypes.func.isRequired,
                                />*/}
                                <br/>
                            </fieldset>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading custom-header-panel">
                            <h3 class="panel-title custom-title-panel">Informations complémentaires</h3>
                        </div>
                        <div className="panel-body">
                            <fieldset>
                                {this.renderRedirect()}
                            </fieldset>
                            <div className="col-md-12">
                                <fieldset>
                                    <label for="codePostal">Code postal de la ville</label>
                                    <input ref="codePostal" name="codePostal" type="text" placeholder="Code Postal"
                                           onChange={this.handleChange.bind(this)}
                                           value={this.state.codePostal}
                                           className="formField"/><br/>
                                    <label for="adresse">Adresse</label>
                                    <input ref="adresse" name="adresse" type="text" placeholder="ex: Lot: AB..."
                                           onChange={this.handleChange.bind(this)}
                                           value={this.state.adresse}
                                           className="formField"/><br/>
                                    <label for="emailAnnonce">Adresse mail<span
                                        style={{color: "red"}}>  {this.state.errors["emailAnnonce"]}</span></label>
                                    <input ref="emailAnnonce" name="emailAnnonce" type="text"
                                           placeholder="ex: Lot: exemple@adresse.com"
                                           onChange={this.handleChange.bind(this)}
                                           value={this.state.emailAnnonce}
                                           className="formField"/><br/>
                                    <p className="text-flot-lef">
                                        <input ref="usr_checkbox" value="true" type="checkbox"/>
                                        <span> Utiliser l'adresse email de mon compte</span>
                                    </p>
                                    <br/><br/>
                                    <label for="telAnnonce">Téléphone<span class="exiger"> *</span>
                                        <span
                                            style={{color: "red"}}>  {this.state.errors["telAnnonce"]}</span></label>

                                    <NumberFormat
                                        format="### ## ### ##"
                                        mask=""
                                        name="telAnnonce"
                                        ref="telAnnonce"
                                        type="text"
                                        placeholder="ex: 03X XX XXX XX"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.telAnnonce}
                                        className="formField mb-2"
                                    />


                                    {/*<input ref="telAnnonce" name="telAnnonce" type="text"
                                           placeholder="ex: +261 XX XX XX XX"
                                           onChange={this.handleChange.bind(this)}
                                           value={this.state.telAnnonce}
                                           className="formField"/>*/}
                                    <br/>
                                    <p className="text-flot-lef">
                                        <input ref="usr_checkbox" value="true" type="checkbox"/>
                                        <span> Utiliser le numero téléphone de mon compte</span>
                                    </p>
                                    <br/>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <span>  En cliquant sur publier, vous acceptez nos<a><strong> Conditions d'utilisation.</strong></a></span>

                    <button className="btn btn-primary my-btn-valider" id="submit"
                            value="Submit">Valider
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-warning my-btn-annuler" id="submit"
                            value="Submit">Annuler
                    </button>
                </form>
                <div className="message">{this.loadOrShowMsg()}</div>
            </div>
        );
    }
}


export default deposerAnnonce;
