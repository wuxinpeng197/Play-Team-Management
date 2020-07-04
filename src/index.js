import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import * as serviceWorker from './serviceWorker';
import Routes from './route'
import {BrowserRouter} from 'react-router-dom';
import { firebase } from './firebase';

const App = (props) =>{
    return(
        <BrowserRouter>
        <Routes {...props}/>
        </BrowserRouter>
     
    )
}

firebase.auth().onAuthStateChanged((user)=>{
ReactDOM.render(<App user={user}/>, document.getElementById('root'));
})

serviceWorker.unregister();
