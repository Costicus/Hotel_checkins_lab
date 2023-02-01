import { useState, useEffect } from "react";
import BookingsGrid from "./BookingsGrid";
import { getBookings } from "./BookingService";
import BookingsForm from "./BookingForm";
import './App.css';

function App() {
  const [bookings, setBookings] = useState([]); //The hook use state to update the state of bookings

  //Use effect stops initial loading loop, the empty array stops from happenning
  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings);
    })
  },
    []);

    //Function to add a new booking using useState and then set bookings and spred (...) operator
  const addBooking = (booking) => {
    setBookings([...bookings, booking])
  }

  return (
    <>
      <h1>Page 1: List of bookings</h1>
      <BookingsForm addBooking = {addBooking}/>
      <BookingsGrid bookings={bookings} />
    </>
  );
}

export default App;
