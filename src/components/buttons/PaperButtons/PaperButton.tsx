import { PaperButtonStyle } from "./PapperButtonStyled";

type TPropsButton = {
  type: "submit" | "button" | "reset";
  firstText: string;
  secondText: string;
};

const PaperButton = ({ type, firstText, secondText }: TPropsButton) => {
  return (
    <PaperButtonStyle type={type}>
      {firstText} <span>{secondText}</span>
    </PaperButtonStyle>
  );
};

export { PaperButton };
