import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: signin action
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div>
          <h1>Sigh In</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <button type="submit" className="primary">
            Singn In
          </button>
        </div>
        <div>
          <label htmlFor=""></label>
          <div>
            New customer ? {""}
            <Link to="/register">Create Your Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
