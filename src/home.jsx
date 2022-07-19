import React from 'react';
import App from './App';
import FrontPage from './Frontpage';
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