'use client'
import Link from 'next/link'
import { volumes } from '../../lib/data'
import VolumeButton from './VolumeButton'

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
      <div className="flex justify-start">
        <VolumeButton
          volumes={volumes}
          className="inline-block bg-blue-400 hover:bg-blue-600 text-white font-bold mt-8 py-2 px-4 rounded"
        />
      </div>
    </main>
  )
}
