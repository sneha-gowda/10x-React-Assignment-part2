import React, { useState, useEffect } from 'react';
import Layout from './Layout.jsx';
import Header from './Header.jsx';


const App = () => {
    console.log("line1")
    const [Data, setData]=useState(null)
    
    console.log("line2")
    const getAPIData = async () => {
        const url = "http://localhost:3007/user"
        let response = await fetch(url,{
            method: "GET",
        });
        let data = await response.json();
        console.log(response)
        setData(data.user)
    }
    useEffect(() => { getAPIData() }, [])
    return (
        <>
            <Header />
            <div className="LayoutContainer">
                {
                    Data && Data.length > 0 && Data.map((element, index) => {
                        return <Layout key={index} name={element.name} location={element.location} likes={element.likes}
                            description={element.description} PostImage={element.PostImage} date={element.date} />
                    })}
            </div>
        </>
    )
}

export default App;