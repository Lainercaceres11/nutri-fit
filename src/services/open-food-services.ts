import type { Foods, Product } from "../types/types";

const URL = import.meta.env.VITE_API_URL;

type Pagination = {
  page?: string;
  page_size?: string;
  countries_tags?: string;
  categories_tags?: string;
  code?: string;
};

export const openFoodService = {
  getFoods: async ({
    page = "1",
    page_size = "1",
    countries_tags = "",
    categories_tags = "",
    code = "",
  }: Pagination = {}): Promise<Foods> => {
    let url = `${URL}/search?sort_by=popularity&page=${page}&page_size=${page_size}`;

    if (categories_tags) url += `&categories_tags=${categories_tags}`;
    if (countries_tags) url += `&countries_tags=${countries_tags}`;
    if (code) url += `&code=${code}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching foods");
    }

    return response.json() as Promise<Foods>;
  },
  getFoodByCode: async (code: string): Promise<Product | null> => {
    const response = await fetch(`${URL}/search?code=${code}`);

    if (!response.ok) {
      throw new Error("Error fetching food by code");
    }

    const data: Foods = await response.json();

    if (!data.products || data.products.length === 0) {
      return null;
    }

    return data.products[0];
  },
  compareProducts: async (codes: string[]): Promise<Foods> => {
    const codesString = codes.join(",");

    const url = `${URL}/search?code=${codesString}&fields=code,product_name,brands,nutriments,nutriscore_grade,ecoscore_grade,nova_group,image_front_url`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Error fetching comparison products");

    return response.json() as Promise<Foods>;
  },
};
