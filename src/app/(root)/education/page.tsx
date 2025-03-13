import { unstable_ViewTransition as ViewTransition } from "react"

export default function page() {
  return (
    <div className="w-full">
      <ViewTransition name="experimental-label">
        <b className="text-gray-800 inline-block text-right w-full">
          ViewTransition
        </b>
      </ViewTransition>
    </div>
  )
}
