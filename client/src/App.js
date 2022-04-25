import React, {useState} from "react";

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import './scss/main.scss'

import './index.css';

import 'primereact/resources/themes/md-light-indigo/theme.css';      //theme
import 'primereact/resources/primereact.min.css';              //core css
import 'primeicons/primeicons.css';                            //icons
import 'primeflex/primeflex.scss';


import AuthorizationPage from './components/pages/AuthorizationPage';
import RegistrationPage from "./components/pages/RegistrationPage";
import StartPage from "./components/pages/StartPage";
import HomePage from "./components/pages/HomePage";
import Dictionary from "./components/pages/dictPages/Dictionary";


function App() {


    return (
        <Router>
            <div className='test surface-50'>
                {/*<MenuList/>*/}
                <Switch>
                    <Route exact path="/">
                        <StartPage/>
                    </Route>
                    <Route path="/authorization">
                        <AuthorizationPage/>
                    </Route>
                    <Route path="/registration">
                        <RegistrationPage/>
                    </Route>
                    <Route path="/home">
                        <HomePage/>
                    </Route>
                    <Route path="/dict">
                        <Dictionary/>
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
