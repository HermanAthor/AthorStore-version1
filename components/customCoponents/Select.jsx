import { categories } from "@/data/categoryData";
import React from "react";

export const Select = ({ handleSelect }) => {
  const category = categories.map(({ category, id }) => {
    return <option key={id}>{category}</option>;
  });

  return (
    <select onChange={handleSelect} className="select w-full max-w-xs">
      <option disabled selected>
        Select Category
      </option>
      {category}
    </select>
  );
};
