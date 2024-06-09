import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="skyblue" data-bs-theme="light" fixed='top' width='100%'>
        <Container>
          <Navbar.Brand href="/seller">WELCOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"><b>HOME</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/products"><b>PRODUCTS</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/sellerlogin"><b>SELLER LOGIN</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/userlogin"><b>USER LOGIN</b></Nav.Link>&nbsp;&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;