import { volumes } from '../../../lib/data'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  params: {
    volume: string
  }
}

export default function VolumeDetailPage({ params }: Props) {
  const index = volumes.findIndex(({ slug }) => slug === params.volume)
  const volume = volumes[index]
  const prev = index > 0 ? volumes[index - 1] : null
  const next = index < volumes.length - 1 ? volumes[index + 1] : null
  if (!volume) return null
  return (
    <main className="max-w-xl mx-auto p-8 flex flex-col gap-6">
      <Link href="/volumes" className="text-blue-400  mb-4">
        &larr; All Volumes
      </Link>
      <h1 className="text-3xl font-bold mb-2">{volume.title}</h1>
      <p className="mb-4">{volume.description}</p>
      <ul className="list-disc pl-5 mb-6">
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            <span className="font-semibold mr-2">{book.ordinal}:</span>
            {book.title}
          </li>
        ))}
      </ul>
      <div className="flex mb-6">
        <Image
          src={volume.cover}
          alt={`Cover of ${volume.title}`}
          width={140}
          height={230}
        />
      </div>
      <div className="flex justify-between mt-4">
        {prev ? (
          <Link
            href={`/volumes/${prev.slug}`}
            className="text-blue-400 font-bold"
          >
            &larr; {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/volumes/${next.slug}`}
            className="text-blue-400 font-bold"
          >
            {next.title} &rarr;
          </Link>
        ) : (
          <span />
        )}
      </div>
    </main>
  )
}
