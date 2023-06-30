import { useState } from "react";
import Card from "./Card";
import "../styles/SigninForm.scss";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
  };

  return (
    <div className="container">
      <Card>
        <form onSubmit={handleSubmit} className="signin-card">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
          <div className="signin-links">
            <a href="/forgot-password">Forgot Password</a>
            <span> | </span>
            <a href="/signup">Sign Up</a>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SigninForm;
