import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/loader/Loader";

// Lazy load the Home component
const Error = lazy(()=>import ("./components/error/Error"))
const Home = lazy(() => import("./components/landing/Home"));
 const Login = lazy(()=> import("./components/auth/Login"));
 const Signup = lazy(()=> import("./components/auth/Signup"));
const ForgetPassword = lazy(()=> import("./components/auth/ForgetPassword"));
const ResetPassword = lazy(()=> import("./components/auth/ResetPassword"));
const Cal = lazy(()=> import("./components/auth/Calender"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/rest-password" element={<ResetPassword />} />
          <Route path="/cal" element={<Cal />} />
          
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
