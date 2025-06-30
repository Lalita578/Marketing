// import './index.css';
import '../../index.css';


import { useState } from "react";
import { Link } from "react-router-dom";
import useWebsitesStore from "../../store/useWebsitesStore";
import SidebarFilter from "../../components/SidebarFilter";

export default function WebsiteList() {
  const websites = useWebsitesStore((state) => state.websites);
  const [filters, setFilters] = useState({
    language: "",
    country: "",
  });

  const filteredWebsites = websites.filter((site) => {
    return (
      (!filters.language || site.language?.toLowerCase().includes(filters.language.toLowerCase())) &&
      (!filters.country || site.country?.toLowerCase().includes(filters.country.toLowerCase()))
    );
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Websites</h1>
        <Link
          to="/website/create"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          + Add website
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Website
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Language
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Category
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredWebsites.map((site) => (
              <tr key={site.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  <Link to={`/website/${site.id}`} className="hover:underline">
                    {site.website}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {site.country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {site.language}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {site.category || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
