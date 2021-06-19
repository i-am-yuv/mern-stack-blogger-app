import React, { useEffect, useState } from 'react';
import Informations from './Informations';
import axios from 'axios';



const Home = () => {


const [infoData, setInfoData] = useState([]);
const [delMsg, setDelMsg] = useState('');


useEffect(()=>{

    axios.get('/info')
    .then(res=>{
console.log(res.data);
setInfoData(res.data)

 }).catch(err=>console.log(err))



},[])



const handleDelete = (id)=>{
    axios.delete(`/info/${id}`)
    .then(res=>{
        setDelMsg(res.data.msg)
   
   
        setTimeout(() => {
           setDelMsg('');  
       }, 2000);
        
    }).catch(err=>console.log(err))
   
    const filterDeleted = infoData.filter(item=>item._id !==id);
    setInfoData(filterDeleted);
   }


    return (
        <div className="home">

            <div className="container">
                <h2>user's information</h2>
                <div className="inside-container">
                <h4 className="deletedMsg">{delMsg}</h4>
                    <div className="informations-center">
                      
                      {infoData.map(item=>(
                           <Informations item = {item} key={item._id} handleDelete={()=>handleDelete(item._id)} />
                      ))}
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default Home
