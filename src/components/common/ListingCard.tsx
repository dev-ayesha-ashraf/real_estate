import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Listing } from "@/types/listing";

interface ListingCardProps {
  listing: Listing;
  className?: string;
}

export const ListingCard = ({ listing, className = "" }: ListingCardProps) => {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      <div className="relative">
        {listing.images?.[0] && (
          <img
            src={`${import.meta.env.VITE_MEDIA_URL}/${listing.images[0].image}`}
            alt={listing.title}
            className="w-full h-48 object-cover"
          />
        )}
        {listing.status === 'sold' && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
            Sold
          </div>
        )}
        {listing.badges?.length > 0 && (
          <div className="absolute bottom-2 left-2 flex gap-2">
            {listing.badges.map((badge, index) => (
              <span
                key={index}
                className="bg-black/50 text-white px-2 py-1 rounded-full text-xs"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-dealership-navy line-clamp-2">
          {listing.title}
        </h3>
        <p className="text-2xl font-bold text-dealership-primary mt-2">
          {listing.currency} {Number(listing.price).toLocaleString()}
        </p>
        <div className="flex items-center text-gray-600 mt-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm line-clamp-1">{listing.address}</span>
        </div>
        {listing.specifications?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {listing.specifications.slice(0, 3).map((spec) => (
              <span key={spec._id} className="px-2 py-1 bg-gray-100 text-sm rounded">
                {spec.name}: {Array.isArray(spec.value) ? spec.value[0] : spec.value.toString()}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
