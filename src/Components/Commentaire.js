import React from "react";

const Commentaire = () => {
  return (
    <div className="bg-dark md:pb-20 pb-12">
      <div className="flex justify-center">
        <img
          src="TEXTE_ILS_ONT_COMMENTÉS.png"
          alt="commentaire"
          className="pt-40 w-3/4"
        />
      </div>
      <div class="justify-center text-white mt-20 grid lg:grid-cols-3 grid-cols-1 gap-5 lg:mr-10 mr-5 md:mr-0">
        <div class="grid ml-10">
          <p class="md:text-3xl text-lg font-bold">
            « Agréable restau/bar convivial. Très bon plat le déjeuner, surtout
            le couscous »
          </p>
          <div>
            <p class="mt-5 text-xl">Ihab</p>
            <p class="mt-1 font-light">MAI 2022</p>
          </div>
        </div>
        <div class="ml-10 grid lg:mt-0 my-10">
          <p class="md:text-3xl text-lg font-bold">
            « Charmant petit bar de quartier. Des hôtes sympathiques qui
            proposent un menu de qualité. Je recommande ! »
          </p>
          <p class="mt-5 text-xl">Fox75</p>
          <p class="mt-1 font-light">MAI 2022</p>
        </div>
        <div class="ml-10 grid">
          <p class="md:text-3xl text-lg font-bold">
            « Les visiteurs peuvent apprécier une ambiance douillee… et les
            burgers un régal !!!! »
          </p>
          <div>
            <p class="mt-5 text-xl">Romain</p>
            <p class="mt-1 font-light">MARS 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commentaire;
