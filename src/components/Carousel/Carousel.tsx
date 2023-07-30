import { TContacts } from "../../interfaces/ContactTypes";
import { PaperButton } from "../buttons/PaperButtons/PaperButton";
import { CarouselStyle } from "./CarouselStyled";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type TProps = {
  contacts: TContacts;
};

const Carousel = ({ contacts }: TProps) => {
  return (
    <CarouselStyle>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <h1>{contact.fullName}</h1>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </li>
        ))}
      </ul>
      <div>
        <AiOutlineArrowLeft className="arrow" />
        <AiOutlineArrowRight className="arrow" />
      </div>
      <div>
        <PaperButton
          type="button"
          firstText="Criar novo"
          secondText="contato!"
        />
      </div>
    </CarouselStyle>
  );
};

export { Carousel };
