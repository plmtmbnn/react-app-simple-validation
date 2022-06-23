import { React, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

import Joi from "joi";

function App() {
  const [registrationForm, setRegistrationForm] = useState({
    full_name: null,
    email: null,
    age: 0,
  });

  const [finalStatus, setFinalStatus] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);

  const [registrationFormValidation, setRegistrationFormValidation] = useState({
    full_name: false,
    email: false,
    age: false,
  });

  const handleChange = (targetState, value) => {
    setRegistrationForm({
      ...registrationForm,
      [targetState]: value,
    });
    setRegistrationFormValidation({
      ...registrationFormValidation,
      [targetState]: false,
    });
  };

  const validateFormWithJoi = () => {
    let result = false;
    try {
      const schema = Joi.object().keys({
        full_name: Joi.string()
          .regex(/^[a-zA-Z\s]*$/)
          .required(),
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required(),
        age: Joi.number().min(17).max(30).optional(),
      });

      const validation = schema.validate(registrationForm, {
        abortEarly: false,
      });
      if (validation.error) {
        let newValidationStatus = {};

        Array(...validation.error.details).map((e) => {
          console.log(e.context.key);
          newValidationStatus[e.context.key] = true;
        });
        setRegistrationFormValidation({
          ...registrationFormValidation,
          ...newValidationStatus,
        });
      } else {
        result = true;
      }
    } catch (error) {
      console.log("error", error);
    }
    return result;
  };

  const registerNewAccount = () => {
    if (validateFormWithJoi()) {
      setFinalStatus(true);
      //LOGIC / HIT BACKEND API
    } else {
      setFinalStatus(false);
    }
    setisSubmit(true);
  };

  return (
    <Container style={{ display: "block", width: 500, padding: 30 }} sm>
      <h4 className="text-center">Form Registration</h4>
      <Form
        onSubmit={(event) => {
          registerNewAccount();
          event.preventDefault();
          event.stopPropagation();
        }}
        sm
      >
        <Form.Group>
          <Form.Label>Nama Lengkap *:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nama Lengkap"
            value={registrationForm.full_name}
            onChange={(event) => {
              handleChange("full_name", event.target.value);
            }}
            isInvalid={registrationFormValidation.full_name}
          />
          <Form.Control.Feedback type={"invalid"}>
            Fullname harus diisi
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Alamat Email *:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Alamat Email"
            value={registrationForm.email}
            onChange={(event) => {
              handleChange("email", event.target.value);
            }}
            isInvalid={registrationFormValidation.email}
          />
          <Form.Control.Feedback type={"invalid"}>
            Email harus diisi
          </Form.Control.Feedback>
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
            isInvalid={registrationFormValidation.age}
          />
          <Form.Control.Feedback type={"invalid"}>
            Umur harus diisi
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Alert
          hidden={isSubmit ? false : true}
          variant={finalStatus ? "success" : "danger"}
        >
          {finalStatus
            ? "Berhasil didaftarkan!"
            : "Gagal, silahkan cek data Anda!"}
        </Alert>
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
