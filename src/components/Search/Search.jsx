import React from "react";

const Search = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-10 border border-gray-300 rounded-md p-2 w-full  mb-5"
      />
    </div>
  );
};

export default Search;
