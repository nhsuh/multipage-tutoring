import React from 'react'
import numberLine from './images/numberLine.png'
import Navbar from './Navbar'
export default function Home() {
    const homeColors = {
        color: "lightGrey"
    }
    const lineStyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%"
    }
    const imageStyle = {
        width : "100%"
    }
  return (
    <div style = {homeColors}>
        <Navbar />
        <h3>Learn about integers and their operations!</h3>
        <img style = {imageStyle} src = {numberLine}/>
    </div>
  )
}
