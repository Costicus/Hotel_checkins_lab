import BookingCard from "./BookingCard";

const BookingsGrid = ({ bookings }) => {
    const bookingsList = bookings.map((booking) => {
        return <BookingCard booking={booking} key={booking._id} />
    });

    return (
        <>
            {bookingsList}
        </>
    )
}

export default BookingsGrid;
