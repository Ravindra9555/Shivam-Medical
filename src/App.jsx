import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/loader/Loader";

// user
const Error = lazy(() => import("./components/error/Error"));
const Home = lazy(() => import("./components/landing/Home"));
const Login = lazy(() => import("./components/userauth/Login"));
const Signup = lazy(() => import("./components/userauth/Signup"));
const ForgetPassword = lazy(() =>
  import("./components/userauth/ForgetPassword")
);
//  admin
const AdminLogin = lazy(() => import("./components/adminAuth/AdminLogin"));
 const AdminProfle = lazy(() => import("./components/pages/Admin/AdminProfile"));
 const AllAdmin = lazy(()=>import("./components/pages/Admin/AllAdmins"))
//  const AdminSignup = lazy(() => import("./components/adminauth/AdminSignup"));
//  const AdminForgetPassword = lazy(() => import("./components/adminauth/AdminForgetPassword"));
//  const AdminResetPassword = lazy(() => import("./components/adminauth/AdminResetPassword"));

const ResetPassword = lazy(() => import("./components/userauth/ResetPassword"));
const Shade = lazy(() => import("./components/shade/Shade"));
const ContactUs = lazy(() => import("./components/pages/Admin/ContactUs"));
const Customers = lazy(() => import("./components/pages/Admin/Customers"));
const Orders = lazy(() => import("./components/pages/Admin/Orders"));
const Dashboard = lazy(() => import("./components/pages/Admin/Dashboard"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route
            path="/reset-password/:resetToken"
            element={<ResetPassword />}
          />
          // admin
          <Route path="adminlogin" element={<AdminLogin />} />

          <Route path="/" element={<Shade />}>
          <Route path="adminprofile" element={<AdminProfle />} />
          <Route path="admins" element={<AllAdmin />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
