/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hjABwq6x5Um
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="space-y-8 text-blue-500 dark:text-blue-400">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Guest Book</h2>
        <p>Leave a message to let us know you were here.</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-blue-500 dark:text-blue-400" htmlFor="guest-name">
              Name
            </Label>
            <Input
              className="border-blue-500 dark:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
              id="guest-name"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-blue-500 dark:text-blue-400" htmlFor="guest-email">
              Email
            </Label>
            <Input
              className="border-blue-500 dark:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
              id="guest-email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-blue-500 dark:text-blue-400" htmlFor="guest-message">
            Message
          </Label>
          <Textarea
            className="min-h-[100px] border-blue-500 dark:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
            id="guest-message"
            placeholder="Enter your message"
          />
        </div>
        <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white" type="submit">
          Add Entry
        </Button>
      </form>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Previous Entries</h3>
        <ul className="divide-y divide-blue-200 dark:divide-blue-700">
          <li className="py-4">
            <div className="space-y-2">
              <h4 className="font-bold text-blue-500 dark:text-blue-400">John Doe</h4>
              <p>johndoe@example.com</p>
              <p>Great place! I had a wonderful time.</p>
              <p className="text-blue-400 dark:text-blue-500 text-sm">Nov 17, 2023</p>
            </div>
          </li>
          <li className="py-4">
            <div className="space-y-2">
              <h4 className="font-bold text-blue-500 dark:text-blue-400">Jane Smith</h4>
              <p>janesmith@example.com</p>
              <p>I loved the atmosphere! Will definitely visit again.</p>
              <p className="text-blue-400 dark:text-blue-500 text-sm">Nov 16, 2023</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

