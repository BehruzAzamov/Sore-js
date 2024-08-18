import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const user = true
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element:<Home/>
        },
      ],
    },
    {
      path:"/login",
      element:user ? <Navigate to="/"/> :<Login/>
    },
    {
      path:"/register",
      element:user ? <Navigate to="/"/> :<Register/>
    }
  ]);
  return <RouterProvider router={routes}/>
}

export default App;
