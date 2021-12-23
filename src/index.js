import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './FrontPage'
import "./index.css"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";

ReactDOM.render(<><BrowserRouter>
<FrontPage></FrontPage>
</BrowserRouter></>,
 document.getElementById('root'));


