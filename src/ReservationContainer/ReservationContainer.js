import React from 'react';
import { Reservations } from '../Reservations/Reservations'

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
    <section>
      {allReservations}
    </section>
  )
}
