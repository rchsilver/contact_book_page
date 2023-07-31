import { contactReq } from "../../hooks/contactReq";
import { TContacts } from "../../interfaces/ContactTypes";
import { PaperButtonStyle } from "../buttons/PaperButtons/PaperButton";
import { CarouselStyle } from "./CarouselStyled";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useRef } from "react";

type TProps = {
  contacts: TContacts;
};

const Carousel = ({ contacts }: TProps) => {
  const { openCreateCont, setOpenCreateCont } = contactReq();
  const carousel = useRef(null);

  const handleLeftClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  if (!contacts || !contacts.length) return null;

  return (
    <CarouselStyle>
      <ul ref={carousel}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <h1>{contact.fullName}</h1>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </li>
        ))}
      </ul>
      <div className="boxArrows">
        <AiOutlineArrowLeft onClick={handleLeftClick} className="arrow" />
        <AiOutlineArrowRight onClick={handleRightClick} className="arrow" />
      </div>
      <div className="boxBtnCreate">
        <PaperButtonStyle
          onClick={() => setOpenCreateCont(!openCreateCont)}
          className="registerBtn"
        >
          Criar novo <span>contato!</span>
        </PaperButtonStyle>
      </div>
    </CarouselStyle>
  );
};

export { Carousel };
