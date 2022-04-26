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
import PageMarksWithPanel from "./components/pages/dictPages/PageMarksWithPanel";



function App() {


    const appRoutes = [
        {
            path: '/',
            Component: StartPage,
            exact: true,
        },
        {
            path: "/authorization",
            Component: AuthorizationPage,
        },
        {
            path: "/registration",
            Component: RegistrationPage,
        },
        {
            path: "/home",
            Component: HomePage,
        },
        {
            path: "/dict",
            Component: Dictionary,
            exact: true
        },
        {
            path: "/dict/:id",
            Component: PageMarksWithPanel,
        }
    ];



    return (
        <Router>
            <div className='test surface-50'>
                {/*<MenuList/>*/}
                <Switch>
                    {appRoutes.map(({path, Component, exact},index) => {

                        return <Route key={index}  path={path} exact={exact} component={Component}/>
                    })}
                </Switch>
            </div>g
        </Router>

    );
}

export default App;
