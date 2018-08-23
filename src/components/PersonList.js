import React, {Component} from 'react'
import axios from 'axios';
import '../assets/css/style.css';

export default class PersonList extends React.Component{
    state = {
        users: [],
    };

    componentDidMount(){

        //res.header("Access-Control-Allow-Origin", "*");


        const axios = require ('axios');
        // Make a request for a user with a given ID
        axios.get('http://localhost/leboncoin/web/app_dev.php/user').then(res => {
            console.log(res);
            this.setState({users:res.data});
        });

    }


    render(){
        let datas = this.state.users;
        return <ul>{datas.map((users, i) => <li key={i} className="myList">
            {i+1}- {users.id}, {users.username}, {users.email}
            <button onClick="" className="myListButtonButton">Effacer</button>
            <button onClick="" className="myListButtonButton">Editer</button>
        </li>)}</ul>
    }
}