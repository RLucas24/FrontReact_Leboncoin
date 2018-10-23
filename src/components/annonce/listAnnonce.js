import React, {Component} from 'react'
import axios from 'axios';
import '../../assets/css/style.css';

export default class listAnnonce extends React.Component{
    state = {
        annonces: [],
    };

    componentDidMount(){

        //res.header("Access-Control-Allow-Origin", "*");

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
            {i+1}- {annonces.id}, {annonces.titre}, {annonces.prix}
            <button onClick="" className="myListButtonButton">Effacer</button>
            <button onClick="" className="myListButtonButton">Editer</button>
        </li>)}</ul>
    }
}


console.clear();


export default class list extends React.Component {
    constructor() {
        super();
        this.state = {
            annonces: ['a','b','c','d','e','f','g','h','i','j','k'],
            currentPage: 1,
            annoncesParPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { annonces, currentPage, annoncesParPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastAnnonce = currentPage * todosPerPage;
        const indexOfFirstAnnonce = indexOfLastAnnonce - todosPerPage;
        const currentAnnonces = annonces.slice(indexOfFirstAnnonce, indexOfLastAnnonce);

        const renderAnnonces = currentAnnonces.map((annonce, index) => {
            return <li key={index}>{annonce}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(annonces.length / annoncesParPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <ul>
                    {renderAnnonces}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}
