
import React from 'react'
import Navbar1 from '../components/Navbar1'
import background from "../todo2.png"

export default function About() {




  return (
   <><div>
        <Navbar1 />
        <body
          style={{ backgroundImage: `url(${background})` ,
          padding: "320px 25px",
          textAlign: "center",
          marginTop: "0px"    
          }}>   

         <h1> "CHECK YOUR LIFE AND YOUR BOXES" </h1>   
         <br></br>
     <h3><i>'<u>To Do is a task management app to help you stay organized and manage your day-to-day tasks'</u></i> </h3>   
          </body>
       </div></>
  )
}
