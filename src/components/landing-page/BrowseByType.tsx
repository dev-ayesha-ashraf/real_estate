import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

// Default property types with static images from Unsplash
const propertyTypes = [
  {
    name: "Apartments",
    slug: "apartments",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", // Modern apartment
  },
  {
    name: "Villas",
    slug: "villas",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364", // Luxury villa
  },
];

const BrowseByPropertyType = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Browse Property by Type</h2>
          <div className="hidden sm:block">
            <Link to="/listings">
              <Button variant="ghost" className="gap-2">
                See All Properties
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {propertyTypes.map((type) => (
            <Link
              key={type.slug}
              to={`/types/${type.slug}`}
              className="relative h-56 group rounded-xl overflow-hidden"
            >
              <img
                src={type.image}
                alt={type.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-semibold group-hover:underline">
                  {type.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10 lg:hidden">
          <Link to="/listings">
            <Button
              variant="default"
              className="gap-2 bg-gradient-to-r from-dealership-primary/80 to-dealership-primary"
            >
              See All Properties
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowseByPropertyType;