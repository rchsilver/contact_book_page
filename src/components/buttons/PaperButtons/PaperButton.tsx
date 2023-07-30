import { PaperButtonStyle } from "./PapperButtonStyled";

type TPropsButton = {
  type: "submit" | "button" | "reset";
  firstText: string;
  secondText: string;
};

const PaperButton = ({ firstText, secondText }: TPropsButton) => {
  return (
    <PaperButtonStyle>
      {firstText} <span>{secondText}</span>
    </PaperButtonStyle>
  );
};

export { PaperButton };
