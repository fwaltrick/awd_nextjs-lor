import { volumes } from '@/lib/data'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(volumes)
}

export async function POST(request: Request) {
  const newVolume = await request.json()
  volumes.push(newVolume)
  return NextResponse.json(newVolume, { status: 201 })
}
