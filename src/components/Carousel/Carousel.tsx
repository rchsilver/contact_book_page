import { contactReq } from "../../hooks/contactReq";
import { TContacts } from "../../interfaces/ContactTypes";
import { PaperButtonStyle } from "../buttons/PaperButtons/PaperButton";
import { CarouselStyle } from "./CarouselStyled";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { useRef } from "react";

type TProps = {
  contacts: TContacts;
};

const Carousel = ({ contacts }: TProps) => {
  const {
    openCreateCont,
    setOpenCreateCont,
    openUpdateCont,
    setOpenUpdateCont,
    setContactId,
    setFullName,
    setEmail,
    setPhone,
  } = contactReq();
  const carousel = useRef(null);

  const handleLeftClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  if (!contacts || !contacts.length) return null;

  const clickInContact = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setContactId(event.currentTarget.id);
    const getContact = contacts.find(
      (contact) => contact.id.toString() == event.currentTarget.id
    );

    setFullName(getContact!.fullName);
    setEmail(getContact!.email);
    setPhone(getContact!.phone);

    setOpenUpdateCont(!openUpdateCont);
  };

  return (
    <CarouselStyle>
      <ul ref={carousel}>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            id={contact.id.toString()}
            onClick={clickInContact}
          >
            <BsFillGearFill className="configIcon" />
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
