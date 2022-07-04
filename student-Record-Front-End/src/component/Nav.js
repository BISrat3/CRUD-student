import React from "react";
import {Link} from "react-router-dom"

function Header(){
  return(
    <nav className="Nav">
      <Link to="/">
        <div> Student Record</div>
      </Link>
    </nav>
  )
}

export default Header
// import React from "react";
// // import Navbar from "react-bootstrap/Navbar";
// // import NavDropdown from "react-bootstrap/NavDropdown";
// // import Container from "react-bootstrap/Container"

// const Nav = () => {
//   return (
//     <>
//       <Navbar bg="success" expand="lg">
//         <Container>
//           <Navbar.Brand href="/">Student App</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Link</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Nav