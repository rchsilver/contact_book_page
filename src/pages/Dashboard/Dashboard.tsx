import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TContact, TContacts } from "../../interfaces/ContactTypes";
import { DashboardStyled } from "./DashboardStyled";
import { api } from "../../service/api";
import { Carousel } from "../../components/Carousel/Carousel";
import { CreateContactModal } from "../../components/Modals/CreateContactModal/CreateContactModal";
import { contactReq } from "../../hooks/contactReq";
import { useAuth } from "../../hooks/useAuth";
import { UpdateContactModal } from "../../components/Modals/UpdateContactModal/UpdateContactModal";
import { useNavigate } from "react-router-dom";
import { UpdateUserModal } from "../../components/Modals/UpdateUserModal/UpdateUserModal";
import { userReq } from "../../hooks/userReq";

const Dashboard = () => {
  const { openCreateCont, openUpdateCont, contacts, setContacts, refresh } =
    contactReq();
  const { setPage } = useAuth();
  const { openUpdateUser, getUser } = userReq();
  const navigate = useNavigate();

  useEffect(() => {
    setPage("dashboard");
    try {
      const token = localStorage.getItem("@contactfile:token");
      const id = localStorage.getItem("@contactfile:id");
      getUser();
      (async () => {
        const response = await api.get<TContacts>(`contacts/get/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setContacts(response.data);
      })();
    } catch (error) {
      console.error(error);
    }
  }, [refresh]);

  useEffect(() => {
    const token = localStorage.getItem("@contactfile:token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <DashboardStyled>
      <Header />
      <Carousel contacts={contacts} />
      {openCreateCont ? <CreateContactModal /> : null}
      {openUpdateCont ? <UpdateContactModal /> : null}
      {openUpdateUser ? <UpdateUserModal /> : null}
    </DashboardStyled>
  );
};

export { Dashboard };
