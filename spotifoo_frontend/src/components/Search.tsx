//project files
import React, { useState ,useEffect } from 'react';
import "./../styles/Search.css";

const Search = () => {
  return (
    <div>
    <div className='search-page-div'> 
    <header>
      Search
      <div className="form-group has-search">
        <input type="text"  className="form-control" placeholder="Search"/>
  </div>
       </header>
       </div>
       <section className= 'search-page-section'> Results </section>
   </div>
  )
}

export default Search;

