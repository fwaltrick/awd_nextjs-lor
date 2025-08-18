import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold">Not Found</h2>
      <p>You shall not pass! This page cannot be found.</p>
      <Link href="/" className="text-blue-300 hover:text-blue-400 font-bold">
        &larr; Return Home
      </Link>
    </div>
  )
}
