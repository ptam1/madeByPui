import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App.js';
import About from './frontend/about.js';
import Services from './frontend/Services.js';
import Portfolio from './frontend/Portfolio.js';
import Contact from './frontend/Contact.js';

ReactDOM.render(( 
    <React.StrictMode>
        <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        </BrowserRouter>
    </React.StrictMode>
                  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 