import Navbar from '../components/Navbar/Navbar';
import useFetch from '../hooks/useFetch';
import constants from '../config/constants';
import UserList from '../components/UserList/UserList';
import Graphics from '../components/Graphics/Graphics';
import { Container } from 'react-bootstrap';

const Main = () => {
  const { data, loading, error, refetch } = useFetch(constants.getUsers);
  if (loading) return <h5>loading...</h5>;
  if (error) {
  }

  return (
    <>
      <Navbar refetch={refetch} />
      <Container className="mt-5 bg-light border rounded p-4 d-flex justify-content-around">
        <UserList users={data} />
        <Graphics users={data} />
      </Container>
    </>
  );
};

export default Main;
