import React, {Component} from 'react'
import API_URL from '../constants/apiUrl'
import axios from 'axios'
import Time from 'react-time'

import {Carousel, Pagination} from 'react-bootstrap'
import tn_property01 from '../../assets/images/image_carousels/tn_property01.jpg'
import tn_property02 from '../../assets/images/image_carousels/tn_property06.jpg'
import tn_property03 from '../../assets/images/image_carousels/tn_property03.jpg'
import tn_property04 from '../../assets/images/image_carousels/tn_property04.jpg'
import tn_property05 from '../../assets/images/image_carousels/tn_property05.jpg'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


export default class demandes extends React.Component {

    render() {
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
                    <h4><a href="#" class="nombre_petit_annonce">Les meilleurs {this.props.params} sur Maresaka (10 000
                        annonces)</a></h4>
                    <div class="row row_global">

                        <Route exact path='/demandes' component={DemandeToutes}/>
                        <Route exact path='/demandesPro' component={DemandePro}/>
                        <Route exact path='/demandesPart' component={DemandePart}/>

                        <div class="col-md-3">
                            <br/><br/>
                            <div class="thumbnail">
                                <img src={tn_property05}/>
                                <div class="caption">
                                    <h4 class="description">Maison à vendre</h4>
                                    <p class="prix">270 Million Ar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pagination>
                        <Pagination.First/>
                        <Pagination.Prev/>
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis/>

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis/>
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next/>
                        <Pagination.Last/>
                    </Pagination>


                </div>


            </div>
        )
    }
}

class DemandeToutes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //select Demandes
            demandes: [],
        }
    }

    componentDidMount() {

        //Select Demandes
        let requestDemande = {
            method: 'GET',
            url: API_URL.DEMANDE
        }
        axios(requestDemande)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    demandes: res.data
                })
            });
    }


    render() {
        var moment = require('moment');
        let now = new Date();
        let datasDemande = this.state.demandes;


        {/*const content = 'Professionnel'
        const limit = 3;
        if (content.length <= limit) {
            return <div>{content}</div>
        }
        const toShow = content.substring(0, limit);*/
        }
        return (<div class="col-md-9">
            <hr class="hr_global"/>
            <ul class="nav nav-tabs">
                <li className="active nav-tabs-li"><Link to='/demandes'><b>Toutes</b></Link></li>
                <li className="nav-tabs-li"><Link
                    to='/demandesPro'><b>Professionnels</b></Link></li>
                <li className="nav-tabs-li"><Link to='/demandesPart'><b>Particuliers</b></Link></li>
            </ul>

            <div class="col col_sous_global">
                {
                    datasDemande.map((demandes) =>
                        <div>
                            <div class="row row_sous_global">
                                <div class="col-md-3">
                                    <label
                                        class="theme">{demandes.type_utilisateur.libelle_type_utilisa.substring(0, 3)}</label>
                                    <div class="thumbnail_global">
                                        <img src={tn_property05}/>
                                    </div>
                                </div>
                                <div class="col-md-6 center_annonces_global">
                                    <div class="titre_global" name="titre" ref="titre">
                                        <a>{demandes.titre.substring(0, 45)}</a>
                                    </div>
                                    <div class="text_global" name="text" ref="text">
                                        <p>{demandes.text.substring(0, 300)}</p>
                                    </div>
                                    <div class="col prix_global" name="prix" ref="prix">
                                        <div class="col-md-4">
                                            <label class="label_org"></label>
                                        </div>
                                        <div class="col-md-4">

                                                <span
                                                    class="glyphicon glyphicon-time">{/*moment.duration(now.diff(demandes.is_publish_date))*/
                                                }</span><br/>
                                        </div>
                                        <div class="col-md-4">
                                                        <span class="glyphicon glyphicon-calendar">&nbsp;<Time
                                                            value={demandes.is_publish_date}
                                                            format="DD-MM-YYYY"/></span><br/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">

                                    <div class="panel_info_suplementaire">
                                        <label>Posté par:</label><br/>
                                        <label class="label_org">Raison sociale</label><br/><br/>
                                        <div class="info_suplementaire">
                                                <span
                                                    class="glyphicon glyphicon-home"></span><span className="div-adresse">{demandes.adresse.substring(0, 25)}</span><br/>
                                            <span
                                                class="glyphicon glyphicon-envelope">&nbsp;{demandes.email_annonce.substring(0, 25)}</span><br/>
                                            <span
                                                class="kl-tel_annonce glyphicon glyphicon-earphone">&nbsp;{demandes.tel_annonce.substring(0, 25)}</span><br/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <br/></div>
                    )}
            </div>
            <br/>

        </div>)
    }
}

