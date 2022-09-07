import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ContainerLogin } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import SimpleHeader from "../../components/simpleHeader";
import { IUserDate } from "./Interfaces";
import CompleteHeader from "../../components/CompleteHeader";

const Login = () => {
  const navigate = useNavigate();

  const { loginUser } = useContext(GlobalContext);

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Deve ser um e-mail")
      .required("Email obrigatório"),
    password: yup.string().required("senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserDate>({
    resolver: yupResolver(loginSchema),
  });

  function onHandleClick() {
    navigate("/register");
  }

  return (
    <>
      <CompleteHeader />
      <ContainerLogin>
        <div className="container">
          <form onSubmit={handleSubmit(loginUser)}>
            <h2>Login</h2>
            <label htmlFor="email">E-mail:</label>
            <input
              placeholder="Digite seu E-mail"
              id="email"
              {...register("email")}
            />
            <span>{errors.email && errors.email.message}</span>

            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              id="password"
              {...register("password")}
            />
            <span>{errors.password && errors.password.message}</span>

            <button type="submit">Login</button>
          </form>
          <div className="register">
            <span>Ainda não possui uma conta?</span>
            <button className="cadastrar" onClick={onHandleClick}>
              Cadastrar
            </button>
          </div>
        </div>
      </ContainerLogin>
    </>
  );
};

export default Login;
