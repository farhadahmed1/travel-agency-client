import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import TotalBooking from '../TotalBooking/TotalBooking';

const ManageBookings = () => {
    const [booking, setBooking] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)

    //data loading
    useEffect(() => {
        axios.get(`http://localhost:5000/allBooking`)
            .then((res) => {
                setBooking(res.data)
                setIsUpdated(false)
            })

    }, [isUpdated])

    console.log(booking);
    // functionality for  update status
    const handleUpdateStatus = (id, booking) => {
        console.log(id, booking)
        const updatedBooking = {
            ...booking,
            status: 'approved'
        }

        // axios.post(`http://localhost:5000/updateStatusBooking/${id}`, updatedBooking)
        //     .then(res => {
        //         console.log(res);
        //         setIsUpdated(true)

        //     })
        console.log(updatedBooking)

        console.log(updatedBooking)
        fetch(`http://localhost:5000/updateStatusBooking/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsUpdated(true)
            })
    }
    // Functionality for delete tour
    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Do you want to delete the booking',
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteBooking/${id}`, {
                    method: "DELETE"
                }).then(res => res.json())

                    .then(data => {
                        Swal.fire('Your booking is deleted', '', 'success')
                        const newMybooking = booking.filter(bookings => bookings._id !== id)
                        setBooking(newMybooking)
                    })

            }
        })
    }

    return (
        <div className="container ">
            <h1 className="">Manage All Bookings </h1>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {
                    booking.map(booking => <TotalBooking booking={booking} key={booking._id} handleDelete={handleDelete} handleUpdateStatus={handleUpdateStatus} />)
                }
            </div>
            {/* <BackBtn/> */}
        </div>
    );
};

export default ManageBookings;