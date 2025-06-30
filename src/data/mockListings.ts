import { Listing } from "@/types/listing";

export const mockRealEstateListing: Listing = {
  _id: "re123456",
  title: "Modern 3-Bedroom Luxury Villa with Ocean View",
  description:
    "Stunning modern villa featuring panoramic ocean views, an infinity pool, and high-end finishes throughout. This exceptional property offers open-concept living spaces, a gourmet kitchen with premium appliances, and a private master suite with a spa-like bathroom. The outdoor entertainment area includes a covered terrace and landscaped gardens.",
  price: "1250000",
  currency: "USD",
  category: "real-estate",
  status: "active",
  address: "123 Coastal Drive, Malibu, CA 90265",
  seller: {
    _id: "ag789012",
    name: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "sarah.johnson@luxuryrealty.com",
    phoneNo: "+1 (310) 555-0123",
    address: "456 Real Estate Row, Malibu, CA 90265",
    type: "agent",
  },
  specifications: [
    { _id: "spec1", name: "Bedrooms", value: 3 },
    { _id: "spec2", name: "Bathrooms", value: 3.5 },
    { _id: "spec3", name: "Square Feet", value: 4200 },
    { _id: "spec4", name: "Lot Size", value: "0.5 acres" },
    { _id: "spec5", name: "Year Built", value: 2022 },
    { _id: "spec6", name: "Property Type", value: "Single Family Home" },
  ],
  features: [
    { _id: "feat1", name: "Pool", value: "Infinity Pool" },
    { _id: "feat2", name: "Parking", value: "2-Car Garage" },
    { _id: "feat3", name: "Kitchen", value: "Gourmet Kitchen with Island" },
    { _id: "feat4", name: "View", value: "Ocean View" },
    { _id: "feat5", name: "Security", value: "Smart Home System" },
    { _id: "feat6", name: "Outdoor", value: "Landscaped Garden" },
  ],
  images: [
    {
      _id: "img1",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      isPrimary: true,
    },
    {
      _id: "img2",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      isPrimary: false,
    },
    {
      _id: "img3",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isPrimary: false,
    },
    {
      _id: "img4",
      image:
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isPrimary: false,
    },
    {
      _id: "img5",
      image:
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isPrimary: false,
    },
  ],
  badges: ["Luxury", "Ocean View", "New Construction"],
  slug: "modern-3-bedroom-luxury-villa-malibu",
  createdAt: "2024-03-15T08:00:00Z",
  updatedAt: "2024-03-15T08:00:00Z",
};

export const mockVehicleListing: Listing = {
  _id: "car123456",
  title: "2024 BMW X5 M Sport Package",
  description:
    "Immaculate 2024 BMW X5 with M Sport Package. Features include premium leather interior, panoramic sunroof, and the latest driver assistance technologies. This vehicle has been meticulously maintained and comes with a full service history.",
  price: "75000",
  currency: "USD",
  category: "vehicles",
  status: "active",
  address: "789 Auto Drive, Beverly Hills, CA 90210",
  seller: {
    _id: "dlr789012",
    name: "Premium Auto Group",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "sales@premiumauto.com",
    phoneNo: "+1 (310) 555-0789",
    address: "789 Auto Drive, Beverly Hills, CA 90210",
    type: "dealer",
  },
  specifications: [
    { _id: "spec1", name: "Mileage", value: 1500 },
    { _id: "spec2", name: "Engine", value: "3.0L Twin-Turbo 6-Cylinder" },
    { _id: "spec3", name: "Transmission", value: "8-Speed Automatic" },
    { _id: "spec4", name: "Drivetrain", value: "All-Wheel Drive" },
    { _id: "spec5", name: "Fuel Type", value: "Premium Gasoline" },
    { _id: "spec6", name: "Exterior Color", value: "Mineral White Metallic" },
  ],
  features: [
    { _id: "feat1", name: "Package", value: "M Sport Package" },
    { _id: "feat2", name: "Interior", value: "Black Vernasca Leather" },
    {
      _id: "feat3",
      name: "Technology",
      value: "BMW Live Cockpit Professional",
    },
    {
      _id: "feat4",
      name: "Sound System",
      value: "Harman Kardon Surround Sound",
    },
    {
      _id: "feat5",
      name: "Safety",
      value: "Driving Assistance Professional Package",
    },
  ],
  images: [
    {
      _id: "img1",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isPrimary: true,
    },
    {
      _id: "img2",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isPrimary: false,
    },
    {
      _id: "img3",
      image:
        "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isPrimary: false,
    },
  ],
  badges: ["Premium", "Low Mileage", "Warranty"],
  slug: "2024-bmw-x5-m-sport-beverly-hills",
  createdAt: "2024-03-15T09:00:00Z",
  updatedAt: "2024-03-15T09:00:00Z",
};

export const mockElectronicsListing: Listing = {
  _id: "elec123456",
  title: "Apple iPhone 15 Pro Max - 256GB - Space Black",
  description:
    "Brand new, sealed iPhone 15 Pro Max featuring the powerful A17 Pro chip, a stunning 6.7-inch Super Retina XDR display, and a professional camera system. Includes full manufacturer warranty and all original accessories.",
  price: "1199",
  currency: "USD",
  category: "electronics",
  status: "active",
  address: "123 Tech Plaza, San Francisco, CA 94105",
  seller: {
    _id: "str789012",
    name: "TechHub Store",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "sales@techhub.com",
    phoneNo: "+1 (415) 555-0123",
    address: "123 Tech Plaza, San Francisco, CA 94105",
    type: "store",
  },
  specifications: [
    {
      _id: "spec1",
      name: "Storage",
      value: "256GB",
    },
    {
      _id: "spec2",
      name: "Color",
      value: "Space Black",
    },
    {
      _id: "spec3",
      name: "Display",
      value: "6.7-inch Super Retina XDR",
    },
    {
      _id: "spec4",
      name: "Chip",
      value: "A17 Pro",
    },
    {
      _id: "spec5",
      name: "Camera",
      value: "48MP Main | 12MP Ultra Wide | 12MP Telephoto",
    },
  ],
  features: [
    {
      _id: "feat1",
      name: "5G",
      value: "Supported",
    },
    {
      _id: "feat2",
      name: "Face ID",
      value: "Advanced",
    },
    {
      _id: "feat3",
      name: "Water Resistance",
      value: "IP68",
    },
    {
      _id: "feat4",
      name: "Battery",
      value: "All-day battery life",
    },
    {
      _id: "feat5",
      name: "Warranty",
      value: "1 Year Apple Limited Warranty",
    },
  ],
  images: [
    {
      _id: "img1",
      image:
        "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isPrimary: true,
    },
    {
      _id: "img2",
      image:
        "https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isPrimary: false,
    },
    {
      _id: "img3",
      image:
        "https://images.unsplash.com/photo-1510166420340-24950d8c7027?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isPrimary: false,
    },
  ],
  badges: ["New", "Free Shipping", "Apple Care Eligible"],
  slug: "apple-iphone-15-pro-max-256gb-space-black",
  createdAt: "2024-03-15T10:00:00Z",
  updatedAt: "2024-03-15T10:00:00Z",
};
