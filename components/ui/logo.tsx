import Link from 'next/link'
import Image from 'next/image'
import LogoPng from '@/public/images/logo.png'

export default function Logo() {
  return (
    <Link href="/home" className="block text-blue-600 transition duration-150 ease-in-out" aria-label="Cruip">
        <Image  src={LogoPng} width={35} height={32} alt="Avatar 03" />
    </Link>
  )
}
