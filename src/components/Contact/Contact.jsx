import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteFunction: PropTypes.func.isRequired,
  };

export default Contacts;



// import css from "./Contact.module.css";

// const Contacts = ({ contacts, deleteFunction }) => {
//   return (
//     <div>
//       <ul className={css.thumb}>
//         {contacts.map((contact) => {
//           return (
//             <li className={css.contactList} key={contact.id}>
//               {contact.name}: {contact.number}
//               <button
//                 className={css.button}
//                 type="button"
//                 onClick={() => {
//                   deleteFunction(contact.id);
//                 }}
//               >
//                 Delete
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// Contacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   deleteFunction: PropTypes.func.isRequired,
// };

// export default Contacts;