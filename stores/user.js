import create from "zustand";
import { persist } from "zustand/middleware";

export const useUser = create(
  persist(
    (set) => ({
      username: "",
      postUser: (val) => set(() => ({ username: val })),
    }),
    { name: "user-storage" }
  )
);
