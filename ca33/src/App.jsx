import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        comment: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = "Name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid";
        }

        if (!formData.age) {
            newErrors.age = "Age is required";
        } else if (isNaN(formData.age) || formData.age <= 0) {
            newErrors.age = "Age must be a positive number";
        }

        if (formData.comment.length > 200) {
            newErrors.comment = "Comment cannot exceed 200 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validate()) {
            alert("Survey submitted successfully!");
            setFormData({ name: '', email: '', age: '', comment: '' });
            setErrors({});
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f2f5',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                width: '400px',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                textAlign: 'center'
            }}>
                <h2 style={{ color: '#333' }}>Survey Form</h2>
                <form onSubmit={handleSubmit}>
                    
                    {/* Name Field */}
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginBottom: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc'
                        }}
                    />
                    {errors.name && <span style={{ color: 'red', fontSize: '0.9em' }}>{errors.name}</span>}

                    {/* Email Field */}
                    <label htmlFor="email" style={{ display: 'block', marginTop: '15px', marginBottom: '5px', color: '#555' }}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginBottom: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc'
                        }}
                    />
                    {errors.email && <span style={{ color: 'red', fontSize: '0.9em' }}>{errors.email}</span>}

                    {/* Age Field */}
                    <label htmlFor="age" style={{ display: 'block', marginTop: '15px', marginBottom: '5px', color: '#555' }}>Age:</label>
                    <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter your age"
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginBottom: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc'
                        }}
                    />
                    {errors.age && <span style={{ color: 'red', fontSize: '0.9em' }}>{errors.age}</span>}

                    {/* Comment Field */}
                    <label htmlFor="comment" style={{ display: 'block', marginTop: '15px', marginBottom: '5px', color: '#555' }}>Comment:</label>
                    <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        rows="4"
                        cols="50"
                        placeholder="Enter your comment (200 characters max)"
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ccc'
                        }}
                    />
                    {errors.comment && <span style={{ color: 'red', fontSize: '0.9em' }}>{errors.comment}</span>}

                    {/* Submit Button */}
                    <button type="submit" style={{
                        width: '100%',
                        padding: '10px',
                        marginTop: '20px',
                        borderRadius: '4px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        fontSize: '1em',
                        cursor: 'pointer'
                    }}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default App;
