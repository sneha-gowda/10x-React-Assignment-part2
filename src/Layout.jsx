import React from 'react';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Layout = (props)=>{
    const date=new Date(parseInt(props.date));
    console.log(date)
    const months=["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateInStr=date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear();
    console.log(dateInStr);

    
    return(
        <>
            <div className="Layout">
                <div className="LayoutHeader">
                    <div className="UserName">
                        <h1>{props.name}</h1>
                        <h2>{props.location}</h2>
                    </div>
                    <FontAwesomeIcon icon={faEllipsisH} size="2x"/>
                </div>

                <img src={props.PostImage} alt="Can't Load"/>
                <div className="LayoutFooter">
                    <div className="LayoutFooterLine1">
                        <FontAwesomeIcon icon={faHeart} size="1x"/>
                        <FontAwesomeIcon icon={faComment} size="1x" color=""/>
                        <h4>{dateInStr}</h4>
                    </div>
                    <h4>{props.likes} likes</h4>
                    <h3>{props.description}</h3>
                </div>
            </div>
        </>
    )
}

export default Layout;