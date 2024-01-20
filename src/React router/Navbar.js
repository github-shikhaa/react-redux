import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../src/App.css';
const Navbar = () => {
  return (
 <>
 {/* <Link to='/'>Home</Link>
 <Link to='/about'>About</Link>
 <Link to='/contact'>Contact</Link>
 <Link to='/user/anil'>Anil</Link>
 <Link to='/user/peter'>Peter</Link> */}

 <ul className='navbar'>
<li><NavLink to='/'
style={({isActive})=>{
    return{
        backgroundColor : isActive ?'green':'red'
    }
}}>Home</NavLink></li>
<li><NavLink to='/about'
style={({isActive})=>{
    return{
        background:isActive ? 'green' :'red'
    }
}}>About</NavLink></li>
<li><NavLink to='/contact' style={({isActive})=>{
    return{
        background:isActive ? 'green' :'red'
    }
}}>Contact</NavLink></li>

 </ul>
 </>
  )
}

export default Navbar