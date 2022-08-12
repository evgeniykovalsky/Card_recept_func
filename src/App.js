
import './App.css';
import React, { useState } from 'react';



export default function App (props) {
    

    const[description,setDescription]= useState(false)


 

  return (
 

       <div className="conteiner">
    <div className="head">{props.data.name}</div>

    <div className="mainBody">
        <div className="picture"> 
        <img src={props.data.image3} alt={props.data.id}/>
        </div>
        <div className="description">
            <p><span>Назва страви :</span> {props.data.name}</p>
            <p><span>Інгредієнти для приготування:</span> </p>
           <p> <ul>
                <li>{props.data.ingredient1}</li>
                <li>{props.data.ingredient2}</li>
                <li>{props.data.ingredient3}</li>
                <li>{props.data.ingredient4}</li>
                <li>{props.data.ingredient5}</li>
                <li>{props.data.ingredient6}</li>
            </ul></p>
            <p className="lsDesc"><span>Опис страви:</span>{props.data.description}</p>
                   </div>
    </div>
    <div className="footer">
        
        <button 
            onClick={()=>setDescription(prev =>!prev)}
            >{description? 'Cкрыть':'Подробнее..'}</button>
            {description && <p>{props.data.allDescription}</p>}
    </div>
    
 </div>
   
  );

}


