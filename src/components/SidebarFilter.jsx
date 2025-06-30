// src/components/SidebarFilter.jsx
import React from "react";

const SidebarFilter = ({ filters, setFilters }) => {
  return (
    <div className="w-full p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Language</label>
        <input
          type="text"
          value={filters.language || ""}
          onChange={(e) => setFilters({ ...filters, language: e.target.value })}
          className="w-full border px-3 py-2 rounded-xl mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Country</label>
        <input
          type="text"
          value={filters.country || ""}
          onChange={(e) => setFilters({ ...filters, country: e.target.value })}
          className="w-full border px-3 py-2 rounded-xl mt-1"
        />
      </div>
    </div>
  );
};

export default SidebarFilter;
