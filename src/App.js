import Main from "./components/Main";
import SignIn from "./components/Authentication/SignIn";
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
      <Route path="/signin" element={<SignIn />}/>
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
