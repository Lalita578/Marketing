// src/pages/WebsiteDetail.jsx

import { useParams, Link } from "react-router-dom";
import useWebsitesStore from "../store/useWebsitesStore";

export default function WebsiteDetail() {
  const { id } = useParams();
  const website = useWebsitesStore((state) =>
    state.websites.find((site) => site.id === id)
  );

  if (!website) return <p className="p-4">Website not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{website.website}</h1>
      
      <div className="space-y-2">
        <p><strong>Language:</strong> {website.language}</p>
        <p><strong>Country:</strong> {website.country}</p>
        <p><strong>Description:</strong> {website.description}</p>

        <hr className="my-4" />
        <h2 className="text-xl font-semibold">Offers</h2>
        <p><strong>Guest Post Price:</strong> ${website.guestPostPrice}</p>
        <p><strong>Link Insertion Price:</strong> ${website.linkInsertionPrice}</p>

        <hr className="my-4" />
        <h2 className="text-xl font-semibold">Grey Niche Offers</h2>
        {website.greyNicheOffers?.map((offer, idx) => (
          <div key={idx} className="ml-4">
            <p><strong>{offer.category}</strong></p>
            <p>Guest Post: ${offer.guestPostPrice} | Link Insert: ${offer.linkInsertionPrice}</p>
          </div>
        ))}

        <hr className="my-4" />
        <h2 className="text-xl font-semibold">Home Page Offer</h2>
        <p><strong>Price:</strong> ${website.homePageOfferPrice}</p>
        <p><strong>Description:</strong> {website.homePageOfferDescription}</p>

        <hr className="my-4" />
        <h2 className="text-xl font-semibold">Article Guidelines</h2>
        <p>{website.articleGuidelines}</p>
      </div>

      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to List
        </Link>
      </div>
    </div>
  );
}
