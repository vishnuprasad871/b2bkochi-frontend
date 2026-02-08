# B2B Kochi - Vendor Marketplace Platform

A modern Next.js web application for connecting wholesale and retail vendors across Kerala. Built with TypeScript, Tailwind CSS, and featuring a beautiful, responsive design.

## 🌟 Features

- **Smart Vendor Filtering**: Filter vendors by city, category, and business type (wholesale/retail)
- **Dynamic Seller Pages**: Each vendor has a dedicated page with profile and products
- **Product Catalogs**: Browse complete product listings for each vendor
- **Modern Design**: Vibrant gradients, smooth animations, and responsive layout
- **Type-Safe**: Full TypeScript implementation
- **Fast**: Next.js 14 with App Router for optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd c:\Myprojects\b2bkochi
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
b2bkochi/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page with vendor filtering
│   ├── globals.css        # Global styles
│   └── sellers/           # Dynamic seller routes
├── components/            # Reusable React components
├── data/                  # Sample JSON data
├── types/                 # TypeScript type definitions
└── tailwind.config.ts     # Tailwind CSS configuration
```

## 🎯 Usage

### Home Page
- Browse all vendors in a grid layout
- Use filters to find vendors by city, category, or type
- Click on any vendor card to view their profile

### Seller Pages
- View vendor details and contact information
- Browse featured products
- Click "View All Products" to see the complete catalog

### Product Listings
- See all products from a specific vendor
- View in-stock and out-of-stock items separately
- Check product prices and descriptions

## 🎨 Customization

### Adding Vendors
Edit `data/vendors.json` to add new vendors:
```json
{
  "id": "v9",
  "name": "Your Business",
  "type": "wholesale",
  "city": "Kochi",
  "category": "Your Category",
  "description": "Business description",
  "email": "contact@yourbusiness.com",
  "phone": "+91 12345 67890",
  "address": "Your address",
  "image": "https://your-image-url.com"
}
```

### Adding Products
Edit `data/products.json` to add products:
```json
{
  "id": "p17",
  "vendorId": "v9",
  "name": "Product Name",
  "category": "Category",
  "price": 999,
  "description": "Product description",
  "image": "https://product-image-url.com",
  "inStock": true
}
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: React 18
- **Routing**: Next.js App Router

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1280px+)

## 🎨 Design Features

- Vibrant gradient color schemes
- Smooth hover and transition animations
- Modern card-based layouts
- Clean typography with Inter font
- Accessible form controls

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
The easiest way to deploy is using [Vercel](https://vercel.com):
```bash
npx vercel
```

### Other Platforms
Can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- User authentication and vendor dashboards
- Product search functionality
- Shopping cart and checkout
- Review and rating system
- Analytics dashboard
- SEO optimization

## 📄 License

This is a personal project created for learning purposes.

## 👨‍💻 Author

Built for B2B Kochi marketplace

---

**Note**: This application uses sample data stored in JSON files. For production use, integrate with a proper database and API.
