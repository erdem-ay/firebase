import {
  Form,
  iconStyles,
  Input,
  inputOutside,
  Select,
  Button,
} from "./AddContactStyles";
import { RiContactsFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

const AddContact = ({ form, setForm, setContacts, contacts }) => {
  const changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, form]);
  };

  console.log(contacts);

  return (
    <div>
      <h1>Add Contact</h1>
      <Form onSubmit={handleSubmit}>
        <div style={inputOutside}>
          <RiContactsFill style={iconStyles} />
          <Input
            type="text"
            name="userName"
            placeholder="Enter your name"
            onChange={changeForm}
            value={form.userName}
            required
          />
        </div>
        <div style={inputOutside}>
          <FiPhoneCall style={iconStyles} />
          <Input
            type="number"
            name="phoneNumber"
            placeholder="(0123) 456 789"
            onChange={changeForm}
            value={form.phoneNumber}
            required
          />
        </div>
        <div style={inputOutside}>
          <Select
            name="gender"
            onChange={changeForm}
            value={form.gender}
            placeholder="Gender"
            required
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </div>
        <div style={inputOutside}>
          <Button type="submit">ADD CONTACT</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddContact;
