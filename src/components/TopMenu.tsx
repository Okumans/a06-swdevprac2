import Image from "next/image";
import Link from "next/link";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="fixed top-0 right-0 flex gap-5 flex-row-reverse h-16 p-2 w-full bg-stone-900 z-30">
      <div className="relative w-12 h-12 overflow-hidden">
        <Link href="/" className="block relative w-full h-full">
          <Image
            src="/image/logo.png"
            alt="Logo"
            fill
            className="rounded-lg object-contain"
          />
        </Link>
      </div>

      <TopMenuItem title="booking" href="/booking" />
    </div>
  );
}
