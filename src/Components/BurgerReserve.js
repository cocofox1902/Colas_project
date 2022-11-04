import React from 'react';

const BurgerReserve = () => {
    function changeBackground() {
        document.getElementById("main").style.rotate = "10deg";
    }

    function changeBackground2(e) {
        document.getElementById("main").style.rotate = "0deg";
    }

    return (
        <div className='bg-blue-500 text-center'>
            <div>
                <button>
                    <img src="DEPART_CARTE_MENU.png" alt="DEPART_CARTE_MENU" id='DEPART_CARTE_MENU' className='w-52 absolute left-3/4 mt-40 rotate-12' />
                </button>
            </div>
            <div className='flex justify-center'>
                <img src="LOGO_BURGER.png" alt="logo_burger" className='w-5/6' />
            </div>
            <div><img src="MAIN.png" alt="main" id='main' className='absolute w-32 left-1/4 ml-24 transform duration-300' /></div>
            <button onMouseEnter={changeBackground}
                onMouseLeave={changeBackground2} className='px-16 py-3 mb-20 text-2xl border-2 border-blue-500 rounded-full bg-zinc-900 text-white transition duration-300'>JE RESERVE DE SUITE</button>
        </div>
    );
};

export default BurgerReserve;