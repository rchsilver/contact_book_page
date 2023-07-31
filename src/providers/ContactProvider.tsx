import { ReactNode, createContext, useState } from "react";
import { api } from "../service/api";
import { TContact, TContactRequest } from "../interfaces/ContactTypes";

type TContactProvidersProps = {
  children: ReactNode;
};

type TContextValue = {
  createContact: (data: TContactRequest) => Promise<void>;
  updateContact: (data: TContactRequest) => Promise<void>;
  contact: TContact | undefined;
  openCreateCont: boolean;
  setOpenCreateCont: React.Dispatch<React.SetStateAction<boolean>>;
  openUpdateCont: boolean;
  setOpenUpdateCont: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactContext = createContext({} as TContextValue);

const ContactProviders = ({ children }: TContactProvidersProps) => {
  const [contact, setContact] = useState<TContact>();
  const [openCreateCont, setOpenCreateCont] = useState<boolean>(false);
  const [openUpdateCont, setOpenUpdateCont] = useState<boolean>(false);

  const createContact = async (data: TContactRequest) => {
    try {
      const token = localStorage.getItem("@contactfile:token");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.post("/contacts", data);

      setContact(response.data);
      setOpenCreateCont(!openCreateCont);
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (data: TContactRequest) => {
    try {
      const token = localStorage.getItem("@contactfile:token");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.post("/contacts", data);

      setContact(response.data);
      setOpenCreateCont(!openCreateCont);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        createContact,
        contact,
        openCreateCont,
        setOpenCreateCont,
        openUpdateCont,
        setOpenUpdateCont,
        updateContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProviders };
