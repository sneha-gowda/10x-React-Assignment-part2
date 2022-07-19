import React from 'react';
import{Link} from 'react-router-dom'
const Frontpage = () => {
    return (
        <>
            <div className="mainContentpage1">
                <img src="https://picsum.photos/1000/500" alt="" />
                <div className="textClass">
                    <h1>10x instaclone</h1>
                    <Link to="/insta" className="Link"> Enter</Link>
                </div>
            </div>
        </>
    )
}

export default Frontpage;