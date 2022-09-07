import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { DivInter, DivModal } from "./styles";

export const ModalConfirmInscription = () => {
  const { setModalConfirmInscription, confirmInscription } =
    useContext(GlobalContext);

  return (
    <DivModal>
      <DivInter>
        <p>Confirmar sua inscrição no evento?</p>
        <div>
          <button
            onClick={() => {
              confirmInscription();
              setModalConfirmInscription(false);
            }}
          >
            Sim
          </button>
          <button
            onClick={() => {
              setModalConfirmInscription(false);
            }}
          >
            Não
          </button>
        </div>
      </DivInter>
    </DivModal>
  );
};
