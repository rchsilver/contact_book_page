import { useForm } from "react-hook-form";
import { InputRegister } from "../../Inputs/InputRegister/InputRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactRequest } from "../../../interfaces/ContactTypes";
import { contactSchemaRequestUpdate } from "../../../schemas/ContactSchemas";
import { contactReq } from "../../../hooks/contactReq";
import { CloseButton } from "../../buttons/CloseButton/CloseButton";
import { PaperButtonStyle } from "../../buttons/PaperButtons/PaperButton";
import { UpdateContactModalStyle } from "./UpdateContactModalStyled";
import { useState } from "react";

type TModalProps = {};

const UpdateContactModal = ({}: TModalProps) => {
  const { register, handleSubmit } = useForm<TContactRequest>({
    resolver: zodResolver(contactSchemaRequestUpdate),
  });

  const {
    updateContact,
    openUpdateCont,
    setOpenUpdateCont,
    contactId,
    fullName,
    email,
    phone,
    deleteContact,
  } = contactReq();

  const [showDeleteBtn, setShowDeleteBtn] = useState<boolean>(true);

  const handleUpdateContact = (data: TContactRequest) => {
    updateContact(data, contactId);
  };

  return (
    <UpdateContactModalStyle>
      <form onSubmit={handleSubmit(handleUpdateContact)}>
        {showDeleteBtn ? (
          <>
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
              defaultValue={fullName}
            />

            <InputRegister
              htmlFor="email"
              type="email"
              name="Mudar email para"
              register={register("email")}
              defaultValue={email}
            />
            <InputRegister
              htmlFor="phone"
              type="text"
              name="Mudar número para"
              register={register("phone")}
              defaultValue={phone}
            />
            <div>
              <PaperButtonStyle type="submit" className="registerBtn">
                Alterar <span>Contato</span>
              </PaperButtonStyle>

              <PaperButtonStyle
                onClick={() => setShowDeleteBtn(!showDeleteBtn)}
                type="button"
                className="deleteBtn"
              >
                Deletar <span>Contato</span>
              </PaperButtonStyle>
            </div>
          </>
        ) : (
          <div className="deleteBox">
            <PaperButtonStyle
              onClick={() => setShowDeleteBtn(!showDeleteBtn)}
              type="button"
              className="noDeleteBtn"
            >
              Não Não! <span>Não Delete!!!</span>
            </PaperButtonStyle>
            <PaperButtonStyle
              onClick={() => deleteContact(contactId)}
              type="button"
              className="yesDeleteBtn"
            >
              Quero Deletar<span>Sim!!!</span>
            </PaperButtonStyle>
          </div>
        )}
      </form>
    </UpdateContactModalStyle>
  );
};
export { UpdateContactModal };
