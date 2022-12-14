import "./MainStyles";
import AddContact from "../../components/addContact/AddContact";
import Contacts from "../../components/contact/Contacts";
import { useState } from "react";
import { MainContainer } from "./MainStyles";

const initialValuesForm = {
  phoneNumber: "",
  userName: "",
  gender: "",
  id: "",
};

const Main = () => {
  const [form, setForm] = useState(initialValuesForm);
  const [contacts, setContacts] = useState([]);

  return (
    <MainContainer>
      <AddContact
        form={form}
        setForm={setForm}
        contacts={contacts}
        setContacts={setContacts}
        initialValuesForm={initialValuesForm}
      />
      <Contacts contacts={contacts} setContacts={setContacts} setForm={setForm} />
    </MainContainer>
  );
};

export default Main;
