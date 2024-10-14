import s from "./Contact.module.css";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";

const Contact = ({ id, name, number, onClick }) => {
  return (
    <li className={s.item}>
      <div>
        <p>
          <BiSolidUser /> {name}
        </p>
        <p>
          <BiSolidPhone /> {number}
        </p>
      </div>
      <button className={s.button} onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
