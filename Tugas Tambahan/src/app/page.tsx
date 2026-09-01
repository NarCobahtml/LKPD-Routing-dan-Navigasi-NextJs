//src/app/page.tsx
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <>
      <h1>Selamat datang di Portal Sekolah</h1>
      <Link href="/teachers">Guru</Link>
      <br />
      <Link href="/library">Perpustakaan</Link>
      <br />
    </>
  );
}
