import Hero from "@/components/main/Hero";
import TopRated from "@/components/main/TopRated";

export default async function Home() {

  return (
    <div className="lg:w-5/6 mx-auto py-8">
      <Hero />
      <TopRated />
    </div>
  );
}
