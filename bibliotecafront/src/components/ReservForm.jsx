import React, { useState } from 'react';

export const ReservForm = ({ bookTitle, bookId }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    identificationCard: '',
    phoneNumber: '',
    email: '',
    reservationWeek: '',
    reservationDay: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data, like sending it to an API or storing it in a database
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Identification Card Number:
        <input
          type="text"
          name="identificationCard"
          value={formData.identificationCard}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Book Title:
        <input
          type="text"
          name="bookTitle"
          value={bookTitle}
          disabled
          required
        />
      </label>
      <br />
      <label>
        Book ID:
        <input
          type="text"
          name="bookId"
          value={bookId}
          disabled
          required
        />
      </label>
      <br />
      <label>
        Reservation Week:
        <input
          type="text"
          name="reservationWeek"
          value={formData.reservationWeek}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Reservation Day:
        <input
          type="text"
          name="reservationDay"
          value={formData.reservationDay}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