class DemandePro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //select Demandes
            demandes: [],
        }
    }

    componentDidMount() {

        //Select Demandes
        let requestDemande = {
            method: 'GET',
            url: API_URL.DEMANDEPRO
        }
        axios(requestDemande)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    demandes: res.data
                })
            });
    }


    render() {
        var moment = require('moment');
        let now = new Date();
        let datasDemande = this.state.demandes;

        {/*const content = 'Professionnel'
        const limit = 3;
        if (content.length <= limit) {
            return <div>{content}</div>
        }
        const toShow = content.substring(0, limit);*/
        }
        return (<div class="col-md-9">
            <hr class="hr_global"/>
            <ul class="nav nav-tabs">
                <li className="nav-tabs-li"><Link to='/demandes'><b>Toutes</b></Link></li>
                <li className="active nav-tabs-li"><Link
                    to='/demandesPro'><b>Professionnels</b></Link></li>
                <li className="nav-tabs-li"><Link to='/demandesPart'><b>Particuliers</b></Link></li>
            </ul>

            <div class="col col_sous_global">
                {
                    datasDemande.map((demandes) =>
                        <div>
                            <div class="row row_sous_global">
                                <div class="col-md-3">
                                    <label
                                        class="theme">{demandes.type_utilisateur.libelle_type_utilisa.substring(0, 3)}</label>
                                    <div class="thumbnail_global">
                                        <img src={tn_property05}/>
                                    </div>
                                </div>
                                <div class="col-md-6 center_annonces_global">
                                    <div class="titre_global" name="titre" ref="titre">
                                        <a>{demandes.titre.substring(0, 45)}</a>
                                    </div>
                                    <div class="text_global" name="text" ref="text">
                                        <p>{demandes.text.substring(0, 300)}</p>
                                    </div>
                                    <div class="col prix_global" name="prix" ref="prix">
                                        <div class="col-md-4">
                                            <label class="label_org"></label>
                                        </div>
                                        <div class="col-md-4">

                                                <span
                                                    class="glyphicon glyphicon-time">{/*moment.duration(now.diff(demandes.is_publish_date))*/
                                                }</span><br/>
                                        </div>
                                        <div class="col-md-4">
                                                        <span class="glyphicon glyphicon-calendar">&nbsp;<Time
                                                            value={demandes.is_publish_date}
                                                            format="DD-MM-YYYY"/></span><br/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">

                                    <div class="panel_info_suplementaire">
                                        <label>Posté par:</label><br/>
                                        <label class="label_org">Raison sociale</label><br/><br/>
                                        <div class="info_suplementaire">
                                                <span
                                                    class="glyphicon glyphicon-home"></span><span className="div-adresse">{demandes.adresse.substring(0, 25)}</span><br/>
                                            <span
                                                class="glyphicon glyphicon-envelope">&nbsp;{demandes.email_annonce.substring(0, 25)}</span><br/>
                                            <span
                                                class="kl-tel_annonce glyphicon glyphicon-earphone">&nbsp;{demandes.tel_annonce.substring(0, 25)}</span><br/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <br/></div>
                    )}
            </div>
            <br/>

        </div>)
    }
}

class DemandePart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //select Demandes
            demandes: [],
        }
    }

    componentDidMount() {

        //Select Demandes
        let requestDemande = {
            method: 'GET',
            url: API_URL.DEMANDEPART
        }
        axios(requestDemande)
            .then(res => {
                console.log("Reponse reçevé ", res);
                this.setState({
                    demandes: res.data
                })
            });
    }


    render() {
        var moment = require('moment');
        let now = new Date();
        let datasDemande = this.state.demandes;


        {/*const content = 'Professionnel'
        const limit = 3;
        if (content.length <= limit) {
            return <div>{content}</div>
        }
        const toShow = content.substring(0, limit);*/
        }
        return (
            <div class="col-md-9">
                <hr class="hr_global"/>
                <ul class="nav nav-tabs">
                    <li className="nav-tabs-li"><Link to='/demandes'><b>Toutes</b></Link></li>
                    <li className="nav-tabs-li"><Link
                        to='/demandesPro'><b>Professionnels</b></Link></li>
                    <li className="active nav-tabs-li"><Link to='/demandesPart'><b>Particuliers</b></Link></li>
                </ul>

                <div class="col col_sous_global">
                    {
                        datasDemande.map((demandes) =>
                            <div>
                                <div class="row row_sous_global">
                                    <div class="col-md-3">
                                        <label
                                            class="theme">{demandes.type_utilisateur.libelle_type_utilisa.substring(0, 3)}</label>
                                        <div class="thumbnail_global">
                                            <img src={tn_property05}/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 center_annonces_global">
                                        <div class="titre_global" name="titre" ref="titre">
                                            <a>{demandes.titre.substring(0, 45)}</a>
                                        </div>
                                        <div class="text_global" name="text" ref="text">
                                            <p>{demandes.text.substring(0, 300)}</p>
                                        </div>
                                        <div class="col prix_global" name="prix" ref="prix">
                                            <div class="col-md-4">
                                                <label class="label_org"></label>
                                            </div>
                                            <div class="col-md-4">

                                                <span
                                                    class="glyphicon glyphicon-time">{/*moment.duration(now.diff(demandes.is_publish_date))*/
                                                }</span><br/>
                                            </div>
                                            <div class="col-md-4">
                                                        <span class="glyphicon glyphicon-calendar">&nbsp;<Time
                                                            value={demandes.is_publish_date}
                                                            format="DD-MM-YYYY"/></span><br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">

                                        <div class="panel_info_suplementaire">
                                            <label>Posté par:</label><br/>
                                            <label class="label_org">Raison sociale</label><br/><br/>
                                            <div class="info_suplementaire">
                                                <span
                                                    class="glyphicon glyphicon-home"></span><span className="div-adresse">{demandes.adresse.substring(0, 25)}</span><br/>
                                                <span
                                                    class="glyphicon glyphicon-envelope">&nbsp;{demandes.email_annonce.substring(0, 25)}</span><br/>
                                                <span
                                                    class="kl-tel_annonce glyphicon glyphicon-earphone">&nbsp;{demandes.tel_annonce.substring(0, 25)}</span><br/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br/></div>
                        )}
                </div>
                <br/>

            </div>)
    }
}
