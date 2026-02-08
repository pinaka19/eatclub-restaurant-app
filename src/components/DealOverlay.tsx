import type { Deal } from "../types/restaurant";

const DealOverlay = ({ deal }: { deal: Deal }) => {

  const dealTime =
    deal.open && deal.close
      ? `${deal.open} - ${deal.close}`
      : "Anytime today";

  return (
    <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-2 rounded-md shadow-md text-sm font-bold">
      <div className="text-md">
        {deal.discount}% off {deal.dineIn === "true" && "- Dine in"}
      </div>
      <div className="text-xs font-normal">{dealTime}</div>
    </div>
  );
};

export default DealOverlay;
