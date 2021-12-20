import React from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header=()=>{
    return (
        <>
            <div className="Header">
                <FontAwesomeIcon icon={faGlobe} color="Green" size="3x"/>
                <h1>InstaClone</h1>
                <FontAwesomeIcon icon={faCameraRetro} size="3x" className="CameraIcon"/>
            </div>
        </>
    )
};
export default Header;