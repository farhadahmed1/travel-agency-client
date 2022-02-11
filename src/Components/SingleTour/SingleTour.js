import { faClock, faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleTour = ({ tourData }) => {
    const { destination, price, location, time, img, _id, description } = tourData
    return (
        <div className="card">
            <div>
                <img alt="" className="w-full h-60" src={img} />
            </div>
            <div className="p-10">
                <h2 className="text-2xl font-bold">{destination}</h2>
                <p className="text-gray-600 my-3"><span className="text-xl font-bold text-tomato">$ {price}</span> / per person</p>
                <div className="my-5 flex p-3 bg-gray-100 rounded-lg text-gray-500 font-medium justify-around">
                    <div>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        {time} days
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMap} className="mr-2" />
                        {location}
                    </div>
                </div>
                <p className="text-gray-600">{description}</p>
                <div className="text-center mt-5"><button className="btn-1">Book</button></div>
            </div>
        </div>
    );
};

export default SingleTour;