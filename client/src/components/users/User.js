import React, {useState} from "react";
import classNames from "classnames";

export default function User(props) {
  const {id, avatar, name} = props;
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    if(selected) {
      setSelected(false);
      return;
    }
    setSelected(true);
  }

  const userClass = classNames(
    "user-list",
    {"rpgui-container framed-golden-2": selected }
  )

  return (
    <li className={userClass} id={id} onClick={toggleSelected}>
      <img src={avatar}/>
      <p>{name}</p>
    </li>
  );
}