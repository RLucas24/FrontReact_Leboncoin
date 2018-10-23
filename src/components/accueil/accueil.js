import React, {Component} from 'react'
import API_URL from '../constants/apiUrl'
import axios from 'axios'

import {Carousel, select} from 'react-bootstrap'
import tn_property01 from '../../assets/images/image_carousels/tn_property01.jpg'
import tn_property02 from '../../assets/images/image_carousels/tn_property02.jpg'
import tn_property03 from '../../assets/images/image_carousels/tn_property03.jpg'
import tn_property04 from '../../assets/images/image_carousels/tn_property04.jpg'
import tn_property05 from '../../assets/images/image_carousels/tn_property05.jpg'

import {DropdownButton, MenuItem} from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'


export default class accueil extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //select categorie
            vehicules: [],
            modeBeaute: [],
            maison: [],
            travailEmploi: [],
            agriculture: [],
            multimedia: [],
            immobilier: [],
            materielDivers: []
        }
    }

    componentDidMount() {

        //Select Vehicule
        let requestVehicule = {
            method: 'GET',
            url: API_URL.VEHICULE
        }
        axios(requestVehicule)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    vehicules: res.data
                })
            });
        //Select Mode & Beauté
        let requestModeBeaute = {
            method: 'GET',
            url: API_URL.MODEBEAUTE
        }
        axios(requestModeBeaute)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    modeBeaute: res.data
                })
            });

        //Select maison
        let requestMaison = {
            method: 'GET',
            url: API_URL.MAISON
        }
        axios(requestMaison)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    maison: res.data
                })
            });

        //Select travailEmploi
        let requestTravailEmploi = {
            method: 'GET',
            url: API_URL.TRAVAILEMPLOI
        }
        axios(requestTravailEmploi)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    travailEmploi: res.data
                })
            });

        //Select agriculture
        let requestAgriculture = {
            method: 'GET',
            url: API_URL.AGRICULTURE
        }
        axios(requestAgriculture)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    agriculture: res.data
                })
            });

        //Select multimedia
        let requestMultimedia = {
            method: 'GET',
            url: API_URL.MULTIMEDIA
        }
        axios(requestMultimedia)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    multimedia: res.data
                })
            });

        //Select immobilier
        let requestImmobilier = {
            method: 'GET',
            url: API_URL.IMMOBILIER
        }
        axios(requestImmobilier)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    immobilier: res.data
                })
            });

        //Select materielDivers
        let requestMaterielDivers = {
            method: 'GET',
            url: API_URL.MATERIELDIVERS
        }
        axios(requestMaterielDivers)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    materielDivers: res.data
                })
            });
    }

    render() {
        let datasVehicule = this.state.vehicules;
        let datasModeBeaute = this.state.modeBeaute;
        let datasMaison = this.state.maison;
        let datasTravailEmploi = this.state.travailEmploi;
        let datasAgriculture = this.state.agriculture;
        let datasMultimedia = this.state.multimedia;
        let datasImmobilier = this.state.immobilier;
        let datasMaterielDivers = this.state.materielDivers;
        return (
            <div>
                <div className="bloc-recherche">
                    <div className="kl-top-recherche">
                        <div className="kl-top-recherche-block">
                            RECHERCHER DES ANNONCES
                            <div className="kl-middle-recherche-block">
                                <div class="col-sm-4">
                                    <div class="input-group">
                                        <input type="text" placeholder="Recherche "
                                               className="formField_res_icon"/><span
                                        type="button" class="input-group-addon input-group-addon-recherche"><i
                                        class="glyphicon glyphicon-search"></i></span>


                                        {/*<DropdownButton
                                            bsSize="large"
                                            title="Large button"
                                            id="dropdown-size-large"
                                            className="formField_res"
                                        >
                                            <MenuItem eventKey="1">Action</MenuItem>
                                            <MenuItem eventKey="2">Another action</MenuItem>
                                            <MenuItem eventKey="3" active>
                                                Active Item
                                            </MenuItem>
                                            <MenuItem divider />
                                            <MenuItem eventKey="4">Separated link</MenuItem>
                                        </DropdownButton>*/}

                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    <select id="categorie" name="categorie" class="formField_res">
                                        <option value="" disabled="" selected="">Catégorie</option>
                                        <option value="Voiture">Voiture</option>
                                        <option value="Maison">Maison</option>
                                        <option value="Terrain">Terrain</option>
                                        <option value="Immobilier">Immobilier</option>
                                    </select>
                                </div>

                                <div class="col-sm-3">
                                    <select id="categorie" name="categorie" class="formField_res">
                                        <option value="" disabled="" selected="">Type</option>
                                        <option value="Voiture">Proffesionnel</option>
                                        <option value="Maison">Particulier</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bloc-bottom-recherche">
                    <div className="kl-bottom-recherche">
                        <h4><b><a href="#" class="dernier_annonce">Les dernières annonces</a></b></h4>
                    </div>
                </div>

                <div className="bloc-carousel">
                    <div className="kl-carousel">
                        <Carousel>
                            <Carousel.Item>
                                <div class="row">
                                    <div class="col-sm-5 col-md-3">
                                        <div class="thumbnail">
                                            <img src={tn_property01}/>
                                            <div class="caption">
                                                <h4 class="description">Maison à loué</h4>
                                                <p class="prix">1.000.000 Ar</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-5 col-md-3">
                                        <div class="thumbnail">
                                            <img src={tn_property02}/>
                                            <div class="caption">
                                                <h4 class="description">Maison à vendre</h4>
                                                <p class="prix">200 Million Ar</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-5 col-md-3">
                                        <div class="thumbnail">
                                            <img src={tn_property03}/>
                                            <div class="caption">
                                                <h4 class="description">Maison à loué</h4>
                                                <p class="prix">1.500.000 Ar</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-sm-5 col-md-3">
                                        <div class="thumbnail">
                                            <img src={tn_property04}/>
                                            <div class="caption">
                                                <h4 class="description">Maison à vendre</h4>
                                                <p class="prix">350 Million Ar</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>

                                <div class="row">
                                    <div class="col-sm-5 col-md-3">
                                        <div class="thumbnail">
                                            <img src={tn_property04}/>
                                            <div class="caption">
                                                <h4 class="description">Maison à loué</h4>
                                                <p class="prix">2.750.000 Ar</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-5 col-md-3">
                                        <div class="thumbnail">
                                            <img src={tn_property05}/>
                                            <div class="caption">
                                                <h4 class="description">Maison à vendre</h4>
                                                <p class="prix">270 Million Ar</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>


                <div class="row-bloc-accueil">
                    <p>Trouvez la bonne affaire parmi <a href="#" class="nombre_petit_annonce">25 454 920 petits
                        annonces</a> sur Maresaka</p>
                    <div class="row">
                        <div class="col-sm-5 col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Mode & Beauté</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            {datasModeBeaute.map((modeBeaute) => <p
                                                value={modeBeaute.libelle_type_categorie}>
                                                <b><Link to={"/annonces/"+modeBeaute.libelle_type_categorie}>{modeBeaute.libelle_type_categorie}</Link></b>
                                            </p>)}
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Agriculture</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            {datasAgriculture.map((vehicules) => <p
                                                value={vehicules.libelle_type_categorie}>
                                                <b><Link to='#'>{vehicules.libelle_type_categorie}</Link></b>
                                            </p>)}
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-5 col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Maison</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            {datasMaison.map((vehicules) => <p
                                                value={vehicules.libelle_type_categorie}>
                                                <b><Link to='#'>{vehicules.libelle_type_categorie}</Link></b>
                                            </p>)}
                                        </fieldset>
                                    </form>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Matériel divers</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            {datasMaterielDivers.map((vehicules) => <p
                                                value={vehicules.libelle_type_categorie}>
                                                <b><Link to='#'>{vehicules.libelle_type_categorie}</Link></b>
                                            </p>)}
                                        </fieldset>
                                    </form>
                                </div>
                            </div>

                        </div>

                        <div class="col-sm-5 col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Multimedia</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            {datasMultimedia.map((vehicules) => <p
                                                value={vehicules.libelle_type_categorie}>
                                                <b><Link to='#'>{vehicules.libelle_type_categorie}</Link></b>
                                            </p>)}
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Travail & Emploi</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            {datasTravailEmploi.map((vehicules) => <p
                                                value={vehicules.libelle_type_categorie}>
                                                <b><Link to='#'>{vehicules.libelle_type_categorie}</Link></b>
                                            </p>)}
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-5 col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Immobilier</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            {datasImmobilier.map((vehicules) => <p
                                                value={vehicules.libelle_type_categorie}>
                                                <b><Link to='#'>{vehicules.libelle_type_categorie}</Link></b>
                                            </p>)}
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Véhicules</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            {datasVehicule.map((vehicules) => <p
                                                value={vehicules.libelle_type_categorie}>
                                                <b><Link to='#'>{vehicules.libelle_type_categorie}</Link></b>
                                            </p>)}
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

