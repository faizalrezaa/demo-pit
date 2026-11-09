import Image from "next/image";

export default function GalleryPage() {
  return (
    <main>
      <h1>Image Gallery</h1>

      <Image
        src="/workshop.svg"
        alt="Next.js Workshop"
        width={400}
        height={200}
      />
    </main>
  );
}
