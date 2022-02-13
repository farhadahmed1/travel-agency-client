import React from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';

const Booking = () => {

    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.status = 'pending';
        axios.post('http://localhost:5000/bookingTours', data)
            .then(res => {
                console.log(res);
                if (res.data)

            })
    }


    return (
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

                <input defaultValue={tour.destination} readOnly type="text" className="input" />

                <div className="text-center">
                    <input type="submit" value="Confirm Booking" className="btn-1 cursor-pointer" />
                </div>
            </form>
        </div>
    );
};

export default Booking;