import React from 'react';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons"


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
                        <div className="LayoutFooterIcons">
                            <FontAwesomeIcon icon={faHeart} size="2x"/>
                            <FontAwesomeIcon icon={faComment} size="2x" style={{"padding-left":"1vw"}}/>
                            <h3>{props.likes} likes</h3>
                        </div>
                        <h3>{dateInStr}</h3>
                    </div>
                    
                    <h2>{props.description}</h2>
                </div>
            </div>
        </>
    )
}

export default Layout;