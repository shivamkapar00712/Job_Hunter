import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../css/search.css'

const Search = () => {
  return ( 
    <div className='search-container'>
    <input type="search" className='search-body' required />
    <i className='search-icon-container'>
    <FontAwesomeIcon icon={faSearch} className='search-icon' />
    </i>
  </div>
   );
}
 
export default Search;