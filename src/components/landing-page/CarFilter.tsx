import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface CarFilterProps {
  dropdowns: {
    prices: string[];
    locations: string[];
  };
  filteredBadges: {
    _id: string;
    name: string;
  }[];
}

export const CarFilter = ({ dropdowns, filteredBadges }: CarFilterProps) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [filters, setFilters] = useState({
    location: '',
    type: 'buy',
    priceRange: '',
    maxPrice: '',
  });

  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (filters.location) queryParams.set('location', filters.location);
    if (filters.type) queryParams.set('type', filters.type);
    if (filters.priceRange) queryParams.set('priceRange', filters.priceRange);
    if (filters.maxPrice) queryParams.set('maxPrice', filters.maxPrice);
    if (selectedFilter) queryParams.set('badgeId', selectedFilter);

    navigate(`/cars?${queryParams.toString()}`);
    setDialogOpen(false); // close modal on search
  };

  const FilterContent = (
    <div className="flex flex-wrap items-center gap-2 md:gap-4">
      {/* Location */}
      <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, location: value }))}>
        <SelectTrigger className="w-40 border border-gray-300 text-sm">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          {dropdowns?.locations?.map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Buy / Rent Toggle */}
      <div className="flex border border-gray-300 rounded-md overflow-hidden">
        <button
          onClick={() => setFilters((prev) => ({ ...prev, type: 'buy' }))}
          className={`px-4 py-2 text-sm ${
            filters.type === 'buy' ? 'bg-gray-200 font-medium' : 'bg-white'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setFilters((prev) => ({ ...prev, type: 'rent' }))}
          className={`px-4 py-2 text-sm ${
            filters.type === 'rent' ? 'bg-gray-200 font-medium' : 'bg-white'
          }`}
        >
          Rent
        </button>
      </div>

      {/* Min Price */}
      <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, priceRange: value }))}>
        <SelectTrigger className="w-32 border border-gray-300 text-sm">
          <SelectValue placeholder="Min Price" />
        </SelectTrigger>
        <SelectContent>
          {dropdowns?.prices?.map((price) => (
            <SelectItem key={price} value={price.split('-')[0]}>
              {price}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Max Price */}
      <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, maxPrice: value }))}>
        <SelectTrigger className="w-32 border border-gray-300 text-sm">
          <SelectValue placeholder="Max Price" />
        </SelectTrigger>
        <SelectContent>
          {dropdowns?.prices?.map((price) => (
            <SelectItem key={price} value={price.split('-')[1]}>
              {price}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Badge */}
      <Select onValueChange={(value) => setSelectedFilter(value)}>
        <SelectTrigger className="w-32 border border-gray-300 text-sm">
          <SelectValue placeholder="Badge" />
        </SelectTrigger>
        <SelectContent>
          {filteredBadges?.map((badge) => (
            <SelectItem key={badge._id} value={badge._id}>
              {badge.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Button */}
      <Button
        onClick={handleSearch}
        className="bg-gradient-to-r from-dealership-primary/80 to-dealership-primary/100 text-white px-6 py-2 rounded-md hover:bg-gray-900 text-sm"
      >
        Search
      </Button>
    </div>
  );

  return isMobile ? (
    <div className="w-full px-4 mt-4">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button className="w-full bg-gradient-to-r from-dealership-primary/80 to-dealership-primary/100 text-sm">
            Filter
          </Button>
        </DialogTrigger>
        <DialogContent className="p-6 bg-white max-w-[90vw] rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          {FilterContent}
        </DialogContent>
      </Dialog>
    </div>
  ) : (
    <div className="bg-white px-4 py-8 m-auto rounded-md shadow-sm flex flex-wrap items-center gap-2 md:gap-4 w-3/4 overflow-x-auto mt-[-22px] relative z-10">
      {FilterContent}
    </div>
  );
};
