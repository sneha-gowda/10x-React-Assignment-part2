import React, { useState,useEffect } from 'react';
import Layout from './Layout.jsx';
import Header from './Header.jsx';

const App=()=>{
  const [Data,setData]=useState([]);//Declate a variable using useState to store the JSON data in import
  const getAPIData= async ()=>{
    const uri ="  http://localhost:3004/user"
    let response=await fetch(uri)
    let Data=await response.json()
    setData(Data)//setting the Json data to Data variable 
  };
  useEffect(()=>{getAPIData()},[])//useEffect is used to call getAPIData() to get the data from json file.

  return(
    <>
    <Header/>
    <div className='LayoutContainer'>
      {
        Data && Data.length>0 &&  Data.map((element,index)=>{
        return <Layout  key={index} name={element.name} location={element.location} likes={element.likes} 
          description={element.description} PostImage={element.PostImage} date={element.date} 
        />
      })}
      </div>
    </>
  )
}
export default App;
