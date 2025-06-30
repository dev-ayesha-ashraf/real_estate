import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { Navbar } from "@/components/common/Navbar";
import { BrowseByMake } from "@/components/landing-page/BrosweByMake";
import { BrowseByType } from "@/components/landing-page/BrowseByType";
import { Hero } from "@/components/landing-page/Hero";
import { OurCars } from "@/components/landing-page/OurCars";
import { ReviewSection } from "@/components/landing-page/ReviewSection";
import { StatsSection } from "@/components/landing-page/StatsSection";
import { WhatsAppButton } from "@/components/landing-page/WhatsAppButton";
import { WhyChooseUs } from "@/components/landing-page/WhyChooseUs";
import { CategoryListings } from "./CategoryListings";
import { CarFilter } from "@/components/landing-page/CarFilter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Navbar /> */}
      <Hero />
      <CarFilter />
      <CategoryListings />
      {/* <OurCars /> */}
      {/* <BrowseByType /> */}
      {/* <BrowseByMake /> */}
      {/* <ReviewSection /> */}
      {/* <StatsSection /> */}
      {/* <WhyChooseUs /> */}
      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
};

export default Index;
