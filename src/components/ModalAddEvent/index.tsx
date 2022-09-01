import { DivModal, DivInter, Divheader, FormEvent } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import userEvent from "@testing-library/user-event";

const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    localization: yup.string().required("Campo obrigatório"),
    "date-start": yup
        .date()
        .min(new Date(), "Por Favor escolha uma data futura")
        .typeError("Data de inicio é obrigatório"),
    "date-end": yup
        .date()
        .min(yup.ref("startDate"), "End date must be grater than start date")
        .typeError("End Date is Required"),
});

interface IEvent {
    category: string;
    userId?: number;
    name: string;
    localization: string;
    "date-start": string;
    "date-end": string;
}

export const ModalAddEvent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IEvent>({
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
                    <p>Modalidade</p>
                    <select id="category" {...register("category")}>
                        <option value="Futebol">Futebol</option>
                        <option value="Voleibol">Voleibol</option>
                        <option value="Basquete">Basquete</option>
                    </select>
                    <input
                        value={"user.id"}
                        id="userId"
                        {...register("userId")}
                    />
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
                        type="text"
                        id="date-start"
                        placeholder="Insira a data inicial do evento!"
                        {...register("date-start")}
                    />
                    <label htmlFor="localization">Fim do evento</label>
                    <input
                        type="text"
                        id="localization"
                        placeholder="Insira a data final do evento"
                        {...register("date-end")}
                    />
                    <button type="submit">Adicionar Evento</button>
                </FormEvent>
            </DivInter>
        </DivModal>
    );
};
