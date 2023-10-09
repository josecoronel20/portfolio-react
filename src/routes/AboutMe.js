import React, { useContext } from "react";
import { ProyectsFirebaseContext } from "../context/ProyectsFirebaseContext";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [proyects] = useContext(ProyectsFirebaseContext);
  const proyectosOrdenados = proyects.sort((a, b) => b.orden - a.orden);

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center gap-3 p-3 box-border">
        <img
          src={process.env.PUBLIC_URL + "/img/illustration.png"}
          alt="ilustracion"
          className="bg-purple-900 w-40 rounded-2xl"
        />
        <h1 className="font-extrabold text-lg">Jose Maria Coronel</h1>
        <h2 className="font-semibold">
          Desarrollador Front-end Junior{" "}
          <span className="font-semibold text-purple-950">(React js)</span>
        </h2>
        <p className="text-center text-gray-500 max-w-6xl">
          ¡Hola! Soy Jose Maria Coronel, Tengo 23 años, vivo en Buenos Aires,
          Argentina y he comenzado a construir mi carrera en el area del
          desarrollo. Comencé a estudiar a fines de 2022 asique no poseo mucha
          experiencia en este área, actualmente acabo de terminar el curso de
          React js en CoderHouse. Me encanta crear soluciones elegantes y
          funcionales que mejoren la experiencia del usuario. Tengo sólidos
          conocimientos generales de diseño, lo que me permite entender cómo se
          combinan la estética y la funcionalidad para lograr resultados
          impresionantes. Si estás buscando un desarrollador web comprometido y
          apasionado, ¡no dudes en contactarme!
        </p>
      </div>
      <div className="flex flex-col p-3 justify-center items-center">
        <h3 className="font-extrabold text-lg">Proyectos</h3>
        <div className="grid grid-cols-3 gap-5 max-w-6xl w-full">
          {proyectosOrdenados.map((proy) => (
            <Link to={proy.pageUrl} target="_blank">
            <div
              key={proy.id}
              className="flex flex-col justify-center items-center rounded-lg overflow-hidden drop-shadow-md cursor-pointer hover:scale-105 transition ease-linear"
            >
              <img
                src={proy.imageUrl}
                alt={proy.title}
                className="w-full h-40 object-cover"
              />
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
