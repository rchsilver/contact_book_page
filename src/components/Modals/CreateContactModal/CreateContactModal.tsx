import { useForm } from "react-hook-form";
import { InputRegister } from "../../Inputs/InputRegister/InputRegister";
import { CreateContactModalStyle } from "./CreateContactModalStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactRequest } from "../../../interfaces/ContactTypes";
import { contactRequestSchema } from "../../../schemas/ContactSchemas";
import { PaperButton } from "../../buttons/PaperButtons/PaperButton";
import { contactReq } from "../../../hooks/contactReq";

type TModalProps = {};

const CreateContactModal = ({}: TModalProps) => {
  const { register, handleSubmit } = useForm<TContactRequest>({
    resolver: zodResolver(contactRequestSchema),
  });
  const { createContact } = contactReq();

  return (
    <CreateContactModalStyle>
      <form onSubmit={handleSubmit(createContact)}>
        <InputRegister
          htmlFor="fullName"
          type="text"
          name="O Nome é"
          register={register("fullName")}
        />
        <InputRegister
          htmlFor="email"
          type="email"
          name="O email é"
          register={register("email")}
        />
        <InputRegister
          htmlFor="phone"
          type="text"
          name="O número é"
          register={register("phone")}
        />
        <PaperButton firstText="Criar" secondText="Contato" type="submit" />
      </form>
    </CreateContactModalStyle>
  );
};

export { CreateContactModal };
