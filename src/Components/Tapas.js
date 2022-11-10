import React from 'react';

const Tapas = () => {
    return (
        <div>
            <button className='absolute right-10' >
                <img src="JE_CONSULTE_LA_CARTE.png" alt="carte" className='w-[23vw]'/>
            </button>
            <button className='px-[2vw] py-3 md:text-2xl text-xs absolute rounded-full bg-dark text-white transition duration-300 mt-[43vw] md:ml-[40vw] ml-[35vw]'>JE RESERVE DE SUITE</button>
            <img src="ECRAN_TAPAS.png" alt="tapas" />
        </div>
    );
};

export default Tapas;