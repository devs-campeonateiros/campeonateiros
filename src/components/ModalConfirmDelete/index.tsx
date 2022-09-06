import { DivInter, DivModal } from "./styles";

export const ModalConfirmDelete = () => (
  <DivModal>
    <DivInter>
      <p>tem certeza que deseja excluir o evento?</p>
      <div>
        <button onClick={() => {}}>Confirmar</button>
        <button onClick={() => {}}>Cancelar</button>
      </div>
    </DivInter>
  </DivModal>
);
