import Navbar from '../components/Navbar/Navbar';
import useFetch from '../hooks/useFetch';
import constants from '../config/constants';
import UserList from '../components/UserList/UserList';
import Graphics from '../components/Graphics/Graphics';
import { Col, Container, Row } from 'react-bootstrap';
import Spinner from '../components/Loader/Spinner';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const Main = () => {
  const { data, loading, error, refetch } = useFetch(constants.getUsers);
  useEffect(() => {
    if (error) {
      console.log("🚀 ~ file: Main.jsx ~ line 13 ~ Main ~ error", error)
      
      // error?.map((e) => toast.error(e.msg));
      toast.error(error[0].msg)
    }
  }, [error])
  

  return (
    <Container fluid className="border rounded p-0 border border-0">
      <Row className="bg-info">
        <Col md={12} className="d-flex justify-content-center">
          <Navbar refetch={refetch} />
        </Col>
      </Row>
      {(loading && (
        <Container className='p-5'>
        <Row className="d-flex justify-content-center py-2 px-5">
          <Col md='auto'>
            <Spinner />
          </Col>
        </Row>
      </Container>
      )) || (
        <Row className="d-flex justify-content-around py-2 px-5">
          <Col md={6} className="d-flex align-items-center">
            <UserList users={data} />
          </Col>
          <Col md={4} className="d-flex align-items-center">
            <Graphics users={data} />
          </Col>
        </Row>
      )}
      <Toaster />
    </Container>
  );
};

export default Main;
