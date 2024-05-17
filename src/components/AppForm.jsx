import { Container, Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AppForm() {
  return ( 
    
    <Col>
    <Col>
    <Container className='bg-secondary mt-5'>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMobile">
        <Form.Label>Mobile No:</Form.Label>
        <Form.Control type="number" placeholder="Your Mobile No." />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formId">
        <Form.Label>AdharCar No.</Form.Label>
        <Form.Control type="number" placeholder="**** **** ****" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formId">
        <Form.Label>PAN No.</Form.Label>
        <Form.Control type="number" placeholder="PAN Card No." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="HouseNo. City Dist" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formZip">
        <Form.Label>PAN No.</Form.Label>
        <Form.Control type="Postal code" placeholder="*****" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </Col>
    </Col>
    
    
  );
}

export default AppForm;