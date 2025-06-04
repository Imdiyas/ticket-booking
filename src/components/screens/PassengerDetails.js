import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PassengerDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, selectedSeats } = location.state || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/payment', {
      state: {
        bus,
        selectedSeats,
        passenger: { name, email, phone }
      }
    });
  }

  return React.createElement('div', { style: { padding: '20px' } }, [
    React.createElement('h2', { key: 'heading' }, 'Passenger Details'),

    React.createElement(
      'form',
      {
        key: 'form',
        onSubmit: handleSubmit,
        style: { display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }
      },
      [
        React.createElement('input', {
          key: 'name',
          placeholder: 'Full Name',
          value: name,
          onChange: (e) => setName(e.target.value),
          required: true
        }),
        React.createElement('input', {
          key: 'email',
          placeholder: 'Email',
          type: 'email',
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true
        }),
        React.createElement('input', {
          key: 'phone',
          placeholder: 'Phone Number',
          type: 'tel',
          value: phone,
          onChange: (e) => setPhone(e.target.value),
          required: true
        }),
        React.createElement(
          'button',
          {
            key: 'submit',
            type: 'submit',
            style: {
              padding: '10px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }
          },
          'Proceed to Payment'
        )
      ]
    )
  ]);
}

export default PassengerDetails;



