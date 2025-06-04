import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import buses from '../../data/buses';
import '../../assests/BusList.css';


function BusList() {
    const location = useLocation();
    const navigate = useNavigate();

    const { from, to } = location.state || {};

    const filteredBuses = buses.filter(
        (bus) =>
            bus.from.toLowerCase() === from?.toLowerCase() && 
            bus.to.toLowerCase() === to?.toLowerCase()
    );

    function createBusCard(bus) {
        return React.createElement(
            'div',
            {
            key: bus.id,
            className: 'bus-card'
            },
            [
            React.createElement('img', {
                key: 'img',
                src: 'https://i.postimg.cc/3rmXHvtv/bus-image-1.jpg',
                alt: `${bus.name} bus`,
                className: 'bus-image'
            }),
            React.createElement('h3', { key: 'name' }, bus.name),
            React.createElement('p', { key: 'time' }, `Departure: ${bus.departure} - Arrival: ${bus.arrival}`),
            React.createElement('p', { key: 'price' }, `Price: ₹${bus.price}`),
            React.createElement('p', { key: 'seats' }, `Seats Available: ${bus.seatsAvailable}`),
            React.createElement(
                'button',
                {
                key: 'btn',
                onClick: () => navigate(`/select-seats/${bus.id}`),
                className: 'book-btn'
                },
                'Book Now'
            )
            ]
        );
    }



    return React.createElement(
        'div',
        { style: { padding: '20px' } },
        [
            React.createElement('h2', { key: 'heading' }, `Available buses from ${from} to ${to}`),
            ...filteredBuses.map((bus) => createBusCard(bus)),
            filteredBuses.length === 0 && 
                React.createElement('p', { key: 'none' }, 'No buses found for this route.')
        ]
    );
}

export default BusList;


