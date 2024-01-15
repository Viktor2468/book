import React from "react";
import { IconType } from "react-icons";


interface IconButtonProps {
    label: string;
    active?: boolean;
    icon: IconType;
}

const IconButton: React.FC<IconButtonProps> = ({label, active, icon: Icon}) => {
  return (
    <button
            className={`
                flex 
                items-center 
                gap-1 
                text-white
                px-4
                py-2
                m-1
                font-normal
                rounded-full
                text-sm
                ${active ? 'border border-white bg-[#007dfc]' : 'hover:bg-[#007dfc]'}
            `}
        >
            {Icon && (
                <Icon
                    size={22}
                    className="font-extralight"
                />
            )}
            {label}
        </button>
  )
}

export default IconButton