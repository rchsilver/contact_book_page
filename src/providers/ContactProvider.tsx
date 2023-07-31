import { ReactNode, createContext, useState } from "react";
import { api } from "../service/api";
import {
  TContact,
  TContactRequest,
  TContactUpdate,
  TContacts,
} from "../interfaces/ContactTypes";

type TContactProvidersProps = {
  children: ReactNode;
};

type TContextValue = {
  createContact: (data: TContactRequest) => Promise<void>;
  updateContact: (data: TContactUpdate, id: string) => Promise<void>;
  contact: TContact | undefined;
  openCreateCont: boolean;
  setOpenCreateCont: React.Dispatch<React.SetStateAction<boolean>>;
  openUpdateCont: boolean;
  setOpenUpdateCont: React.Dispatch<React.SetStateAction<boolean>>;
  contactId: string;
  setContactId: React.Dispatch<React.SetStateAction<string>>;
  contacts: TContacts | [];
  setContacts: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        fullName: string;
        email: string;
        phone: string;
        registrationDate: Date;
      }[]
    >
  >;
  fullName: string;
  email: string;
  phone: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
};

const ContactContext = createContext({} as TContextValue);

const ContactProviders = ({ children }: TContactProvidersProps) => {
  const [contacts, setContacts] = useState<TContacts>([]);
  const [contact, setContact] = useState<TContact>();
  const [openCreateCont, setOpenCreateCont] = useState<boolean>(false);
  const [openUpdateCont, setOpenUpdateCont] = useState<boolean>(false);
  const [contactId, setContactId] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [refresh, setRefresh] = useState<number>(0);

  const createContact = async (data: TContactRequest) => {
    try {
      const token = localStorage.getItem("@contactfile:token");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.post("/contacts", data);
      const getNumber = Math.floor(Math.random() * 100);

      setContact(response.data);
      setOpenCreateCont(!openCreateCont);
      setRefresh(getNumber);
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (data: TContactUpdate, id: string) => {
    try {
      const token = localStorage.getItem("@contactfile:token");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.patch(`/contacts/${id}`, data);
      const getNumber = Math.floor(Math.random() * 100);
      setContact(response.data);
      setOpenUpdateCont(!openUpdateCont);
      setRefresh(getNumber);
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
        contactId,
        setContactId,
        contacts,
        setContacts,
        fullName,
        setFullName,
        email,
        setEmail,
        phone,
        setPhone,
        refresh,
        setRefresh,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProviders };
