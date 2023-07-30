import { useContext } from "react";
import { ContactContext } from "../providers/ContactProvider";

const contactReq = () => {
  const contactContext = useContext(ContactContext);

  return contactContext;
};

export { contactReq };
