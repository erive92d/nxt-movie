import Hero from "@/components/main/Hero";
import TopRated from "@/components/main/TopRated";

export default async function Home() {

  return (
    <div className="px-16">
      <Hero />
      <TopRated />
    </div>
  );
}
