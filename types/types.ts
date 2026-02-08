export interface Vendor {
    id: string;
    name: string;
    type: 'retail' | 'wholesale';
    city: string;
    category: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    image: string;
}

export interface Product {
    id: string;
    vendorId: string;
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
    inStock: boolean;
}

export interface FilterState {
    city: string;
    category: string;
    type: string;
}
