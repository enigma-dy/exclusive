import React from "react";
import Select from "react-select";

const options = [
  { value: "Woman's Fashion", label: "Woman's Fashion" },
  { value: "Men's Fashion", label: "Men's Fashion" },
  { value: "Electronics", label: "Electronics" },
  { value: "Home & Lifestyle", label: "Home & Lifestyle" },
  { value: "Medicine", label: "Medicine" },
  { value: "Sports & Outdoor", label: "Sports & Outdoor" },
  { value: "Baby's & Toys", label: "Baby's & Toys" },
  { value: "Groceries", label: "Groceries" },
  { value: "Health & Beauty", label: "Health & Beauty" },
];

const CatergoryDropDown = () => <Select options={options} />;

export default CatergoryDropDown;
