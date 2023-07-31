import { useForm } from "react-hook-form";
import { InputRegister } from "../../Inputs/InputRegister/InputRegister";
import { CreateContactModalStyle } from "./CreateContactModalStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactRequest } from "../../../interfaces/ContactTypes";
import { contactRequestSchema } from "../../../schemas/ContactSchemas";
import { contactReq } from "../../../hooks/contactReq";
import { CloseButton } from "../../buttons/CloseButton/CloseButton";
import { PaperButtonStyle } from "../../buttons/PaperButtons/PaperButton";

type TModalProps = {};

const CreateContactModal = ({}: TModalProps) => {
  const { register, handleSubmit } = useForm<TContactRequest>({
    resolver: zodResolver(contactRequestSchema),
  });
  const { createContact, openCreateCont, setOpenCreateCont } = contactReq();

  return (
    <CreateContactModalStyle>
      <form onSubmit={handleSubmit(createContact)}>
        <CloseButton
          className="closeBtn"
          onClick={() => setOpenCreateCont(!openCreateCont)}
        >
          Fechar
        </CloseButton>
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
        <PaperButtonStyle className="registerBtn">
          Criar <span>Contato</span>
        </PaperButtonStyle>
      </form>
    </CreateContactModalStyle>
  );
};

export { CreateContactModal };
