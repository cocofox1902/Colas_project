import React from 'react';
import { Link } from 'react-router-dom';

const Tapas = () => {
    return (
        <div className='bg-blue'>
            <Link to="/cartes/tapas" className='absolute right-10' >
                <img src="JE_CONSULTE_LA_CARTE.png" alt="carte" className='w-[23vw]'/>
            </Link>
            <Link to="/contact" className='hidden sm:block px-[2vw] py-3 md:text-2xl text-xs font-bold absolute rounded-full bg-dark text-white transition duration-300 mt-[43vw] md:ml-[39vw] ml-[35vw]'>JE RESERVE DE SUITE</Link>
            <img src="ECRAN_TAPAS.png" alt="tapas" className='w-full'/>
            <Link to="/contact" className='block sm:hidden px-12 py-3 mt-2 text-2xl font-bold rounded-full bg-dark text-white transition duration-300 mx-[6.5vw] text-center'>JE RESERVE DE SUITE</Link>

        </div>
    );
};

export default Tapas;