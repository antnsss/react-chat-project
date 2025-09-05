const LoginContainer = () => {
  return (
    <div className="bg-blue-400 h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-6 p-2 border border-gray-300 rounded"
        />
        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer mb-4">
          Register
        </button>
        <div className="flex justify-center items-center gap-2">
          <p className="text-black opacity-50">Don’t have an account yet?</p>
          <p className="text-blue-500 cursor-pointer hover:underline">Sign Up</p>
        </div>
      </div>
    </div>
  )
}

export default LoginContainer
