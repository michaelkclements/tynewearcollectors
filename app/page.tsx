import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Topics } from "@/components/Topics";
import { Areas } from "@/components/Areas";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Topics />
        <Areas />
        <Community />
      </main>
      <Footer />
    </>
  );
}
