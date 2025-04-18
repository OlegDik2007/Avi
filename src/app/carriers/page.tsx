export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your Dream Career in Travel with Our Partner InteleTravel
          </h1>
          <p className="text-xl mb-6">
            Join AvideTravel and become an independent travel advisor backed by InteleTravel’s 30+ years of trusted industry leadership.
          </p>
          <a
            href="/join"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Join Now
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">What You Get When You Join:</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Earn Commission on hotels, flights, cruises & more</li>
              <li>Access Exclusive Deals – Up to 70% off travel</li>
              <li>Free Training from InteleTravel’s certified platform</li>
              <li>Licensed, bonded & insured partner agency</li>
              <li>Branded Website & Online Booking Engine</li>
              <li>8-Day/7-Night Vacation Certificate (Limited Time)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose AvideTravel + InteleTravel?</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Trusted by over 100,000 travel entrepreneurs</li>
              <li>Top suppliers like Disney, Sandals, and Royal Caribbean</li>
              <li>Earn while you learn with low startup cost</li>
              <li>100% satisfaction guarantee</li>
              <li>Flexible and scalable business model</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Limited-Time Bonus</h2>
          <p className="mb-6 text-lg text-gray-700">
            Use code <strong>AVIDE25</strong> to get $25 off your setup fee and receive a free vacation certificate when you enroll today!
          </p>
          <a
            href="/join"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Claim Your Offer
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-6">
            Fill out the quick form and our team will contact you with the next steps!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
