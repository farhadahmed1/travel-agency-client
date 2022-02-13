import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../hooks/useAuth';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMap } from '@fortawesome/free-solid-svg-icons';

const Details = () => {
    const { user } = useAuth()
    const { detailsId } = useParams();
    const [tourDetails, setTourDetails] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigat = useNavigate()


    useEffect(() => {
        fetch(`http://localhost:5000/tours/${detailsId}`)
            .then(res => res.json())
            .then(data => setTourDetails(data))
    }, [detailsId])

    //console.log(tourDetails);



    const onSubmit = data => {

        const BookingData = {
            ...data,
            img: user.photoURL,
            status: 'pending',
            tour: tourDetails
        }
        // data.status = 'pending';
        axios.post('http://localhost:5000/bookingTours', BookingData)
            .then(res => {
                //console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Tour Booked successfully',
                        text: "To conferm your tour , approve the status"

                    })
                    reset()
                    navigat('/')
                }
                // console.log(data);

            })
        console.log(BookingData);
    }
    return (
        <div className="container my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <div>
                    <div>
                        <img alt="" className="w-full h-80" src={tourDetails.img} />
                    </div>
                    <div className="my-10">
                        <h2 className="text-2xl font-bold">{tourDetails.destination}</h2>
                        <p className="text-gray-600 my-3"><span className="text-xl font-bold text-tomato">$ {tourDetails.price}</span> / per person</p>
                        <div className="my-3">
                            <span className="font-semibold">Time</span> :  <FontAwesomeIcon icon={faClock} className="mr-2" />
                            {tourDetails.time} days
                        </div>

                        <div className="my-3">
                            <span className="font-semibold">Location</span> : <FontAwesomeIcon icon={faMap} className="mr-2" />
                            {tourDetails.location}
                        </div>
                        <p className="text-gray-600"><span className="font-semibold">Description</span> : {tourDetails.description}</p>
                    </div>
                </div>

                <div className="p-5 border border-gray-300 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.email} {...register("email", { required: true })} type="email" className="input" placeholder="email" />
                        {errors.email && <span className="text-red-600">Email Is Required</span>}

                        <input defaultValue={user.displayName} {...register("name", { required: true })} type="text" className="input" placeholder="User Name" />
                        {errors.email && <span className="text-red-600">Name Is Required</span>}

                        <textarea {...register("address", { required: true })} type="text" className="input" placeholder="Your Address" cols="30" rows="5"></textarea>
                        {errors.adress && <span className="text-red-600">Address Is Required</span>}

                        <input  {...register("date", { required: true })} type="date" className="input" placeholder="User Name" />
                        {errors.date && <span className="text-red-600">date Is Required</span>}

                        <input  {...register("contuct", { required: true })} type="number" className="input" placeholder="Contuct Nubmer" />
                        {errors.contuct && <span className="text-red-600">contuct Number Is Required</span>}

                        <input defaultValue={tourDetails.destination} readOnly type="text" className="input" />

                        <div className="text-center">
                            <input type="submit" value="Confirm Booking" className="btn-1 cursor-pointer" />
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Details;