import { FaUserCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CompleteHeader from "../../components/CompleteHeader";
import Container from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import { IEvent } from "../../context/GlobalInterfaces";
import { ModalEditUser } from "../../components/ModalEditUser";
import { ModalEditEvent } from "../../components/ModalEditEvent";
import { ModalAddEvent } from "../../components/ModalAddEvent";
import { api } from "../../services/Api";
import { ModalConfirmDelete } from "../../components/ModalConfirmDelete";
import { ModalConfirmInscription } from "../../components/ModalConfirmInscription";

const Dashboard = () => {
  const {
    user,
    setEvent,
    setAddEvent,
    setEditEventModal,
    addEvent,
    editEventModal,
    editUserModal,
    modalConfirmDelete,
    modalConfirmInscription,
    setModalConfirmInscription,
    setModalConfirmDelete,
  } = useContext(GlobalContext);

  const [myEventsList, setMyEventsList] = useState<IEvent[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const validation = window.localStorage.getItem("@Campeonateiros-id");

    if (validation === null) {
      navigate("*", { replace: true });
    }

    atualizandoEvents();
  }, [editEventModal, navigate, addEvent, modalConfirmDelete]);

  function atualizandoEvents() {
    api.get("/events").then((response) => {
      setMyEventsList(response.data);
    });
  }

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
          <div className="divButtonsIndice">
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
        </div>

        <ul className="listEvents">
          {myEventsList.map((event) => (
            <li className="divEvent" key={event.id}>
              {event.image ? (
                <img src={event.image} alt={event.name} />
              ) : (
                <img
                  src="https://images.pexels.com/photos/7267588/pexels-photo-7267588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt={event.category}
                />
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
                <button
                  className="infoEvent"
                  onClick={() => {
                    setEvent(event);
                    navigate(`/events/${event.id}`);
                  }}
                >
                  Ver Evento
                </button>
                {event.userId == user.id && (
                  <>
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
                        setEvent(event);
                        setModalConfirmDelete(!modalConfirmDelete);
                      }}
                    >
                      Excluir
                    </button>
                  </>
                )}
                <button
                  className="btnSub"
                  onClick={() => {
                    setEvent(event);
                    setModalConfirmInscription(true);
                  }}
                >
                  Inscreva-se
                </button>
              </div>
            </li>
          ))}
        </ul>

        {editUserModal && <ModalEditUser />}
        {editEventModal && <ModalEditEvent />}
        {addEvent && <ModalAddEvent />}
        {modalConfirmDelete && <ModalConfirmDelete />}
        {modalConfirmInscription && <ModalConfirmInscription />}
      </Container>
    </>
  );
};

export default Dashboard;
