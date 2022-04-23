import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function EditNav(){
    return(
        <>
            <div style={{position:'fixed',width:'100%',height:'auto'}}>
                    <Navbar variant="dark" className='py-3'>
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link className='text-dark' href="#home">Home</Nav.Link>
                                    <Nav.Link className='text-dark' href="/imageEdit">ImageEditor</Nav.Link>
                                    <Nav.Link className='text-dark' href="#pricing">Pricing</Nav.Link>
                                </Nav>
                        </Container>
                    </Navbar>
            </div>
        </>
    );
}