import NavBar from './NavBar';
import { useOutlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout() {
  const outlet = useOutlet();

  return (
    <>
    <div>
      <Row>
        <Col md="auto"><NavBar/></Col>
        <Col>{outlet}</Col>
      </Row>
    </div>
    </>
  );
}

export default Layout;