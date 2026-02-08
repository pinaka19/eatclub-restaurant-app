import { useContext } from "react";
import { useMemo, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantList from "../components/RestaurantList";
import Header from "../components/Header";

export default function RestaurantListPage() {
  const { restaurants, loading, error } = useContext(RestaurantsContext);

  const [search, setSearch] = useState("");

  //Function to filter the restaurant by name or cuisine and sort the results in descending order of the discount value
  const filteredRestaurants = useMemo(() => {
    const query = search.trim().toLowerCase();

    // Filter if query exists, otherwise keep all restaurants
    const filtered = !query
      ? restaurants
      : restaurants.filter(({ name, cuisines }) => {
          const matchesName = name.toLowerCase().includes(query);
          const matchesCuisine = cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(query),
          );
          return matchesName || matchesCuisine;
        });

    // Always sort by max discount descending
    return filtered.sort((a, b) => {
      const maxDiscountA = a.deals?.length
        ? Math.max(...a.deals.map((d) => parseInt(d.discount)))
        : 0;
      const maxDiscountB = b.deals?.length
        ? Math.max(...b.deals.map((d) => parseInt(d.discount)))
        : 0;

      return maxDiscountB - maxDiscountA; // descending
    });
  }, [search, restaurants]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="flex justify-center items-center pt-3">
        Error: {error}
      </div>
    );

  return (
    <div>
      <Header />
      <div className="grid p-4">
        <input
          type="text"
          name="search"
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
