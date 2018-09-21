import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import carousel from '../components/carousel/carousel'


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


export default class accueil extends React.Component {


    render() {
        return (

            <div>
                <div className="bloc-recherche">
                    <div className="kl-top-recherche">
                        <div className="kl-top-recherche-block">
                            RECHERCHER DES ANNONCES
                            <div className="kl-middle-recherche-block">
                                <div class="col col-sm-4">
                                    <div class="input-group">
                                        <input type="text" placeholder="Recherche "
                                               className="formField_res_icon"/><span
                                        type="button" class="input-group-addon input-group-addon-recherche"><i
                                        class="glyphicon glyphicon-search"></i></span>
                                    </div>
                                </div>

                                <div class="col col-sm-3">
                                    <select id="categorie" name="categorie" class="formField_res">
                                        <option value="" disabled="" selected="">Catégorie</option>
                                        <option value="Voiture">Voiture</option>
                                        <option value="Maison">Maison</option>
                                        <option value="Terrain">Terrain</option>
                                        <option value="Immobilier">Immobilier</option>
                                    </select>
                                </div>

                                <div class="col col-sm-3">
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

                <div className="carous">


                    <carousel/>

                </div>

                <div class="row-bloc-accueil">
                    <div class="row">
                        <div class="col-sm-5 col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Véhicules</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            <label for="voiture">Voitures</label><br/>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-5 col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Mode & Beauté</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            <label for="adresse">Vetement Homme</label>

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
                                            <label for="adresse">Meuble</label>

                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-5 col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Travail & Emploi</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            <label for="adresse">Offre d'emploi</label>

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
                                            <label for="adresse">Ordinateur</label>

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
                                            <label for="adresse">Maison à vendre</label>

                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-5 col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Matériel divers</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            <label for="adresse">Matériel de construction</label>

                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-5 col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading custom-header-panel">
                                    <h3 class="panel-title custom-title-panel">Agriculture</h3>
                                </div>
                                <div className="panel-body">
                                    <form ref="signForm" className="form-group">
                                        <fieldset>
                                            <label for="adresse">Riz</label>

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


