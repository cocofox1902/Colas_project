import React from 'react';
import '../index.css';

const ShowBurger = () => {
    return (
        <div className='bg-dark'>
            <div>
                <img src="TYPO_SAIGNANT.png" alt="saignant" className='w-64 absolute left-10 mt-36' />
                <img src="PHOTO-BURGER.jpg" alt="burger1" className='w-2/3' />
            </div>
            <img src="PHOTO-BURGER2.jpg" alt="burger2" />
            <img src="PICTO_MENU_BEIGE.png" alt="menu" />
            <img src="TEXTE_ACCOMPAGNÉ_DE_FRITES.png" alt="frites" />
            <img src="TEXTE_MMMMM.png" alt="mmm" />
        </div>
    );
};

export default ShowBurger;