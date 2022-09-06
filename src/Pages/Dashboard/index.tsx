import { FaUserCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CompleteHeader from "../../components/CompleteHeader";
import Container from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import { IEvent } from "../../context/GlobalInterfaces";
import ney from "../../assets/ney.png";
import { ModalEditUser } from "../../components/ModalEditUser";
import { ModalEditEvent } from "../../components/ModalEditEvent";
import { ModalAddEvent } from "../../components/ModalAddEvent";
import { api } from "../../services/Api";

const Dashboard = () => {
  const {
    user,
    events,
    setEvent,
    setAddEvent,
    setEditEventModal,
    deleteEvent,
    addEvent,
    editEventModal,
    editUserModal,
  } = useContext(GlobalContext);

  const [myEventsList, setMyEventsList] = useState<IEvent[]>([]);

  let navigate = useNavigate();

  useEffect(() => {
    const validation = window.localStorage.getItem("@Campeonateiros-id");

    if (validation === null) {
      navigate("*", { replace: true });
    }

    api.get("/events").then((response) => {
      setMyEventsList(response.data);
    });
  }, [editEventModal]);

  return (
    <>
      <CompleteHeader />
      <Container>
        <div className="userIndice">
          <div className="divUser">
            {user.url_image ? (
              <img src={user.url_image} alt={user.name} />
            ) : (
              <span>
                <FaUserCircle />
              </span>
            )}
            <h2>
              <span className="userSaudation">Olá!</span>
              {user.name}
            </h2>
          </div>
          <div className="divButtons">
            <button>MEUS EVENTOS</button>
            <button>EVENTOS QUE TENHO INTERESSE</button>
            <button
              className="addEvent"
              onClick={() => {
                setAddEvent(true);
              }}
            >
              Criar Campeonato
            </button>
          </div>
        </div>
        <div className="divButtons">
          <button>FUTEBOL</button>
          <span>|</span>
          <button>BASQUETE</button>
          <span>|</span>
          <button>VÔLEI</button>
          <span>|</span>
          <button>TODOS EVENTOS</button>
        </div>

        {myEventsList.map((event) => (
          <div className="divEvent" key={event.id}>
            {event.image ? (
              <img src={event.image} alt={event.name} />
            ) : (
              <img src={ney} alt={event.name} />
            )}

            <div className="divInfos">
              <h2>{event.name}</h2>
              <span>
                {event.dateStart} até {event.dateEnd}
              </span>
              <p>Local: {event.localization}</p>
              <p className="subscription">Inscrição: {event.subscription}</p>
              <p className="description">Premiações: {event.awards}</p>
              <p className="quantity">Quantidade máx.: {event.quantity}</p>
              <p className="address">Endereço: {event.address}</p>
            </div>
            <div className="buttonsCard">
              <button className="infoEvent">Ver Evento</button>
              <button
                className="btnEdit"
                onClick={() => {
                  setEvent(event);
                  setEditEventModal(true);
                }}
              >
                Editar
              </button>
              <button
                className="btnDel"
                onClick={() => {
                  deleteEvent();
                }}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}

        {editUserModal && <ModalEditUser />}
        {editEventModal && <ModalEditEvent />}
        {addEvent && <ModalAddEvent />}
      </Container>
    </>
  );
};

export default Dashboard;
