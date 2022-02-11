import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddTours = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/tourPost', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: "Great Job !",
                        text: "New Tour is added successfully"
                    })
                    reset()
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: "Somethig went wrong",
                    text: `${err.message}`
                })
            })
        console.log(data)
    }
    return (
        <div>
            <h1 className="text-center">Add A New Tour</h1>
            <div className="w-full md:w-2/4 lg:1/2 p-10 border-2 border-gray-300 mx-auto my-10 rounded-xl">
                {/* form starts here */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("destination", { required: true })} type="text" className="input" placeholder="Destination" />
                    {errors.destination && <span className="text-red-600">destination Is Required</span>}

                    <input  {...register("location", { required: true })} type="text" className="input" placeholder="Locations" />
                    {errors.location && <span className="text-red-600">location Is Required</span>}

                    <textarea {...register("description", { required: true })} type="text" className="input" placeholder="description" cols="30" rows="5"></textarea>
                    {errors.description && <span className="text-red-600">description Is Required</span>}

                    <input  {...register("price", { required: true })} type="number" className="input" placeholder="Price" />
                    {errors.price && <span className="text-red-600">Price Is Required</span>}
                    <input  {...register("time", { required: true })} className="input" placeholder="Time (in days )" />
                    {errors.time && <span className="text-red-600">Time Is Required</span>}

                    <input  {...register("img", { required: true })} type="text" className="input" placeholder="Imgae Url Link" />
                    {errors.img && <span className="text-red-600">contuct Number Is Required</span>}

                    <div className="text-center">
                        <input type="submit" value="Submit" className="btn-1 cursor-pointer" />
                    </div>
                </form>
                {/* form ends here */}
            </div>

        </div>
    );
};

export default AddTours;