import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Card } from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (     
    <div class="h-56 grid grid-cols-3 gap-4 content-center">
      <Card />
    </div>
  )
}
