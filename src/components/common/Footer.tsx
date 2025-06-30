import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { SubscriptionBox } from "./SubscriptionBox";
import { useCategory } from "@/hooks/useCategories";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
};

type FooterProps = {
  about?: string;
  quickLinks?: readonly {
    name: string;
    to: string;
  }[];
  contact?: {
    phone: string;
    email: string;
    address: string;
  };
  socialLinks?: readonly {
    platform: keyof typeof socialIcons;
    url: string;
  }[];
};

export const Footer = ({
  about = "Your trusted partner in finding the perfect property. We offer a wide selection of quality real estate listings and exceptional service.",
  quickLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ],
  contact = {
    phone: "+1 234 567 890",
    email: "info@realestate.com",
    address: "123 Main Street, City, Country",
  },
  socialLinks = [],
}: FooterProps) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { data: currentCategory } = useCategory(categoryId || '');

  const getDomainTitle = () => {
    if (currentCategory) {
      return currentCategory.name;
    }
    return "Real Estate"; // Default title
  };

  const getDomainDescription = () => {
    if (currentCategory) {
      return `Your trusted partner in finding the perfect ${currentCategory.name.toLowerCase()}. We offer a wide selection of quality listings and exceptional service.`;
    }
    return about;
  };

  return (
    <footer className="text-white bg-gradient-to-b from-dealership-primary/70 to-dealership-primary/100">
      <div className="container mx-auto py-16 px-6">
        {/* Subscription Box - Top Section */}
        <div className="mb-12 border-b border-gray-100/30 pb-12">
          <div className="max-w-3xl mx-auto">
            <SubscriptionBox />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About {getDomainTitle()}</h3>
            <p className="text-gray-100">{getDomainDescription()}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks?.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-100 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{contact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>{contact.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{contact.address}</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks?.map(({ platform, url }) => {
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-dealership-primary"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-gray-100">
            © {new Date().getFullYear()} {getDomainTitle()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
