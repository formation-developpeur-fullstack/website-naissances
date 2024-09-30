import { Profile } from "@/types/Profile";
import { SubmitHandler, useForm } from "react-hook-form";

function DeclarationEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit: SubmitHandler<Profile> = (data) => console.log(data);

  return (
    <article className="bg-white shadow-md rounded-md w-1/2 mx-auto p-4">
      <h1 className="mb-2 text-xl font-bold">Déclarer une naissance</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="border-b border-gray-900">Informations sur l'enfant</h3>
        <div className="form-field">
          <label htmlFor="child-firtname">Prénom</label>
          <input
            type="text"
            id="child-firtname"
            placeholder="Prénom de l'enfant"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <p className="text-red-600">Ce champ est requis</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="child-lastName">Nom</label>
          <input
            type="text"
            id="child-lastName"
            placeholder="Nom de l'enfant"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <p className="text-red-600">Ce champ est requis</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="child-brithDate">Date et heure de naissance</label>
          <div className="flex justify-between items-center gap-2">
            <input
              type="date"
              id="child-brithDate"
              placeholder="Date de naissance"
              {...register("brithDate", { required: true })}
            />
            <input
              type="time"
              id="child-brithDate"
              placeholder="Heure de naissance"
              {...register("brithTime", { required: true })}
            />
          </div>
          {errors.brithDate && (
            <p className="text-red-600">La date de naissance est requise</p>
          )}
          {errors.brithTime && (
            <p className="text-red-600">L'heure de naissance est requis</p>
          )}
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </article>
  );
}

export default DeclarationEdit;
