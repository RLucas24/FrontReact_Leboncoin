import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-responsive-modal'
import './App.css'
import './assets/css/bootstrap.css'
import './assets/css/bootstrap.min.css'
import './assets/js/style'
import Drawer from 'react-motion-drawer'
import Form from './components/Form'
import creationComptePart from './components/compte/part/creationComptePart'
import creationComptePro from './components/compte/pro/creactionComptePro'
import PersonList from "./components/PersonList"
import PersistentDrawer from "./components/PersistentDrawer"

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

{/* const Child = ({match}) => (
        <div>
            <h3>ID: {match.params.id}
            </h3>
        </div>
    )*/
}

class App extends Component {
    state = {
        open: false,
    };
    onOpenModal = () => {
        this.setState({open: true});
    };
    onCloseModal = () => {
        this.setState({open: false});
    };

    render() {
        const {open} = this.state;
        return (
            <Router>
                <div className="body">
                    <div className="header">
                        <div className="kl-top-header">
                            <div className="kl-top-header-block">
                                <ul className="kl-login nav nav-pills">
                                    <li>
                                        <Link className="kl-btn-inscrire" to='#' onClick={this.onOpenModal}>S'incrire
                                            <span
                                                class="glyphicon glyphicon-log-in"></span></Link>
                                        {/*Modal/>*/}
                                        <Modal open={open} onClose={this.onCloseModal} center>
                                            <div class="panel panel-warning">
                                                <div class="panel-heading">
                                                    <h2 class="panel-title">Création de compte</h2>
                                                </div>
                                                <div class="panel-body">
                                                    <h5 class="panel-title">Choisissez votre type de compte</h5>
                                                    <div className="panel-body">
                                                        <Link to='/compte/part/creationComptePart'
                                                              onClick={this.onCloseModal}>
                                                            <span class="btn btn-warning kl-panel-modal-left">Particulier</span>
                                                        </Link>
                                                        <Link to='/compte/pro/creationComptePro'
                                                              onClick={this.onCloseModal}>
                                                            <span class="btn btn-warning kl-panel-modal-right">Professionnel</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal>
                                    </li>
                                    <li>
                                        <p className="kl-btn-separate">|</p>
                                    </li>
                                    <li>
                                        <Link className="kl-btn-connecter" to='/creationComptePro'>Se connnecter <span
                                            class="glyphicon glyphicon-user"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="kl-menu-header" id="myTopnav">
                            <div class="kl-menu-header-block">
                                <div class="drawer-persiste">
                                    <PersistentDrawer/>
                                </div>
                                <div>
                                    <Link to='/'>
                                        <h2 className="kl-menu-left">Maresaka</h2>
                                    </Link>
                                </div>
                                <ul className="nav nav-pills kl-menu-center">
                                    <li><Link className="kl-li-center" to='/Form'>OFFRES</Link></li>
                                    <li><Link className="kl-li-center" to='/PersonList'>DEMANDES</Link></li>
                                    <li><Link className="kl-li-center" to='/yahoo'>MEILLEURS ANNONCES</Link></li>
                                </ul>
                                <div className="kl-menu-right"><p><Link className="kl-depose-annonce"
                                                                        to='/Deposer_annonce'><b>DEPOSER
                                    UNE ANNONCE</b></Link></p></div>
                            </div>
                        </div>
                        {/*<Route path='/:id' component={Child}/>*/}
                    </div>


                    {/*CONTAINER/>*/}
                    <div className="container">

                        <div>
                            <div>

                            </div>
                        </div>

                        {/*URL/>*/}


                        <Route path='/Form' component={Form}/>
                        <Route path='/compte/part/creationComptePart' component={creationComptePart}/>
                        <Route path='/compte/pro/creationComptePro' component={creationComptePro}/>
                        <Route path='/PersonList' component={PersonList}/>
                    </div>


                    {/*FOOTER/>*/}
                    <div className="footer">
                        <div className="footer-block">
                            <div className="kl-maresak">Maresaka</div>
                            <div class="kl-lien-bas">
                                <div class="row">
                                    <div className="col-sm-3">OFFRES</div>
                                    <div className="col-sm-3">DEMANDES</div>
                                    <div className="col-sm-5">MEILLEURS ANNONCES</div>
                                </div>
                            </div>
                            <div className="kl-newsletter">
                                <div class="row">
                                    <div className="col-sm-4 kl-col-propos">
                                        <p><b>A propos</b><br/><br/>
                                            Sur le site maresaka.mg, passez des annonces gratuites et sans commission.
                                            Vous pouvez consulter des petits annonces de particuliers et de
                                            professionnels
                                            partout à Mada que vous cherchez des annonces immobilières,
                                            des voitures d'occasion, des offres d'emplois, des meubles, du matériel
                                            électronique ou tout autre type de produits d'occasion.
                                        </p>
                                    </div>
                                    <div className="col-sm-4 kl-col-contact">
                                        <p><b>Contact</b><br/><br/>
                                            <span
                                                class="glyphicon glyphicon-log-in"> Lot av 35B/II Antananarivo, Mahamasina</span><br/>
                                            <span
                                                class="glyphicon glyphicon-earphone"> 033 44 582 69 - 034 55 569 78</span><br/>
                                            <span class="fa fa-facebook">Facebook: Maresaka.mg</span><br/>
                                        </p>
                                    </div>
                                    <div className="col-sm-4 kl-col-newsletter">
                                        <p><b>Newsletter</b><br/><br/>
                                            Recevez mensuellement les nouvelles annonces depuis votre
                                            messagerie.<br/><br/>
                                            <form>
                                                <div class="input-group kl-mail-newletter">
                                                    <input id="msg" type="text" class="form-control" name="msg"
                                                           placeholder="Votre addresse mail"/>
                                                    <span class="input-group-addon kl-envoyer-newletter">ENVOYER</span>
                                                </div>
                                            </form>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="kl-copyright">maresaka.mg @ 2018</div>
                </div>
            </Router>
        );
    }
}

export default App;



