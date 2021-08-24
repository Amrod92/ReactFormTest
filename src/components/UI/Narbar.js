import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../img/logo.PNG';
import './Navbar.css';

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        {/* NAVBAR */}
        <Navbar bg='light' variant='light' expand='lg'>
          <Navbar.Brand href='/'>
            <img
              alt=''
              src={logo}
              width='130'
              height='70'
              className='d-inline-block align-top'
              style={{
                marginLeft: '50px',
                marginTop: '-8px',
                justifyContent: 'center',
                alignContent: 'center'
              }}
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' className='sandwich' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='ml-auto'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/insertdata'>Insert Data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
