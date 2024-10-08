import { useRef } from "react";
import { login} from "../features/userSlice"
import { Link } from "react-router-dom";
import { axiosClient } from "../utils/axiosClients"
import { useDispatch } from "react-redux";

const Login = () => {
  const loginRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    axiosClient.post("/auth/login", {
      username: loginRef.current.value,
      password: passwordRef.current.value
    }).then((data) => dispatch(login(data))
    ).catch((error) => console.error(error)
    )

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              ref={loginRef}
              id="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>
        <div className="text-center mt-4">
          <Link to="/register" className="text-blue-600 hover:underline">You haven't got accaunt yet?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
