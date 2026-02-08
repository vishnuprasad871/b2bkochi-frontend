import Link from 'next/link';
import { Vendor } from '@/types/types';

interface VendorCardProps {
    vendor: Vendor;
}

export default function VendorCard({ vendor }: VendorCardProps) {
    return (
        <Link href={`/sellers/${vendor.id}`}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer h-full">
                {/* Image Section with Gradient Overlay */}
                <div className="relative h-56 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                        <span
                            className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${vendor.type === 'wholesale'
                                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                                : 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white'
                                }`}
                        >
                            {vendor.type === 'wholesale' ? 'Wholesale' : 'Retail'}
                        </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{vendor.name}</h3>

                    <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                            {vendor.category}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                            📍 {vendor.city}
                        </span>
                    </div>

                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                        {vendor.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>📧 {vendor.email}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
