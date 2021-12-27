import React from "react";
import App from "./App"
import {Route,Link,Routes} from "react-router-dom"
const  FrontPage=()=>{
    return (
        <>
            <div className="mainContentpage1">
                <img src="https://picsum.photos/400/500" alt="" />
                <div className="textClass">
                    <h1>10x Team 04</h1>
                    
                    <Link to="/insta" className="Link"> Enter</Link>
                   
                </div>
            </div>
                 <Routes>
                    
                    <Route excat path="/insta" element={<App/>} ></Route> 
                </Routes>
            
        </>
    )
}

export default FrontPage;