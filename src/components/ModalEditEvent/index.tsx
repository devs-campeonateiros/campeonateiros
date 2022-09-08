import {
  DivModal,
  DivInter,
  Divheader,
  FormEvent,
  DivBtt,
  Perrors,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import { IEditEvent } from "../../context/GlobalInterfaces";

export const ModalEditEvent = () => {
  const schema = yup.object({
    name: yup.string().required("*Qual o nome do evento?"),
    image: yup.string().required("*Qual a URL da imagem?"),
    subscription: yup.string().required("*Inscrição obrigatório"),
    awards: yup.string().required("*Premiações obrigatório"),
    quantity: yup.string().required("*Limite de quantos participantes?"),
    adress: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditEvent>({
    resolver: yupResolver(schema),
  });

  const { setEditEventModal, editEvent, event, setModalConfirmDelete } =
    useContext(GlobalContext);

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Edit: {event.name} </h2>
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
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Qual o nome do evento?"
            {...register("name")}
          />
          <Perrors>{errors.name?.message}</Perrors>
          <label htmlFor="image">Imagem</label>
          <input
            type="text"
            id="image"
            placeholder="Insira uma imagem para seu evento!"
            {...register("image")}
          />
          <Perrors>{errors.image?.message}</Perrors>
          <label htmlFor="subscription">Valor da inscrição</label>
          <input
            type="text"
            id="subscription"
            placeholder="Insira o valor de inscrição!"
            {...register("subscription")}
          />
          <Perrors>{errors.subscription?.message}</Perrors>
          <label htmlFor="awards">Premiações</label>
          <input
            type="text"
            id="awards"
            placeholder="Insira as premiações do evento!"
            {...register("awards")}
          />
          <Perrors>{errors.awards?.message}</Perrors>
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="number"
            id="quantity"
            placeholder="Insira a quantidade máxima de times!"
            {...register("quantity")}
          />
          <Perrors>{errors.quantity?.message}</Perrors>
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
                setModalConfirmDelete(true);
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
