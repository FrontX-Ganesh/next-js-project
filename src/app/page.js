import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Home page</div><br />
      <Link href='/about'>Got to About page</Link>
    </>
  )
}
