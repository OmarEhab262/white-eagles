import React from "react";
import "./App.css";
import LogIn from "./pages/LogIn";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotUserPass from "./pages/ForgotUserPass";
import CheckEmail from "./pages/CheckEmail";
import SuccessfulPassword from "./components/SuccessfulPassword";
import CreatedParty from "./components/CreatedParty";
import Welcome from "./components/Welcome";
import MainPage from "./pages/MainPage";
import Users from "./pages/Users";
import Reservations from "./pages/Reservations";
import ShowParties from "./pages/ShowParties";
import Booking from "./pages/Booking";
import EndedEvents from "./pages/EndedEvents";
import NewEvents from "./pages/NewEvents";
import ShowEndedEventDetail from "./pages/ShowEndedEventDetail";
import EditEventDetail from "./pages/EditEventDetail";
import ShowNewEventDetails from "./pages/ShowNewEventDetails";
import AddEvents from "./pages/AddEvents";
import User from "./pages/User";
import ShowTicket from "./pages/ShowTicket";
import Home from "./web/Home";
import About from "./web/About";
import Services from "./web/Services";
import ShowServices from "./web/ShowServices";
import ContactUs from "./web/ContactUs";
import Calender from "./web/Calender";
import FindParty from "./web/FindParty";
import PrivacyPolicy from "./web/PrivacyPolicy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/dashboard" element={<LogIn />} />
        <Route path="/forgotuserpass" element={<ForgotUserPass />} />
        <Route path="/checkemail" element={<CheckEmail />} />
        <Route path="/successfulpassword" element={<SuccessfulPassword />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/createdparty" element={<CreatedParty />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/endedevents" element={<EndedEvents />} />
        <Route path="/newevents" element={<NewEvents />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />

        <Route
          path="/showendedeventdetail/:id"
          element={<ShowEndedEventDetail />}
        />
        <Route path="/editeventdetail" element={<EditEventDetail />} />
        <Route
          path="/showneweventdetails/:id"
          element={<ShowNewEventDetails />}
        />
        <Route path="/showparties" element={<ShowParties />} />
        <Route path="/showticket" element={<ShowTicket />} />
        <Route path="/addevents" element={<AddEvents />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/showservices" element={<ShowServices />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/FindParty" element={<FindParty />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
