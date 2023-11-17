/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0dECPoL80oU
 */
export default function Component() {
  return (
    <div className="bg-blue-200 rounded-lg p-6 w-64 text-center shadow-lg">
      <h1 className="text-2xl font-bold mb-2">Current Weather</h1>
      <div className="flex items-center justify-center mb-4">
        <svg
          className=" h-10 w-10 text-blue-800"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
        <div className="ml-2">
          <span className="text-4xl font-bold">72°</span>
          <p className="text-blue-600">Cloudy</p>
        </div>
      </div>
      <p className="text-blue-600">Your location</p>
    </div>
  )
}
