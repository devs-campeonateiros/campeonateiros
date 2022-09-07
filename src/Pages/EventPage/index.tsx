import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CompleteHeader from "../../components/CompleteHeader";
import { ModalConfirmInscription } from "../../components/ModalConfirmInscription";
import { GlobalContext } from "../../context/GlobalContext";
import { IEvent } from "../../context/GlobalInterfaces";
import { api } from "../../services/Api";
import { ContainerEvent } from "./styles";

const EventPage = () => {
  const [eventsList, setEventsList] = useState<IEvent[]>([]);

  const { id } = useParams();
  const idNumber = Number(id);

  const {
    setEvent,
    modalConfirmInscription,
    setModalConfirmInscription,
    event,
  } = useContext(GlobalContext);

  useEffect(() => {
    api.get("/events").then((response) => {
      setEventsList(response.data);
    });
  }, [setEventsList]);

  const evento = eventsList.find((elem) => elem.id === id);
  return (
    <>
      <CompleteHeader />
      <ContainerEvent>
        <div className="title">
          {evento?.image ? (
            <img src={evento.image} alt={evento.name} />
          ) : (
            <img
              src="https://cdn.discordapp.com/attachments/674032411092320324/1016808699341316146/unknown.png"
              alt="sua imagem"
            />
          )}

          <h3>{evento?.name}</h3>
        </div>
        <div className="second">
          <div className="description">
            <span>Data - Dec 02/2021</span>
            <h3>Descrição:</h3>
            <p>
              Campeonato de {evento?.category} em {evento?.localization} do dia{" "}
              {evento?.dateStart} ao dia {evento?.dateEnd} o valor de incrição é
              de {evento?.subscription} e a premiação será de {evento?.awards}
            </p>
            <p>
              <b>Local:</b> {evento?.localization}
            </p>
            <p>
              <b>Premiação:</b> {evento?.awards}
            </p>
            {evento?.teams && (
              <div>
                <b>Times incritos:</b>
                <p>Algum ai</p>
              </div>
            )}
          </div>
          <div className="value">
            <h3>Valor de Inscrição:</h3>
            <h3>{evento?.subscription}</h3>
            <button
              onClick={() => {
                setModalConfirmInscription(true);
              }}
            >
              INSCREVA-SE
            </button>
          </div>
        </div>
      </ContainerEvent>
      {modalConfirmInscription && <ModalConfirmInscription />}
    </>
  );
};
export default EventPage;
