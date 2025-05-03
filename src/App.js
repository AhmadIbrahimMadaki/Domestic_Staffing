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

import Agent from './components/Agent/AgentDashboard';
import AgentLoginForm from './components/Agent/Login';

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
        <Route path="/superadmin/dashboard" element={<SuperAdmin />} />
        <Route path="/service-personnel-record" element={<ServicePersonnelRecord />} />
        <Route path="/service-personnel-details" element={<ServicePersonnelDetails />} />
        <Route path="/personnel-data" element={<PersonnelData />} />
        <Route path="/service-request" element={<ServiceRequest />} />

        <Route path="/agent/dashboard" element={<Agent />} />
        <Route path="/agent/login" element={<AgentLoginForm />} />
        <Route path="/agent-registration" element={<AgentRegistration />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
