import React from 'react';
import {Link} from 'react-router-dom';

const Informations = (props) => {

 const {item, handleDelete} = props;


    return (
        <div className="single-info">
           <div className="info dateIcons">
    <div className="date">{item.date.substring(0,10)}</div>
               <div className="icons">
                   <Link to={`/edit/${item._id}`}><i className="fas fa-edit"></i></Link>
                   <i className="fas fa-trash"
                   onClick={handleDelete}
                   
                   ></i>

               </div>
           </div>


           <div className="info">
               <label htmlFor="name">Name</label>
              <p>{item.name}</p>
           </div>

           <div className="info">
               <label htmlFor="occupation">Occupation</label>
    <p>{item.occupation}</p>
           </div>

           <div className="info">
               <label htmlFor="occupation">Email</label>
           <p>{item.email}</p>
           </div>
        </div>
    )
}

export default Informations
