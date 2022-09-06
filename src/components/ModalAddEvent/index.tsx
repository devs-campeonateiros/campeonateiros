import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";

import { DivModal, DivInter, Divheader, FormEvent } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import { IEventRegister } from "./interface";

const schema = yup.object({
  name: yup.string().required("Qual o nome do evento?"),
  localization: yup.string().required("Qual localização?"),
  dateStart: yup.string().typeError("Data de inicio é obrigatório!"),
  dateEnd: yup.string().typeError("Fim do evento é obrigatório!"),
});

export const ModalAddEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEventRegister>({
    resolver: yupResolver(schema),
  });

  const { createEvent, setAddEvent } = useContext(GlobalContext);

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Adicione um evento</h2>
          <button
            type="button"
            onClick={() => {
              setAddEvent(false);
            }}
          >
            X
          </button>
        </Divheader>

        <FormEvent onSubmit={handleSubmit(createEvent)}>
          <p>Modalidade</p>
          <select id="category" {...register("category")}>
            <option value="Futebol">Futebol</option>
            <option value="Voleibol">Voleibol</option>
            <option value="Basquete">Basquete</option>
          </select>

          <label htmlFor="name">Nome do evento</label>
          <input
            type="text"
            id="name"
            placeholder="Insira um nome para o evento!"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
          <label htmlFor="localization">Local do evento</label>
          <input
            type="text"
            id="localization"
            placeholder="Insira o local do evento!"
            {...register("localization")}
          />
          <p>{errors.localization?.message}</p>

          <label htmlFor="dateStart">Inicio do evento</label>
          <input
            type="date"
            id="dateStart"
            placeholder="Insira a data inicial do evento!"
            {...register("dateStart")}
          />
          <label htmlFor="dateEnd">Fim do evento</label>
          <input
            type="date"
            id="dateEnd"
            placeholder="Insira a data final do evento"
            {...register("dateEnd")}
          />
          <button type="submit">Adicionar Evento</button>
        </FormEvent>
      </DivInter>
    </DivModal>
  );
};
