import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import CompleteHeader from "../../components/CompleteHeader";

import SimpleHeader from "../../components/simpleHeader";
import { GlobalContext } from "../../context/GlobalContext";
import { IUser } from "../../context/GlobalInterfaces";
import { ContainerRegister } from "./styles";

const Register = () => {
  const { registerUser } = useContext(GlobalContext);

  const registerSchema = yup.object().shape({
    name: yup.string().required("Time Obrigatório"),
    email: yup.string().email("Não é um e-mail").required("E-mail obrigatório"),
    city: yup.string().required("A cidade é obrigatória"),
    password: yup
      .string()
      .required("Deve conter uma senha")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Ex: Aa@12345678."
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Confirmação deve ser iguar a senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      <CompleteHeader />
      <ContainerRegister>
        <div className="container">
          <h2>Cadastre-se</h2>

          <form onSubmit={handleSubmit(registerUser)}>
            <label htmlFor="name">Nome do Time:</label>
            <input
              type="text"
              id="name"
              placeholder="Clube de Regatas Flamengo"
              {...register("name")}
            />
            {errors.name && <span>{errors.name.message}</span>}

            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              id="email"
              placeholder="flamengo@crf.com"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <label htmlFor="city">Cidade:</label>
            <input
              type="text"
              id="city"
              placeholder="Rio de Janeiro"
              {...register("city")}
            />
            {errors.city && <span>{errors.city.message}</span>}

            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}

            <label htmlFor="confirm_password">Confirmar Senha:</label>
            <input
              type="password"
              id="confirm_password"
              placeholder="********"
              {...register("confirm_password")}
            />
            {errors.confirm_password && (
              <span>{errors.confirm_password.message}</span>
            )}

            <button type="submit">Criar conta</button>
          </form>
          <div className="register">
            <span>Já possuiu uma conta?</span>
            <Link to={"/login"}>Logar</Link>
          </div>
        </div>
      </ContainerRegister>
    </>
  );
};
export default Register;
