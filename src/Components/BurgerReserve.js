import React from 'react';

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
                <button>
                    <img src="DEPART_CARTE_MENU.png" alt="DEPART_CARTE_MENU" id='DEPART_CARTE_MENU' className='w-[15vw] absolute left-3/4 mt-[10vw] rotate-12' />
                </button>
            </div>
            <div className='flex justify-center'>
                <img src="LOGO_BURGER.png" alt="logo_burger" className='w-5/6' />
            </div>
            <div><img src="MAIN.png" alt="main" id='main' className='absolute w-32 ml-[21vw] transform duration-300 lg:block hidden' /></div>
            <button onMouseEnter={changeBackground}
                onMouseLeave={changeBackground2} className='px-16 py-3 mb-20 text-2xl border-2 border-blue rounded-full bg-dark text-white transition duration-300'>JE RESERVE DE SUITE</button>
        </div>
    );
};

export default BurgerReserve;