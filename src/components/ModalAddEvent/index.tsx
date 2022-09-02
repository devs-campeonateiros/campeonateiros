import { DivModal, DivInter, Divheader, FormEvent } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    localization: yup.string().required("Campo obrigatório"),
    "date-start": yup
        .date()
        .min(new Date(), "Por Favor escolha uma data futura")
        .typeError("Data de inicio é obrigatório"),
    "date-end": yup
        .date()
        .min(yup.ref("date-start"), "End date must be grater than start date")
        .typeError("End Date is Required"),
});

interface IEventRegister {
    category: string;
    userId: number;
    name: string;
    localization: string;
    "date-start": Date;
    "date-end": Date;
}

export const ModalAddEvent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IEventRegister>({
        resolver: yupResolver(schema),
    });

    const { createEvent } = useContext(GlobalContext);

    return (
        <DivModal>
            <DivInter>
                <Divheader>
                    <h2>Adicione um evento</h2>
                    <button type="button" onClick={() => {}}>
                        X
                    </button>
                </Divheader>

                <FormEvent onSubmit={handleSubmit(createEvent)}>
                    <p>Modalidade</p>
                    <select id="categoria" {...register("category")}>
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
                    <label htmlFor="date-start">Inicio do evento</label>
                    <input
                        type="date"
                        id="date-start"
                        placeholder="Insira a data inicial do evento!"
                        {...register("date-start")}
                    />
                    <label htmlFor="date-end">Fim do evento</label>
                    <input
                        type="date"
                        id="date-end"
                        placeholder="Insira a data final do evento"
                        {...register("date-end")}
                    />
                    <button type="submit">Adicionar Evento</button>
                </FormEvent>
            </DivInter>
        </DivModal>
    );
};
