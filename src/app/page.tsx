import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-screen">
      <Banner />
      <CardPanel />
    </main>
  );
}
