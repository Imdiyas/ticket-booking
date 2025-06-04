import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import buses from '../../data/buses';
import '../../assests/SeatBooking.css';

function SeatBooking() {
    const { busId } = useParams();
    const navigate = useNavigate();
    const bus = buses.find((b) => b.id === parseInt(busId));

    const totalSeats = 20;
    const [selectedSeats, setSelectedSeats] = useState([]);

    function toggleSeat(seatNumber) {
        setSelectedSeats((prev) =>
            prev.includes(seatNumber)
                ? prev.filter((s) => s !== seatNumber)
                : [...prev, seatNumber]
        );
    }

    function handleContinue() {
        navigate('/passenger-details', {
            state: { bus, selectedSeats }
        });
    }

    return (
        <div className="seat-booking-container">
            <h2 className="seat-booking-heading">Select Seats for {bus.name}</h2>
            <img
                className="bus-image"
                src={'https://i.postimg.cc/3rmXHvtv/bus-image-1.jpg'}
                alt={bus.name}
            />

            <div className="seat-grid">
                {[...Array(totalSeats)].map((_, i) => {
                    const seatNum = i + 1;
                    const isSelected = selectedSeats.includes(seatNum);
                    return (
                        <button
                            key={seatNum}
                            className={`seat-button ${isSelected ? 'selected' : ''}`}
                            onClick={() => toggleSeat(seatNum)}
                            type="button"
                        />
                    );
                })}
            </div>

            <button
                className="continue-button"
                onClick={handleContinue}
                disabled={selectedSeats.length === 0}
            >
                Continue to Passenger Details
            </button>
        </div>
    );
}

export default SeatBooking;
