import React from 'react';
import { Reservations } from '../Reservations/Reservations';
import '/Users/trondmakonese/mod_3/mid-mod-assesment/turing-cafe-ui/src/ReservationContainer/ReservstionsContainer.css';

export const ReservationsContainer = (props) => {
  console.log(props.reservations)
  const allReservations = props.reservations.map(res => {
    console.log(res)
    return <Reservations
      name={res.name}
      date={res.date}
      time={res.time}
      number={res.number}
      id={res.id}
      key={res.id}
      />
  })

  return (
    <section className='reservation-container'>
      {allReservations}
    </section>
  )
}
