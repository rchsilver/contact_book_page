import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TContact, TContacts } from "../../interfaces/ContactTypes";
import { DashboardStyled } from "./DashboardStyled";
import { api } from "../../service/api";
import { Carousel } from "../../components/Carousel/Carousel";
import { CreateContactModal } from "../../components/Modals/CreateContactModal/CreateContactModal";
import { contactReq } from "../../hooks/contactReq";

const Dashboard = () => {
  const [contacts, setContacts] = useState<TContacts>([]);
  const { contact } = contactReq();

  useEffect(() => {
    if (contact) {
      let addContacts = contacts;
      addContacts.push(contact);
      setContacts(addContacts);
    }
  }, [contact]);

  useEffect(() => {
    try {
      const token = localStorage.getItem("@contactfile:token");
      const id = localStorage.getItem("@contactfile:id");
      (async () => {
        const response = await api.get<TContacts>(`contacts/get/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setContacts(response.data);
        console.log(contacts);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <DashboardStyled>
      <Header />
      <Carousel contacts={contacts} />
      <CreateContactModal />
    </DashboardStyled>
  );
};

export { Dashboard };
