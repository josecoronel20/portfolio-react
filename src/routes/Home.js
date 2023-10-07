import React, { useContext } from "react";
import { ProyectsFirebaseContext } from "../context/ProyectsFirebaseContext";
import Button from "../components/Button";
import "../home.css"

const Home = () => {
  const [proyects] = useContext(ProyectsFirebaseContext);
  const proyectosOrdenados = proyects.sort((a, b) => b.orden - a.orden);
  return (
    <div className="overflow-scroll h-full pb-20 absolute containerCss box-border bg-purple-900">
      {" "}
      {proyectosOrdenados.map((proyect) => (
        <div className="relative h-full flex flex-col justify-end gap-2 proyectCss items-center">
          <img
            src={proyect.imageUrl}
            className="h-full w-full object-cover absolute max-w-3xl"
          />
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col items-end p-3 gap-6">
                <Button
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="rgba(237, 233, 254, 0.8)"
                        d="M11 17H7q-2.075 0-3.538-1.463T2 12q0-2.075 1.463-3.538T7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4v2Zm-3-4v-2h8v2H8Zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17h-4Z"
                      />
                    </svg>
                  }
                  name={"Link a page"}
                  url={proyect.pageUrl}
                />
                <Button
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="rgba(237, 233, 254, 0.8)"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                      />
                    </svg>
                  }
                  name={"Link a repo"}
                  url={proyect.repoUrl}
                />
            </div>
            <div className="p-3 pt-7 bg-gradient-to-t from-purple-900 bg-opacity-100 to-transparent flex flex-col gap-1">
              <p className="text-purple-50 text-lg font-extrabold font-comfortaa">
                {proyect.titulo}
              </p>
              <p className="text-purple-50 font-normal font-comfortaa">
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
