'use client'

// import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Table from 'react-bootstrap/Table';
import Link from 'next/link';


function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link href={"/"}className='navbar-brand'>Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={"/salary"} className='nav-link'>Quản lí lương</Link>
            <Link href={"/leave"} className='nav-link'>Quản lí nghỉ phép</Link>
            <Link href={"/report"} className='nav-link'>Báo cáo và tài liệu</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;