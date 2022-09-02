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
    events: IEvent[];
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

interface IUser {
    id: string;
    name: string;
    email: string;
    city: string;
    players: undefined | string[];
    url_image: undefined | string;
}

interface IUserLogin {
    email: string;
    password: string;
}

export interface IEvent {
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
                toast.success("Conta criada com sucesso!", {
                    theme: "dark",
                });
                navigate("/login");
            })
            .catch(() => {
                toast.error("Algo deu errado!", {
                    theme: "dark",
                });
            });
    }

    function loginUser(data: IUserLogin) {
        api.post("login", data)
            .then((res) => {
                toast.success("Login Feito com sucesso!", {
                    theme: "dark",
                });
                const token = res.data.accessToken;
                const id = res.data.user.id;
                window.localStorage.clear();
                window.localStorage.setItem("@Campeonateiros-token", token);
                window.localStorage.setItem("@Campeonateiros-id", id);
                setUser(res.data.user);
                api.defaults.headers.common.authorization = `Bearer ${token}`;
                navigate("/home");
            })
            .catch(() =>
                toast.error("Algo deu errado!", {
                    theme: "dark",
                })
            );
    }

    function createEvent(data: IEvent) {
        api.post("events", data, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                toast.success("Evento criado com sucesso!", {
                    theme: "dark",
                });
                // direcionar para a pág do Evento
            })
            .catch((err) => {
                toast.error("Ocorreu algum problema!", {
                    theme: "dark",
                });
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
                toast.success("Evento atualizado!!", {
                    theme: "dark",
                });
                setEvent(res.data);
            })
            .catch((err) => {
                toast.error("Algo deu errado...", {
                    theme: "dark",
                });
            });
    }

    function editUser(data: IUser) {
        api.patch(`users/${data.id}`, data, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                toast.success("Evento atualizado!!", {
                    theme: "dark",
                });
                setUser(res.data);
            })
            .catch((err) => {
                toast.error("Algo deu errado...", {
                    theme: "dark",
                });
            });
    }

    function deleteEvent() {
        api.delete(`events/${event.id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(() => {
                toast.success("Evento deletado!", {
                    theme: "dark",
                });
                setEvents(events.filter((elem) => elem.id !== event.id));
            })
            .catch(() => {
                toast.error("Algo deu errado!", {
                    theme: "dark",
                });
            });
    }

    function deleteUser() {
        api.delete(`users/${user.id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(() => {
                toast.success("Usuário deletado!", {
                    theme: "dark",
                });
                setUsers(users.filter((elem) => elem.id !== event.id));
                window.localStorage.clear();
            })
            .catch(() => {
                toast.error("Algo deu errado!", {
                    theme: "dark",
                });
            });
    }

    return (
        <GlobalContext.Provider
            value={{
                user,
                setUser,
                event,
                setEvent,
                events,
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
