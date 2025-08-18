import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold">Not Found</h2>
      <p>
        Nasty hobbitses! We can&apos;t find this precious volume you seek, no,
        not anywhere... Try another, yesss, or go back to the Shire!
      </p>
      <Link
        href="/volumes"
        className="text-blue-300 hover:text-blue-400 font-bold"
      >
        &larr; Return Volumes
      </Link>
    </div>
  )
}
