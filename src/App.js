import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Home from './components/screens/Home';
import BusList from './components/screens/BusList';
import SeatBooking from './components/screens/SeatBooking';
import PassengerDetails from './components/screens/PassengerDetails';
import Payment from './components/screens/Payments';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="md" sx={{ padding: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buses" element={<BusList />} />
          <Route path="/select-seats/:busId" element={<SeatBooking />} />
          <Route path="/passenger-details" element={<PassengerDetails />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
