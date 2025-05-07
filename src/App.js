import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './components/LandingPage';
import AgentRegistration from './components/Agent/AgentRegistration';
import PersonnelRecord from './components/PersonnelRecord';
import AddReview from './components/AddReview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/Admin/Login';
import UserBookingForm from './components/UserBookingForm ';
import AdminDashboard from './components/AdminDashboard ';
import ServicePersonnelRecord from './components/ServicePersonnelRecord ';
import ServicePersonnelDetails from './components/ServicePersonnelDetails';
import PersonnelData from './components/PersonnelData';
import ServiceRequest from './components/ServiceRequest';
import SuperAdmin from './components/Admin/SuperAdminDashboard';
import Login from './components/Login';

import Agent from './components/Agent/AgentDashboard';
// import AgentLoginForm from './components/Agent/Login';


// import CustomerLoginForm from './components/Customer/CustomerLogin';
import CustomerRegister from './components/Customer/CustomerSignUp';
import CustomerDashboard from './components/Customer/CustomerDashboard';
import RequestService from './components/Customer/RequestServiceForm';
import ChoosePersonnel from './components/Customer/ChoosePersonnel';
import ViewAndReview from './components/Customer/ViewAndReview';
import ViewBookingHistory from './components/Customer/ViewBookingHistory';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/admin/login" element={<LoginForm />} />
        <Route path="/personnel-record" element={<PersonnelRecord />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/user-booking" element={<UserBookingForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/superadmin-dashboard" element={<SuperAdmin />} />
        <Route path="/service-personnel-record" element={<ServicePersonnelRecord />} />
        <Route path="/service-personnel-details" element={<ServicePersonnelDetails />} />
        <Route path="/personnel-data" element={<PersonnelData />} />
        <Route path="/service-request" element={<ServiceRequest />} />
        <Route path="/login" element={<Login />} />

        <Route path="/agent-dashboard" element={<Agent />} />
        {/* <Route path="/agent/login" element={<AgentLoginForm />} /> */}
        <Route path="/agent-registration" element={<AgentRegistration />} />

        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        {/* <Route path="/customer-login" element={<CustomerLoginForm />} /> */}
        <Route path="/customer-registration" element={<CustomerRegister />} />
        <Route path="/request-service" element={<RequestService />} />
        <Route path="/choose-personnel" element={<ChoosePersonnel />} />
        <Route path="/view-feedback" element={<ViewAndReview />} />
        <Route path="/booking-history" element={<ViewBookingHistory />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
