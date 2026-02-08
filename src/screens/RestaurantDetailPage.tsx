import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useMemo } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import type { Deal } from "../types/restaurant";
import {
  PhoneArrowUpRightIcon,
  HeartIcon,
  MapPinIcon,
  DocumentPlusIcon,
  ClockIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { FALLBACK_PLACEHOLDER_IMAGE } from "../constants";

export default function RestaurantDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { restaurants, loading, error } = useContext(RestaurantsContext);

  // Find the restaurant by ID
  const restaurant = useMemo(
    () => restaurants.find(({ objectId }) => objectId === id),
    [restaurants, id],
  );

  // Sort deals descending by discount %
  const sortedDeals = useMemo(() => {
    if (!restaurant || !restaurant.deals || restaurant.deals.length === 0)
      return [];
    return [...restaurant.deals].sort(
      (a, b) => parseInt(b.discount) - parseInt(a.discount),
    );
  }, [restaurant]);


  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="flex justify-center items-center pt-3">
        Error: {error}
      </div>
    );
  if (!restaurant) return <h3>404 Invalid Restaurant</h3>;

  return (
    <div>
      <Header />
      <div className="restaurant-detail">
        {/* Header Image */}
        <img
          src={restaurant.imageLink}
          alt={restaurant.name}
          className="restaurant-image d-block m-auto"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_PLACEHOLDER_IMAGE;
          }}
        />
        {/* Action Bar */}
        <div className="action-bar flex justify-around py-3 border-b border-gray-300">
          {/* Menu */}
          <div className="flex flex-col items-center">
            <DocumentPlusIcon className="h-8 w-8 text-gray-700" />
            <span className="text-xs mt-1">Menu</span>
          </div>

          {/* Call */}
          <div className="flex flex-col items-center">
            <PhoneArrowUpRightIcon className="h-8 w-8 text-gray-700" />
            <span className="text-xs mt-1">Call</span>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <MapPinIcon className="h-8 w-8 text-gray-700" />
            <span className="text-xs mt-1">Location</span>
          </div>

          {/* Favorite */}
          <div className="flex flex-col items-center">
            <HeartIcon className="h-8 w-8 text-gray-700" />
            <span className="text-xs mt-1">Favorite</span>
          </div>
        </div>

        <div className="restaurant-detail-body p-3">
          {/* Restaurant Info */}
          <div className="py-2 border-b border-b-gray-300">
            <h2 className="text-2xl font-extrabold text-black text-center pb-2">
              {restaurant.name}
            </h2>
            <p className="text-sm text-gray-500 text-center pb-2">
              {restaurant.cuisines.join(" • ")}
            </p>
          </div>
          {/*Restaurant Hours & Address */}
          <div className="border-b border-b-gray-300">
            <div className="flex gap-3 my-1 items-center">
              <ClockIcon className="size-6" />
              <p className="text-sm">
                Hours: {restaurant.open} - {restaurant.close}
              </p>
            </div>
            <div className="flex gap-3 my-1 items-center">
              <MapPinIcon className="size-6" />
              <p className="text-sm"> {restaurant.address1}</p>
            </div>
          </div>
          {/* Deals List */}
          {sortedDeals.length > 0 && (
            <div className="deals-list">
              {sortedDeals.map((deal) => (
                <DealItem key={deal.objectId} deal={deal} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Deal Item Component
const DealItem = ({ deal }: { deal: Deal }) => (
  <div className="deal-item flex justify-between border-b border-b-gray-300 items-center p-3">
    <div className="deal-info">
      <div className="flex gap-2 items-center">
        {deal.lightning === "true" && (
          <BoltIcon className="size-6 text-amber-400" />
        )}
        <p className="font-bold text-red-500"> {deal.discount}% OFF</p>
      </div>
      {deal.open && deal.close ? (
        <p className="my-1 text-xs text-gray-500 font-bold">
          Between {deal.open} - {deal.close}
        </p>
      ) : null}
      <p className="text-xs text-gray-500">{deal.qtyLeft} deals available</p>
    </div>
    <button className="text-sm! font-bold text-red-500 border border-red-500! rounded-4xl! bg-white!">
      Redeem
    </button>
  </div>
);
