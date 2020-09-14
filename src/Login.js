import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNLTOUGcsMuAryJfdk6V60A-PFmv-8AY2vDQ&usqp=CAU"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>By signing in, you are agreeing to our terms & conditions.</p>
        <button className="login__registerButton">Create an account</button>
      </div>
    </div>
  );
}

export default Login;
