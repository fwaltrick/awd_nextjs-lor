import Link from 'next/link'
import { volumes } from '../../lib/data'

export default function VolumesPage() {
  const randomIndex = Math.floor(Math.random() * volumes.length)
  return (
    <main className="flex flex-col gap-4 p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">All Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link
              href={`/volumes/${volume.slug}`}
              className="text-blue-300 hover:text-blue-400 font-semibold text-lg"
            >
              {volume.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-start">
        <Link
          href={`/volumes/${volumes[randomIndex].slug}`}
          className="inline-block bg-blue-400 hover:bg-blue-600 text-white font-semibold mt-8 py-2 px-4 rounded"
        >
          Random Volume
        </Link>
      </div>
    </main>
  )
}
