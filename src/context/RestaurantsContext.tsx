import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Restaurant, RestaurantsResponse } from "../types/restaurant";
import { RESTAURANTS_API_ENDPOINT } from "../constants";

type RestaurantsContextType = {
  restaurants: Restaurant[];
  loading: boolean;
  error: null | string;
};

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
  loading: false,
  error: null,
});

export const RestaurantsProvider = ({ children }: { children: ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch(RESTAURANTS_API_ENDPOINT);
        const data: RestaurantsResponse = await res.json();
        setRestaurants(data.restaurants ?? []);
      } catch (error) {
        console.error(error);
        setError("Something went wrong while fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, loading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
