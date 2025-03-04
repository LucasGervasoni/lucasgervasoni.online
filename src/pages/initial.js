import { Hero } from "@/components/Hero/index";
import { NavBar } from "@/components/Navbar/index";
import { Footer } from "@/components/Footer/index";

export function Initial() {
  return (
    <>
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
}
