import Image from 'next/image'
import Logo from '../public/logo.png'
import Link from 'next/link'


export default function LogoLink() {
  return (
    <>
      <Link href="/">
        <span className="sr-only">InvestDirect</span>
        <Image priority src={Logo} alt="" width={32} height={32} />
      </Link>
      <Link href="/">
        <span className="text-2xl font-thin p-1">InvestDirect</span>
      </Link>
    </>
  )
}