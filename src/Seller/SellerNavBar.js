import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="skyblue" data-bs-theme="light" fixed='top' width='100%'>
        <Container>
          <Navbar.Brand href="/seller">SELLER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/seller"><b>HOME</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/seller/addlisting"><b>ADD LISTING</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/seller/editlisting"><b>EDIT LISTING</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/seller/viewallorders"><b>ORDERS</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/seller/viewnotifications"><b>NOTIFICATIONS</b></Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/dashboard/login"><b>LOGOUT </b></Nav.Link>&nbsp;&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;