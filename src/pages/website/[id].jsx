// import { useParams } from "react-router-dom";

// export default function WebsiteEdit() {
//   const { id } = useParams();
//   return <h1>✏️ Edit Website Page for ID: {id}</h1>;
// }


import { useParams } from "react-router-dom";
import useWebsitesStore from "../../store/useWebsitesStore";
import WebsiteForm from "../../components/WebsiteForm";

export default function WebsiteEdit() {
  const { id } = useParams();
  const website = useWebsitesStore((state) =>
    state.websites.find((site) => site.id === id)
  );

  if (!website) return <p>Website not found</p>;

  return (
    <div className="p-4">
      <WebsiteForm defaultValues={website} websiteId={id} />
    </div>
  );
}
