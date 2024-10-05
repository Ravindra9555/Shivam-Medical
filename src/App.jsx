import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/loader/Loader";

// user
const Error = lazy(() => import("./components/error/Error"));
const Home = lazy(() => import("./components/landing/Home"));
const Login = lazy(() => import("./components/userauth/Login"));
const Signup = lazy(() => import("./components/userauth/Signup"));
const ForgetPassword = lazy(() =>import("./components/userauth/ForgetPassword"));
const UserShade = lazy(()=> import("./components/shade/UserShade"));
const UserAppointments = lazy(()=> import("./components/pages/user/Appointments"))
const BookAppointment = lazy(() => import("./components/pages/user/BookAppointment"));
const  Userdashboard = lazy(()=>import("./components/pages/user/UserDashbaord"));
//  admin
const AdminLogin = lazy(() => import("./components/adminAuth/AdminLogin"));
const AdminProfle = lazy(() => import("./components/pages/Admin/AdminProfile"));
const AllAdmin = lazy(() => import("./components/pages/Admin/AllAdmins"));
const Appointments = lazy(() => import("./components/pages/Admin/Appointment"));
const Doctor = lazy(() => import("./components/pages/Admin/Doctor"));
const ResetPassword = lazy(() => import("./components/userauth/ResetPassword"));
const Shade = lazy(() => import("./components/shade/AdminShande"));
const ContactUs = lazy(() => import("./components/pages/Admin/ContactUs"));
const Customers = lazy(() => import("./components/pages/Admin/Customers"));
const Orders = lazy(() => import("./components/pages/Admin/Orders"));
const Dashboard = lazy(() => import("./components/pages/Admin/Dashboard"));
const BookappointmentBYadmin = lazy(()=> import("./components/pages/Admin/BookAppointment"))

 const UserRegistration = lazy(()=> import("./components/pages/Admin/UserRegistration"));

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
          <Route path="/reset-password/:resetToken" element={<ResetPassword />}/>
          <Route path="/user" element={<UserShade />}>
          <Route path="userdashboard" element={<Userdashboard/>}/>
            <Route path="bookappointment" element={<BookAppointment />} />
            {/* <Route path="settings" element={<Settings />} /> */}
          </Route>
          // admin
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="/" element={<Shade />}>
            <Route path="adminprofile" element={<AdminProfle />} />
            <Route path="admins" element={<AllAdmin />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="doctors" element={<Doctor />} />
            <Route path="userregister" element={<UserRegistration
             />} />
             <Route path="bookappointmentbyadmin" element={<BookappointmentBYadmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
