import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

const useWebsitesStore = create(
  persist(
    (set) => ({
      websites: [],

      addWebsite: (website) =>
        set((state) => ({
          websites: [...state.websites, { id: nanoid(), ...website }],
        })),

      updateWebsite: (id, updatedData) =>
        set((state) => ({
          websites: state.websites.map((site) =>
            site.id === id ? { ...site, ...updatedData } : site
          ),
        })),
    }),
    {
      name: "websites-storage", // 👈 localStorage key
    }
  )
);

export default useWebsitesStore;
