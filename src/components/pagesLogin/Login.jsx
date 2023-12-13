import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userReducer";
import { useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Swal from 'sweetalert2'
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    emailOrUsername: "",
    password: "",
  });

  const dispatch = useDispatch();
  const apiUrl = "http://localhost:3000/token";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de inicio de sesión aquí
    if (!loginData.emailOrUsername || !loginData.password) {
      Swal.fire({
        text: "Complete all fields please",
        icon: "warning"
      });
      return;
    }
   

    axios
      .post(apiUrl, loginData)
      .then((response) => {
        dispatch(setUser(response.data));
        navigate("/home");
        console.log("Respuesta exitosa:", response.data);
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });

    console.log("click");

    console.log("Login data:", loginData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-7 loginIzquierda tex-center" style={{ backgroundColor: '#28384c' }}>
          <svg
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
          <h2 className="">Hey! Nice to see you again.</h2>
        </div>
        <div className="col-md-5 col-sm-12 p-5 loginDerecha">
        <h1>Login</h1>
        <p className="subTitle">Ready to start using X?</p>
        <form onSubmit={handleSubmit}>
          <Form.Group>
            <InputGroup size="lg" className="mb-3">
              <Form.Control
                type="text"
                name="emailOrUsername"
                placeholder="Username or email"
                value={loginData.email}
                onChange={handleInputChange}
              />
            </InputGroup>
          </Form.Group>
          
          <Form.Group>
            <InputGroup size="lg">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleInputChange}
              />
            </InputGroup>
          </Form.Group>
          
          
          <Button variant="primary" type="submit" className="btnLogin mt-4">Login</Button>{' '}
          
        </form>
        <p className="text-center mt-5">
          Don't have an account? <a><Link to="/">Sign up</Link></a>
        </p>
      </div>
      </div>
      
      
    </div>
  );
}

export default Login;
