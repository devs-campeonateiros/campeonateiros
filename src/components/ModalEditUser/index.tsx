import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { DivModal, DivInter, Divheader, FormEvent, Perrors } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import { IEditUser } from "../../context/GlobalInterfaces";

const schema = yup.object({
  name: yup.string().required("*Mudar o nome"),
  city: yup.string().required("*Qual localização?"),
  players: yup.string().required("*Adicione jogadores para seu time"),
  url_image: yup.string(),
});

export const ModalEditUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditUser>({
    resolver: yupResolver(schema),
  });

  const { editUser, setEditUserModal, user } = useContext(GlobalContext);

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Editar Usuario</h2>
          <button
            type="button"
            onClick={() => {
              setEditUserModal(false);
            }}
          >
            X
          </button>
        </Divheader>

        <FormEvent onSubmit={handleSubmit(editUser)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Nome!"
            {...register("name")}
          />
          <Perrors>{errors.name?.message}</Perrors>
          <label htmlFor="city">Cidade/Estado</label>
          <input
            type="text"
            id="city"
            placeholder="ex: campo grande - MS!"
            {...register("city")}
          />
          <Perrors>{errors.city?.message}</Perrors>
          <label htmlFor="players">Jogadores</label>
          <input
            type="text"
            id="players"
            placeholder="Insira o nome dos jogadores!"
            {...register("players")}
          />
          <Perrors>{errors.players?.message}</Perrors>
          <label htmlFor="url_image">Imagem de perfil</label>
          <input
            type="text"
            id="url_image"
            placeholder="url da imagem"
            {...register("url_image")}
          />

          <button type="submit">Editar</button>
        </FormEvent>
      </DivInter>
    </DivModal>
  );
};
