import type { RestaurantsResponse } from "../types/restaurant";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = ({
  restaurants,
}: {
  restaurants: RestaurantsResponse["restaurants"];
}) => {
  if (restaurants.length === 0) return <div className="grid grid-cols-12">No restaurants found.</div>;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4">
        {restaurants.map((restaurant) => (
          <RestaurantItem restaurant={restaurant} key={restaurant.objectId} />
        ))}
      </div>
    </>
  );
};

export default RestaurantList;
