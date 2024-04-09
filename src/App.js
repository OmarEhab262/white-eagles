import React from "react";
import "./App.css";
import LogIn from "./pages/LogIn";
import ErrorPage from "./pages/ErrorPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/ForgotUserPass" element={<ForgotUserPass />} />
        <Route path="/CheckEmail" element={<CheckEmail />} />
        <Route path="/SuccessfulPassword" element={<SuccessfulPassword />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/CreatedParty" element={<CreatedParty />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/EndedEvents" element={<EndedEvents />} />
        <Route path="/NewEvents" element={<NewEvents />} />
        <Route
          path="/ShowEndedEventDetail/:id"
          element={<ShowEndedEventDetail />}
        />
        <Route path="/EditEventDetail" element={<EditEventDetail />} />
        <Route
          path="/ShowNewEventDetails/:id"
          element={<ShowNewEventDetails />}
        />
        <Route path="/ShowParties" element={<ShowParties />} />
        <Route path="/ShowTicket" element={<ShowTicket />} />
        <Route path="/AddEvents" element={<AddEvents />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/User" element={<User />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ShowServices" element={<ShowServices />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Calender" element={<Calender />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
