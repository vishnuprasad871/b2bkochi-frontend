import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "B2B Kochi - Wholesale & Retail Vendor Marketplace",
    description: "Discover and connect with verified wholesale and retail vendors across Kerala. Your trusted B2B marketplace.",
    keywords: ["B2B", "Kochi", "Wholesale", "Retail", "Vendors", "Marketplace", "Kerala"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <header className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg sticky top-0 z-50">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex items-center justify-between">
                            <a href="/" className="text-2xl font-bold hover:opacity-90 transition-opacity">
                                B2B Kochi
                            </a>
                            <div className="flex gap-6">
                                <a href="/" className="hover:opacity-80 transition-opacity font-medium">
                                    Home
                                </a>
                                <a href="#vendors" className="hover:opacity-80 transition-opacity font-medium">
                                    Vendors
                                </a>
                                <a href="#about" className="hover:opacity-80 transition-opacity font-medium">
                                    About
                                </a>
                            </div>
                        </nav>
                    </div>
                </header>
                <main className="min-h-screen">
                    {children}
                </main>
                <footer className="bg-slate-900 text-white py-8 mt-16">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-slate-400">© 2026 B2B Kochi. Connecting businesses across Kerala.</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
