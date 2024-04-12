import Home from "./components/Home";
import About from "./components/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
