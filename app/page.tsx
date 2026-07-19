import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Products from "@/components/Products";
import Styler from "@/components/Styler";
import Studios from "@/components/Studios";
import Founder from "@/components/Founder";
import Gallery from "@/components/Gallery";
import Club from "@/components/Club";
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
        <Founder />
        <Gallery />
        <Club />
      </main>
      <Contacts />
    </>
  );
}
