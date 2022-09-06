import { DivModal, DivInter, Divheader, FormEvent, DivBtt } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import { IEditEvent } from "../../context/GlobalInterfaces";

export const ModalEditEvent = () => {
  const schema = yup.object({
    image: yup.string().required("Qual a URL da imagem?"),
    subscription: yup.string().required("Inscrição obrigatório"),
    awards: yup.string().required("Premiações obrigatório"),
    quantify: yup.string().required("quantidade obrigatório"),
    adress: yup.string().required("Endereço obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditEvent>({
    resolver: yupResolver(schema),
  });

  const { setEditEventModal, editEvent, event, deleteEvent } =
    useContext(GlobalContext);

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Atualizando {event.name} </h2>
          <button
            type="button"
            onClick={() => {
              setEditEventModal(false);
            }}
          >
            X
          </button>
        </Divheader>

        <FormEvent onSubmit={handleSubmit(editEvent)}>
          <label htmlFor="image">Imagem</label>
          <input
            type="text"
            id="image"
            placeholder="Insira uma imagem para seu evento!"
            {...register("image")}
          />
          <label htmlFor="subscription">Valor da inscrição</label>
          <input
            type="text"
            id="subscription"
            placeholder="Insira o valor de inscrição!"
            {...register("subscription")}
          />
          <label htmlFor="awards">Premiações</label>
          <input
            type="text"
            id="awards"
            placeholder="Insira as premiações do evento!"
            {...register("awards")}
          />
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="number"
            id="quantity"
            placeholder="Insira a quantidade máxima de times!"
            {...register("quantity")}
          />
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            placeholder="Insira o local do evento"
            {...register("address")}
          />
          <DivBtt>
            <button type="submit">Atualizar</button>
            <button
              type="button"
              onClick={() => {
                deleteEvent();
              }}
            >
              Excluir
            </button>
          </DivBtt>
        </FormEvent>
      </DivInter>
    </DivModal>
  );
};
