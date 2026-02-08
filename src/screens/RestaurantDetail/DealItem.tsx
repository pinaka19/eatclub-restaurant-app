import type { Deal } from "../../types/restaurant";
import { BoltIcon } from "@heroicons/react/24/outline";

// Deal Item Component
const DealItem = ({ deal }: { deal: Deal }) => {
  
    const getAvailableDeals = (dealQty: string) => {
    return parseInt(dealQty) > 1
      ? `${dealQty} deals available`
      : "1 deal available";
  };

  return (
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
        <p className="text-xs text-gray-500">
          {getAvailableDeals(deal.qtyLeft)}
        </p>
      </div>
      <button className="text-sm! font-bold text-red-500 border border-red-500! rounded-4xl! bg-white!">
        Redeem
      </button>
    </div>
  );
};

export default DealItem;
