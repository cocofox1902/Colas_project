import React from 'react';
import { faCanadianMapleLeaf, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <div className='text-white h-5/6 pb-40 bg-dark'>
            <div className='flex'>
                <div className='h-5/6 self-center mt-20 lg:flex hidden'>
                    <ul className='ml-3'>
                        <li className='flex justify-center py-2'>
                            <button>
                                <FontAwesomeIcon icon={faCanadianMapleLeaf} className="text-3xl mr-5" />
                            </button>
                        </li>
                        <li className='flex justify-center py-2'>
                            <button>
                                <FontAwesomeIcon icon={faInstagram} className="text-3xl mr-5" />
                            </button>
                        </li>
                        <li className='flex justify-center py-2'>
                            <button>
                                <FontAwesomeIcon icon={faYoutube} className="text-3xl mr-5" />
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='pt-44 justify-center w-full grid mr-14 lg:ml-0 ml-20'>
                    <img src="LOGO_L'IMPOND.png" alt="L'impond'erable" className='justify-self-center' />
                    <p className='text-xl font-bold text-wheat justify-self-center'>BAR À 20 ÈME</p>
                    <img src="TYPO_CAFÉ_BAR RESTO.png" alt="TYPO_CAFÉ_BAR RESTO" className='pt-20'/>
                </div>
            </div>
        </div>
    );
};

export default Home;