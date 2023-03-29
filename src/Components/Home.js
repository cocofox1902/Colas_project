import React from 'react';
import { faCanadianMapleLeaf, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-white h-5/6 pb-40 bg-dark'>
            <div className='flex'>
                <div className='h-5/6 self-center lg:flex hidden'>
                    <ul className='ml-3'>
                        <li className='flex justify-center py-2'>
                            <Link to="/blog">
                                <FontAwesomeIcon icon={faCanadianMapleLeaf} className="text-3xl mr-5" />
                            </Link>
                        </li>
                        <li className='flex justify-center py-2'>
                            <a href='https://www.facebook.com/'>
                                <FontAwesomeIcon icon={faFacebook} className="text-3xl mr-5" />
                            </a>
                        </li>
                        <li className='flex justify-center py-2'>
                            <a href='https://www.youtube.com/'>
                                <FontAwesomeIcon icon={faYoutube} className="text-3xl mr-5" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='pt-24 justify-center w-full grid mr-14 lg:ml-0 ml-20'>
                    <img src="LOGO_L'IMPOND.png" alt="L'impond'erable" className='justify-self-center' />
                    <p className='md:text-3xl font-bold text-wheat justify-self-center tracking-widest'>BAR À VIN IÈME</p>
                    <img src="TYPO_CAFÉ_BAR RESTO.png" alt="TYPO_CAFÉ_BAR RESTO" className='md:pt-20 pt-5 w-[781px] place-self-center'/>
                </div>
            </div>
        </div>
    );
};

export default Home;