import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Use Inter font from Google Fonts instead of Geist
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AvideTravel - Your Travel Agency',
  description: 'Book flights, hotels, tours and car rentals with AvideTravel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto py-4 px-4 flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">AvideTravel</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="text-gray-600 hover:text-blue-600">Home</a></li>
                <li><a href="/booking" className="text-gray-600 hover:text-blue-600">Book</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">AvideTravel</h3>
                <p className="text-gray-300">Your trusted partner for all your travel needs. We offer flights, hotels, tours, and car rentals worldwide.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                  <li><a href="/booking" className="text-gray-300 hover:text-white">Book Now</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="/booking" className="text-gray-300 hover:text-white">Flight Booking</a></li>
                  <li><a href="/booking" className="text-gray-300 hover:text-white">Hotel Reservations</a></li>
                  <li><a href="/booking" className="text-gray-300 hover:text-white">Tour Packages</a></li>
                  <li><a href="/booking" className="text-gray-300 hover:text-white">Car Rentals</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Email: avidetravel@gmail.com</li>
                  <li>Phone: +1 (630) 540-8366</li>
                  <li>Address: 123 Travel Street, Bolingbrook, IL 60440</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} AvideTravel. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
