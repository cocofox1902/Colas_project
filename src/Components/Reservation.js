import React from 'react';
import { Link } from 'react-router-dom';

const Reservation = () => {
    return (
        <div className='h-screen'>
            <div>
                <img src="PHOTO-1.jpg" alt="photo_bar" className='-z-50 absolute h-screen w-screen object-cover' />
            </div>
            <div className='bg-dark text-white md:w-1/2 w-4/5 md:h-4/5 h-3/5 text-center pt-20 pl-4'>
                <p className='lg:text-5xl md:text-[2.5vw] sm:text-[3.5vw] text-left px-2 font-semibold'>Dans une ambiance <br />  conviviale du 20ème <br /> découvrez nos vins, cocktails, tapas, burgers & plats ...</p>
                <div className='flex justify-center'>
                    <img src="COUTEAU.png" alt="couteau" className='w-3/4' />
                </div>
                <Link to="/contact" className='mx-7 mb-5 px-10 text-2xl font-bold border-2 border-blue rounded-full bg-blue hover:bg-dark text-white transition duration-300'>RESERVER</Link>
                <p className='text-blue text-3xl font-semibold mt-5'>T: 09 83 23 39 14</p>
            </div>
        </div>
    );
};

export default Reservation;