import { DivModal, DivInter, Divheader, FormEvent, DivBtt } from "./styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GlobalContext, IEditEvent } from "../../context/GlobalContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  quantidade: yup.number().required("Deve ser um numero"),
});

export const ModalEditEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditEvent>({
    resolver: yupResolver(schema),
  });

  const { setEditEvent, editEvent } = useContext(GlobalContext);

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Adicione um evento</h2>
          <button
            type="button"
            onClick={() => {
              setEditEvent(false);
            }}
          >
            X
          </button>
        </Divheader>

        <FormEvent
          onSubmit={() => {
            handleSubmit(editEvent);
          }}
        >
          <label htmlFor="image">Imagem</label>
          <input
            type="text"
            id="image"
            placeholder="Insira uma imagem para seu evento!"
            {...register("image")}
          />
          <label htmlFor="inscricao">Valor da inscrição</label>
          <input
            type="text"
            id="inscricao"
            placeholder="Insira o valor de inscrição!"
            {...register("inscricao")}
          />
          <label htmlFor="premiacoes">Premiações</label>
          <input
            type="text"
            id="premiacoes"
            placeholder="Insira as premiações do evento!"
            {...register("premiacoes")}
          />
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            placeholder="Insira a quantidade máxima de times!"
            {...register("quantidade")}
          />

          <label htmlFor="localizacao">Localização</label>
          <input
            type="text"
            id="localizacao"
            placeholder="Insira o local do evento"
            {...register("localizacao")}
          />
          <label htmlFor="teams">Times confirmados</label>
          <input
            type="text"
            id="teams"
            placeholder="Insira os times que irão participar"
            {...register("teams")}
          />
          <DivBtt>
            <button type="submit">Editar</button>
            <button onClick={() => {}}>Excluir</button>
          </DivBtt>
        </FormEvent>
      </DivInter>
    </DivModal>
  );
};