import Link from "next/link";
export default function Header() {

  return (
    <div className="flex justify-between bg-green-600 px-8 text-[24px] h-10">
      <ul className="flex gap-6 items-center">
        <Link href="/">
        <li>Home</li>
        </Link>
        <Link href="/csr">
        <li>CSR</li>
        </Link>
        <Link href="/ssr">
        <li>SSR</li>
        </Link>
        <Link href="/ssg">
        <li>SSG</li>
        </Link>
        <Link href="/isr">
        <li>ISR</li>
        </Link>
      </ul>
    </div>
  )
    
};

