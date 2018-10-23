import React, {Component} from 'react'
import axios from 'axios';
import '../../assets/css/style.css';


export default class AnnoncesList extends React.Component{
    state = {
        annonces: [],
    };

    componentDidMount(){

        const axios = require ('axios');
        // Make a request for a user with a given ID
        axios.get('http://localhost/leboncoin_api/web/app_dev.php/annonce/liste').then(res => {

            console.log(res);
            this.setState({annonces:res.data});
        });

    }

    render(){
        let datas = this.state.annonces;
        return <ul>{datas.map((annonces, i) => <li key={i} className="myList">
            {i+1}-
            {annonces.id},
            {annonces.titre},
            {annonces.prix},
            {annonces.flyer},
            {annonces.adresse},
            {annonces.startDate},
            {annonces.endDate},

            <button onClick="" className="myListButtonButton">Effacer</button>
            <button onClick="" className="myListButtonButton">Editer</button>
        </li>)}</ul>
    }
}

<table class="table table-striped">
    <thead>
    <tr>
        <th scope="col">Id</th>
        <th scope="col">Titre</th>
        <th scope="col">Prix</th>
        <th scope="col">flyer</th>
        <th scope="col">Adresse</th>
        <th scope="col">Date debut</th>
        <th scope="col">Date fin</th>
        <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    {datas.map((annonces, i) => <tr key={i} className="myList">
        <th scope="row">{i + 1}</th>
        <td>{annonces.id}</td>
        <td>{annonces.titre}</td>
        <td>{annonces.prix}</td>
        <td>{annonces.flyer}</td>
        <td>{annonces.adresse}</td>
        <td>{annonces.startDate}</td>
        <td>{annonces.endDate}</td>
        <td>
            <button onClick="" className="myListButtonButton">Effacer</button>
            <button onClick="" className="myListButtonButton">Editer</button>
        </td>
    </tr>)}</tbody>
</table>
