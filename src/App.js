import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import TopSection from './Components/TopSection/TopSection';
import Home from './Pages/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import AllTours from './Components/AllTours/AllTours';
import AddTours from './Components/AddTours/AddTours';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Details from './Components/Details/Details';
import MyBooking from './Components/MyBooking/MyBooking';
import ManageBookings from './Components/ManageBooking/ManageBookings';


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <TopSection />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='tours' element={<AllTours />} />
          <Route path='mybooking' element={<MyBooking />} />
          <Route path='managebooking' element={<ManageBookings />} />
          <Route path='details/:detailsId' element={<PrivateRoute> <Details /></PrivateRoute>} />
          <Route path='addTours' element={<PrivateRoute><AddTours /></PrivateRoute>} />
          <Route path='login' element={<Login />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
