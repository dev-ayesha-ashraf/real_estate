import { useState, useRef, useEffect, TouchEvent, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageZoom } from "@/components/common/ImageZoom";
import { ShareButtons } from "@/components/common/ShareButtons";
import { Listing } from "@/types/listing";

interface ListingDetailProps {
    listing: Listing;
}

export const ListingDetail = ({ listing }: ListingDetailProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [isZoomOpen, setIsZoomOpen] = useState(false);
    console.log("Listing Detail Component Rendered");

    console.log(listing)
    // Touch handling for swipe gestures
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const touchDiff = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (Math.abs(touchDiff) > minSwipeDistance) {
            if (touchDiff > 0) {
                navigateNext();
            } else {
                navigatePrevious();
            }
        }
    };

    const navigatePrevious = () => {
        if (!listing?.images?.length) return;
        setSelectedImageIndex((prev) =>
            prev !== null ? (prev > 0 ? prev - 1 : listing.images.length - 1) : 0
        );
    };

    const navigateNext = () => {
        if (!listing?.images?.length) return;
        setSelectedImageIndex((prev) =>
            prev !== null ? (prev < listing.images.length - 1 ? prev + 1 : 0) : 0
        );
    };

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                navigatePrevious();
            } else if (e.key === "ArrowRight") {
                navigateNext();
            }
        };

        if (listing?.images?.length) {
            document.addEventListener("keydown", handleKeydown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [listing?.images]);

    const formattedImages = useMemo(() => {
        if (!listing?.images) return [];
        return listing.images.map((img) => ({
            url: img.image,
            alt: listing.title || 'Item image'
        }));
    }, [listing?.images, listing?.title]);

    const openZoomView = (index: number) => {
        setSelectedImageIndex(index);
        setIsZoomOpen(true);
    };

    const listingUrl = `${window.location.origin}/listings/${listing.slug}`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                {/* Image Gallery */}
                <Card className="overflow-hidden relative">
                    <div className="relative">
                        <div
                            className="relative h-[300px] md:h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {listing?.images?.length > 0 ? (
                                <>
                                    <img
                                        src={`${listing.images[selectedImageIndex]?.image ?? listing.images[0]?.image}`}
                                        alt={listing.title}
                                        className="w-full h-full object-contain cursor-pointer"
                                        onClick={() => openZoomView(selectedImageIndex || 0)}
                                    />

                                    {listing.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigatePrevious();
                                                }}
                                                className="absolute left-4 text-white z-10 bg-black/30 hover:bg-black/50 p-2 rounded-full"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft size={24} />
                                            </button>

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigateNext();
                                                }}
                                                className="absolute right-4 text-white z-10 bg-black/30 hover:bg-black/50 p-2 rounded-full"
                                                aria-label="Next image"
                                            >
                                                <ChevronRight size={24} />
                                            </button>

                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                                                {(selectedImageIndex || 0) + 1} / {listing.images.length}
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : (
                                <div className="text-gray-400">No image available</div>
                            )}
                        </div>

                        {listing?.images?.length > 1 && (
                            <div className="flex overflow-x-auto p-2 gap-2 bg-gray-50">
                                {listing.images.map((img, index) => (
                                    <div
                                        key={img._id}
                                        className={`w-20 h-20 flex-shrink-0 cursor-pointer ${selectedImageIndex === index ? "ring-2 ring-primary" : ""
                                            }`}
                                        onClick={() => setSelectedImageIndex(index)}
                                    >
                                        <img
                                            src={`${img.image}`}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </Card>

                {/* Listing Details */}
                <div className="space-y-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-dealership-navy">
                                {listing.title}
                            </h1>
                            <p className="text-3xl font-bold text-dealership-primary">
                                {listing.currency} {Number(listing.price).toLocaleString()}
                            </p>
                        </div>
                        <ShareButtons title={listing.title} url={listingUrl} />
                    </div>

                    <div className="space-y-6">
                        <Card className="p-6">
                            <h2 className="text-xl font-semibold mb-4">Overview</h2>
                            <p className="text-gray-600">
                                {listing.description}
                            </p>
                        </Card>

                        {listing.specifications.length > 0 && (
                            <Card className="p-6">
                                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {listing.specifications.map((spec) => (
                                        <div key={spec._id}>
                                            <p className="font-medium">{spec.name}</p>
                                            <p className="text-gray-600">
                                                {Array.isArray(spec.value)
                                                    ? spec.value.join(', ')
                                                    : spec.value.toString()}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}

                        {listing.features.length > 0 && (
                            <Card className="p-6">
                                <h2 className="text-xl font-semibold mb-4">Features</h2>
                                <div className="grid grid-cols-2 gap-2">
                                    {listing.features.map((feature) => (
                                        <li key={feature._id} className="list-none">
                                            {feature.name}: {feature.value}
                                        </li>
                                    ))}
                                </div>
                            </Card>
                        )}

                        <Card className="p-6">
                            <h2 className="text-xl font-semibold mb-4">Location</h2>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-dealership-primary" />
                                <span>{listing.address}</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                {/* Seller Info */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-center">
                        {listing.seller.type === 'dealer' ? 'Dealer' : 'Seller'} Information
                    </h2>
                    <div className="space-y-4">
                        <div className="flex flex-col items-center text-center">
                            {listing.seller.image && (
                                <img
                                    src={`${listing.seller.image}`}
                                    alt={listing.seller.name}
                                    className="w-20 h-20 object-cover rounded-full mb-3"
                                />
                            )}
                            <p className="font-medium">{listing.seller.name}</p>
                            <p className="text-gray-600">{listing.seller.address}</p>
                        </div>
                        <div className="space-y-2">
                            {listing.seller.phoneNo && (
                                <Button className="w-full flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    {listing.seller.phoneNo}
                                </Button>
                            )}
                            <Button
                                variant="outline"
                                className="w-full flex items-center gap-2"
                            >
                                <Mail className="w-4 h-4" />
                                Email {listing.seller.type === 'dealer' ? 'Dealer' : 'Seller'}
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Contact Form */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input type="text" className="w-full p-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Phone
                            </label>
                            <input type="tel" className="w-full p-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                className="w-full p-2 border rounded-md"
                                rows={4}
                            ></textarea>
                        </div>
                        <Button className="w-full">Send Message</Button>
                    </form>
                </Card>
            </div>

            {/* Image Zoom Modal */}
            {isZoomOpen && (
                <ImageZoom
                    isOpen={isZoomOpen}
                    onClose={() => setIsZoomOpen(false)}
                    imageUrl={formattedImages[selectedImageIndex || 0]?.url || ''}
                    alt={formattedImages[selectedImageIndex || 0]?.alt || ''}
                    images={formattedImages}
                    currentIndex={selectedImageIndex || 0}
                />
            )}
        </div>
    );
}; 