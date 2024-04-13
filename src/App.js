import Home from "./components/Home";
import About from "./components/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
