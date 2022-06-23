import { React } from "react";
import { Form, Button, Container } from "react-bootstrap";

function App() {
  return (
    <Container style={{ display: "block", width: 700, padding: 30 }}>
      <h4 className="text-center">React-Bootstrap Form Component</h4>
      <Form>
        <Form.Group>
          <Form.Label>full name:</Form.Label>
          <Form.Control type="text" placeholder="full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>email address:</Form.Label>
          <Form.Control type="email" placeholder="your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>age:</Form.Label>
          <Form.Control type="number" placeholder="age" />
        </Form.Group>
        <br />
        <div className="text-center">
          <Button variant="primary" type="submit">
            Click here to submit form
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default App;
