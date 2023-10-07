import React from "react";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import { Link } from "react-router-dom";

const Button = ({ svg, name, url }) => {
  return (
    <Link to={url}>
      <div className="flex flex-col items-center hover:scale-105 transition ease-linear">
        {svg}
        <p className="text-purple-200 font-comfortaa backdrop-filter blur-2x1">{name}</p>
      </div>
    </Link>
  );
};

export default Button;
