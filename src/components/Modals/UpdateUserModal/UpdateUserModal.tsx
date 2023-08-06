import { useForm } from "react-hook-form";
import { InputRegister } from "../../Inputs/InputRegister/InputRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserReq } from "../../../interfaces/RegisterTypes";
import { CloseButton } from "../../buttons/CloseButton/CloseButton";
import { PaperButtonStyle } from "../../buttons/PaperButtons/PaperButton";
import { UpdateUserModalStyle } from "./UpdateUserModalStyled";
import { updateUserSchemaReq } from "../../../schemas/RegisterSchema";
import { userReq } from "../../../hooks/userReq";
import { useState } from "react";

const UpdateUserModal = () => {
  const { openUpdateUser, deleteUser, setOpenUpdateUser, updateUser, user } =
    userReq();

  const [showDeleteBtn, setShowDeleteBtn] = useState<boolean>(true);

  const { register, handleSubmit } = useForm<updateUserReq>({
    defaultValues: {
      fullName: user?.fullName,
      email: user?.email,
      phone: user?.phone,
    },
    resolver: zodResolver(updateUserSchemaReq),
  });

  const handleUpdateUser = (data: updateUserReq) => {
    updateUser(data);
  };

  return (
    <UpdateUserModalStyle>
      <form onSubmit={handleSubmit(handleUpdateUser)}>
        {showDeleteBtn ? (
          <>
            <CloseButton
              className="closeBtn"
              onClick={() => setOpenUpdateUser(!openUpdateUser)}
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
            <div>
              <PaperButtonStyle type="submit" className="registerBtn">
                Alterar <span>Perfil</span>
              </PaperButtonStyle>

              <PaperButtonStyle
                onClick={() => setShowDeleteBtn(!showDeleteBtn)}
                type="button"
                className="deleteBtn"
              >
                Deletar <span>Perfil</span>
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
              onClick={() => deleteUser()}
              type="button"
              className="yesDeleteBtn"
            >
              Quero Deletar<span>Sim!!!</span>
            </PaperButtonStyle>
          </div>
        )}
      </form>
    </UpdateUserModalStyle>
  );
};
export { UpdateUserModal };
