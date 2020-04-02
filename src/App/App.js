import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../ApiCalls/ApiCalls';
import { ReservationsContainer } from '../ReservationContainer/ReservationContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  retrieveReservations() {
    fetchReservations()
    .then(data => this.setState({reservations: data}))
    .catch(err => console.log(err))
  }


  componentDidMount() {
    this.retrieveReservations()
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
