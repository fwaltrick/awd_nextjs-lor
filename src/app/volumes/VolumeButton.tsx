'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Volume {
  slug: string
}

export default function VolumeButton({
  volumes,
  className,
}: {
  volumes: Volume[]
  className?: string
}) {
  const [randomVolume, setRandomVolume] = useState(volumes[0])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * volumes.length)
    setRandomVolume(volumes[randomIndex])
  }, [volumes])

  return (
    <Link href={`/volumes/${randomVolume.slug}`} className={className}>
      Random Volume
    </Link>
  )
}
