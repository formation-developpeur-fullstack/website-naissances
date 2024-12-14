import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Declaration } from "@/types/Declaration";
import { create } from "@/services";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
const REQUIRED_FIELD = "Ce champ est requis";
const schema = yup
  .object({
    picture: yup.string(),
    comment: yup.string(),
    status: yup.string().required(REQUIRED_FIELD).default("NEW"),
    company: yup.object({
      name: yup.string().required(REQUIRED_FIELD),
      address: yup.object({
        street: yup.string().required(REQUIRED_FIELD),
        zip: yup.string().required(REQUIRED_FIELD),
        city: yup.string().required(REQUIRED_FIELD),
      }),
    }),
    child: yup.object({
      gender: yup.string().required(REQUIRED_FIELD),
      firstName: yup.string().required(REQUIRED_FIELD),
      lastName: yup.string().required(REQUIRED_FIELD),
      birthDate: yup.string().required(REQUIRED_FIELD),
      birthTime: yup.string().required(REQUIRED_FIELD),
    }),
    secondParent: yup.object({
      gender: yup.string().required(REQUIRED_FIELD),
      firstName: yup.string().required(REQUIRED_FIELD),
      lastName: yup.string().required(REQUIRED_FIELD),
      email: yup.string().required(REQUIRED_FIELD),
      phone: yup.string().required(REQUIRED_FIELD),
    }),
  })
  .required();

function DeclarationEdit() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Declaration>({
    resolver: yupResolver(schema),
  });
  const {
    state: { token },
  } = useContext(GlobalApplicationContext);

  const mutation = useMutation({
    mutationFn: (declaration: Declaration) =>
      create({ token, url: "declarations", body: declaration }),
    onSuccess: () => {
      reset();
    },
  });
  const onSubmit: SubmitHandler<Declaration> = async (declaration) => {
    const {
      child: { birthDate, birthTime },
    } = declaration;

    const finalBirthDate = new Date(birthDate);
    finalBirthDate.setHours(Number(birthTime.split(":")[0]));
    finalBirthDate.setMinutes(Number(birthTime.split(":")[1]));

    const finalDeclaration = {
      ...declaration,
      child: {
        ...declaration.child,
        birthDate: finalBirthDate.toISOString(),
      },
    };

    mutation.mutate(finalDeclaration);
  };

  return (
    <article className="bg-white shadow-md rounded-md w-1/2 mx-auto p-4">
      {mutation.isIdle || mutation.isError ? (
        <>
          <h1 className="mb-2 text-xl font-bold">Déclarer une naissance</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ENFANT */}
            <h3 className="border-b border-gray-900">
              Informations sur l'enfant
            </h3>
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
              <label htmlFor="child-birthDate">
                Date et heure de naissance
              </label>
              <div className="flex justify-between items-center gap-2">
                <input
                  type="date"
                  id="child-birthDate"
                  placeholder="Date de naissance"
                  {...register("child.birthDate")}
                />
                <input
                  type="time"
                  id="child-birthDate"
                  placeholder="Heure de naissance"
                  {...register("child.birthTime")}
                />
              </div>
              <p className="text-red-600">{errors.child?.birthDate?.message}</p>
              <p className="text-red-600">{errors.child?.birthTime?.message}</p>
            </div>

            {/* PARENT 2 */}
            <h3 className="border-b border-gray-900 mt-5">
              Informations sur le deuxième parent
            </h3>
            <div className="form-field">
              <label htmlFor="secondParent-gender">Civilité</label>
              <select
                {...register("secondParent.gender")}
                id="secondParent-gender"
              >
                <option value="">Sélectionner</option>
                <option value="MR">Monsieur</option>
                <option value="MS">Madame</option>
                <option value="MRS">Mademoiselle</option>
              </select>
              <p className="text-red-600">
                {errors.secondParent?.gender?.message}
              </p>
            </div>
            <div className="form-field">
              <label htmlFor="secondParent-firstname">Prénom</label>
              <input
                type="text"
                id="secondParent-firstname"
                placeholder="Prénom du parent"
                {...register("secondParent.firstName")}
              />
              <p className="text-red-600">
                {errors.secondParent?.firstName?.message}
              </p>
            </div>
            <div className="form-field">
              <label htmlFor="secondParent-lastName">Nom</label>
              <input
                type="text"
                id="secondParent-lastName"
                placeholder="Nom du parent"
                {...register("secondParent.lastName")}
              />
              <p className="text-red-600">
                {errors.secondParent?.lastName?.message}
              </p>
            </div>
            <div className="form-field">
              <label htmlFor="secondParent-email">Email</label>
              <input
                type="email"
                id="secondParent-email"
                placeholder="Email du parent"
                {...register("secondParent.email")}
              />
              <p className="text-red-600">
                {errors.secondParent?.email?.message}
              </p>
            </div>
            <div className="form-field">
              <label htmlFor="secondParent-phone">Téléphone</label>
              <input
                type="tel"
                id="secondParent-phone"
                placeholder="Téléphone du parent"
                {...register("secondParent.phone")}
              />
              <p className="text-red-600">
                {errors.secondParent?.phone?.message}
              </p>
            </div>

            {/* Hopital */}
            <h3 className="border-b border-gray-900 mt-5">
              Informations sur le lieu de naissance
            </h3>
            <div className="form-field">
              <label htmlFor="company-name">Nom de l'établissement</label>
              <input
                type="text"
                id="company-name"
                placeholder="Nom de l'établissement"
                {...register("company.name")}
              />
              <p className="text-red-600">{errors.company?.name?.message}</p>
            </div>
            <div className="form-field">
              <label htmlFor="company-address">
                Adresse de l'établissement
              </label>
              <div aria-braillelabel="company-address">
                <label htmlFor="company-street">Rue</label>
                <input
                  type="text"
                  id="company-street"
                  placeholder="Adresse de l'établissement"
                  {...register("company.address.street")}
                />
                <p className="text-red-600">
                  {errors.company?.address?.street?.message}
                </p>
                <div className="form-field">
                  <label htmlFor="company-zip-city">Code postal et ville</label>
                  <div className="flex justify-between items-center gap-2">
                    <input
                      type="text"
                      id="company-zip-city"
                      placeholder="code postal"
                      {...register("company.address.zip")}
                    />
                    <input
                      type="text"
                      id="company-zip-city"
                      placeholder="Ville"
                      {...register("company.address.city")}
                    />
                  </div>
                  <p className="text-red-600">
                    {errors.company?.address?.zip?.message}
                  </p>
                  <p className="text-red-600">
                    {errors.company?.address?.city?.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="comment">
                Avez vous des informations complémentaire à nous transmettre
              </label>
              <textarea
                id="comment"
                placeholder="Avez vous des informations complémentaire à nous transmettre"
                {...register("comment")}
              ></textarea>
              <p className="text-red-600">{errors.comment?.message}</p>
            </div>
            <button type="submit">Enregistrer</button>
          </form>
        </>
      ) : null}

      {mutation.isSuccess ? (
        <article className="bg-white text-center px-10 py-10">
          <h1 className="text-3xl mb-6">
            Votre naissance a bien été enregistrée
          </h1>
          <Link
            to={"/private/declarations"}
            className="border border-blue-600 text-blue-600 px-6 py-4 rounded-md hover:bg-blue-600 hover:text-white"
          >
            Afficher les déclarations
          </Link>
        </article>
      ) : null}
    </article>
  );
}

export default DeclarationEdit;
