import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-screen h-1/2 overflow-hidden p-1">
      <Image
        src="/image/banner.jpg"
        alt="cover"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10" />
      <div className="relative z-20 text-white text-center top-1/3 shadow-lg">
        <h1 className="text-4xl font-bold">
          where every event finds its venue
        </h1>
        <h4 className="text-lg px-4 mt-2">
          Finding the perfect venue has never been easier. Whether it's a
          wedding, corporate event, or private party, we connect people to the
          perfect place.
        </h4>
      </div>
    </div>
  );
}
