import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavbarComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='mb-5' fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">ReactGPT</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/posts">Posts</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent;