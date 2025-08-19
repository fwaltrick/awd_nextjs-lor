import { volumes } from '@/lib/data'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { volume: string } },
) {
  const volume = volumes.find((v) => v.slug === params.volume)
  if (!volume) {
    return NextResponse.json({ error: 'Volume not found' }, { status: 404 })
  }
  return NextResponse.json(volume)
}

export async function POST(request: Request) {
  const newVolume = await request.json()
  volumes.push(newVolume)
  return NextResponse.json(newVolume, { status: 201 })
}

export async function PUT(
  request: Request,
  { params }: { params: { volume: string } },
) {
  const index = volumes.findIndex((v) => v.slug === params.volume)
  if (index === -1) {
    return NextResponse.json({ error: 'Volume not found' }, { status: 404 })
  }
  const updatedVolume = await request.json()
  volumes[index] = { ...volumes[index], ...updatedVolume }
  return NextResponse.json(volumes[index])
}

export async function DELETE(
  request: Request,
  { params }: { params: { volume: string } },
) {
  const index = volumes.findIndex((v) => v.slug === params.volume)
  if (index === -1) {
    return NextResponse.json({ error: 'Volume not found' }, { status: 404 })
  }
  volumes.splice(index, 1)
  return NextResponse.json({ message: 'Volume deleted' })
}
