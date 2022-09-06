import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompleteHeader from "../../components/CompleteHeader";
import SimpleHeader from "../../components/simpleHeader";
import { IEvent } from "../../context/GlobalInterfaces";
import { api } from "../../services/Api";
import { ContainerEvent } from "./styles";

const EventPage = () => {
  const token = localStorage.getItem("@Campeonateiros-token") || "";

  const [eventsList, setEventsList] = useState<IEvent[]>([]);

  const { id } = useParams()

  const idNumber = Number(id)  
  console.log(idNumber)
  
  useEffect(() => {
    api.get("/events").then((response) => {
      setEventsList(response.data);
    });
  }, [setEventsList]);
  //  if(!id){

  //  }
  const evento = eventsList.find((elem) => elem.id == id)
  console.log(evento)
  return (
    <>
      {token ? <CompleteHeader /> : <SimpleHeader />}
      <ContainerEvent>
        <div className="title">
          {evento?.image ? <img src={evento.image} alt={evento.name}/> : <img src="https://cdn.discordapp.com/attachments/674032411092320324/1016808699341316146/unknown.png" alt="sua imagem"/>}
          
          
          <h3>{evento?.name}</h3>
        </div>
        <div className="second">
          <div className="description">
            <span>Data - Dec 02/2021</span>
            <h3>Descrição:</h3>
            <p>
              Campeonato de {evento?.category} em {evento?.localization} do dia {evento?.dateStart} ao dia {evento?.dateEnd} o valor de incrição é de {evento?.subscription} e a premiação será de {evento?.awards}
              
            </p>
            <p>
              <b>Local:</b> {evento?.localization}
            </p>
            <p>
              <b>Premiação:</b> {evento?.awards}
            </p>
          </div>
          <div className="value">
            <h3>Valor de Inscrição:</h3>
            <h3>{evento?.subscription}</h3>
            <button>INSCREVA-SE</button>
          </div>
        </div>
      </ContainerEvent>
    </>
  );
};
export default EventPage;
