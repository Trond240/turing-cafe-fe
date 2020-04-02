import React, { Component } from 'react';


class AddReservation extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      id: '',
      name: '',
      number: '',
      time: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <form>
        <input
        type='text'
        placeholder='name'
        name='name'
        onChnage={this.handleChange}
        />
        <input
        type='text'
        placeholder='name'
        name='name'
        onChnage={this.handleChange}
        />
        <input
        type='time'
        placeholder='choose a time'
        name='time'
        onChnage={this.handleChange}
        />
        <input
        type='number'
        placeholder='number of guest'
        name='number'
        onChnage={this.handleChange}
        />
        <button>Book Reservation</button>
      </form>
    )
  }
}

export default AddReservation;
