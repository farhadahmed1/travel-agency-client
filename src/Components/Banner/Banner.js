import React from 'react';
import './Banner.css'

// this is a static component for home section
const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3  h-full py-20 ">
                    {/* text content */}
                    <div className="col-span-2 ">
                        <h1 className="title">Feel The</h1>
                        <h1 className="title">Freedom To Travel</h1>
                        <h1 className="title">with HOLIDAY HYPE</h1>
                        <p className="my-10 text-white">Travel agents offer advice on destinations, plan trip itineraries, and make travel arrangements for clients. Travel agents sell transportation, lodging, and admission.</p>
                        <button className="btn-1 my-5">
                            Our Tours
                        </button>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Banner;