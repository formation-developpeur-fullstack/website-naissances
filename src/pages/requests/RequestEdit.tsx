import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

type schemaProperties = {
  date?: string;
  message?: string;
  child: {
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: string;
  };
  parent: {
    firstName: string;
    lastName: string;
    gender?: string;
    email: string;
    phone: string;
    address: string;
  };
};
const ERROR_MESSAGE = "Ce champ est requis";
const schema = yup
  .object({
    date: yup.string(),
    message: yup.string(),
    child: yup.object({
      firstName: yup.string().required(ERROR_MESSAGE),
      lastName: yup.string().required(ERROR_MESSAGE),
      gender: yup.string().required(ERROR_MESSAGE),
      birthDate: yup.string().required(ERROR_MESSAGE),
    }),
    parent: yup.object({
      firstName: yup.string().required(ERROR_MESSAGE),
      lastName: yup.string().required(ERROR_MESSAGE),
      email: yup.string().required(ERROR_MESSAGE),
      phone: yup.string().required(ERROR_MESSAGE),
      address: yup.string().required(ERROR_MESSAGE),
    }),
  })
  .required();
function RequestEdit() {
  const [view, setView] = useState("FORM");
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const save = async (data: schemaProperties) => {
    const response = await fetch("http://localhost:8080/requests", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
      method: "POST",
    });
    await response.json();
    setView("SUCCESS");
    reset();
  };
  return (
    <article className="bg-white shadow-md rounded-md w-1/2 mx-auto p-4">
      <h1 className="mb-2 text-xl font-bold">Demander un acte de naissance</h1>
      {view === "FORM" ? (
        <form onSubmit={handleSubmit(save)}>
          <div className="form-field">
            <label htmlFor="child-gender">Civilité</label>
            <select {...register("child.gender")} id="child-gender">
              <option value="">Sélectionner</option>
              <option value="MR">Monsieur</option>
              <option value="MS">Madame</option>
              <option value="MRS">Mademoiselle</option>
            </select>
            <p className="text-red-600">{errors.child?.gender?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="child-firstname">Prénom</label>
            <input
              type="text"
              id="child-firstname"
              placeholder="Prénom de l'enfant"
              {...register("child.firstName")}
            />
            <p className="text-red-600">{errors.child?.firstName?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="child-lastName">Nom</label>
            <input
              type="text"
              id="child-lastName"
              placeholder="Nom de l'enfant"
              {...register("child.lastName")}
            />
            <p className="text-red-600">{errors.child?.lastName?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="child-birthDate">Date de naissance</label>
            <input
              type="text"
              id="child-birthDate"
              placeholder="Date de naissance"
              {...register("child.birthDate")}
            />
            <p className="text-red-600">{errors.child?.birthDate?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="parent-firstName">Prénom du parent</label>
            <input
              type="text"
              id="parent-firstName"
              placeholder="Prénom du parent"
              {...register("parent.firstName")}
            />
            <p className="text-red-600">{errors.parent?.firstName?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="parent-lastName">Nom du parent</label>
            <input
              type="text"
              id="parent-lastName"
              placeholder="Nom du parent"
              {...register("parent.lastName")}
            />
            <p className="text-red-600">{errors.parent?.lastName?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="parent-email">Email du parent</label>
            <input
              type="text"
              id="parent-email"
              placeholder="Email du parent"
              {...register("parent.email")}
            />
            <p className="text-red-600">{errors.parent?.email?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="parent-phone">Téléphone du parent</label>
            <input
              type="text"
              id="parent-phone"
              placeholder="Téléphone du parent"
              {...register("parent.phone")}
            />
            <p className="text-red-600">{errors.parent?.phone?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="parent-address">Adresse du parent</label>
            <input
              type="text"
              id="parent-address"
              placeholder="Adresse du parent"
              {...register("parent.address")}
            />
            <p className="text-red-600">{errors.parent?.address?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="message">
              Avez vous des informations complémentaire à nous transmettre
            </label>
            <textarea
              id="message"
              placeholder="Avez vous des informations complémentaire à nous transmettre"
              {...register("message")}
            ></textarea>
            <p className="text-red-600">{errors.message?.message}</p>
          </div>
          <button type="submit">Enregistrer</button>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </form>
      ) : (
        <article className="bg-white text-center px-10 py-10">
          <h1 className="text-3xl mb-6">
            Votre demande a bien été enregistrée
          </h1>
          <Link
            to={"/private/demandes"}
            className="border border-blue-600 text-blue-600 px-6 py-4 rounded-md hover:bg-blue-600 hover:text-white"
          >
            Afficher les demandes
          </Link>
        </article>
      )}
    </article>
  );
}

export default RequestEdit;
