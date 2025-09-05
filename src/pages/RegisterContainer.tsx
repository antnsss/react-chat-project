import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { auth } from "../firebase";

import { useNavigate } from "react-router-dom";

const RegisterContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate()

  function regiser(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (confPassword !== password) {
      setError("password didn`t match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        setConfPassword("");
        navigate('/login')
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="bg-blue-400 h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Emal"
          className="mb-4 p-2 border border-gray-300 rounded"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded"
        />

        <input
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
          type="password"
          placeholder="Confirm Password"
          className="mb-6 p-2 border border-gray-300 rounded"
        />

        <button
          onClick={regiser}
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer mb-4"
        >
          Register
        </button>
        {error ? <p>{error}</p> : ''}

        <div className="flex justify-center items-center gap-2">
          <p className="text-black opacity-50">Already have an account?</p>
          <p className="text-blue-500 cursor-pointer hover:underline">
            Sign In
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterContainer;
