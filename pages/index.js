import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center text-center relative overflow-hidden px-4">

      {/* Logo - Removed extra padding and tightened spacing */}
      <div className="mt-4 mb-2">
        <img
          src="/brag.png"
          alt="Brag Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* Reduced top margin here */}
      <div className="text-3xl mt-4 mb-4">👨‍🍳👍</div>

      <h1 className="text-3xl md:text-4xl font-bold text-[#14ff00] mb-2">Cooking Our Website.</h1>
      <p className="text-gray-300 mb-6">
        We're launching soon. <br /> Book a quick call with us.
      </p>

      <form
        action="https://submit-form.com/kZdPjDyDi"
        method="POST"
        className="flex flex-col items-center gap-3 w-full max-w-sm"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="px-4 py-2 rounded-full border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none w-full"
        />

        <input
          type="tel"
          name="phone"
          required
          placeholder="Your Phone Number"
          className="px-4 py-2 rounded-full border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none w-full"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="What would you like to discuss?"
          className="px-4 py-2 rounded-xl border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none w-full resize-none"
        ></textarea>

        <input
          type="hidden"
          name="_redirect"
          value="https://bragagency.netlify.app/thank-you"
        />

        <button
          type="submit"
          className="bg-[#14ff00] text-black px-6 py-2 rounded-full hover:bg-white hover:text-black transition w-full font-semibold"
        >
          Send Message
        </button>
      </form>

      <div className="absolute bottom-6 flex gap-6 text-gray-400 text-3xl">
        <a
          href="https://instagram.com/brag.agency"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#14ff00] transition"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="absolute top-10 left-10 text-3xl animate-bounce">🍝</div>
      <div className="absolute top-20 right-10 text-2xl animate-pulse">🍜</div>
      <div className="absolute bottom-20 left-14 text-3xl animate-bounce">🥐</div>
      <div className="absolute bottom-10 right-12 text-2xl animate-spin-slow">🍥</div>
    </div>
  );
}
