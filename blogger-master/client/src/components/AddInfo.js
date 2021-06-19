import React, { useEffect, useState } from 'react';

import Informations from './Informations';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';







const AddInfo = () => {

const [name, setName] = useState('');
const [occupation, setOccupation] = useState('');
const [email, setEmail] = useState('');
const [date, setDate] = useState(new Date());
const [postMsg, setPostMsg] = useState('');
const [delMsg, setDelMsg] = useState('');
const [infoData, setInfoData] = useState([]);


// getting data


useEffect(()=>{

axios.get('/info')
.then(res=>{

// console.log(res.data);
setInfoData(res.data)

}).catch(err=>console.log(err))

},[infoData])


// cnanging name
const onChangeName=(e)=>{
setName(e.target.value);

}

// cnanging occupation
const onChangeOcuppation=(e)=>{
setOccupation(e.target.value);

}


// cnanging email
const onChangeEmail=(e)=>{
setEmail(e.target.value);

}



//changing date
const  handleDate = (date)=>{
setDate(date)

}



// add info

const handleSubmit = (e)=>{
e.preventDefault();

const itemdata = {
    name,
    occupation,
    email,
    date
}

axios.post('/info', itemdata)
.then(res=>{

setPostMsg(res.data.msg);

setName('');
setOccupation('');
setEmail('');
setDate('');

setTimeout(() => {
    setPostMsg('');  
}, 2000);

}).catch(err=>console.log(err))

}


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
        <div className="add_product">
           <div className="inside-container">
               
               <h1>Add - Get products</h1>
               <div className="add_product-center">
                   {/* form */}
                   <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="inputs"
                    placeholder="your name..."
                    onChange={onChangeName}
                    value={name}
                   

                    />

                   <label htmlFor="occupation">Occupation</label>
                    <input type="text"
                    placeholder="your occupation..." className="inputs"
                     value={occupation}
                    onChange={onChangeOcuppation}
                    
                    />

                  <label htmlFor="occupation">Email</label>
                    <input type="email"
                    placeholder="your email..."
                    className="inputs"
                    value={email}
                    onChange={onChangeEmail}
                    
                    />

                

                    <DatePicker selected={date} onChange={handleDate} />
                
                <button type="submit">Add</button>
                    

                   </form>

                   {/* end of form */}

           <div className="informations">
             <h4 className="postedMsg">{postMsg}</h4>
             <h4 className="deletedMsg">{delMsg}</h4>
               <div className="informations-center">
                  
                  {infoData.map(item=>(
                       <Informations item={item} key={item._id} handleDelete={()=>handleDelete(item._id)}  />
                  ))}
                 
               </div>
           </div>

           </div> 
               </div>
               
        </div>
    )
}

export default AddInfo
