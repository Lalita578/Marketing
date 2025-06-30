// // src/components/WebsiteCart.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const WebsiteCard = ({ site }) => {
//   return (
//     <div className="bg-white shadow-md p-4 rounded-2xl">
//       <h3 className="text-lg font-semibold">
//         <Link to={`/website/${site.id}`} className="text-blue-600 hover:underline">
//           {site.url}
//         </Link>
//       </h3>
//       <p className="text-sm text-gray-600">{site.description}</p>
//       <div className="mt-2 text-xs text-gray-500">
//         {site.language} | {site.country}
//       </div>
//     </div>
//   );
// };

// export default WebsiteCard;


import React from "react";
import { Link } from "react-router-dom";

const WebsiteCard = ({ site }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-2xl">
      <h3 className="text-lg font-semibold">
        <Link to={`/website/${site.id}`} className="text-blue-600 hover:underline">
          {site.website}
        </Link>
      </h3>
      <p className="text-sm text-gray-600">{site.description}</p>
      <div className="mt-2 text-xs text-gray-500">
        {site.language} | {site.country}
      </div>
    </div>
  );
};

export default WebsiteCard;
