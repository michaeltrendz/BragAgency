import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4 relative">

      {/* Centered Logo */}
      <div className="mt-10 mb-6">
        <Link href="/">
          <img
            src="/brag2.png"
            alt="Brag.Agency Logo"
            className="h-12 w-auto mx-auto cursor-pointer"
          />
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-blue-700 mb-4">🎉 Thank You!</h1>
      <p className="text-lg text-gray-700">
        We've received your email. You'll be the first to know when we launch!
      </p>

      {/* Instagram Icon */}
      <div className="absolute bottom-6 text-gray-600 text-4xl">
        <a
          href="https://instagram.com/brag.agency"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
