import React from "react";
import "../../App.css";
import Nav from 'react-bootstrap/Nav'



function NavTabs({currentPage, handlePageChange }) {

  
  return(
    <div className="header-color"> 
    <header className="uk-navbar-container"> 
      <h1 className="">Brittney Portfolio</h1>
      <div className="uk-position-top" >
    <Nav className="uk-navbar-nav uk-align-right" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="#Home" eventKey="link-1"  onClick={() => handlePageChange("Home")} >Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#Resume" eventKey="link-2" onClick={() => handlePageChange("Resume")}>Resume and More</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#Projects" eventKey="link-3" onClick={() => handlePageChange("Projects")}>Projects</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    </Nav.Item>
  </Nav>
 </div>
  </header>
</div>
  )
}
export default NavTabs;