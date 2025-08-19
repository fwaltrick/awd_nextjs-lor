/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    volume: string
  }
}

export default async function VolumeDetailPage({ params }: Props) {
  const { volume } = await params

  // Fetch all volumes from API
  const volumesRes = await fetch('/api/volumes', {
    cache: 'no-store',
  })
  const volumes = await volumesRes.json()

  // Find current volume
  const index = volumes.findIndex(({ slug }: any) => slug === volume)
  const volumeData = volumes[index]

  //   // To simulate a delay of 2 seconds and show the loading spinner
  //   await new Promise((resolve) => setTimeout(resolve, 2000))

  const prev = index > 0 ? volumes[index - 1] : null
  const next = index < volumes.length - 1 ? volumes[index + 1] : null
  if (!volumeData) return notFound()

  return (
    <main className="max-w-xl mx-auto p-8 flex flex-col gap-6">
      <Link href="/volumes" className="text-blue-400  mb-4">
        &larr; All Volumes
      </Link>
      <div className="flex mb-6">
        <Image
          src={volumeData.cover}
          alt={`Cover of ${volumeData.title}`}
          width={140}
          height={227}
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">{volumeData.title}</h1>
      <p className="mb-4">{volumeData.description}</p>
      <ul className="list-disc pl-5 mb-6">
        {volumeData.books && volumeData.books.length > 0 ? (
          volumeData.books.map((book: any) => (
            <li key={book.ordinal}>
              <span className="font-semibold mr-2">{book.ordinal}:</span>
              {book.title}
            </li>
          ))
        ) : (
          <li>No books available</li>
        )}
      </ul>

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
