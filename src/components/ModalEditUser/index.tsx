import { DivModal, DivInter, Divheader, FormEvent } from "./styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GlobalContext, IEditUser } from "../../context/GlobalContext";

export const ModalEditUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditUser>();

  const { editUser, setEditUserModal } = useContext(GlobalContext);

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

        <FormEvent
          onSubmit={() => {
            handleSubmit(editUser);
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            {...register("email")}
          />
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Nome!"
            {...register("name")}
          />
          <label htmlFor="city">Cidade/Estado</label>
          <input
            type="text"
            id="city"
            placeholder="ex: campo grande - MS!"
            {...register("city")}
          />
          <label htmlFor="players">Jogadores</label>
          <input
            type="text"
            id="players"
            placeholder="Insira o nome dos jogadores!"
            {...register("players")}
          />

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