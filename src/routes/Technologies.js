import React from "react";
import TechComponent from "../components/technologiesComponent/TechComponent";
import { Icon } from "@iconify/react";

const Technologies = () => {
  return (
    <div className="bg-purple-50 min-h-screen max-h-screen p-10 -mb-20 overflow-scroll flex justify-center">
      <div className="w-screen flex flex-col gap-5  max-w-lg">
        <h1 className="text-3xl font-bold">Tencologías y conocimientos</h1>
        <div className="flex flex-col gap-5">
          <TechComponent
            svg={<Icon icon="skill-icons:html" width="35" />}
            name={"Html"}
            level={"medio/avanzado"}
          />
          <TechComponent
            svg={<Icon icon="skill-icons:css" width="35" />}
            name={"Css"}
            level={"medio/avanzado"}
          />
          <TechComponent
            svg={<Icon icon="skill-icons:git" width="35" />}
            name={"Git"}
            level={"medio"}
          />
          <TechComponent
            svg={<Icon icon="jam:github" width="35" />}
            name={"Github"}
            level={"inicial/medio"}
          />
          <TechComponent
            svg={<Icon icon="skill-icons:bootstrap" width="35" />}
            name={"Bootstrap"}
            level={"inicial"}
          />
          <TechComponent
            svg={<Icon icon="skill-icons:sass" width="35" />}
            name={"Sass"}
            level={"inicial/medio"}
          />
          <TechComponent
            svg={<Icon icon="skill-icons:javascript" width="35" />}
            name={"Javascript"}
            level={"medio"}
          />
          <TechComponent
            svg={<Icon icon="skill-icons:tailwindcss-dark" width="35" />}
            name={"Tailwind"}
            level={"inicial/medio"}
          />
          <TechComponent
            svg={<Icon icon="skill-icons:react-dark" width="35" />}
            name={"React js"}
            level={"inicial/medio"}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
