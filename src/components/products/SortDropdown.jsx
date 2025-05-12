import React from "react";

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
];

const SortDropdown = ({ sortOption, setSortOption, setCurrentPage }) => {
  return (
    <div className="flex items-center">
      <label htmlFor="sort-by" className="mr-2 md:text-base text-sm text-gray-500">
        Sort by:
      </label>
      <select
        id="sort-by"
        value={sortOption}
        onChange={(e) => {
          setSortOption(e.target.value);
          setCurrentPage(1);
        }}
        className="border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-700"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown;