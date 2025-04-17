import Image from 'next/image'
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover the World with AvideTravel</h1>
            <p className="text-xl mb-8">Your journey begins with us. Find and book the perfect flights, hotels, tours, and car rentals for your next adventure.</p>
            <a href="/booking" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Flight Booking</h3>
              <p className="text-gray-600 text-center">Find the best deals on flights to destinations worldwide with our comprehensive search.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Hotel Reservations</h3>
              <p className="text-gray-600 text-center">Book accommodations ranging from luxury hotels to budget-friendly options worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Tour Packages</h3>
              <p className="text-gray-600 text-center">Explore curated tour packages with expert guides, activities, and unforgettable experiences.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Car Rentals</h3>
              <p className="text-gray-600 text-center">Rent vehicles of all types for your journey, from economy cars to luxury models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          
              <div className="h-48 bg-gray-300"></div>
              <Image
               src="/images/caribian.jpg"
               alt="Caribbean"
               layout="fill"
               objectFit="cover"
                />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Caribbean Islands</h3>
                <p className="text-gray-600 mb-4">Experience the romance, culture, and cuisine of the City of Light.</p>
                <a href="/booking" className="text-blue-600 font-medium hover:underline">Explore packages →</a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tokyo, Japan</h3>
                <p className="text-gray-600 mb-4">Discover the perfect blend of tradition and innovation in this vibrant metropolis.</p>
                <a href="/booking" className="text-blue-600 font-medium hover:underline">Explore packages →</a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">New York, USA</h3>
                <p className="text-gray-600 mb-4">Experience the energy and excitement of the city that never sleeps.</p>
                <a href="/booking" className="text-blue-600 font-medium hover:underline">Explore packages →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Destination Guides Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">AI-Powered Destination Guides</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Get personalized travel recommendations and insights powered by artificial intelligence.</p>
          
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Discover Your Perfect Destination</h3>
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="What kind of trip are you looking for? (e.g., beach vacation, cultural experience)" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full">
              Get Recommendations
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Stay updated with the latest travel deals, destination guides, and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
