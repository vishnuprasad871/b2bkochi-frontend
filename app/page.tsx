'use client';

import { useState, useMemo } from 'react';
import VendorCard from '@/components/VendorCard';
import FilterControls from '@/components/FilterControls';
import { Vendor, FilterState } from '@/types/types';
import vendorsData from '@/data/vendors.json';

export default function HomePage() {
    const vendors: Vendor[] = vendorsData as Vendor[];

    const [filters, setFilters] = useState<FilterState>({
        city: 'all',
        category: 'all',
        type: 'all',
    });

    // Extract unique cities and categories
    const cities = useMemo(() => {
        return Array.from(new Set(vendors.map((v) => v.city))).sort();
    }, [vendors]);

    const categories = useMemo(() => {
        return Array.from(new Set(vendors.map((v) => v.category))).sort();
    }, [vendors]);

    // Filter vendors based on current filters
    const filteredVendors = useMemo(() => {
        return vendors.filter((vendor) => {
            const matchesCity = filters.city === 'all' || vendor.city === filters.city;
            const matchesCategory =
                filters.category === 'all' || vendor.category === filters.category;
            const matchesType = filters.type === 'all' || vendor.type === filters.type;

            return matchesCity && matchesCategory && matchesType;
        });
    }, [vendors, filters]);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Welcome to B2B Kochi
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto animate-slide-up">
                        Your trusted marketplace connecting wholesale and retail vendors across Kerala.
                        Find verified suppliers and grow your business.
                    </p>
                    <div className="flex gap-4 justify-center animate-scale-in">
                        <button className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                            Browse Vendors
                        </button>
                        <button className="btn-secondary bg-transparent border-2 border-white hover:bg-white hover:text-secondary-600">
                            List Your Business
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 py-12" id="vendors">
                {/* Filter Controls */}
                <FilterControls
                    filters={filters}
                    onFilterChange={setFilters}
                    cities={cities}
                    categories={categories}
                />

                {/* Results Count */}
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-slate-900">
                        {filteredVendors.length === 0 ? (
                            'No vendors found'
                        ) : (
                            <>
                                {filteredVendors.length} Vendor{filteredVendors.length !== 1 ? 's' : ''} Found
                            </>
                        )}
                    </h2>
                    <p className="text-slate-600 mt-2">
                        Discover quality vendors matching your requirements
                    </p>
                </div>

                {/* Vendor Grid */}
                {filteredVendors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                        {filteredVendors.map((vendor) => (
                            <VendorCard key={vendor.id} vendor={vendor} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">No vendors found</h3>
                        <p className="text-slate-600 mb-6">
                            Try adjusting your filters to see more results
                        </p>
                        <button
                            onClick={() => setFilters({ city: 'all', category: 'all', type: 'all' })}
                            className="btn-primary"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </section>

            {/* About Section */}
            <section className="bg-slate-50 py-16" id="about">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">
                            About B2B Kochi
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                            B2B Kochi is Kerala&apos;s premier marketplace for connecting businesses with verified
                            wholesale and retail vendors. We make it easy to discover quality suppliers, compare
                            products, and build lasting business relationships. Whether you&apos;re looking for bulk
                            supplies or retail partnerships, we&apos;ve got you covered.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="text-4xl mb-4">🏪</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Verified Vendors</h3>
                                <p className="text-slate-600">
                                    All vendors are verified for quality and authenticity
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="text-4xl mb-4">🌐</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Wide Coverage</h3>
                                <p className="text-slate-600">
                                    Connecting businesses across all major cities in Kerala
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="text-4xl mb-4">💼</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Business Growth</h3>
                                <p className="text-slate-600">
                                    Tools and features to help your business thrive
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
