import React, { Component } from 'react';
import App from './App';
import FrontPage from './FrontPage';
import {Routes, Route} from "react-router-dom";
 const Home=()=>{
    return (
        <Routes>
            <Route excat path="/" element={<FrontPage/>}></Route>
            <Route excat path="/insta" element={<App />} ></Route>
        </Routes>
    )
}
export default Home;