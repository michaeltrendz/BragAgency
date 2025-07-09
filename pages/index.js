export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#eef1ff] to-[#e3ecf8] flex flex-col items-center justify-center text-center relative overflow-hidden">

      <div className="absolute top-4 bg-white rounded-full px-6 py-2 shadow-md">
        <span className="text-blue-700 font-semibold text-lg">Brag.Agency</span>
      </div>

      <div className="text-3xl mt-16 mb-4">👨‍🍳👍</div>

      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Cooking Our Website.</h1>
      <p className="text-gray-500 mb-6">
        We are going to launch our website very soon. <br />
        Stay tuned.
      </p>
      
<form
  action="https://submit-form.com/kZdPjDyDi"
  method="POST"
  className="flex flex-col items-center gap-2 w-full max-w-sm"
>
  <input
    type="email"
    name="email"
    required
    placeholder="Enter your email"
    className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none w-full"
  />

  <input
    type="hidden"
    name="_redirect"
    value="https://bragagency.netlify.app/thank-you"
  />

  <button
    type="submit"
    className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition w-full"
  >
    Notify Me
  </button>
</form>


      <div className="absolute bottom-6 flex gap-6 text-gray-500">
  <a
    href="http://instagram.com/brag.agency"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-700 transition text-2xl"
  >
    📸
  </a>
</div>


      <div className="absolute top-10 left-10 text-3xl animate-bounce">🍝</div>
      <div className="absolute top-20 right-10 text-2xl animate-pulse">🍜</div>
      <div className="absolute bottom-20 left-14 text-3xl animate-bounce">🥐</div>
      <div className="absolute bottom-10 right-12 text-2xl animate-spin-slow">🍥</div>
    </div>
  )
}
