import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { create } from "@/services";
import { useContext } from "react";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import { useMutation } from "@tanstack/react-query";
const REQUIRED_FIELD = "Ce champ est requis";
type Credentials = {
  email: string;
  password: string;
};
const schema = yup
  .object({
    email: yup.string().required(REQUIRED_FIELD),
    password: yup.string().required(REQUIRED_FIELD),
  })
  .required();
function Login() {
  const { setToken } = useContext(GlobalApplicationContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: yupResolver(schema),
  });
  const mutation = useMutation({
    mutationFn: (credentials: Credentials) => create("sign-in", credentials),
    onSuccess: async (response: Response) => {
      const { bearer: token } = await response.json();
      setToken({ token });
      reset();
    },
  });
  const onSubmit: SubmitHandler<Credentials> = async (credentials) => {
    mutation.mutate(credentials);
  };

  return (
    <div className="flex flex-col justify-between md:justify-center">
      <h1 className="p-4 font-bold text-4xl text-center text-blue-800 md:hidden">
        MES NAISSANCES
      </h1>
      <div className="w-4/5 md:w-3/4 mx-auto">
        <h1 className="mb-2 text-2xl font-bold">Connectez vous</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Votre email"
              {...register("email")}
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Votre mot de passe"
              {...register("password")}
            />
            <p className="text-red-600">{errors.password?.message}</p>
          </div>
          <button type="submit">Connexion</button>
        </form>
      </div>
      <p className="p-4 text-center md:hidden">
        &copy; {new Date().getFullYear()} chillo.tech
      </p>
    </div>
  );
}

export default Login;
