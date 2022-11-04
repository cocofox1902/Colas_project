import React from 'react';

const Tapas = () => {
    return (
        <div>
            <button className='absolute right-10' >
                <img src="JE_CONSULTE_LA_CARTE.png" alt="carte"/>
            </button>
            <img src="ECRAN_TAPAS.png" alt="tapas" />
            <button className='px-16 py-3 mb-20 text-2xl absolute rounded-full bg-zinc-900 text-white transition duration-300 ml-[39rem] -mt-52'>JE RESERVE DE SUITE</button>
        </div>
    );
};

export default Tapas;