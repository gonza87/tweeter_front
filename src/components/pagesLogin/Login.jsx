import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userReducer";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiUrl = import.meta.env.VITE_API_URL/+token;

  const [loginData, setLoginData] = useState({
    emailOrUsername: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación básica en el cliente
    if (!loginData.emailOrUsername || !loginData.password) {
      Swal.fire({
        text: "Complete all fields please",
        icon: "warning",
      });
      return;
    }

    setLoading(true);

    axios
      .post(apiUrl, loginData)
      .then((response) => {
        dispatch(setUser(response.data));
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);

        if (error.response) {
          // Manejar errores específicos de la respuesta del servidor
          Swal.fire({
            text: error.response.data.error || "Error en la solicitud",
            icon: "error",
          });
        } else {
          // Manejar otros errores
          Swal.fire({
            text: "Error en la solicitud",
            icon: "error",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-7 loginIzquierda tex-center"
          style={{ backgroundColor: "#28384c" }}
        >
          <div className="icon">
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
          </div>

          <h3 className="textCol5">Hey! Nice to see you again.</h3>
        </div>
        <div className="col-md-5 col-sm-12 p-5 loginDerecha">
          <h1>Login</h1>
          <p className="subTitle">Ready to start using X?</p>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
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
            </div>

            <div className="button">
              <button className="buttonLog" type="submit">
                Sign in
              </button>
            </div>
          </form>
          <p>
            <div className="pp">
              Don't have an account?
              <a>
                <Link className="link" to="/">
                  Sign up
                </Link>
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
