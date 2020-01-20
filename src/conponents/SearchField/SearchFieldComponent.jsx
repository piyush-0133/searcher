import React from "react";
import './searchFieldCom.css';
export const SearchField = ({placehold,handleChange}) => {
    
return(
        
    <input className="search" type='search' placeholder={placehold} 
        onChange={handleChange}
    />
    )
    
}