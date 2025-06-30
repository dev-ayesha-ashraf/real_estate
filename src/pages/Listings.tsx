import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Share2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/common/Header";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { footerData, headerData } from "@/data";
import { useListings } from "@/hooks/useListings";
import { Listing } from "@/types";

type ListingsPageProps = {
  title: string;
  listings?: Listing[];
  domainType: string;
};

const getImageUrl = (imagePath: string): string => {
  if (!imagePath) return "/placeholder-image.jpg";
  if (imagePath.startsWith("http")) return imagePath;
  const baseUrl = import.meta.env.VITE_IMAGE_API;
  return `${baseUrl}${imagePath}`;
};

export const ListingsPage = ({
  title,
  listings: propListings,
  domainType,
}: ListingsPageProps) => {
  const [sortBy, setSortBy] = useState("date-desc");
  const [selected, setSelected] = useState<Listing | null>(null);
  const [showShare, setShowShare] = useState(false);
  const { data: fetchedListings = [], isLoading, error } = useListings();

  const listings = propListings || fetchedListings;

  const sorted = [...listings].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return (a.price || 0) - (b.price || 0);
      case "price-desc":
        return (b.price || 0) - (a.price || 0);
      default:
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  });

  const handleShare = (listing: Listing, e: React.MouseEvent) => {
    e.preventDefault();
    setSelected(listing);
    setShowShare(true);
  };

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "tel:+2975694343";
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/placeholder-image.jpg";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header {...headerData} />
      <Navbar /> */}
      <div className="container mx-auto px-4 py-8 mt-16 md:mt-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dealership-navy">{title}</h1>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[200px] bg-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="date-desc">Newest First</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
              {isLoading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error loading listings</div>
              ) : (
                sorted.map((item) => {
                  const imagePath =
                    item.images && item.images.length > 0
                      ? item.images[0]
                      : "";
                  const imageUrl = getImageUrl(imagePath);

                  return (
                    <Link key={item.id} to={`/listing/${item.id}`}>
                      <Card className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
                        {/* Background image */}
                        <img
                          src={imageUrl}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={handleImageError}
                        />

                        {/* Blur layer that expands with content */}
                        <div
                          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
                          style={{
                            height: '100%',
                            WebkitMaskImage:
                              'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
                            maskImage:
                              'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            backgroundColor: 'rgba(255,255,255,0.08)',
                          }}

                        />

                        {/* Content over blur (no blur here!) */}
                        <div className="absolute bottom-0 w-full px-4 py-5 text-white z-20">
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <p className="text-sm opacity-90 truncate">{item.description}</p>

                          <div className="flex gap-2 mt-2 text-xs">
                            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                              {item.attributes?.rating || '4.5'} ★
                            </span>
                            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                              {item.attributes?.stay || '3 Night Stay'}
                            </span>
                          </div>

                          <button className="mt-4 bg-white text-black text-sm font-semibold py-2 rounded-xl w-full hover:bg-gray-100 transition">
                            Reserve now
                          </button>
                        </div>

                        {/* Call button */}
                        <button
                          onClick={handleCall}
                          className="absolute top-2 right-2 bg-white/30 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md z-30"
                          title="Call +297 569 4343"
                        >
                          <Phone className="h-4 w-4" />
                        </button>
                      </Card>





                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer {...footerData} /> */}
    </div>
  );
};
