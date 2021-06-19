import React, { useEffect, useState } from 'react';

import './Edit.css';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';



const EditInfo = (props) => {

    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [editMsg, setEditMsg] = useState('');
    const [infoData, setInfoData] = useState([]);

    const history = useHistory();



// getting data from mongo
useEffect(()=>{

axios.get(`/info/${props.match.params.id}`)
.then(res=>{

setName(res.data.name);
setOccupation(res.data.occupation);
setEmail(res.data.email);
setDate(res.data.date);

}).catch(err=>console.log(err))


},[]);




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





// update data
    const handleSubmit=(e)=>{

        e.preventDefault();
    
        const itemdata = {
            name,
            occupation,
            email,
            date
      }

    axios.put(`/info/update/${props.match.params.id}`, itemdata)
    .then(res=>{
        console.log(res.data.msg);
        setEditMsg(res.data.msg);

        setTimeout(() => {
            setEditMsg(res.data.msg); 
            history.push('/add')
            
            
            }, 2000);

        
    }).catch(err=>console.log(err))


    }
    
    

    return (
        <div className="edit">
           <h1>Update info</h1>
           <div className="inside-container">
    <h4 className="postedMsg">{editMsg}</h4>
               <br/>
               <div className="edit-center">
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

               <DatePicker selected={date ? new Date(date) : null} onChange={handleDate} />

                  <button type="submit">Update</button>
                  <Link to="/add"> <button type="button" className="backBtn">Back</button></Link>



                   </form>
               </div>
           </div>

        </div>
    )
}

export default EditInfo
// selected={date ? new Date(date) : null}