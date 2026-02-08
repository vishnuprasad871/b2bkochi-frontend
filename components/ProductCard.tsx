import { Product } from '@/types/types';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover h-full">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-5">
                <div className="mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-700">
                        {product.category}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>

                <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold gradient-text">
                        ₹{product.price.toLocaleString()}
                    </div>
                    {product.inStock && (
                        <span className="text-green-600 text-sm font-semibold">
                            ✓ In Stock
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
