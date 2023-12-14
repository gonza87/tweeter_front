import React, { useState } from "react";
import axios from "axios";
import { Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "./register.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const apiUrl = "http://localhost:3000/users";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      username: formData.username,
      email: formData.email,
      description: "Descripcion",
      photo: "es un imagen",
      password: formData.password,
    };

    axios
      .post(apiUrl, userData)
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
    navigate("/login");
  };

  return (
    <div className="containerProfile container-fluid">
      <div className="column1 col-7 ">
        <svg
          className="iconoX"
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="51"
          viewBox="0 0 56 51"
          fill="none"
        >
          <path
            d="M44.1033 0H52.6903L33.9302 21.6031L56 51H38.7195L25.1848 33.1709L9.69805 51H1.10583L21.1716 27.8931L0 0H17.7192L29.9534 16.2965L44.1033 0ZM41.0895 45.8215H45.8477L15.1337 4.90646H10.0277L41.0895 45.8215Z"
            fill="white"
          />
        </svg>
        <h3 className="textCol5">Hi! Welcome to X Clone.</h3>
      </div>
      <div className="column2 col-12 col-md-5">
        <h1 className="signUp">Sign up</h1>
        <p className="subTitle">Create an account and start using X</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <div className="form-group">
              <InputGroup size="lg">
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="First name"
                  onChange={handleChange}
                />
              </InputGroup>
            </div>

            <div className="form-group">
              <InputGroup size="lg">
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Last name"
                  onChange={handleChange}
                />
              </InputGroup>
            </div>

            <div className="form-group">
              <InputGroup size="lg">
                <Form.Control
                  type="text"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
              </InputGroup>
            </div>

            <div className="form-group">
              <InputGroup size="lg">
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  placeholder="Username"
                  onChange={handleChange}
                />
              </InputGroup>
            </div>

            <div className="form-group">
              <InputGroup size="lg">
                <InputGroup.Text>Choose file</InputGroup.Text>
                <Form.Control
                  type="file" // Cambiado a tipo 'file'
                  name="file" // Cambiado a un nombre más apropiado, por ejemplo, 'file'
                  onChange={handleChange}
                />
              </InputGroup>
            </div>

            <div className="form-group">
              <InputGroup size="lg">
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
          </div>
          <br />
          <div className="button">
            <button className="buttonLogin" type="submit">
              Sign up
            </button>
          </div>
        </form>

        <p>
          <div className="pp">
            Already have an account?
            <a>
              <Link to="/profile">Sign in</Link>
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Register;
