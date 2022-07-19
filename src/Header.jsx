import React,{useState} from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-modal';
const Header= ()=>{
    const [modalData,setmodaldata] = useState(false);
    const [name,setfilename]=useState(0);
    const [uploadFile,setUploadFile]=useState(0);
    const [description,setdescription]=useState(0);
    const [location,setlocation]=useState(0);
    const submitForm = async(event)=>{
        console.log("yeah yeah")
        event.preventDefault();
        const dataArray ={};
        
        dataArray["name"]=name;
        dataArray["PostImage"]=uploadFile;
        dataArray["description"]=description;
        dataArray["location"]=location;
        dataArray["likes"]=30;
        dataArray["date"]="233333333321"
        setmodaldata(false)
        const url = "http://localhost:3007/image"
        console.log(dataArray)
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json ',
                'Connection': 'keep-alive',
                'Accept': '*/*',
            },
            body: JSON.stringify(dataArray)
        }).then((response) => {
            console.log(response);
            if (!response.ok) throw new Error(response.status);
            else return response.json();
        }).then((data) => {
                console.log("DATA STORED",data);
        }).catch((error) => {
                console.log('error: ' + error);
                
            });
    };
    return (
        <>
            <div className="Header">
                <FontAwesomeIcon icon={faGlobe} color="Green" size="3x"/>
                <h1>InstaClone</h1>
                <button onClick={()=>setmodaldata(true)}>
                    <FontAwesomeIcon icon={faCameraRetro} size="3x" className="CameraIcon" />
                </button>
                <Modal isOpen={modalData}> 
                    <form onSubmit = {submitForm}>
                        <input type='text' onChange={(e) => setfilename(e.target.value)} placeholder="name"/><br />
                        <input  type="file" onChange={(e) => setUploadFile(e.target.files)} />
                        <br />
                        <input type='text' onChange={(e) => setdescription(e.target.value)} required placeholder="description"></input>
                        <br />
                        <input type='text' onChange={(e) => setlocation(e.target.value)} required placeholder="location"></input>  
                        <br />
                        <input type="submit" />
                    </form>
                </Modal>   
            </div>
        </>
    )}
export default Header;