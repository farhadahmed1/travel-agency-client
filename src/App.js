import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import TopSection from './Components/TopSection/TopSection';
import Home from './Pages/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <TopSection />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='login' element={<Login />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
