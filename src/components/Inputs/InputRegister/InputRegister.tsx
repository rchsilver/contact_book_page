import { InputRegisterStyle } from "./InputRegisterStyled";

type TPropsInput = {
  htmlFor: string;
  type: string;
  name: string;
  register: any | null;
};

const InputRegister = ({ htmlFor, type, name, register }: TPropsInput) => {
  return (
    <InputRegisterStyle>
      <label htmlFor={htmlFor}>{name}</label>
      <input type={type} id={htmlFor} {...register} />
    </InputRegisterStyle>
  );
};

export { InputRegister };
