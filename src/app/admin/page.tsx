'use client'
import { useEffect, useState } from 'react'

type Volume = {
  slug: string
  title: string
}

export default function AdminPage() {
  const [volumes, setVolumes] = useState<Volume[]>([])
  const [newTitle, setNewTitle] = useState('')
  const [editSlug, setEditSlug] = useState('')
  const [editTitle, setEditTitle] = useState('')

  // GET all volumes
  useEffect(() => {
    fetch('/api/volumes')
      .then((res) => res.json())
      .then(setVolumes)
  }, [])

  // CREATE
  async function addVolume() {
    const res = await fetch('/api/volumes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug: newTitle.toLowerCase().replace(/ /g, '-'),
        title: newTitle,
        description: 'New volume description',
        books: [],
        cover: '/images/tolkien.jpeg', // default image
      }),
    })

    if (!res.ok) {
      console.error('Error response:', res.status, res.statusText)
      return
    }

    const created = await res.json()
    setVolumes((vols) => [...vols, created])
    setNewTitle('')
  }

  // UPDATE
  async function updateVolume() {
    const res = await fetch(`/api/volumes/${editSlug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: editTitle }),
    })
    const updated = await res.json()
    setVolumes((vols) => vols.map((v) => (v.slug === editSlug ? updated : v)))
    setEditSlug('')
    setEditTitle('')
  }

  // DELETE
  async function deleteVolume(slug: string) {
    await fetch(`/api/volumes/${slug}`, { method: 'DELETE' })
    setVolumes((vols) => vols.filter((v) => v.slug !== slug))
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <ul className="mb-6">
        {volumes.map((v) => (
          <li key={v.slug} className="flex items-center gap-2 mb-2">
            <span>{v.title}</span>
            <button
              className="text-blue-500 underline"
              onClick={() => {
                setEditSlug(v.slug)
                setEditTitle(v.title)
              }}
            >
              Edit
            </button>
            <button
              className="text-red-500 underline"
              onClick={() => deleteVolume(v.slug)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* Add new volume */}
      <div className="mb-4">
        <input
          className="border px-2 py-1 mr-2"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New volume title"
        />
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={addVolume}
        >
          Add
        </button>
      </div>
      {/* Edit volume */}
      {editSlug && (
        <div className="mb-4">
          <input
            className="border px-2 py-1 mr-2"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Edit volume title"
          />
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={updateVolume}
          >
            Save
          </button>
          <button
            className="ml-2 text-gray-500 underline"
            onClick={() => {
              setEditSlug('')
              setEditTitle('')
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}
