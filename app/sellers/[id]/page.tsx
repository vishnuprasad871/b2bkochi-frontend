import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { Vendor, Product } from '@/types/types';
import vendorsData from '@/data/vendors.json';
import productsData from '@/data/products.json';

interface SellerPageProps {
    params: {
        id: string;
    };
}

// Generate static params for all vendors
export async function generateStaticParams() {
    const vendors: Vendor[] = vendorsData as Vendor[];
    return vendors.map((vendor) => ({
        id: vendor.id,
    }));
}

export default function SellerPage({ params }: SellerPageProps) {
    const vendors: Vendor[] = vendorsData as Vendor[];
    const products: Product[] = productsData as Product[];

    const vendor = vendors.find((v) => v.id === params.id);

    if (!vendor) {
        notFound();
    }

    // Get products for this vendor (limit to 6 for featured section)
    const vendorProducts = products.filter((p) => p.vendorId === vendor.id);
    const featuredProducts = vendorProducts.slice(0, 6);
    const hasMoreProducts = vendorProducts.length > 6;

    return (
        <div>
            {/* Breadcrumb */}
            <div className="bg-slate-100 py-4">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-600">
                        <Link href="/" className="hover:text-primary-600 transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-slate-900 font-medium">{vendor.name}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section with Vendor Info */}
            <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Vendor Image */}
                            <div className="w-full md:w-1/3">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={vendor.image}
                                    alt={vendor.name}
                                    className="w-full h-64 object-cover rounded-xl shadow-2xl"
                                />
                            </div>

                            {/* Vendor Details */}
                            <div className="flex-1">
                                <div className="mb-4">
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${vendor.type === 'wholesale'
                                            ? 'bg-white/20 text-white'
                                            : 'bg-white/20 text-white'
                                            }`}
                                    >
                                        {vendor.type === 'wholesale' ? 'Wholesale Supplier' : 'Retail Store'}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold mb-4">{vendor.name}</h1>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
                                        📍 {vendor.city}
                                    </span>
                                    <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
                                        🏷️ {vendor.category}
                                    </span>
                                </div>

                                <p className="text-lg text-primary-50 mb-6 leading-relaxed">
                                    {vendor.description}
                                </p>

                                <div className="space-y-2 text-primary-100">
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">📧 Email:</span> {vendor.email}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">📞 Phone:</span> {vendor.phone}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">📍 Address:</span> {vendor.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                        {featuredProducts.length > 0 ? 'Featured Products' : 'No Products Available'}
                    </h2>
                    {featuredProducts.length > 0 && (
                        <p className="text-slate-600">
                            Browse our curated selection of quality products
                        </p>
                    )}
                </div>

                {featuredProducts.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            {featuredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {hasMoreProducts && (
                            <div className="text-center">
                                <Link
                                    href={`/sellers/${vendor.id}/products`}
                                    className="btn-primary inline-block"
                                >
                                    View All {vendorProducts.length} Products →
                                </Link>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-16 bg-slate-50 rounded-xl">
                        <div className="text-6xl mb-4">📦</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h3>
                        <p className="text-slate-600">
                            This vendor is setting up their product catalog. Check back soon!
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
}
