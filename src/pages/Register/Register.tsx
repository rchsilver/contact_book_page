import { Header } from "../../components/Header/Header";
import { InputRegister } from "../../components/Inputs/InputRegister/InputRegister";
import { RegisterStyle } from "./RegisterStyled";
import Image from "../../assets/cover/clipboard.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { registerShcema } from "../../schemas/RegisterSchema";
import { registerData } from "../../interfaces/RegisterTypes";

const Registe = () => {
  const { register, handleSubmit } = useForm<registerData>({
    resolver: zodResolver(registerShcema),
  });
  const { registerClient } = useAuth();
  return (
    <RegisterStyle>
      <section>
        <Header />
        <h1>Escreva suas informações</h1>
        <img src={Image} alt="Imagem de Prancheta" />
        <form onSubmit={handleSubmit(registerClient)}>
          <InputRegister
            htmlFor="fullName"
            type="text"
            name="Meu nome é"
            register={register("fullName")}
          />
          <InputRegister
            htmlFor="email"
            type="email"
            name="Meu email é"
            register={register("email")}
          />
          <InputRegister
            htmlFor="phone"
            type="text"
            name="Meu telefone é"
            register={register("phone")}
          />
          <InputRegister
            htmlFor="password"
            type="password"
            name="Minha senha será"
            register={register("password")}
          />
          <button type="submit">Registra-se</button>
        </form>
      </section>
    </RegisterStyle>
  );
};

export { Registe };
