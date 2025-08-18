import Link from 'next/link'
import { introduction, volumes } from '../lib/data'

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4 p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Lord of the Rings</h1>
      <p>{introduction}</p>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold mt-8">All Volumes</h2>
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
      </div>
    </main>
  )
}
