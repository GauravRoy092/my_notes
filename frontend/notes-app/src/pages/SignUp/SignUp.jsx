import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Name are required");
      return;
    }
    if (!email) {
      setError("Email are required");
      return;
    }
    if (!password) {
      setError("Password are required");
      return;
    }

    setError(null);
    console.log({ name, email, password });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white py-10 px-7">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">Sign Up</h4>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <input
              type="text"
              placeholder="Name"
              className="input-box mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="input-box mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500">{error}</p>}
            <button className="btn-primary">Sign Up</button>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="underline font-medium text-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
