import {useState} from "react";
import { postBooking } from "./BookingService";

const BookingsForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checked: "",
    })

    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);
        })
        // Reset the form input values
        setFormData({
            name: "",
            email: "",
            checked: "",
        });
    }

    return (
        <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div >
                <label htmlFor="name">Name:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name} />
            </div>
            <div >
                <label htmlFor="email">Email:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="email" 
                    name="email"
                    value={formData.email} />
            </div>
            <div >
                <label htmlFor="checked">Checked:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="checked" 
                    name="checked" 
                    value={formData.checked}/>
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default BookingsForm;
