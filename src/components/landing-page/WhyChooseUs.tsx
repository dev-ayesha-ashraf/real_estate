import { ShieldCheck, Clock, Wallet, Headphones } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Each listing is checked for documents, ownership, and location accuracy.",
  },
  {
    icon: Clock,
    title: "Time-Saving Process",
    description:
      "Fast booking and communication tools help you move in quickly.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "No hidden fees — clear, competitive pricing on every property.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "We're here 24/7 to help with listings, questions, or issues.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-4 px-0 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-dealership-primary/10 rounded-full">
                <reason.icon className="w-6 h-6 text-dealership-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
