import React from "react";
import "./login.css";

class Login extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     error : null,
  //     isLoaded:false,
  //     user : [],

  //   };
  // }

  //user registration
  state = {
    
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitNew = (e) => {
    e.preventDefault();
    fetch("http://localhost:9911/user/addUser", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
      // header("Location:")
  };

  //user login
  submitLogin = (e) => {
    e.preventDefault();
    fetch("", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.Email,
        password: this.state.Password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          localStorage.setItem("user", res.id);

          this.props.history.push("/DashBoard");
        } else {
          alert("Please Enter Correct Password");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="body-login">
        <div class="container-login" id="container-login">
          <div class="form-container-login sign-up-container-login">
            <form className="form-login" onSubmit={this.submitNew}>
              <h2>Create Account</h2>
              <div class="social-container-login">
                <a href="#" class="social">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input
              className="input-login"
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={this.onChange}
                value={
                  this.state.firstName === null ? "" : this.state.firstName
                }
              />
              <input
              className="input-login"
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={this.onChange}
                value={this.state.lastName === null ? "" : this.state.lastName}
              />
              <input
              className="input-login"
                type="number"
                name="age"
                placeholder="Age"
                onChange={this.onChange}
                value={this.state.age === null ? "" : this.state.age}
              />
              <input
              className="input-login"
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.onChange}
                value={this.state.email === null ? "" : this.state.email}
              />
              <input
              className="input-login"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
                value={this.state.password === null ? "" : this.state.password}
              />
              <button className="button-login" type="submit">Sign Up</button>
            </form>
          </div>

          <div class="form-container-login sign-in-container-login">
            <form className="form-login"  onSubmit={this.submitLogin}>
              <h2>Sign in</h2>
              <div class="social-container-login">
                <a href="#" class="social">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input
              className="input-login"
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.onChange}
                value={this.state.email === null ? "" : this.state.email}
              />
              <input
              className="input-login"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
                value={this.state.password === null ? "" : this.state.password}
              />
              <a href="#">Forgot your password?</a>
              <button className="button-login" type="submit">Sign In</button>
            </form>
          </div>
          <div class="overlay-container-login">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button class="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
