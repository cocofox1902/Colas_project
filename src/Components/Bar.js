import React from 'react';

const Bar = () => {
    function changeBackground() {
        document.getElementById("main2").style.rotate = "90deg";
    }

    function changeBackground2(e) {
        document.getElementById("main2").style.rotate = "0deg";
    }

    return (
        <div className='bg-blue flex pt-16'>
            <div className='w-1/2 md:ml-20 ml-5 flex  lg:w-1/2 w-full'>
                <div>
                    <div id='main'><img src="MAIN.png" alt="main" id='main2' className='w-32 ml-[4vw] mb-10 transform duration-300 rotate-[20deg]' /></div>
                    <button onMouseEnter={changeBackground}
                        onMouseLeave={changeBackground2} className='px-[2vw] py-3 md:text-2xl text-xl rounded-full bg-dark text-white transition duration-300'>JE RESERVE DE SUITE</button>
                    <img src="TEXTE_POUR_TOUTES_SOIFS.png" alt="soif2" className='w-[30vw]'/>
                </div>
                <div>
                    <p className='w-50 font-semibold md:text-3xl text-xl text-right  mr-5'>
                        SEC <br />
                        FRUITÉ<br />
                        AMPLE<br />
                        AIMABLE<br />
                        BRUT<br />
                        CHARPENTÉ<br />
                        CORSÉ<br />
                        FRANC<br />
                        GÉNÉREUX<br />
                        MOELLEUX<br />
                        PERLANT<br />
                        PUISSANT<br />
                        TANNIQUE<br />
                        SOUPLE<br />
                        STRUCURÉ<br />
                        SOYEUX<br />
                        ROND<br />
                        MINÉRAL<br />
                        CHARNU<br />
                        LÉGER<br />
                        VIF<br />
                        SUAVE<br />
                    </p>
                </div>
            </div>
            <img src="BLOC_VINS.png" alt="Vins" className='w-1/2 mr-10 lg:block hidden' />
        </div>
    );
};

export default Bar;