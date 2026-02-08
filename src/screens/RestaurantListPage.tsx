import { useContext } from "react";
import { useMemo, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantList from "../components/RestaurantList";

export default function RestaurantListPage() {
  const { restaurants, loading, error } = useContext(RestaurantsContext);

  const [search, setSearch] = useState("");

  const filteredRestaurants = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return restaurants;

    return restaurants.filter(({ name, cuisines }) => {
      const matchesName = name.toLowerCase().includes(query);
      const matchesCuisine = cuisines.some((cuisine) =>
        cuisine.toLowerCase().includes(query),
      );

      return matchesName || matchesCuisine;
    });
  }, [search, restaurants]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="grid cols-12 p-4">
        <input
          type="text"
          placeholder="e.g. chinese , pizza"
          className="border border-gray-300 p-2 rounded-md"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
}
