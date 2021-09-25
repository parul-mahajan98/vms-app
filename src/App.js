/*jshint esversion:6*/
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Home from './components/Home';
import ListUser from './components/ListUser';
import ListVehicleComponent from './components/ListVehicleComponent';
import Login from './components/Login';
import Register from './components/Register';
import Vehicle from './components/Vehicle';

function App() {
    return ( <
        Router >
        <
        HeaderComponent / >
        <
        Switch >
        <
        Route path = "/"
        exact component = { Home }
        /> <
        Route path = "/add"
        exact component = { Vehicle }
        /> <
        Route path = "/edit/:id"
        exact component = { Vehicle }
        /> <
        Route path = "/list"
        component = { ListVehicleComponent }
        /> <
        Route path = "/userlist"
        component = { ListUser }
        /> <
        Route path = "/register"
        component = { Register }
        /> <
        Route path = "/login"
        component = { Login }
        /> <
        Route path = "/logout"
        component = { Login }
        />




        <
        /Switch>

        <
        FooterComponent / >
        <
        /Router>
    );
}

export default App;