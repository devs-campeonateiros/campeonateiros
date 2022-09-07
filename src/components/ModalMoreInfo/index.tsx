import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { DivModal, DivInter, Divheader } from "./styles";

const ModalMoreInfo = () => {
  const { setModalMoreInfo } = useContext(GlobalContext);

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Informações</h2>
          <button type="button" onClick={() => setModalMoreInfo(false)}>
            X
          </button>
        </Divheader>
        <h3>Seja bem-vindo(a) ao League Of Campeonateiros!</h3>
        <p>
          Somos uma plataforma destinada a unir amantes de esportes que tem
          dificuldades em organizar torneios amadores e profissionais e até
          mesmo treinos apenas para divertimento. Viemos para resolver o
          problema da falta de jogadores para compor um time e a aumentar a
          divulgação de eventos esportivos.
        </p>
        <p>
          Aqui você pode descobrir eventos em sua localidade e em outros
          lugares, se inscrever e criar eventos, e muitas outras
          funcionalidades.
        </p>
        <p>Crie já o seu perfil!</p>
      </DivInter>
    </DivModal>
  );
};

export default ModalMoreInfo;
