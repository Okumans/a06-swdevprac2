import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-screen">
      <Banner />

      <div className="flex flex-row gap-5 p-5">
        <Card venueName="The Bloom Pavilion" imgSrc="/image/bloom.jpg" />
        <Card venueName="Spark Space" imgSrc="/image/sparkspace.jpg" />
        <Card venueName="The Grand Table" imgSrc="/image/grandtable.jpg" />
      </div>
    </main>
  );
}
