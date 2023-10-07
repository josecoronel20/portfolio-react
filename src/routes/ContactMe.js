import React from "react";
import { Icon } from "@iconify/react";
import ButtonContact from "../components/contactMeComponent/ButtonContact";

const ContactMe = () => {
  return (
    <div className="bg-purple-50 p-10 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-lg flex flex-col justify-center gap-5">
        <div>
          <h1 className="text-3xl font-bold">Contáctame</h1>
        </div>
        <div className="flex flex-col gap-3">
          <ButtonContact
            svg={<Icon icon="ic:baseline-email" color="white" width="35" />}
            link={"mailto:josecoronel20@outlook.com"}
            classBtn={"bg-blue-500"}
          />
          <ButtonContact
            svg={<Icon icon="ic:baseline-whatsapp" color="white" width="35" />}
            link={"https://api.whatsapp.com/send?phone=1154797863"}
            classBtn={"bg-green-400"}
          />
          <ButtonContact
            svg={<Icon icon="ri:linkedin-fill" color="white" width="35" />}
            link={"https://www.linkedin.com/in/jose-maria-coronel/"}
            classBtn={"bg-indigo-600"}
          />
          <ButtonContact
            svg={<Icon icon="mdi:github" color="white" width="35" />}
            link={"https://github.com/josecoronel20"}
            classBtn={"bg-gray-800"}
          />
          <ButtonContact
            svg={<Icon icon="mdi:instagram" color="white" width="35" />}
            link={"https://www.instagram.com/josecoronel20/"}
            classBtn={"bg-pink-500"}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
