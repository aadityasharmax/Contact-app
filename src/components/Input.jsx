import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";

const Input = ({ onOpen, filterContacts }) => {
  return (
    <div className=" flex  relative items-center gap-2 ">
      <FaSearch className="text-white text-2xl absolute ml-1" />
      <input
        onChange={filterContacts}
        type="text"
        className="flex flex-grow text-white outline-0 border pr-2 pl-10 text-lg border-white h-10 bg-transparent rounded-lg "
      />
      <BiPlusCircle
        className="text-white text-6xl cursor-pointer"
        onClick={() => onOpen()}
      />
    </div>
  );
};

export default Input;
