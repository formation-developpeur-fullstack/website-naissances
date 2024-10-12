import React from "react";
import { Link } from "react-router-dom";

function Requests() {
  return (
    <>
      <div className="bg-white shadow-ms rounded-md mb-3 flex justify-between items-center py-3 px-3">
        <input
          type="texte"
          id="rechercher"
          placeholder="Rechercher une demande"
          className="bg-gray-200 px-3 py-2 rounded-md !w-96"
        />
        <Link
          to={"/demandes/nouvelle-demande"}
          className="bg-green-600 rounded-md text-white px-3 py-2"
        >
          Nouvelle demande
        </Link>
      </div>
    </>
  );
}

export default Requests;
