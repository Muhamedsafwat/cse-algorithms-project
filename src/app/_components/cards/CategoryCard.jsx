import React from "react";

const CategoryCard = ({ icon, name, isActive, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(name)}
      className={`bg-neutral-100 border shadow-md border-neutral-200  flex-1 flex flex-col items-center rounded-xl justify-center aspect-[6/4] hover:bg-neutral-800 hover:text-white duration-200 cursor-pointer hover:scale-105 ${
        isActive && "bg-neutral-800 text-white"
      }`}
    >
      {icon}
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default CategoryCard;
