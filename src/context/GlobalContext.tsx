import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { api } from "../services/Api";
import {
  IAuthProviderProps,
  IGlobalContext,
  IEditUser,
  IUser,
  IUserLogin,
  IEditEvent,
  IEvent,
  IUserEvent,
} from "./GlobalInterfaces";

export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export const GlobalProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [event, setEvent] = useState<IEvent>({} as IEvent);
  const [users, setUsers] = useState<IUser[]>({} as IUser[]);
  const [events, setEvents] = useState<IEvent[]>({} as IEvent[]);
  const [addEvent, setAddEvent] = useState(false);
  const [editEventModal, setEditEventModal] = useState<boolean>(false);
  const [editUserModal, setEditUserModal] = useState<boolean>(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState<boolean>(false);
  const [modalConfirmInscription, setModalConfirmInscription] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const token = window.localStorage.getItem("@Campeonateiros-token");
  const userId = window.localStorage.getItem("@Campeonateiros-id");

  useEffect(() => {
    const userId = window.localStorage.getItem("@Campeonateiros-id");

    if (userId !== null) {
      listUsers();
      listEvents();
      listUser();
    }
  }, []);

  function registerUser(data: IUser) {
    api
      .post("/register", data)
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
        window.localStorage.setItem(
          "@Campeonateiros-id",
          JSON.stringify(userResponse.id)
        );

        setUser(res.data.user);
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        toast.success("Login Feito com sucesso!");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  }

  function createEvent(data: IEvent) {
    const userId = window.localStorage.getItem("@Campeonateiros-id");
    const token = window.localStorage.getItem("@Campeonateiros-token");
    const dataEvent = { ...data, userId };

    api
      .post("/events", dataEvent, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Evento criado com sucesso!", {
          theme: "dark",
        });
        setAddEvent(!addEvent);
      })
      .catch((err) => {
        toast.error("Algo deu errado!", {
          theme: "dark",
        });
        console.log(err);
      });
  }

  function listUsers() {
    api
      .get("/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }

  function listUser() {
    api
      .get(`/users/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }

  function listEvents() {
    api
      .get("events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.log(err));
  }

  function editEvent(data: IEditEvent) {
    api
      .patch(`/events/${event.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Evento atualizado!!", {
          theme: "dark",
        });
        setEvent(res.data);
        listEvents();
        setEditEventModal(!editEventModal);
      })
      .catch((err) => {
        toast.error("Algo deu errado...");
      });
  }

  function editUser(data: IEditUser) {
    api
      .patch(`/users/${user.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Usuário atualizado!!");
        setUser(res.data);
        listUser();
        setEditUserModal(!editUserModal);
      })
      .catch((err) => {
        toast.error("Algo deu errado...");
      });
  }

  function confirmInscription() {
    const team = {
      name: user.name,
      city: user.city,
      url_image: user.url_image,
      userId: user.id,
    };
    const dados = { ...[event.teams], team };

    api
      .patch(`/events/${event.id}`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        () => (
          toast.success("incrição feita com Sucesso!", {
            theme: "dark",
          }),
          listEvents()
        )
      )
      .catch((err) => {
        toast.error("Algo deu errado...");
      });
  }

  function deleteEvent() {
    api
      .delete(`/events/${event.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Evento deletado!", {
          theme: "dark",
        });
        setEvents(events.filter((elem) => elem.id !== event.id));
      })
      .catch(() => {
        toast.error("Algo deu errado!");
      });
    listEvents();
  }

  function deleteUser() {
    api
      .delete(`/users/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Usuário deletado!");
        setUsers(users.filter((elem) => elem.id !== user.id));
        window.localStorage.clear();
        setEditUserModal(!editUserModal);
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
        events,
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
        addEvent,
        setAddEvent,
        editEventModal,
        setEditEventModal,
        editUserModal,
        setEditUserModal,
        modalConfirmDelete,
        setModalConfirmDelete,
        listUser,
        modalConfirmInscription,
        setModalConfirmInscription,
        confirmInscription,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
