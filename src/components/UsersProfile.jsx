import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { setUser } from "../redux/userReducer";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./userProfile.css";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const [userTweets, setUserTweets] = useState([]);
  const [user, setDataUser] = useState({});
  const token = useSelector((state) => state.user.token);

  const apiUrl = `http://localhost:3000/users/${username}`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(apiUrl, config)
      .then((response) => {
        setUserTweets(response.data.tweets);
        setDataUser(response.data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error.message);
      });
  }, [username]);

  return (
    <div className="container-tw">
      <div className="row">
        <div className="col-md-3 col-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="233"
            viewBox="0 0 52 233"
            fill="none"
          >
            <Link to="/home">
              <circle cx="26" cy="80" r="28" fill="transparent" />
              <path
                d="M37.4618 68.0546L26.5243 62.1304C26.3663 62.0448 26.1896 62 26.0101 62C25.8307 62 25.654 62.0448 25.496 62.1304L14.564 68.0546C14.3531 68.1704 14.1866 68.3532 14.0905 68.5743C13.9944 68.7954 13.9742 69.0423 14.033 69.2761C14.0919 69.51 14.2264 69.7177 14.4156 69.8664C14.6047 70.0152 14.8378 70.0967 15.0781 70.0982C15.2513 70.0982 15.4288 70.0569 15.5922 69.9678L16.3867 69.5376L18.1077 81.7598C18.3415 83.0787 19.5256 84 20.9868 84H31.0335C32.4947 84 33.6788 83.0787 33.9148 81.7316L35.6336 69.5365L36.4313 69.9689C36.6829 70.0959 36.9739 70.1195 37.2425 70.0346C37.5111 69.9498 37.7362 69.7633 37.87 69.5146C38.0038 69.2659 38.0358 68.9746 37.9592 68.7027C37.8825 68.4307 37.7033 68.1994 37.4596 68.0579L37.4618 68.0546ZM26.0101 76.8383C25.0772 76.8383 24.1824 76.4663 23.5227 75.8042C22.863 75.142 22.4924 74.2439 22.4924 73.3075C22.4924 72.371 22.863 71.4729 23.5227 70.8108C24.1824 70.1486 25.0772 69.7766 26.0101 69.7766C26.9431 69.7766 27.8379 70.1486 28.4976 70.8108C29.1573 71.4729 29.5279 72.371 29.5279 73.3075C29.5279 74.2439 29.1573 75.142 28.4976 75.8042C27.8379 76.4663 26.9431 76.8383 26.0101 76.8383Z"
                fill="white"
              />
            </Link>
            <Link to="/profile">
              <circle cx="26" cy="135" r="28" fill="transparent" />
              <path
                d="M26.0001 132.989C27.4604 132.989 29.0954 132.827 30.1386 131.631C31.0159 130.625 31.3004 129.069 31.0073 126.88C30.5977 123.825 28.7257 122 26.0001 122C23.2745 122 21.4025 123.825 20.993 126.882C20.6998 129.069 20.9844 130.625 21.8616 131.631C22.9049 132.828 24.5398 132.989 26.0001 132.989ZM22.5945 127.097C22.7691 125.799 23.4427 123.622 26.0001 123.622C28.5576 123.622 29.2312 125.8 29.4057 127.097C29.6288 128.773 29.4672 129.938 28.9208 130.563C28.4304 131.126 27.5564 131.367 26.0001 131.367C24.4439 131.367 23.5698 131.126 23.0795 130.563C22.5331 129.938 22.3714 128.772 22.5945 127.097ZM34.9237 141.015C33.9786 137.201 30.3089 134.536 26.0001 134.536C21.6913 134.536 18.0217 137.201 17.0765 141.015C16.8911 141.763 17.0463 142.529 17.5022 143.113C17.9419 143.676 18.623 144 19.3699 144H32.6303C33.3772 144 34.0583 143.676 34.498 143.113C34.955 142.529 35.1091 141.764 34.9227 141.015H34.9237ZM33.2252 142.114C33.0894 142.287 32.8847 142.38 32.6303 142.38H19.3699C19.1166 142.38 18.9108 142.288 18.775 142.114C18.7009 142.014 18.6507 141.898 18.6283 141.775C18.6059 141.652 18.6118 141.526 18.6457 141.406C19.4109 138.318 22.4361 136.16 26.0001 136.16C29.5642 136.16 32.5894 138.317 33.3546 141.406C33.4192 141.668 33.3729 141.925 33.2252 142.114Z"
                fill="white"
              />
            </Link>
            <path
              d="M0 207C0 192.641 11.6406 181 26 181C40.3594 181 52 192.641 52 207C52 221.359 40.3594 233 26 233C11.6406 233 0 221.359 0 207Z"
              fill="#1D9BF0"
            />
            <Link to="/">
              <path
                d="M22.3218 201.018H18.5684V197.046C18.5684 196.565 18.2165 196.083 17.6301 196.083C17.0436 196.083 16.809 196.565 16.809 197.046V201.018H12.9383C12.4692 201.018 12 201.379 12 201.981C12 202.583 12.3519 202.944 12.9383 202.944H16.809V206.916C16.809 207.398 17.1609 207.879 17.7474 207.879C18.3338 207.879 18.6857 207.518 18.6857 206.916V202.824H22.5564C23.0256 202.824 23.4947 202.463 23.4947 201.861C23.4947 201.259 22.9083 201.018 22.3218 201.018ZM39.9158 195.12V195H39.7985C39.6812 195 29.0075 196.444 22.9083 209.083C18.4511 218.23 18.6857 220.999 19.0376 220.999C19.3895 221.119 23.0256 213.175 26.8963 209.925C32.9955 208.601 34.6376 205.592 34.6376 205.592C34.6376 205.592 32.8782 205.833 32.1745 205.833C31.2361 205.833 30.5324 205.592 30.1805 205.472C31.7053 204.027 32.9955 203.666 34.2857 203.425C35.3414 203.185 36.397 202.944 37.8045 201.981C40.385 200.055 40.0331 195.361 39.9158 195.12Z"
                fill="white"
              />
            </Link>
            <path
              d="M33.5584 0H37.5994L28.7711 10.1662L39.1569 24H31.0249L24.6556 15.6098L17.3677 24H13.3243L22.7671 13.1262L12.804 0H21.1424L26.8997 7.66892L33.5584 0ZM32.1402 21.5631H34.3793L19.9257 2.30892H17.5229L32.1402 21.5631Z"
              fill="white"
            />
          </svg>
          <div className="align-self-end mt-5 btnLogout">
            <Button
              variant="danger"
              onClick={() => {
                console.log("click");
                dispatch(setUser(null));
                //navigate("/login");
              }}
            >
              Logout
            </Button>{" "}
          </div>
        </div>

        <div className="col-md-5 col-8">
          <ListGroup>
            <div className="portada">
              <img
                className="portada"
                src="/public/Rectangle 8.png"
                alt="portadaImg"
              />
            </div>

            <div className="row descriptionUser">
              <div className="test">
              {user && user.photo && user.photo.startsWith("https:") ? (
                  <img
                    src={user.photo}
                    alt="User Avatar"
                    className="user-avatar circular-image"
                  />
                  ) : (
                  <img
                    src={`http://localhost:3000/img/${user.photo}`}
                    alt="User Avatar"
                    className="user-avatar circular-image"
                  />
                )}
                
              </div>
              <div className="col-6">
                <h3>{user.firstname + " " + user.lastname}</h3>
                <p>@{user.username}</p>
              </div>
              <div className="col-6 following">
                10 <span>Following</span> 19 <span>Followers</span>
              </div>
              <div className="col-12 mb-4">{user.description}</div>
            </div>

            {userTweets.map((tweet, index) => (
              <ListGroup.Item
                className="tweet-items"
                key={tweet.id}
                style={{
                  backgroundColor: "#15202B",
                  border: "1px solid #2E3F4F",
                  wordBreak: "break-word",
                }}
              >
                <div className="tweet-content-container">
                {user && user.photo && user.photo.startsWith("https:") ? (
                  <img
                    src={user.photo}
                    alt="User Avatar"
                    className="user-avatar circular-image"
                  />
                  ) : (
                  <img
                    src={`http://localhost:3000/img/${user.photo}`}
                    alt="User Avatar"
                    className="user-avatar circular-image"
                  />
                )}

                  <div className="tweet-info">
                    <div className="tweet-header">
                      <strong>{user.firstname + " " + user.lastname}</strong>{" "}
                      <span>@{user.username}</span>
                      <span> - {tweet.createdAt}</span>
                    </div>
                    <div className="tweet-content row">
                      <div className="col-12">{tweet.text}</div>
                      <div className="tweet-actions col-12 d-flex justify-content-between">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="action-icon left"
                          onClick={() => handleLikeTweet(index)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="col-md-3 derechaProfile">
          <div>
            <h3 className="titleHardk"> What’s happening </h3>

            <p className="tipoUno">Programming · Trending</p>
            <p className="tipoDos">#MongoVsSequelize</p>
            <p className="tipoUno">97.5K Tweets</p>

            <p className="tipoUno">Entertainment · Trending </p>
            <p className="tipoDos">#StarWars</p>
            <p className="tipoUno">97.5K Tweets</p>

            <p className="tipoUno">News · Trending</p>
            <p className="tipoDos">#LifeInMars</p>
            <p className="tipoUno">97.5K Tweets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;