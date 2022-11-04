import React from 'react';

const Bar = () => {
    function changeBackground() {
        document.getElementById("main2").style.rotate = "90deg";
    }

    function changeBackground2(e) {
        document.getElementById("main2").style.rotate = "0deg";
    }

    return (
        <div className='bg-blue-500 flex pt-16 h-screen'>
            <div className='w-1/2 ml-20 flex'>
                <div>
                    <div id='main'><img src="MAIN.png" alt="main" id='main2' className='w-32 left-1/4 ml-24 mb-10 transform duration-300 rotate-[20deg]' /></div>
                    <button onMouseEnter={changeBackground}
                        onMouseLeave={changeBackground2} className='px-16 py-3 mb-20 text-2xl border-2 border-blue-500 rounded-full bg-zinc-900 text-white transition duration-300'>JE RESERVE DE SUITE</button>
                    <img src="TEXTE_POUR_TOUTES_SOIFS.png" alt="soif2" />
                </div>
                <div>
                    <p className='w-36 font-semibold text-3xl text-right leading-10'>SEC
                        FRUITÉ
                        AMPLE
                        AIMABLE
                        BRUT
                        CHARPENTÉ
                        CORSÉ
                        FRANC
                        GÉNÉREUX
                        MOELLEUX
                        PERLANT
                        PUISSANT
                        TANNIQUE
                        SOUPLE
                        STRUCURÉ
                        SOYEUX
                        ROND
                        MINÉRAL
                        CHARNU
                        LÉGER
                        VIF
                        SUAVE
                    </p>
                </div>
            </div>
            <img src="BLOC_VINS.png" alt="Vins" className='w-1/2 mr-10' />
        </div>
    );
};

export default Bar;