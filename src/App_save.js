import React, {Component} from 'react'
import './App.css'
import './assets/css/bootstrap.css'
import './assets/css/bootstrap.min.css'
import './assets/js/style'

import {Popover, Navbar, Nav, NavItem, NavDropdown, MenuItem, Row, Col} from 'react-bootstrap'
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';

// page path
import accueil from './components/accueil/accueil'
import rechercheGlobales from './components/accueil/rechercheGlobales'
import creationComptePart from './components/compte/part/creationComptePart'
import creationComptePro from './components/compte/pro/creactionComptePro'
import connexion from './components/compte/connexion'
import list from "./components/list"
import deposerAnnonce from './components/annonce/deposerAnnonce'
import emailConfirmation from './components/compte/emailConfirmation'
import compteConfirmer from './components/compte/compteConfirmer'
import Form from './components/Form'
import PersistentDrawer from './components/PersistentDrawer'
import listeDemandes from './components/annonce/listeDemandes'


import testEssey from './components/TestEssey'


import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            redirect: false
        }
        this.handleClick = this.handleClick.bind(this);
    }


    onOpenModal = () => {
        this.setState({open: true});
    };
    onCloseModal = () => {
        this.setState({open: false});
    };

    handleClick() {
        this.setState({
            isToggleOn: true
        });
    }

    componentDidMount() {
        if (!localStorage.getItem('API_Key')) {
            this.setState({isToggleOn: true})
        }
        else this.setState({isToggleOn: false})
    }

    renderSeparater() {
        if (this.state.isToggleOn) {
            return <Separater/>
        }
        else return null;
    }

    renderInscription() {
        if (this.state.isToggleOn) {
            return <Sincrire/>
        }
        else return null;
    }

    renderToggle() {
        if (!this.state.isToggleOn) {
            return <ParametreProfil/>
        }
        else return <Connecter/>
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to={"/compte/connexion"}/>
        }
    }


    render() {
        const {open} = this.state;
        return (
            <Router>
                <div className="body">
                    <div className="header">
                        <div className="kl-top-header">
                            <div className="kl-top-header-block">
                            </div>
                        </div>
                        <Navbar collapseOnSelect className="Navbar-collapse">
                            <Navbar.Header className="Navbar-header">
                                <Navbar.Brand>
                                    <a href="#brand"><h2 className="kl-menu-left">Maresaka</h2></a>
                                </Navbar.Brand>
                                <Navbar.Toggle/>
                            </Navbar.Header>
                            <Navbar.Collapse className="cccc">
                                <Nav className="centre-Navbar">
                                    <ul className="nav nav-pills kl-menu-center">
                                        <li><Link className="kl-li-center" to='/list'>OFFRES</Link></li>
                                        <li><Link className="kl-li-center" to='/listeDemandes'>DEMANDES</Link></li>
                                        <li><Link className="kl-depose-annonce" to='/annonce/deposerAnnonce'>
                                            <b>DEPOSER UNE ANNONCE</b>
                                        </Link>
                                        </li>
                                    </ul>
                                </Nav>
                                <Nav pullRight className="right-Navbar">
                                    <NavItem>
                                        {this.renderInscription()}
                                    </NavItem>
                                    <NavItem>{this.renderSeparater()}
                                    </NavItem>
                                    <NavItem>
                                        <Link className="kl-btn-connecter" onClick={this.handleClick}
                                              to='/compte/connexion'>{this.renderToggle()}
                                        </Link>
                                    </NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>


                    <div className="header">
                        <div className="kl-top-header">
                            <div className="kl-top-header-block">
                            </div>
                        </div>
                        <div class="kl-menu-header" id="myTopnav">
                            <div class="kl-menu-header-block">
                                <div class="drawer-persiste">
                                    <PersistentDrawer/>
                                </div>
                                <div>
                                    <Link to='/'>
                                        <h2 className="">Maresaka</h2>
                                    </Link>
                                </div>
                                <div>
                                    <ul className="nav nav-pills kl-menu-center">
                                        <li><Link className="kl-li-center" to='/list'>OFFRES</Link></li>
                                        <li><Link className="kl-li-center" to='/listeDemandes'>DEMANDES</Link></li>
                                        <li><Link className="kl-depose-annonce" to='/annonce/deposerAnnonce'>
                                            <b>DEPOSER UNE ANNONCE</b>
                                        </Link>
                                        </li>
                                    </ul>
                                    <ul className="kl-login nav nav-pills">
                                        <li>
                                            {this.renderInscription()}
                                        </li>
                                        <li>
                                            {this.renderSeparater()}
                                        </li>
                                        <li>
                                            <Link className="kl-btn-connecter" onClick={this.handleClick}
                                                  to='/compte/connexion'>{this.renderToggle()}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*CONTAINER/>*/}

                    <div className="container_accueil">
                        <Route exact path='/' component={accueil}/>
                        <Route exact path='/annonces/:catgorie' component={rechercheGlobales}/>

                        <Route exact path='/listeDemandes' component={listeDemandes}/>

                        <div className="container">
                            {/*URL/>*/}
                            {this.renderRedirect()}
                            <Route exact path='/list' component={list}/>
                            <Route exact path='/Form' component={Form}/>
                            {/*<Route exact path={'/annonce/deposerAnnonce/:API_Key'} component={deposerAnnonce}/>*/}
                            <Route exact path={'/annonce/deposerAnnonce'} component={deposerAnnonce}/>

                            <Route exact path='/compte/part/creationComptePart' component={creationComptePart}/>
                            <Route exact path='/compte/pro/creationComptePro' component={creationComptePro}/>
                            <Route exact path='/compte/connexion' component={connexion}/>
                            <Route exact path='/compte/emailConfirmation' component={emailConfirmation}/>
                            <Route exact path='/compte/compteConfirmer' component={compteConfirmer}/>

                            <Route exact path='/testEssey' component={testEssey}/>
                        </div>
                    </div>


                    {/*FOOTER/>*/}
                    <div className="footer">
                        <div className="footer-block">
                            <Link to='/testEssey'>
                                FANAOVANA TEST
                            </Link>
                            <Link to='/'>
                                <div className="kl-maresak">Maresaka</div>
                            </Link>
                            <div className="kl-newsletter">
                                <div class="row">
                                    <div className="col-sm-4 kl-col-contact">
                                        <p><b>Contact</b><br/><br/>
                                            <span class="glyphicon glyphicon-log-in"> Lot av 35B/II Antananarivo, Mahamasina</span><br/><br/>
                                            <span
                                                class="glyphicon glyphicon-earphone"> 033 44 582 69 - 034 55 569 78</span><br/><br/>
                                            <span class="fa fa-facebook">Facebook: Maresaka.mg</span><br/>
                                        </p>
                                    </div>
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


class Separater extends React.Component {
    render() {
        return (
            <p>|</p>
        )
    }
}

class Sincrire extends React.Component {
    render() {
        return (
            <Link className="kl-btn-inscrire"
                  to='/compte/part/creationComptePart'>
                <div><label>S'incrire</label>&nbsp;<span class="glyphicon glyphicon-user"></span></div>
            </Link>

        )
    }
}

class Connecter extends React.Component {
    componentDidMount() {
        localStorage.removeItem('API_Key');
        localStorage.removeItem('isToggleOn');
    }

    render() {
        return (<div><label>Connecter</label>&nbsp;<span class="glyphicon glyphicon-log-in"></span></div>)
    }
}

class Deconnecter extends React.Component {
    render() {
        return (<div><span class="glyphicon glyphicon-off"></span>&nbsp;&nbsp;<label>Deconnecter</label></div>)
    }
}

class ParametreProfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAboutMenu: false
        };
    }

    handleHover = () => {
        this.setState({showAboutMenu: true});
    };

    handleLeave = () => {
        this.setState({showAboutMenu: false});
    };


    render() {
        return (
            <div onMouseLeave={this.handleLeave}>
                {this.state.showAboutMenu && <Submenu/>}
                <label><span class="glyphicon glyphicon-cog" onMouseEnter={this.handleHover}>&nbsp;</span>Mon
                    Compte</label>
            </div>
        )
    }
}

class Submenu extends React.Component {
    render() {
        return (
            <Popover placement="bottom">
                <div className="popover-ul">
                    <div><span class="glyphicon glyphicon-user"></span>&nbsp;Mon Profil</div>
                    <br/>
                    <div><span class="glyphicon glyphicon-edit"></span>&nbsp;Modifier Compte</div>
                    <br/>
                    <div><span class="glyphicon glyphicon-remove"></span>&nbsp;Supprimer Compte</div>
                    <br/>
                    <div><Link className="kl-btn-connecter"
                               onClick={this.handleClick}
                               to='/compte/connexion'><Deconnecter/>
                    </Link></div>
                </div>
            </Popover>
        )
    }
}


