import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="max-w-xl mx-auto p-8 flex flex-col gap-6">
      <h1 className="text-3xl font-semibold mb-2">About J.R.R. Tolkien</h1>
      <Image
        src="/images/tolkien.jpeg"
        alt="Tolkien"
        className="object-cover rounded"
        width={180}
        height={100}
      />
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex-1">
          <p>
            J.R.R. Tolkien was an English writer, poet, philologist, and
            academic. He is best known for his classic high-fantasy works The
            Hobbit, The Lord of the Rings, and The Silmarillion. Tolkien&apos;s
            stories have inspired generations and shaped the modern fantasy
            genre.
          </p>
        </div>
      </div>
    </main>
  )
}
