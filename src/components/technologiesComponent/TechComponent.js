import React, { useState } from "react";

const TechComponent = ({svg,name,level}) => {
const [claseAgregada, setClaseAgregada] = useState(false)

const handleClick = () => {
setClaseAgregada(!claseAgregada)
}

    return(
        <div className="flex  items-center gap-2 bg-purple-100 p-3 rounded-lg drop-shadow-md" onClick={handleClick}>
            <div className="cursor-pointer hover:scale-110 transition ease-linear">
                {svg}
            </div>
            <div className={claseAgregada ? '' : 'hidden'}>
                <p className="text-lg font-bold text-purple-900">{name}</p>
                <p className="text-lg text-purple-400">nivel: <span className="text-purple-900 font-bold">{level}</span></p>
            </div>

        </div>
    )
}

export default TechComponent