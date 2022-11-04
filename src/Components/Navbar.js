import React from 'react';

const Navbar = () => {
    return (
        <div className='flex py-10 text-white h-1/6'>
            <div className='pl-10 flex justify-center'>
                <a href="https://www.google.com/" className='mr-20 w-80 flex justify-center h-16'>
                    <img src="LOGO_L'IMPOND.png" alt="L'impond'erable" />
                </a>
            </div>
            <div className='flex justify-evenly pl-10'>
                <button className='px-16 text-lg border-2 border-blue-500 rounded-full bg-black text-white hover:bg-blue-500 transition duration-500'>RESERVER</button>
                <div className='flex justify-center items-center'>
                    <a href="https://www.google.com/" className="mx-7 px-10 font-display max-w-sm text-sm font-bold leading-tight">
                        <span className="link link-underline link-underline-black text-white">LA CARTE</span>
                    </a>
                    <a href="https://www.google.com/" className="mx-7 px-10 font-display max-w-sm text-sm font-bold leading-tight">
                        <span className="link link-underline link-underline-black text-white">L'AMBIANCE</span>
                    </a>
                    <a href="https://www.google.com/" className="mx-7 px-10 font-display max-w-sm text-sm font-bold leading-tight">
                        <span className="link link-underline link-underline-black text-white">BLOG & EVENTS</span>
                    </a>
                    <a href="https://www.google.com/" className="mx-7 px-10 font-display max-w-sm text-sm font-bold leading-tight">
                        <span className="link link-underline link-underline-black text-white">CONTACT</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;