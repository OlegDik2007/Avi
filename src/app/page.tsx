import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover the World with AvideTravel
            </h1>
            <p className="text-xl mb-8">
              Your journey begins with us. Find and book the perfect flights, hotels, tours, and car rentals for your next adventure.
            </p>
            <a
              href="/booking"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
            >
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
            {[
              {
                title: 'Flight Booking',
                desc: 'Find the best deals on flights to destinations worldwide.',
                iconPath: 'M5 13l4 4L19 7'
              },
              {
                title: 'Hotel Reservations',
                desc: 'Book accommodations from luxury to budget-friendly.',
                iconPath: 'M9 7h1m-1 4h1m4-4h1m-1 4h1'
              },
              {
                title: 'Tour Packages',
                desc: 'Explore curated tours with guides and activities.',
                iconPath: 'M3.055 11H5a2 2 0 012 2v1...'
              },
              {
                title: 'Car Rentals',
                desc: 'Rent cars for your journey from economy to luxury.',
                iconPath: 'M8 7h12m0 0l-4-4m4 4l-4 4'
              }
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.iconPath} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Caribbean Islands',
                image: '/caribian.jpg',
                desc: 'White sands, turquoise waters, and sunshine await.'
              },
              {
                title: 'Hawaii Islands',
                image: '/hawai.jpg',
                desc: 'Volcanoes, beaches, and island culture.'
              },
              {
                title: 'Cruise',
                image: '/cruise.jpg',
                desc: 'Sail the seas with all-inclusive luxury cruises.'
              }
            ].map((d, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 w-full">
                  <Image src={d.image} alt={d.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{d.title}</h3>
                  <p className="text-gray-600 mb-4">{d.desc}</p>
                  <a href="/booking" className="text-blue-600 font-medium hover:underline">Explore packages →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Destination Guides */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">AI-Powered Destination Guides</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Get personalized travel recommendations and insights powered by AI.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Discover Your Perfect Destination</h3>
            <div className="mb-6">
              <input
                type="text"
                placeholder="What kind of trip are you looking for?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Trip type input"
              />
            </div>
            <button
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
              disabled
            >
              Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Get updates on deals, guides, and exclusive offers.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Email input"
              />
              <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
