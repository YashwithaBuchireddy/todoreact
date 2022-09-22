import React from 'react'
import Navbar2 from '../components/Navbar1'
import background from "../todo2.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

export default function Login() {

  




  return (

    <>
  <Navbar2/>
  <body style={{ backgroundImage: `url(${background})` ,
  padding: "260px 25px",
  textAlign: "center",
  marginTop: "0px"    
  }}> 
  
    <form>
    <h3>Log In</h3>

    <div className="mb-3">
      <label>Username</label>
      <input type="text" className="form-control" placeholder="User name" />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <div className="d-grid">
    <Button><Link to="/createtodo"style={{color:"white",textDecoration:"none"}}>Log in</Link></Button>
    </div>

  </form>
  </body>
  </>
  )
}
