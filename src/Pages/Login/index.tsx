import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContainerLogin, Header } from "./styles";
import { api } from "../../services/Api";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IUserDate {
    email: string;
    password: string;
    onHandleSubmit: void;
}

const Login = () => {
    
    const navigate = useNavigate()

    const { setUser } = useContext(GlobalContext);

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

    function onHandleSubmit(data: IUserDate) {
        api.post("login", data).then((res) => {
            toast.success("Login Feito com sucesso!",{
                theme: "dark",
            })
            // console.log(res)
            
            const token = res.data.accessToken;
            const id = res.data.user.id;

            window.localStorage.clear();
            window.localStorage.setItem("@Campeonateiros-token", token);
            window.localStorage.setItem("@Campeonateiros-id", id);
            setUser(res.data.user);
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            // toast.success('Login Realizado com sucesso')
            //Adicionar a pagina para onde deve ser redirecionado
            navigate('/home')
        })
        .catch(()=>toast.error('Algo deu errado!',{
            theme: "dark",
        }))
    }

    function onHandleClick(){
        navigate('/register')
    }

    return (
        <>
        <Header>
            
        </Header>
        <ContainerLogin>
            
            <div className="container">
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <h2>Login</h2>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        placeholder="Digite seu E-mail"
                        id="email"
                        {...register("email")}
                    />
                    <span>{errors.email && errors.email.message}</span>

                    <label htmlFor="password">Password</label>
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
                    <button onClick={onHandleClick}>Cadastrar</button>
                </div>
            </div>
        </ContainerLogin>
        </>
    );
};

export default Login;
