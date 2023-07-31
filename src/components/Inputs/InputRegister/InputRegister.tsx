import { InputRegisterStyle } from "./InputRegisterStyled";

type TPropsInput = {
  htmlFor: string;
  type: string;
  name: string;
  register: any | null;
  defaultValue?: string;
};

const InputRegister = ({
  htmlFor,
  type,
  name,
  register,
  defaultValue,
}: TPropsInput) => {
  return (
    <InputRegisterStyle>
      <label htmlFor={htmlFor}>{name}</label>
      <input
        type={type}
        id={htmlFor}
        {...register}
        defaultValue={defaultValue}
      />
    </InputRegisterStyle>
  );
};

export { InputRegister };
