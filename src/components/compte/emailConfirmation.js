import React, {Component} from 'react'


export default class emailConfirmation extends React.Component {
    render() {
        return (
            <div class="jumbotron">
                <h2 class="h1-responsive">Activer votre compte</h2>
                <p class="lead"><b>Pour activer votre Compte, veuillez cliquer sur le lien figurant dans l'email de confirmation que nous venons de vous adresser.</b></p>
                <hr class="my-2"/>
                <p>Bon à savoir:<br /><br />
                    Si vous ne recevez pas l'email de confirmation,2 options:<br />
                    <li>l'adresse email indiquée n'est pas valide.</li>
                    <li>l'email a été bloqué par votre filtre anti-spam. Dans ce dernier cas, pas besoin de créer à nouveau votre Compte.
                        <br />Il vous suffit de retrouver l'email dans votre boîte de réception anti-spam.</li>
                </p>
            </div>)
    }
}
/**
 render(){
 <a href="" class="btn btn-primary btn-lg" role="button">A</a>
        let datas = this.state.users;
        return <ul>{datas.map((users, i) => <li key={i} className="myList">
            {i+1}- {users.id}, {users.username}, {users.email}
            <button onClick="" className="myListButtonButton">Effacer</button>
            <button onClick="" className="myListButtonButton">Editer</button>
        </li>)}</ul>
    }*/
