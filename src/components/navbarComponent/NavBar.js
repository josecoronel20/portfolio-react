import React from "react";
import Button from "../Button";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import { Icon } from "@iconify/react";


const NavBar = () => {
    return(
        <div className="flex w-full bg-purple-900 justify-evenly p-2 fixed bottom-0 h-20">
            <Button svg={<Icon icon="material-symbols:developer-mode-outline" color="rgba(237, 233, 254, 0.8)" width="35" />} name={"Proyectos"} url={"/"} nav={true}/>
            <Button svg={<Icon icon="mdi:react" color="rgba(237, 233, 254, 0.8)" width="35" />} name={"Tecnologias"} url={"/technologies"} nav={true}/>
            <Button svg={<Icon icon="pepicons-pop:cv-circle-filled" color="rgba(237, 233, 254, 0.8)" width="35" />} name={"CV"} url="nada" nav={true}/>
            <Button svg={<Icon icon="ant-design:message-outlined" color="rgba(237, 233, 254, 0.8)" width="35" />} name={"Contactame"} url={"/contactMe"} nav={true}/>
            <Button svg={<Icon icon="mdi:emoji-outline" color="rgba(237, 233, 254, 0.8)" width="35" />} name={"Sobre mí"} url={"/aboutMe"} nav={true}/>
        </div>
    )
}

export default NavBar