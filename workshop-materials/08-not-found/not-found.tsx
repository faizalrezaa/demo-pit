import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <p>Halaman yang kamu cari tidak ditemukan.</p>

      <Link href="/">Kembali ke Home</Link>
    </main>
  );
}
