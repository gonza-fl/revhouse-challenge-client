import Container from 'react-bootstrap/Container';
import BNavbar from 'react-bootstrap/Navbar';
import Form from '../Form/Form';

const Navbar = ({ refetch }) => {
  return (
    <BNavbar bg="info" expand="lg">
      <Container>
        <BNavbar.Brand href="#home">RevHouse Participations</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Form refetch={refetch} />
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default Navbar;
