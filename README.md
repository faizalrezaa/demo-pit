# Workshop PIT HMDTIF (Next.js & TypeScript)

Repository ini berisi kumpulan file latihan workshop Next.js. Setiap folder merepresentasikan satu materi dan berisi file yang perlu ditambahkan atau diperbarui pada project utama.

## 1. Struktur Akhir Project

Setelah seluruh materi selesai dikerjakan, struktur project Next.js akan menjadi seperti berikut:

```
next-js-demo/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── members/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── gallery/
│   │   └── page.tsx
│   │
│   ├── counter/
│   │   └── page.tsx
│   │
│   └── posts/
│       └── page.tsx
│
└── ...
```

**Halaman yang akan dibuat:**

| URL | Fungsi |
|---|---|
| `/` | Halaman utama dan navigasi |
| `/about` | Halaman About |
| `/members` | Katalog member |
| `/members/[id]` | Detail member berdasarkan ID |
| `/gallery` | Menampilkan gambar menggunakan `next/image` |
| `/counter` | Demonstrasi Client Component dan state |
| `/posts` | Mengambil data dari Public API |


## 2. Struktur Repository Materi

File latihan disusun berdasarkan urutan materi:

```text
materials/
├── 01-layout/
├── 02-page/
├── 03-static-routing/
├── 04-dynamic-routing/
├── 05-navigation/
├── 06-image/
├── 07-client-component/
├── 08-data-fetching/
└── 09-not-found/
```

Setiap folder hanya berisi file yang perlu ditambahkan atau diperbarui pada tahap tersebut.


## 3. Menjalankan Project

```
npm install
npm run dev
```

Buka `http://localhost:3000` pada browser.
