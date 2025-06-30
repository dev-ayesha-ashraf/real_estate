import { useEffect, useState } from 'react';
import { useListingsByCategory, useCategories } from '@/hooks/useCategories';
import { ListingsPage } from './Listings';

export const CategoryListings = () => {
    const { data: categories } = useCategories();
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
    const [domainType, setDomainType] = useState<string>('default');
    const subdomain = typeof window !== "undefined" ? getSubdomain() : null;
    const { data: listings, isLoading: isLoadingListings } = useListingsByCategory(selectedCategoryId || '');

    useEffect(() => {
        if (!categories || !subdomain) return;

        console.log("🌀 useEffect triggered");
        console.log("📦 Categories:", categories);
        console.log("🌐 Subdomain:", subdomain);

        const matchedCategory = categories.find(cat =>
            cat.slug?.toLowerCase() === subdomain.toLowerCase()
        );

        console.log("🔍 Matched Category:", matchedCategory);

        if (matchedCategory) {
            setSelectedCategoryId(matchedCategory.id);
            setDomainType(matchedCategory.slug || 'default');
        } else {
            console.warn("⚠️ No matching category found for subdomain:", subdomain);
            setSelectedCategoryId(null);
        }
    }, [categories, subdomain]);


    if (isLoadingListings) {

        return <div>Loading...</div>;
    }

    if (!listings || listings.length === 0) {
        console.warn("❌ No listings found for category:", selectedCategoryId);
        return <div>No items found</div>;
    }

    console.log("✅ Listings loaded:", listings);

    return (
        <ListingsPage
            title={listings[0]?.category?.name || 'Listings'}
            listings={listings}
            domainType={domainType}
        />
    );
};

function getSubdomain(): string | null {
    const host = window.location.hostname;

    const parts = host.split('.');
    if (host === 'localhost' || parts.length < 3) {
        console.log("🛠 Running on localhost or no subdomain, using fallback");
        return 'realestate'; // default fallback for development
    }

    return parts[0];
}
