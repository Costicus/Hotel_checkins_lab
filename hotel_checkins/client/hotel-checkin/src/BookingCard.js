const BookingCard = ({ booking }) => {
    console.log(booking);

    return (
        <>
            <h1>{booking.name}</h1>
            <p>{booking.email}</p>
            <p>{booking.checked}</p>
        </>
    )
}

export default BookingCard
