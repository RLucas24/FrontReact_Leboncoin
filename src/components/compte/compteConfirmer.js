import React, {Component} from 'react'

export default class compteConfirmer extends React.Component {
    render() {
        return (
            <div class="jumbotron">
                <h2 class="h1-responsive">Activation du compte</h2>
                <p class="lead"><b>Votre compte a été activé.</b></p>
                <hr class="my-2"/>
                <p>Pour y accéder, cliquez sur le lien ci-dessous puis saisissez votre adresse email et votre mot de passe.</p>
                <a href="connexion" class="btn btn-primary btn-lg" role="button">Accéder à mon compte</a>
            </div>)
    }
}