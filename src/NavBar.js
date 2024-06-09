import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
    
      <Navbar bg="skyblue" data-bs-theme="light" fixed='top' width='100%'>
        <Container>
          <Navbar.Brand href="/">CRUD APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"><b>HOME</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/dashboard/addproduct"><b>ADD PRODUCT</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/dashboard/viewallproducts"><b>VIEW ALL PRODUCTS</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/dashboard/deleteproduct"><b>DELETE PRODUCT</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/dashboard/viewallproductstoBuy"><b>PRODUCTS </b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/dashboard/sellerRegistration"><b>SELLER REGISTRATION </b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/dashboard/login"><b>LOGIN </b></Nav.Link>&nbsp;&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;