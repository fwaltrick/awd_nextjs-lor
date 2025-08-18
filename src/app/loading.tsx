import { RingLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <RingLoader color="#51A2FF" size={120} />
    </div>
  )
}
