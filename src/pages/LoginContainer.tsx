import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  function login(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError("sorry we coudn`t find ur account");
      });
  }

  return (
    <div className="bg-blue-400 h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="mb-6 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={login}
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer mb-4"
        >
          Login
        </button>
        {error ? <p>{error}</p> : ""}
        <div className="flex justify-center items-center gap-2">
          <p className="text-black opacity-50">Don’t have an account yet?</p>
          <p className="text-blue-500 cursor-pointer hover:underline">
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
