// UserDetails.jsx
import { useState } from 'react';
import axios from 'axios';
import './UserDetails.css';

const UserDetails = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    if (!userId.trim()) {
      setError('Please enter a user ID');
      return;
    }

    setLoading(true);
    setError('');
    setUser(null);

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUser(response.data);
    } catch (err) {
      setError('User not found');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>User Details</h1>
      <div className="input-container">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
          className="user-input"
        />
        <button onClick={handleFetch} disabled={loading} className="fetch-button">
          {loading ? 'Loading...' : 'Fetch User Details'}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {user && (
        <div className="user-details">
          <div className="detail-row">
            <span className="label">ID:</span>
            <span className="value">{user.id}</span>
          </div>
          <div className="detail-row">
            <span className="label">Name:</span>
            <span className="value">{user.name}</span>
          </div>
          <div className="detail-row">
            <span className="label">Email:</span>
            <span className="value">{user.email}</span>
          </div>
          <div className="detail-row">
            <span className="label">City:</span>
            <span className="value">{user.address.city}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
