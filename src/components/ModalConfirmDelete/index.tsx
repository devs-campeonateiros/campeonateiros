import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { DivInter, DivModal } from "./styles";

export const ModalConfirmDelete = () => {
  const { setModalConfirmDelete, deleteEvent, event } =
    useContext(GlobalContext);

  return (
    <DivModal>
      <DivInter>
        <p>tem certeza que deseja excluir o evento?</p>
        <div>
          <button
            onClick={() => {
              deleteEvent();
              setModalConfirmDelete(!ModalConfirmDelete);
            }}
          >
            Confirmar
          </button>
          <button
            onClick={() => {
              setModalConfirmDelete(!ModalConfirmDelete);
            }}
          >
            Cancelar
          </button>
        </div>
      </DivInter>
    </DivModal>
  );
};
