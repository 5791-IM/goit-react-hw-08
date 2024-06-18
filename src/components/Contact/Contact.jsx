import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactContainer}>
      <p className={`${css.textItem} ${css.nameIcon}`}>{name}</p>
      <p className={`${css.textItem} ${css.numberIcon}`}>{number}</p>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
