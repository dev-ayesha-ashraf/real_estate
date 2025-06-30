import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
};

type HeaderProps = {
  location?: string;
  phone?: string;
  hours?: string;
  socialLinks?: ReadonlyArray<{
    platform: keyof typeof socialIcons;
    url: string;
  }>;
};

export const Header = ({
  location = "123 Main Street, City, Country",
  phone = "+1 234 567 890",
  hours = "Mon-Fri: 9AM-6PM",
  socialLinks = [],
}: HeaderProps) => {
  return (
    <div className="hidden md:block bg-gradient-to-b from-dealership-primary/80 to-dealership-primary/100 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span className="text-base md:text-lg">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <span className="text-base md:text-lg">{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span className="text-base md:text-lg">{hours}</span>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks?.map(({ platform, url }) => {
              const Icon = socialIcons[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full text-dealership-primary transition hover:bg-gray-200"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
