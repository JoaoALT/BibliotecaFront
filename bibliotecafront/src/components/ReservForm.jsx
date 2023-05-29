import React, { useState } from 'react';
import "./ReservFormStyles.css"

/**/

export const ReservForm = ({ bookTitle, bookId, guardar }) => {
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

    const reserva = {
      nombre: formData.firstName,
      apellido: formData.lastName,
      rut: formData.identificationCard,
      celular: formData.phoneNumber,
      correo: formData.email,
      titulo: bookTitle,
      id: bookId,
      semana: formData.reservationWeek,
      dia: formData.reservationDay

    }

    guardar(reserva)

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='form1'>
      <div className='title'>Reserva</div>
      <div className='container1'>


          <label>
            First Name:
            <input
              className='inputbox'
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
              className='inputbox'
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
              className='inputbox'
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
              className='inputbox'
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
              className='inputbox'
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
              value={bookTitle} /*bookTitle*/
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
              value={bookId} /* bookID*/
              disabled
              required
            />
          </label>
          <br />
          <label>
            Reservation Week:
            <input
              className='inputbox'
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
              className='inputbox'
              type="text"
              name="reservationDay"
              value={formData.reservationDay}
              onChange={handleChange}
              required
            />
          </label>
          <br />

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
