import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="flex flex-col items-center py-6 space-y-3">
      {/* 로고 이미지 */}
      <Image
        src="/images/logo.png"
        alt="Reaper Six Logo"
        width={80}
        height={80}
        priority
      />

      {/* 텍스트 이름 */}
      <h1 className="text-green-500 text-2xl font-bold">REAPER SIX</h1>

      {/* 네비게이션 링크들 */}
      <nav className="flex space-x-6">
        <Link href="/" className="text-white hover:underline">Home</Link>
        <Link href="/apply" className="text-white hover:underline">Application</Link>
        <Link href="/members" className="text-white hover:underline">Members</Link>
      </nav>
    </header>
  )
}
