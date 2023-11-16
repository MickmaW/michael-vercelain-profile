/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FoMi6q8s96o
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex items-center justify-between bg-blue-100 dark:bg-blue-900 p-4 rounded-md">
      <div className="flex items-center gap-4">
        <svg
          className=" w-12 h-12 text-gray-500 dark:text-gray-400"
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
          <path d="M12 2v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="M20 12h2" />
          <path d="m19.07 4.93-1.41 1.41" />
          <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
          <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
        </svg>
        <div>
          <p className="text-2xl font-semibold">23°C</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Partly Cloudy</p>
        </div>
      </div>
      <Button className="text-sm" variant="outline">
        Details
      </Button>
    </div>
  )
}

