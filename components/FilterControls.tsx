'use client';

import { FilterState } from '@/types/types';

interface FilterControlsProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    cities: string[];
    categories: string[];
}

export default function FilterControls({
    filters,
    onFilterChange,
    cities,
    categories,
}: FilterControlsProps) {
    const handleFilterChange = (key: keyof FilterState, value: string) => {
        onFilterChange({ ...filters, [key]: value });
    };

    const clearFilters = () => {
        onFilterChange({ city: 'all', category: 'all', type: 'all' });
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Filter Vendors</h2>
                <button
                    onClick={clearFilters}
                    className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                    Clear All
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* City Filter */}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        City
                    </label>
                    <select
                        value={filters.city}
                        onChange={(e) => handleFilterChange('city', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                        <option value="all">All Cities</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Category Filter */}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Category
                    </label>
                    <select
                        value={filters.category}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                        <option value="all">All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Type Filter */}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Vendor Type
                    </label>
                    <select
                        value={filters.type}
                        onChange={(e) => handleFilterChange('type', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                        <option value="all">All Types</option>
                        <option value="retail">Retail</option>
                        <option value="wholesale">Wholesale</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
