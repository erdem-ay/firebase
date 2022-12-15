import "./MainStyles";
import AddContact from "../../components/addContact/AddContact";
import Contacts from "../../components/contact/Contacts";
import { useEffect, useState } from "react";
import { MainContainer } from "./MainStyles";
import { getDataFromFirebase } from "../../utils/firebase";

const initialValuesForm = {
  phoneNumber: "",
  userName: "",
  gender: "",
  id: "",
};

const Main = () => {
  const [form, setForm] = useState(initialValuesForm);
  const [contacts, setContacts] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    getDataFromFirebase(setContacts);
  }, []);

  return (
    <MainContainer>
      <AddContact
        form={form}
        setForm={setForm}
        contacts={contacts}
        setContacts={setContacts}
        initialValuesForm={initialValuesForm}
        update={update}
        setUpdate={setUpdate}
      />
      <Contacts
        contacts={contacts}
        setContacts={setContacts}
        setForm={setForm}
        update={update}
        setUpdate={setUpdate}
      />
    </MainContainer>
  );
};

export default Main;
