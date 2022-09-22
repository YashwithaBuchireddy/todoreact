
import React from 'react'
import Navbar1 from '../components/Navbar1'
import background from "../todo2.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

export default function Signup() {




  return (

    <>
  <Navbar1/>
  <body style={{ backgroundImage: `url(${background})` ,
  padding: "200px 25px",
  textAlign: "center",
  marginTop: "0px"    
  }}> 
  
    <form>
    <h3>Sign Up</h3>

    <div className="mb-3">
      <label>Username</label>
      <input type="text" className="form-control" placeholder="User name" />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
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
    <Button><Link to="/about"style={{color:"white",textDecoration:"none"}}>Sign Up</Link></Button>
    </div>
    <p className="forgot-password text-right">
      Already registered <a href="/login">sign in?</a>
    </p>
  </form>
  </body>
  </>
  )
}
