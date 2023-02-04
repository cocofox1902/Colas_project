import React from 'react';
import { Link } from 'react-router-dom';

const BurgerReserve = () => {
    function changeBackground() {
        document.getElementById("main").style.rotate = "22deg";
    }

    function changeBackground2(e) {
        document.getElementById("main").style.rotate = "0deg";
    }

    return (
        <div className='bg-blue text-center py-10'>
            <div>
                <Link to="/cartes">
                    <img src="DEPART_CARTE_MENU.png" alt="DEPART_CARTE_MENU" id='DEPART_CARTE_MENU' className='w-[15vw] absolute left-3/4 mt-[10vw] rotate-12' />
                </Link>
            </div>
            <div className='flex justify-center'>
                <img src="LOGO_BURGER.png" alt="logo_burger" className='w-5/6' />
            </div>
            <div><img src="MAIN.png" alt="main" id='main' className='absolute w-[10vw] ml-[24vw] transform duration-300 lg:block hidden' /></div>
            <button onMouseEnter={changeBackground}
                onMouseLeave={changeBackground2} className='px-16 py-3 mb-20 text-2xl border-2 border-blue rounded-full bg-dark text-white transition duration-300'>
                <Link to="/contact">
                    JE RESERVE DE SUITE
                </Link>
            </button>
        </div>
    );
};

export default BurgerReserve;