import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen text-white">
      {/* Background GIF with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/111.gif"
          alt="Travel animation"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-70"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover the World with AvideTravel
          </h1>
          <p className="text-xl mb-8">
            Your journey begins with us. Find and book the perfect flights, hotels, tours, and car rentals for your next adventure.
          </p>
          <a
            href="/booking"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
