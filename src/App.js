import { React, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function App() {
  const [registrationForm, setRegistrationForm] = useState({
    full_name: "",
    email: "",
    age: 0,
  });

  const handleChange = (targetState, value) => {
    setRegistrationForm({
      ...registrationForm,
      [targetState]: value,
    });
  };

  const registraterNewAccount = () => {
    alert("Berhasil mendaftarkan akun baru");
  };

  return (
    <Container style={{ display: "block", width: 700, padding: 30 }}>
      <h4 className="text-center">Form Registration</h4>
      <Form
        onSubmit={(event) => {
          registraterNewAccount();
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <Form.Group>
          <Form.Label>Nama Lengkap:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nama Lengkap"
            value={registrationForm.full_name}
            onChange={(event) => {
              handleChange("full_name", event.target.value);
            }}
          />
          <Form.Control.Feedback>Fullname harus diisi</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Alamat Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Alamat Email"
            value={registrationForm.email}
            onChange={(event) => {
              handleChange("email", event.target.value);
            }}
          />
          <Form.Control.Feedback>Fullname harus diisi</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Umur:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Umur"
            value={registrationForm.age}
            onChange={(event) => {
              handleChange("age", event.target.value);
            }}
          />
          <Form.Control.Feedback>Fullname harus diisi</Form.Control.Feedback>
        </Form.Group>
        <br />
        <div className="text-center">
          <Button variant="success" type="sumbit">
            Daftar
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default App;
