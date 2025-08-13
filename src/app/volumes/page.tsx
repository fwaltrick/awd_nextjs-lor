import Link from 'next/link'
import { volumes } from '../../lib/data'

export default function VolumesPage() {
  return (
    <main className="flex flex-col gap-4 p-8 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">All Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link
              href={`/volumes/${volume.slug}`}
              className="text-blue-400 font-bold text-lg"
            >
              {volume.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
