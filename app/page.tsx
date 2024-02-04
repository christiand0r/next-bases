import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <span className="font-bold text-5xl">Hola mundo</span>

      <Link href={'/about'} className="mt-4">About</Link>
    </>
  );
}
