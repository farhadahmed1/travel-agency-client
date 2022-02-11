import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Details = () => {
    const { detailsId } = useParams();
    const [tourDetails, setTourDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/tours/${detailsId}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h2> Toure details by {detailsId}</h2>
        </div>
    );
};

export default Details;