'use client'

// import Link from 'next/link'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Table from 'react-bootstrap/Table';

function AppFooter() {
    return (
        <div style={{ backgroundColor: '#f8f9fa', padding: '1rem 0', textAlign: 'center' }}>
            <Container>
                <p>&copy; {new Date().getFullYear()} Anh Duc. Tập Tành học nextjs.</p>
            </Container>
        </div>
    )
}
export default AppFooter;