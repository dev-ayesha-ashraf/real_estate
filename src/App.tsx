import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { AuthProvider } from "@/contexts/AuthContext";

import { CategoryListings } from './pages/CategoryListings';
import ListingDetail from './pages/ListingDetail';
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import { HelmetProvider } from "react-helmet-async";
import Index from './pages/Index';

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();



  return (
   
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/listings" element={<ListingsPage title="All Listings" />} /> */}
        <Route path="/" element={<Index />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>

      <HelmetProvider>
        <TooltipProvider>
          <Toaster position="top-right" />
          <AppContent />
        </TooltipProvider>
      </HelmetProvider>

    </AuthProvider>
  </QueryClientProvider>
);

export default App;
