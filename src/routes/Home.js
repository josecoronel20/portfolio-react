import React, { useContext } from "react";
import { ProyectsFirebaseContext } from "../context/ProyectsFirebaseContext";
import Button from "../components/Button";
import "../home.css";
import { Icon } from "@iconify/react";

const Home = () => {
  const [proyects] = useContext(ProyectsFirebaseContext);
  const proyectosOrdenados = proyects.sort((a, b) => b.orden - a.orden);
  return (
    <div className="overflow-scroll h-full pb-20 absolute containerCss box-border bg-purple-950">
      {" "}
      {proyectosOrdenados.map((proyect) => (
        <div className="relative h-full flex flex-col justify-end gap-2 proyectCss items-center">
          <img
            src={proyect.imageUrl}
            className="h-full w-full object-cover absolute max-w-3xl drop-shadow-lg"
          />
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col items-end p-3 gap-6">
              <Button
                svg={
                  <Icon
                    icon="material-symbols:link"
                    color="rgba(183, 148, 244, 1)"
                    width="35"
                  />
                }
                name={"Link a page"}
                url={proyect.pageUrl}
                nav={false}
              />
              <Button
                svg={
                  <Icon
                    icon="mdi:github"
                    color="rgba(183, 148, 244, 1)"
                    width="35"
                  />
                }
                name={"Link a repo"}
                url={proyect.repoUrl}
                nav={false}
              />
            </div>
            <div className="p-3 pt-7 bg-gradient-to-t from-purple-900 bg-opacity-100 to-transparent flex flex-col gap-1">
              <p className="text-purple-50 text-lg font-extrabold font-comfortaa drop-shadow-md">
                {proyect.titulo}
              </p>
              <p className="text-purple-50 font-normal font-comfortaa drop-shadow-md">
                {proyect.descripcion}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
