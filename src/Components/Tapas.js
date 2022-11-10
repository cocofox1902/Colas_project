import React from 'react';
import { Link } from 'react-router-dom';

const Tapas = () => {
    return (
        <div>
            <Link to="cartes" className='absolute right-10' >
                <img src="JE_CONSULTE_LA_CARTE.png" alt="carte" className='w-[23vw]'/>
            </Link>
            <Link to="/contact" className='px-[2vw] py-3 md:text-2xl text-xs absolute rounded-full bg-dark text-white transition duration-300 mt-[43vw] md:ml-[40vw] ml-[35vw]'>JE RESERVE DE SUITE</Link>
            <img src="ECRAN_TAPAS.png" alt="tapas" />
        </div>
    );
};

export default Tapas;