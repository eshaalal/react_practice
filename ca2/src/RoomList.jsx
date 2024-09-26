import React from 'react';
import './RoomList.css'; // Importing the CSS file

const RoomList = () => {
  const rooms = [
    {
      name: 'Room A',
      location: 'New York',
      rent: '$100',
      size: '400',
    },
    {
      name: 'Room B',
      location: 'San Francisco',
      rent: '$60',
      size: '300',
    },
    {
      name: 'Room C',
      location: 'Miami',
      rent: '$150',
      size: '500',
    },
  ];

  const handleButtonClick = (location) => {
    alert(`Hello from ${location}!`);
  };

  return (
    <div className="room-list">
      <table className="room-table">
        <thead>
          <tr>
            <th>Room Id</th>
            <th>Location</th>
            <th>Rent</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>{room.name}</td>
              <td>{room.location}</td>
              <td>{room.rent}</td>
              <td>{room.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button onClick={() => handleButtonClick('New York')}>New York</button>
        <button onClick={() => handleButtonClick('San Francisco')}>San Francisco</button>
        <button onClick={() => handleButtonClick('Miami')}>Miami</button>
      </div>
    </div>
  );
};

export default RoomList;
