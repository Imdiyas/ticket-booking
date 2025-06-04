import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, selectedSeats, passenger } = location.state || {};

  if (!bus || !selectedSeats || !passenger) {
    // Redirect to home if accessed directly
    navigate('/');
    return null;
  }

  return React.createElement('div', { style: { padding: '20px' } }, [
    React.createElement('h2', { key: 'heading' }, 'Booking Confirmation'),

    React.createElement('p', { key: 'bus' }, `Bus: ${bus.name} (${bus.from} → ${bus.to})`),
    React.createElement('p', { key: 'seats' }, `Seats Booked: ${selectedSeats.join(', ')}`),
    React.createElement('p', { key: 'passenger' }, `Passenger: ${passenger.name}`),

    React.createElement(
      'p',
      { key: 'success', style: { marginTop: '20px', color: 'green', fontWeight: 'bold' } },
      'Payment successful! Your booking is confirmed.'
    ),

    React.createElement(
      'button',
      {
        key: 'home-btn',
        style: { marginTop: '30px', padding: '10px', cursor: 'pointer' },
        onClick: () => navigate('/')
      },
      'Back to Home'
    )
  ]);
}

export default Payment;
