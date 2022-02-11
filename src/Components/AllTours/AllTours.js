import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleTour from '../SingleTour/SingleTour';
import { ClipLoader } from 'react-spinners';

const AllTours = () => {
    const [tour, setTour] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/tours`)
            .then(res => res.json())
            .then(data => {

                setTour(data)
                setIsLoading(false)
            })
    }, [])
    console.log(tour);

    // spinner 
    if (isLoading) {
        return (<div className="w-full py-20  flex justify-center items-center">
            <ClipLoader color='#ff7c5b' size={60} />
        </div>)
    }
    return (
        <section className='container my-20" id="tours'>
            <h1>All Toures</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
                {
                    tour.map(tour => <SingleTour key={tour._id} tourData={tour} />)
                }
            </div>
        </section>
    );
};

export default AllTours;