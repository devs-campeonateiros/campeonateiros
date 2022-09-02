import { DivModal, DivInter, Divheader, FormEvent } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    quantidade: yup.number().required("Deve ser um numero"),
});
/*  <p>{errors.quantidade?.message}</p> */
export const ModalEditEvent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <DivModal>
            <DivInter>
                <Divheader>
                    <h2>Adicione um evento</h2>
                    <button type="button" onClick={() => {}}>
                        X
                    </button>
                </Divheader>

                <FormEvent onSubmit={() => {}}>
                    <label htmlFor="image">Imagem</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Insira uma imagem para seu evento!"
                        {...register("image")}
                    />
                    <label htmlFor="Inscrição">Valor da inscrição</label>
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
                        placeholder="Insira as premiacoes do evento!"
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
                    <button type="submit">Editar</button>
                </FormEvent>
            </DivInter>
        </DivModal>
    );
};
