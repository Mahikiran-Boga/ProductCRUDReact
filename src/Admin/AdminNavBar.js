import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="skyblue" data-bs-theme="light" fixed='top' width='100%'>
        <Container>
          <Navbar.Brand href="/admin/">ADMIN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admin/adminhome"><b>HOME</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/admin/addproduct"><b>PRODUCT REQUESTS</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/admin/deleteproduct"><b>DELETE PRODUCT</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/admin/viewallusers"><b>VIEW ALL USERS</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/admin/viewallsellers"><b>VIEW ALL SELLERS </b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/admin/viewallorders"><b>VIEW ALL ORDERS </b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/adminlogin"><b>LOGOUT </b></Nav.Link>&nbsp;&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;