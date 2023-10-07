import React from "react";
import { Link } from "react-router-dom";

const ButtonContact = ({ svg, link, classBtn }) => {
  const classComb = classBtn + " p-3 rounded-lg flex justify-center hover:scale-110 transition ease-linear";

  return (
    <Link to={link} target="_blank">
      <div className={classComb}>
        <div>{svg}</div>
      </div>
    </Link>
  );
};

export default ButtonContact;
