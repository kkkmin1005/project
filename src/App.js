import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react';
import LoginPage from './loginpage';



function App() {
  const [loginState, setLoginState] = useState('Login'); 
  const [logurlState, setLogurlState]= useState('/login');

  return (
    <div className="App">
  
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/home">SAMSAMOO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/funding">Funding</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href={logurlState}>{loginState}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Routes>
        <Route path='/login' element={<LoginPage setLoginState={setLoginState} setLogurlState={setLogurlState}/>} />
    </Routes>  

    </div>
  );
}

export default App;
