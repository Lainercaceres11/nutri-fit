import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  code: string;
  product_name?: string;
  brands?: string;
  image_front_url?: string;
  nutriscore_grade?: string;
  ecoscore_grade?: string;
  nova_group?: number;
  allergens?: string;
};

type FavoriteState = {
  favorites: Product[];
  toggleProduct: (product: Product) => void; 
  cleanProduct: () => void;
  isFavorite: (code: string) => boolean; 
};

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleProduct: (product) => {
        const isAlreadyFavorite = get().favorites.some(
          (fav) => fav.code === product.code,
        );

        if (isAlreadyFavorite) {
       
          set((state) => ({
            favorites: state.favorites.filter(
              (fav) => fav.code !== product.code,
            ),
          }));
        } else {
          
          set((state) => ({ favorites: [...state.favorites, product] }));
        }
      },

      cleanProduct: () => set({ favorites: [] }),


      isFavorite: (code) => get().favorites.some((fav) => fav.code === code),
    }),
    { name: "favorites-storage" },
  ),
);
