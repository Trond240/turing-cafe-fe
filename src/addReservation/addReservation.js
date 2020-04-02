import React, { Component } form 'react';


class AddReservation extends Componet {
  constructor() {
    suoer();
    this.state = {
      date: '',
      id: '',
      name: '',
      number: '',
      time: ''
    }
  }

  render() {
    return(
      <form>
        <input
        type='text'
        placeholder='name'
        name='name'
        onChnage={}
        />
        <input
        type='text'
        placeholder='name'
        name='name'
        onChnage={}
        />
        <input
        type='time'
        placeholder='choose a time'
        name='time'
        onChnage={}
        />
        <input
        type='number'
        placeholder='number of guest'
        name='number'
        onChnage={}
        />
        <button>Book Reservation</button>
      </form>
    )
  }
}

export default AddReservation;
