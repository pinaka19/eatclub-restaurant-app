import type { RestaurantsResponse } from "../types/restaurant";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = ({
  restaurants,
}: {
  restaurants: RestaurantsResponse["restaurants"];
}) => {
  if (restaurants.length === 0) return <div className="grid p-4">No restaurants found. Please change your search criteria to find other restaurants.</div>;

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
