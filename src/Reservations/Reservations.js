import React from 'react';

export const Reservations = (props) => {
  return (
    <article className='reservation-card' id={props.id}>
      <h1>{props.name}</h1>
      <p>{props.date}</p>
      <p>{props.time} pm</p>
      <p>Reservation Number: {props.number}</p>
    </article>
  )
}
