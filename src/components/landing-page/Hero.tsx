import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Navbar } from "../common/Navbar";

interface BannerImage {
  _id: string;
  image: string;
  name: string;
  priority: number;
}

const fetchBannerImages = async (): Promise<BannerImage[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/banners/v1/list-banners`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) throw new Error("Failed to fetch banner images");
  const res = await response.json();
  return res.data.sort((a: BannerImage, b: BannerImage) => a.priority - b.priority);
};

const defaultBanner: BannerImage = {
  _id: "default",
  image: "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Default Banner",
  priority: 0,
};

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data: bannerImagesFromAPI, isLoading } = useQuery({
    queryKey: ["bannerImages"],
    queryFn: fetchBannerImages,
  });

  const bannerImages = bannerImagesFromAPI?.length ? bannerImagesFromAPI : [defaultBanner];
  const currentImage = bannerImages[currentImageIndex];

  return (
    <div className="relative h-[80vh] w-full text-white overflow-hidden bg-black">
      {/* Background image */}
      <img
        src={
          currentImage._id === "default"
            ? currentImage.image
            : `${import.meta.env.VITE_MEDIA_URL}/${currentImage.image}`
        }
        alt={currentImage.name}
        className="absolute inset-0 w-full h-full object-cover object-right z-0"
      />

      {/* Black gradient overlay from left to right */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/70 to-black/10" />

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex py-10 px-6 md:px-16 max-[800px]:items-center">
        <div className="max-w-3xl">
         
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
            PROFESSIONAL<br />
            REAL ESTATE<br />
            AGENT
          </h1>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-sm font-semibold transition mb-6 bg-gradient-to-r from-dealership-primary/80 to-dealership-primary/100"
          >
            START NOW
            <ArrowRight size={18} />
          </Link>
          <p className="text-gray-300 tracking-widest text-sm uppercase">
            Transforming dreams into reality
          </p>
        </div>
      </div>
    </div>
  );
};
