import "./ContactsStyles";
import { AiFillDelete } from "react-icons/ai";
import { RiEditBoxLine } from "react-icons/ri";
import { iconStyles } from "../contact/ContactsStyles";

const Contacts = ({ contacts, setContacts, setForm }) => {
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (userName, phoneNumber, gender, id) => {
    setForm({ userName, phoneNumber, gender, id });
  };

  return (
    <div>
      <div>
        <h1>Contacts</h1>
      </div>
      <div>
        <table>
          <tr>
            <th>USER NAME</th>
            <th>PHONE</th>
            <th>GENDER</th>
            <th>DELETE</th>
            <th>EDİT</th>
          </tr>
          {contacts?.map((contact) => {
            const { userName, phoneNumber, gender, id } = contact;
            return (
              <tr key={id}>
                <td>{userName}</td>
                <td>{phoneNumber}</td>
                <td>{gender}</td>
                <td>
                  <AiFillDelete
                    style={iconStyles}
                    onClick={() => deleteContact(id)}
                  />
                </td>
                <td>
                  <RiEditBoxLine
                    style={iconStyles}
                    onClick={() =>
                      editContact(userName, phoneNumber, gender, id)
                    }
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Contacts;
