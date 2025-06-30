import '../../index.css';

import { useParams, Link } from "react-router-dom";
import useWebsitesStore from "../../store/useWebsitesStore";

export default function WebsiteDetail() {
  const { id } = useParams();
  const websites = useWebsitesStore((state) => state.websites);
  const site = websites.find((s) => s.id === id || s.id === parseInt(id));

  if (!site) return <p className="p-4">Website not found.</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{site.website}</h1>
          <Link
            to={`/website/${site.id}/edit`}
            className="text-purple-600 hover:underline"
          >
            ✏️ Edit
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm text-gray-500">Language</p>
            <p className="text-lg font-medium text-gray-800">{site.language}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Country</p>
            <p className="text-lg font-medium text-gray-800">{site.country}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">Description</p>
            <p className="text-lg font-medium text-gray-800">{site.description}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">Guest Post Price</p>
              <p className="text-lg font-medium text-gray-800">${site.guestPostPrice}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Link Insertion Price</p>
              <p className="text-lg font-medium text-gray-800">${site.linkInsertionPrice}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Home Page Offer</p>
              <p className="text-lg font-medium text-gray-800">${site.homePageOfferPrice}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Grey Niche Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {site.greyNicheOffers?.map((offer, idx) => (
              <div key={idx} className="border rounded-lg p-4 bg-gray-50">
                <p className="font-semibold text-gray-800">{offer.category}</p>
                <p className="text-sm text-gray-600">Guest Post: ${offer.guestPostPrice}</p>
                <p className="text-sm text-gray-600">Link Insert: ${offer.linkInsertionPrice}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Article Guidelines</h2>
          <p className="text-gray-700">{site.articleGuidelines}</p>
        </div>

        <div className="flex space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}
