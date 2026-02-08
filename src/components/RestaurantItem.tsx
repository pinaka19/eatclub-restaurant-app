import { memo } from "react";
import type { Restaurant } from "../types/restaurant";
import DealOverlay from "./DealOverlay";
import { Link } from "react-router-dom";

const RestaurantItem = ({ restaurant }: { restaurant: Restaurant }) => {
  // Limit cuisines shown
  const displayedCuisines = restaurant.cuisines.slice(0, 4);
  const remainingCount = restaurant.cuisines.length - displayedCuisines.length;
  const { deals } = restaurant;

  // Find the deal with the maximum discount
  const maxDeal = deals.reduce(
    (prev, curr) =>
      Number(curr.discount) > Number(prev.discount) ? curr : prev,
    deals[0],
  );

  //calculate the dineIn and lightning tags
  const hasDineIn = restaurant.deals.some((d) => d.dineIn === "true");
  const hasLightning = restaurant.deals.some((d) => d.lightning === "true");

  console.log("Here");

  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/restaurant/${restaurant.objectId}`}>
        {/* Image */}
        <img
          src={restaurant.imageLink}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/600x400/cccccc/ffffff";
          }}
        />

        {/* Discount overlay */}
        {restaurant.deals && <DealOverlay deal={maxDeal} />}

        {/* Info */}
        <div className="p-4">
          {/* Name */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold mb-1 text-black">
              {restaurant.name}
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>

          {/* Address */}
          <p className="text-sm text-gray-600 mb-2">
            {restaurant.address1}, {restaurant.suburb}
          </p>

          {/* Cuisines */}
          <div className="flex flex-wrap gap-2">
            {displayedCuisines.map((cuisine, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 rounded-full px-2 py-1 text-black"
              >
                {cuisine}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="text-xs bg-gray-300 rounded-full px-2 py-1 text-black">
                +{remainingCount} more
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {hasDineIn && (
              <span className="text-xs font-semibold text-black">Dine In</span>
            )}
            {hasLightning && (
              <span className="text-xs font-semibold text-black">
                Order Online
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default memo(RestaurantItem);
