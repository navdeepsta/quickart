import Main from "./components/Main";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Cart from "./components/Cart";

import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}></Route>
      <Route path="/products" element={<Main />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="*" element={<h1>404</h1>}></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
