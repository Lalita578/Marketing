// export default function WebsiteList() {
//     return <h1>🌐 Website List Page</h1>;
//   }
import { Link } from "react-router-dom";
import useWebsitesStore from "../store/useWebsitesStore";

export default function WebsiteList() {
  const websites = useWebsitesStore((state) => state.websites);

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Website List</h1>
        <Link
          to="/website/create"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          ➕ Add Website
        </Link>
      </div>

      {websites.length === 0 ? (
        <p>No websites added yet.</p>
      ) : (
        <ul className="space-y-2">
          {websites.map((site) => (
            <li
              key={site.id}
              className="border p-4 rounded flex justify-between items-center"
            >
              <div>
                <p>
                  <strong>{site.website}</strong>
                </p>
                <p className="text-sm text-gray-600">
                  {site.language} — {site.country}
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  to={`/website/${site.id}/view`}
                  className="text-green-600 hover:underline"
                >
                  🔍 View
                </Link>
                <Link
                  to={`/website/${site.id}`}
                  className="text-blue-600 hover:underline"
                >
                  ✏️ Edit
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
