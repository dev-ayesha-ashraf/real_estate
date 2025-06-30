import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useListing, useListings } from "../hooks/useListings";
import { formatDate } from "../utils/dateUtils";
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const getImageUrl = (imagePath: string): string => {
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  const baseUrl = import.meta.env.VITE_IMAGE_API;
  return `${baseUrl}${imagePath}`;
};

const ListingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: listing, isLoading: loading, isError: error } = useListing(id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    if (listing && listing.images && listing.images.length > 0) {
      setSelectedImage(listing.images[0]);
    }
  }, [listing]);

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleCallDefault = () => {
    window.location.href = "tel:+2975694343";
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "/placeholder-image.jpg";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-200 rounded"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600">{error || "Listing not found"}</p>
          </div>
        </div>
      </div>
    );
  }

  // Get the main image to display (selected image or first image)
  const mainImage =
    selectedImage ||
    (listing.images && listing.images.length > 0 ? listing.images[0] : null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                {mainImage ? (
                  <img
                    src={getImageUrl(mainImage)}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>
              {listing.images && listing.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {listing.images.map((image: string, index: number) => {
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === image
                            ? "border-blue-500 ring-2 ring-blue-200"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <img
                          src={getImageUrl(image)}
                          alt={`${listing.title} - ${index + 1}`}
                          onError={handleImageError}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Listing Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {listing.title}
                </h1>
                <p className="text-2xl font-semibold text-blue-600 mt-2">
                  ${listing.price?.toLocaleString() || "Contact for price"}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h2>
                <p className="text-gray-600">{listing.description}</p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Location
                </h2>
                <p className="text-gray-600 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  {listing.location}
                </p>
              </div>

              {listing.properties &&
                Object.keys(listing.properties).length > 0 && (
                  <div className="border-t border-gray-200 pt-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      Properties
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(listing.properties).map(
                        ([key, value]) => (
                          <div key={key} className="bg-gray-50 p-3 rounded-lg">
                            <span className="text-sm font-medium text-gray-500 capitalize">
                              {key}
                            </span>
                            <p className="text-gray-900">{value as string}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Seller Information */}
              {listing.seller && (
                <div className="border-t border-gray-200 pt-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Seller Information
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex items-center">
                      <FaUser className="text-gray-400 mr-2" />
                      <span className="text-gray-900">
                        {listing.seller.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      {/* <div className="flex items-center">
                        <FaPhone className="text-gray-400 mr-2" />
                        <span className="text-gray-900">{listing.seller.phone}</span>
                      </div> */}
                      {/* <button
                        onClick={() => handleCall(listing.seller.phone)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                      >
                        <FaPhone className="text-sm" />
                        <span>Call Seller</span>
                      </button> */}
                    </div>
                    {/* <div className="flex items-center">
                      <FaEnvelope className="text-gray-400 mr-2" />
                      <span className="text-gray-900">{listing.seller.email}</span>
                    </div> */}
                  </div>
                </div>
              )}

              {/* Contact Actions */}
              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Options
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* <button
                    onClick={() => handleCall(listing.seller.phone)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <FaPhone />
                    <span>Call Seller</span>
                  </button> */}
                  <button
                    onClick={handleCallDefault}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <FaPhone />
                    <span>Call +297 569 4343</span>
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-500">
                  Listed on {formatDate(listing.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
