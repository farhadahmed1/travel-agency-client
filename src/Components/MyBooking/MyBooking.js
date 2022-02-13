import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import SingleBooking from '../SingleBooking/SingleBooking';

const MyBooking = () => {

    const { user } = useAuth();
    const [booking, setBooking] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:5000/myBooking/${user?.email}`)
            .then((res) => {
                setBooking(res.data)
                setIsLoading(false)
            })
        // fetch(`http://localhost:5000/myBooking/${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => setBooking(data));

    }, [user.email])

    // spinner 
    if (isLoading) {
        return (<div className="w-full py-20  flex justify-center items-center">
            <ClipLoader color='#ff7c5b' size={60} />
        </div>)
    }
    // console.log(booking);


    const handleClick = (id) => {

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
                        console.log(data)
                        Swal.fire('Your booking is deleted', '', 'success')
                        const newMybooking = booking.filter(booking => booking._id !== id)
                        setBooking(newMybooking)
                    })

            }
        })


    }
    return (
        <div className="container my-10 min-h-screen">
            <h1 className="my-5">MY BOOKINGS {booking.length}</h1>
            {
                booking.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
                    {
                        booking.map(booking => <SingleBooking
                            data={booking}
                            handleClick={handleClick}
                            key={booking._id} />)
                    }
                </div> : <h2 className="text-2xl text-center text-red-500">You don't book any tours</h2>
            }

        </div>
    );
};

export default MyBooking;