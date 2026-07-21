import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Founder from "@/components/Founder";
import Education from "@/components/Education";
import Philosophy from "@/components/Philosophy";
import Products from "@/components/Products";
import Styler from "@/components/Styler";
import Studios from "@/components/Studios";
import Gallery from "@/components/Gallery";
import Standards from "@/components/Standards";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Founder />
        <Education />
        <Philosophy />
        <Products />
        <Styler />
        <Studios />
        <Gallery />
        <Standards />
      </main>
      <Contacts />
    </>
  );
}
