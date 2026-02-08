import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { Vendor, Product } from '@/types/types';
import vendorsData from '@/data/vendors.json';
import productsData from '@/data/products.json';

interface ProductsPageProps {
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

export default function ProductsPage({ params }: ProductsPageProps) {
    const vendors: Vendor[] = vendorsData as Vendor[];
    const products: Product[] = productsData as Product[];

    const vendor = vendors.find((v) => v.id === params.id);

    if (!vendor) {
        notFound();
    }

    // Get all products for this vendor
    const vendorProducts = products.filter((p) => p.vendorId === vendor.id);
    const inStockProducts = vendorProducts.filter((p) => p.inStock);
    const outOfStockProducts = vendorProducts.filter((p) => !p.inStock);

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
                        <Link
                            href={`/sellers/${vendor.id}`}
                            className="hover:text-primary-600 transition-colors"
                        >
                            {vendor.name}
                        </Link>
                        <span>/</span>
                        <span className="text-slate-900 font-medium">All Products</span>
                    </nav>
                </div>
            </div>

            {/* Header */}
            <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <Link
                            href={`/sellers/${vendor.id}`}
                            className="inline-flex items-center gap-2 mb-4 text-primary-100 hover:text-white transition-colors"
                        >
                            ← Back to {vendor.name}
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
                        <p className="text-xl text-primary-100">
                            Complete product catalog from {vendor.name}
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Content */}
            <section className="container mx-auto px-4 py-12">
                {vendorProducts.length > 0 ? (
                    <>
                        {/* Summary */}
                        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                            <div className="flex flex-wrap gap-6">
                                <div>
                                    <div className="text-3xl font-bold text-slate-900">
                                        {vendorProducts.length}
                                    </div>
                                    <div className="text-slate-600">Total Products</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-green-600">
                                        {inStockProducts.length}
                                    </div>
                                    <div className="text-slate-600">In Stock</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-red-600">
                                        {outOfStockProducts.length}
                                    </div>
                                    <div className="text-slate-600">Out of Stock</div>
                                </div>
                            </div>
                        </div>

                        {/* In Stock Products */}
                        {inStockProducts.length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                    Available Products ({inStockProducts.length})
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {inStockProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Out of Stock Products */}
                        {outOfStockProducts.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                    Currently Unavailable ({outOfStockProducts.length})
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 opacity-75">
                                    {outOfStockProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📦</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">No Products Yet</h3>
                        <p className="text-slate-600 mb-6">
                            This vendor hasn't added any products to their catalog yet.
                        </p>
                        <Link href={`/sellers/${vendor.id}`} className="btn-primary inline-block">
                            ← Back to Vendor Page
                        </Link>
                    </div>
                )}
            </section>
        </div>
    );
}
