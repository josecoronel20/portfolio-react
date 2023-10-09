import React from "react";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import { Link } from "react-router-dom";

const Button = ({ svg, name, url, nav }) => {
  const classNavSvg =
    "flex flex-col items-center hover:scale-105 transition ease-linear ";
  const classNavName =
    "text-purple-200 font-comfortaa text-sm ";
  const classSvg =
    "flex flex-col items-center hover:scale-105 transition ease-linear drop-shadow-md";

  const className = "text-purple-300 font-comfortaa  drop-shadow-md";
  return (
    <Link to={url}>
      <div className={nav ? classNavSvg : classSvg}>
        {svg}
        <p className={nav ? classNavName : className}>
          {name}
        </p>
      </div>
    </Link>
  );
};

export default Button;
