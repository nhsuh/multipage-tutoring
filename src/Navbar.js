import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar( {correctness}) {
    const navbarColors = {
        margin: '20px',
        paddingTop: '30px',
        color: '#2BC9C8',
        textDecoration: 'none'
        
    }
    const navbar = {
        color: '#2BC9C8',
        paddingTop: '30px'
    }
    const title = {
        color: '#C92B7B'
    }
    const line1 = {
        border: "none",
        height: "10px",
        color: '#2BC9C8'
    }
    const line2= {
        border: "none",
        height: "10px",
        color: 'orange'
    }
    const line3 = {
        border: "none",
        height: "10px",
        color: 'lightgreen'
    }
  return (
    <div style = {navbar}>
        <div>
            <h1 style = {title}>Integer Operations Website</h1>
            <Link style = {navbarColors} to = "/multipage-tutoring">Home</Link>
            <Link style = {navbarColors} to = "/Addition"> Addition </Link>
            <Link style = {navbarColors} to = "/Subtraction"> Subtraction </Link>
        </div>
        {correctness === 0 && <hr style = {line1}/>}
        {correctness === -1 && <hr style = {line2}/>}
        {correctness === -2 && <hr style = {line2}/>}
        {correctness === 1 && <hr style = {line3}/>}
    </div>
  )
}
