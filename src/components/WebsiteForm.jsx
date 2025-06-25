import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useWebsitesStore from "../store/useWebsitesStore";

const greyNiches = [
  "Technology",
  "Health",
  "Finance",
  "Travel",
  "Education",
  "Lifestyle",
];

export default function WebsiteForm({ defaultValues = {}, websiteId }) {
  const navigate = useNavigate();
  const addWebsite = useWebsitesStore((state) => state.addWebsite);
  const updateWebsite = useWebsitesStore((state) => state.updateWebsite);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      website: "",
      language: "",
      country: "",
      description: "",
      guestPostPrice: "",
      linkInsertionPrice: "",
      greyNicheOffers:
        defaultValues.greyNicheOffers ||
        greyNiches.map((category) => ({
          category,
          guestPostPrice: "",
          linkInsertionPrice: "",
        })),
      homePageOfferPrice: "",
      homePageOfferDescription: "",
      articleGuidelines: "",
      ...defaultValues,
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "greyNicheOffers",
  });

  const onSubmit = (data) => {
    if (websiteId) {
      updateWebsite(websiteId, data);
    } else {
      addWebsite(data);
    }
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl mx-auto bg-white p-6 rounded shadow"
    >
      <h2 className="text-2xl font-semibold mb-4">
        {websiteId ? "Edit Website" : "Add Website"}
      </h2>

      {/* Website URL */}
      <div>
        <label className="block mb-1 font-medium">Website URL</label>
        <input
          {...register("website", {
            required: "Website URL is required",
            pattern: {
              value:
                /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/,
              message: "Enter a valid URL",
            },
          })}
          className="w-full p-2 border rounded"
          placeholder="https://example.com"
        />
        {errors.website && (
          <p className="text-red-500 text-sm">{errors.website.message}</p>
        )}
      </div>

      {/* Primary Language */}
      <div>
        <label className="block mb-1 font-medium">Primary Language</label>
        <input
          {...register("language", { required: "Language is required" })}
          className="w-full p-2 border rounded"
          placeholder="English"
        />
        {errors.language && (
          <p className="text-red-500 text-sm">{errors.language.message}</p>
        )}
      </div>

      {/* Country */}
      <div>
        <label className="block mb-1 font-medium">Country</label>
        <input
          {...register("country", { required: "Country is required" })}
          className="w-full p-2 border rounded"
          placeholder="USA"
        />
        {errors.country && (
          <p className="text-red-500 text-sm">{errors.country.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          className="w-full p-2 border rounded"
          placeholder="Brief summary about your site"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      {/* Offers */}
      <div className="border-t pt-4">
        <h3 className="text-xl font-semibold mb-2">Offers</h3>

        <div>
          <label className="block mb-1 font-medium">Guest Post Price</label>
          <input
            type="number"
            {...register("guestPostPrice", {
              required: "Guest post price is required",
              min: { value: 0, message: "Price must be non-negative" },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.guestPostPrice && (
            <p className="text-red-500 text-sm">
              {errors.guestPostPrice.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Link Insertion Price
          </label>
          <input
            type="number"
            {...register("linkInsertionPrice", {
              required: "Link insertion price is required",
              min: { value: 0, message: "Price must be non-negative" },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.linkInsertionPrice && (
            <p className="text-red-500 text-sm">
              {errors.linkInsertionPrice.message}
            </p>
          )}
        </div>
      </div>

      {/* Grey Niche Offers */}
      <div className="border-t pt-4">
        <h3 className="text-xl font-semibold mb-2">Grey Niche Offers</h3>
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3"
          >
            <div className="font-medium">{field.category}</div>

            <div>
              <input
                type="number"
                {...register(`greyNicheOffers.${index}.guestPostPrice`, {
                  required: true,
                  min: 0,
                })}
                className="w-full p-2 border rounded"
                placeholder="Guest Post Price"
              />
            </div>

            <div>
              <input
                type="number"
                {...register(`greyNicheOffers.${index}.linkInsertionPrice`, {
                  required: true,
                  min: 0,
                })}
                className="w-full p-2 border rounded"
                placeholder="Link Insertion Price"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Home Page Offer */}
      <div className="border-t pt-4">
        <h3 className="text-xl font-semibold mb-2">Home Page Offer</h3>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            {...register("homePageOfferPrice", {
              required: "Home page price is required",
              min: { value: 0, message: "Price must be non-negative" },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.homePageOfferPrice && (
            <p className="text-red-500 text-sm">
              {errors.homePageOfferPrice.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("homePageOfferDescription", {
              required: "Home page description is required",
            })}
            className="w-full p-2 border rounded"
            placeholder="Details about your home page offer"
          />
          {errors.homePageOfferDescription && (
            <p className="text-red-500 text-sm">
              {errors.homePageOfferDescription.message}
            </p>
          )}
        </div>
      </div>

      {/* Article Guidelines */}
      <div className="border-t pt-4">
        <h3 className="text-xl font-semibold mb-2">Article Guidelines</h3>
        <textarea
          {...register("articleGuidelines", {
            required: "Article guidelines are required",
          })}
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="Write article instructions or editorial requirements"
        />
        {errors.articleGuidelines && (
          <p className="text-red-500 text-sm">
            {errors.articleGuidelines.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {websiteId ? "Update Website" : "Add Website"}
      </button>
    </form>
  );
}
