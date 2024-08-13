import Header from "@/components/Header";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Portefolio from "@/components/Portefolio";
import Testimonials from "@/components/Testimonials";
import Started from "@/components/Started";
import OtherPart from "@/components/OtherPart";
import Footer from "@/components/Footer";

export default function Home() {
  return <section>
    <Header />
    <Services />
    <Team />
    <Portefolio />
    <Testimonials />
    <Started />
    <OtherPart />
    <Footer />
  </section>
}
