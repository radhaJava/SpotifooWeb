import logo from './assets/logo.png';
import home from "./assets/icons/home.svg";
import search from "./assets/icons/search.svg";

 const Navbar=()=>
{
     return (
        <nav className='nav' >
        <img className='logoSpotifoo' src ={logo}/>
        <button className='home' >
        <img className ='homeIcon' src ={home}/>
        <label className='homelabel' >Home </label>
        </button>
         <button className ='search'>
          <img className='searchIcon' src ={search}/>
          <label className ='searchLabel'> Search </label>
         </button>
  </nav>
    );
}
export default Navbar; 

























