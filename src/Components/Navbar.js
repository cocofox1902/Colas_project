import React from 'react';

const Navbar = () => {
    return (
        <div className='flex py-10 text-white h-1/6 bg-dark'>
            <div className='md:pl-10 pl-5 flex justify-center'>
                <a href="https://www.google.com/" className='mr-2 md:w-80 w-60 flex justify-center'>
                    <img src="LOGO_L'IMPOND.png" alt="L'impond'erable" />
                </a>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" className="ml-auto mr-5 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div className="hidden lg:flex ml-auto mr-5" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 lg:text-sm text-xs">
                    <li>
                        <button className='px-8 text-lg border-2 border-blue rounded-full bg-black text-white hover:bg-blue transition duration-500'>RESERVER</button>
                    </li>
                    <li>
                        <a href="https://www.google.com/" className="font-display max-w-sm font-bold leading-tight">
                            <span className="link link-underline link-underline-black text-white">LA CARTE</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/" className="font-display max-w-sm font-bold leading-tight">
                            <span className="link link-underline link-underline-black text-white">L'AMBIANCE</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/" className="font-display max-w-sm font-bold leading-tight">
                            <span className="link link-underline link-underline-black text-white">BLOG & EVENTS</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/" className="font-display max-w-sm font-bold leading-tight">
                            <span className="link link-underline link-underline-black text-white">CONTACT</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;