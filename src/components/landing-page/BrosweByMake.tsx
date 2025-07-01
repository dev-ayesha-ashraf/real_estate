import { Link } from "react-router-dom";

const locations = [
  {
    name: "Oranjestad",
    slug: "oranjestad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWKMKbCPA9cOj-h8AhfdmY7GBB7s0IhzsCg&s",
  },
  {
    name: "Eagle Beach",
    slug: "eagle-beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "San Nicolas",
    slug: "san-nicolas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfgsi5TP_uZs2Ro2qCDBiGX0F6BdjxXqf3A&s",
  },
];

export const BrowseByLocation = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Browse by Location</h2>
          <Link
            to="/listings"
            className="text-sm text-blue-600 font-medium hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex space-x-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/listings?location=${loc.slug}`}
                className="flex flex-col items-center bg-gray-50 border border-gray-200 hover:border-blue-500 hover:bg-white shadow-sm hover:shadow-md rounded-xl px-4 py-4 transition-all duration-200 min-w-[130px]"
              >
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-[100px] h-[100px] rounded-full object-cover ring-1 ring-gray-300 mb-2"
                />
                <span className="text-[17px] font-medium text-gray-700 text-center">{loc.name}</span>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};
