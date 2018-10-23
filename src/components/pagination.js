import React, {Component} from 'react'
import axios from 'axios';
import '../assets/css/style.css';
import Moment from 'react-moment';


export default class pagination extends React.Component {

    constructor() {
        super();
        this.state = {
            annonces: [],
            currentPage: 1,
            annoncesParPage: 3
        }
        this.handleClick = this.handleClick.bind(this);
    };


    componentDidMount() {
        const axios = require('axios');
        axios.get('http://localhost/leboncoin_api/web/app_dev.php/annonce/liste').then(res => {
            console.log(res);
            this.setState({annonces: res.data});
        });
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        //Pagination
        const {annonces, currentPage, annoncesParPage} = this.state;

        // Logic for displaying current todos
        const indexOfLastAnnonce = currentPage * annoncesParPage;
        const indexOfFirstAnnonce = indexOfLastAnnonce - annoncesParPage;
        const currentAnnonces = annonces.slice(indexOfFirstAnnonce, indexOfLastAnnonce);
        // fin de pagination

        const renderAnnonces = currentAnnonces.map((annonces, i) => {
            return (<tr key={i} className="myList">
                <th scope="row">{i + 1}</th>
                <td>{annonces.id}</td>
                <td>{annonces.titre}</td>
                <td>{annonces.prix}</td>
                <td>{annonces.flyer}</td>
                <td>{annonces.adresse}</td>
                <td><Moment format="YYYY/MM/DD">
                    {annonces.start_date}
                </Moment></td>
                <td><Moment format="YYYY/MM/DD">
                    {annonces.end_date}
                </Moment></td>
                <td>
                    <button type="button" class="btn btn-success"><span class="glyphicon glyphicon-ok-sign"></span>
                        Editer
                    </button>
                </td>
                <td>
                    <button type="button" class="btn btn-default" data-dismiss="modal"><span
                        class="glyphicon glyphicon-remove"></span> Effacer
                    </button>
                </td>
            </tr>)
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(annonces.length / annoncesParPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <div
                    key={number}
                    id={number}
                    onClick={this.handleClick}>
                    {number}
                </div>
            );
        });

        return (
            <div>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Numero</th>
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
                    {renderAnnonces}
                    </tbody>
                </table>
                <ul class="pagination pull-right">
                    <li class="disabled"><a href="#"><span class="glyphicon glyphicon-chevron-left"></span></a></li>
                    <li><a href="#">{renderPageNumbers}</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-chevron-right"></span></a></li>
                </ul>
            </div>
        );

    }
}

