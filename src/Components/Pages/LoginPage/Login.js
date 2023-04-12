import AuthContext from "../../../Store/AuthContext";
import "./Login.css";
import { useRef, useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const navigate = useNavigate()

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAi7YY_QKd44i8iRs5k9wNCmoPA4SeEvoY";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAi7YY_QKd44i8iRs5k9wNCmoPA4SeEvoY";
    }

    fetch(url, {
      method: "Post",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        authCtx.login(data.idToken);
        navigate('/store', `replace: true`);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.message);
      });
  };

  return (
    <div className="inputform">
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Email</label>
        <input type="text" id="ftitle" ref={emailInputRef} />

        <label htmlFor="openingtext">Password</label>
        <input type="text" id="fopeningtext" ref={passwordInputRef} />

        <span id="button">
          <div className="parentbutton">
            <button>{isLogin ? "Login" : "Create Account"}</button>
          </div>
          <div>
          <button className="childbutton" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
          </div>
        </span>
      </form>
    </div>
  );
};

export default Login;
