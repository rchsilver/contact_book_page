import { useForm } from "react-hook-form";
import { InputRegister } from "../../Inputs/InputRegister/InputRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactRequest } from "../../../interfaces/ContactTypes";
import { contactRequestSchema } from "../../../schemas/ContactSchemas";
import { contactReq } from "../../../hooks/contactReq";
import { CloseButton } from "../../buttons/CloseButton/CloseButton";
import { PaperButtonStyle } from "../../buttons/PaperButtons/PaperButton";
import { UpdateContactModalStyle } from "./UpdateContactModalStyled";

type TModalProps = {};

const UpdateContactModal = ({}: TModalProps) => {
  const { register, handleSubmit } = useForm<TContactRequest>({
    resolver: zodResolver(contactRequestSchema),
  });
  const { createContact, openUpdateCont, setOpenUpdateCont } = contactReq();

  return (
    <UpdateContactModalStyle>
      <form onSubmit={handleSubmit(createContact)}>
        <CloseButton
          className="closeBtn"
          onClick={() => setOpenUpdateCont(!openUpdateCont)}
        >
          Fechar
        </CloseButton>
        <InputRegister
          htmlFor="fullName"
          type="text"
          name="Mudar nome para"
          register={register("fullName")}
        />
        <InputRegister
          htmlFor="email"
          type="email"
          name="Mudar email para"
          register={register("email")}
        />
        <InputRegister
          htmlFor="phone"
          type="text"
          name="Mudar número para"
          register={register("phone")}
        />
        <PaperButtonStyle className="registerBtn">
          Alterar <span>Contato</span>
        </PaperButtonStyle>
      </form>
    </UpdateContactModalStyle>
  );
};

export { UpdateContactModal };
