import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../assests/Home.css';

function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/buses', { 
      state: { from, to, date } 
    });
  }

  return (
    <div className="home-container">
      <div className="banner">
        <img 
          src="https://i.postimg.cc/3rmXHvtv/bus-image-1.jpg"
          alt="Bus Travel Banner" 
          className="banner-image"
        />
        <div className="banner-text">
          <h1>Find Your Bus Ticket</h1>
          <p>Book comfortable and affordable bus tickets online</p>
        </div>
      </div>

      <div className="search-box">
        <h2>Search for Buses</h2>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="From City"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="To City"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <button type="submit">Search Buses</button>
        </form>
      </div>
    </div>
  );
}

export default Home;



