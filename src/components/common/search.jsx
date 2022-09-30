import React from 'react';
import { useState } from 'react';


const SearchMenu = ({jobs,handleSubmit}) => {
  return ( 
    <input
            className="form-control search me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e)=>handleSubmit(e)}
          />
   );
}
 
export default SearchMenu;