import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DropdownsData {
  makes?: string[];
  types: string[];
  prices: string[];
  locations: string[];
  models?: string[];
  customFields?: {
    name: string;
    type: string;
    label: string;
    required: boolean;
    options?: string[];
  }[];
}

interface ListingsFilterProps {
  dropdowns: DropdownsData;
}

export const ListingsFilter = ({ dropdowns }: ListingsFilterProps) => {
  const [filters, setFilters] = useState<Record<string, any>>({});

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleCustomFieldChange = (name: string, value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFilters({});
  };

  return (
    <Card className="bg-white">
      <CardContent className="p-4">
        <div className="space-y-4">
          {dropdowns.makes && (
            <div>
              <Label className="block text-sm font-medium mb-2">Make</Label>
              <Select
                onValueChange={(value) => handleFilterChange('make', value)}
                value={filters.make}
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select Make" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {dropdowns.makes.map((make) => (
                    <SelectItem key={make} value={make}>
                      {make}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <Label className="block text-sm font-medium mb-2">Type</Label>
            <Select
              onValueChange={(value) => handleFilterChange('type', value)}
              value={filters.type}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {dropdowns.types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="block text-sm font-medium mb-2">Price Range</Label>
            <Select
              onValueChange={(value) => handleFilterChange('price', value)}
              value={filters.price}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select Price Range" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {dropdowns.prices.map((price) => (
                  <SelectItem key={price} value={price}>
                    {price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="block text-sm font-medium mb-2">Location</Label>
            <Select
              onValueChange={(value) => handleFilterChange('location', value)}
              value={filters.location}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {dropdowns.locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {dropdowns.customFields?.map((field) => (
            <div key={field.name}>
              <Label className="block text-sm font-medium mb-2">{field.label}</Label>
              {field.type === 'select' ? (
                <Select
                  onValueChange={(value) => handleCustomFieldChange(field.name, value)}
                  value={filters[field.name]}
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder={`Select ${field.label}`} />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {field.options?.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  type={field.type}
                  placeholder={`Enter ${field.label}`}
                  value={filters[field.name] || ''}
                  onChange={(e) => handleCustomFieldChange(field.name, e.target.value)}
                  required={field.required}
                />
              )}
            </div>
          ))}

          <div className="flex gap-2">
            <Button
              className="flex-1 bg-dealership-primary hover:bg-dealership-primary/90"
              onClick={() => console.log('Apply filters:', filters)}
            >
              Apply Filters
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
