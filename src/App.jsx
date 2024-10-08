import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./features/userSlice";

function App() {
  const  user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes user={user}>
        <MainLayout />
      </ProtectedRoutes>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {

        }
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />
    }
  ]);

  useEffect(() => {
    dispatch(checkUser())
  },[])
  return <RouterProvider router={routes} />
}

export default App;
