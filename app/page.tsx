import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Products from "@/components/Products";
import Styler from "@/components/Styler";
import Studios from "@/components/Studios";
import Education from "@/components/Education";
import Founder from "@/components/Founder";
import Gallery from "@/components/Gallery";
import Standards from "@/components/Standards";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Products />
        <Styler />
        <Studios />
        <Education />
        <Founder />
        <Gallery />
        <Standards />
      </main>
      <Contacts />
    </>
  );
}
