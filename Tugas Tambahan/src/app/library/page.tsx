//src/app/library/page.tsx
import Link from "next/dist/client/link";
export default function Profile() {
  return (
    <>
      <h1>Data Perpustakaan</h1>
      <ol>
        <li>Fiksi - Bumi</li>
        <li>Fiksi - Negeri Para Bedebah</li>
        <li>Fiksi - Laskar Pelangi</li>
        <li>Non-Fiksi - A Brief History of Time</li>
        <li>Non-Fiksi - Sapiens</li>
      </ol>

      <Link href="/">Kembali ke Beranda</Link>
    </>
  );
}
