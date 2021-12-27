import React from 'react';
import ReactDOM from 'react-dom';
// import FrontPage from './FrontPage'
import Home from './home';
import "./index.css"

import {BrowserRouter} from "react-router-dom";


ReactDOM.render(<><BrowserRouter><Home /></BrowserRouter></>, document.getElementById('root'))
