import React, {
    createContext,
    ReactNode,
    useState,
    Dispatch,
    SetStateAction,
} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { api } from "../services/Api";

interface IAuthProviderProps {
    children: ReactNode;
}
interface IGlobalContext {
    user: IUser;
    setUser: Dispatch<SetStateAction<IUser>>;
    event: IEvent;
    setEvent: Dispatch<SetStateAction<IEvent>>;
    registerUser(data: IUser): void;
    loginUser(data: IUserLogin): void;
    listUsers(): void;
    listEvents(): void;
    createEvent(data: IEvent): void;
    editEvent(data: IEvent): void;
    editUser(data: IUser): void;
    deleteEvent(): void;
    deleteUser(): void;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    city: string;
    password: string;
    confirm_password: string;
    players: undefined | string[];
    url_image: undefined | string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

interface IEvent {
    category: string;
    userId: string;
    name: string;
    localization: string;
    "date-start": string;
    "date-end": string;
    image: undefined | string;
    informations: undefined | Object[];
    teams: undefined | string[];
    id: string;
}

export const GlobalContext = createContext<IGlobalContext>(
    {} as IGlobalContext
);

export const GlobalProvider = ({ children }: IAuthProviderProps) => {
    const [user, setUser] = useState<IUser>({} as IUser);
    const [event, setEvent] = useState<IEvent>({} as IEvent);
    const [users, setUsers] = useState<IUser[]>({} as IUser[]);
    const [events, setEvents] = useState<IEvent[]>({} as IEvent[]);

    const navigate = useNavigate();
    const token = window.localStorage.getItem("@Campeonateiros-token");

    function registerUser(data: IUser) {
        api.post("register", data)
            .then((res) => {
                toast.success("Conta criada com sucesso!");
                navigate("/login");
            })
            .catch(() => {
                toast.error("Algo deu errado!");
            });
    }

    function loginUser(data: IUserLogin) {
        api
        .post("login", data)
            .then((res) => {
                
                const { user: userResponse, accessToken: token } = res.data;
                
                window.localStorage.clear();
                window.localStorage.setItem("@Campeonateiros-token", token);
                window.localStorage.setItem("@Campeonateiros-id", JSON.stringify(userResponse.id));
                window.localStorage.setItem("@Campeonateiros-user", JSON.stringify(userResponse.name));
                setUser(res.data.user);
                api.defaults.headers.common.authorization = `Bearer ${token}`;
                toast.success("Login Feito com sucesso!");
                navigate("/home");
            })
            .catch((err) => {
                console.log(err)
                toast.error("Algo errado!")}
            );
    }

    function createEvent(data: IEvent) {
        api.post("events", data, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                toast.success("Evento criado com sucesso!");
                // direcionar para a pág do Evento
            })
            .catch((err) => {
                toast.error("Ocorreu algum problema!");
            });
    }

    function listUsers() {
        api.get("users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => console.log(err));
    }

    function listEvents() {
        api.get("events")
            .then((res) => {
                setEvents(res.data);
            })
            .catch((err) => console.log(err));
    }

    function editEvent(data: IEvent) {
        api.patch(`events/${data.id}`, data, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                toast.success("Evento atualizado!!");
                setEvent(res.data);
            })
            .catch((err) => {
                toast.error("Algo deu errado...");
            });
    }

    function editUser(data: IUser) {
        api.patch(`users/${data.id}`, data, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                toast.success("Evento atualizado!!");
                setUser(res.data);
            })
            .catch((err) => {
                toast.error("Algo deu errado...");
            });
    }

    function deleteEvent() {
        api.delete(`events/${event.id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(() => {
                toast.success("Evento deletado!");
                setEvents(events.filter((elem) => elem.id !== event.id));
            })
            .catch(() => {
                toast.error("Algo deu errado!");
            });
    }

    function deleteUser() {
        api.delete(`users/${user.id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(() => {
                toast.success("Usuário deletado!");
                setUsers(users.filter((elem) => elem.id !== event.id));
                window.localStorage.clear();
            })
            .catch(() => {
                toast.error("Algo deu errado!");
            });
    }

    return (
        <GlobalContext.Provider
            value={{
                user,
                setUser,
                event,
                setEvent,
                registerUser,
                loginUser,
                listUsers,
                listEvents,
                createEvent,
                editEvent,
                editUser,
                deleteEvent,
                deleteUser,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
