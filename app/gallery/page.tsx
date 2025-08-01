import Image from 'next/image';

export default function GalleryPage() {
  return (
    <main className="bg-green-50 min-h-screen p-8 text-green-900">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <Image src="/gallery1.jpg" alt="Gallery 1" width={400} height={300} className="rounded-xl" />
        <Image src="/gallery2.jpg" alt="Gallery 2" width={400} height={300} className="rounded-xl" />
        <Image src="/gallery3.jpg" alt="Gallery 3" width={400} height={300} className="rounded-xl" />
        <Image src="/gallery4.jpg" alt="Gallery 4" width={400} height={300} className="rounded-xl" />
        <Image src="/gallery5.jpg" alt="Gallery 5" width={400} height={300} className="rounded-xl" />
        <Image src="/gallery6.jpg" alt="Gallery 6" width={400} height={300} className="rounded-xl" />
        <Image src="/gallery7.jpg" alt="Gallery 7" width={400} height={300} className="rounded-xl" />
        <Image src="/gallery8.jpg" alt="Gallery 8" width={400} height={300} className="rounded-xl" />
      </div>
    </main>
  );
}
