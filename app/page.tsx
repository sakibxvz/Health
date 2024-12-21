
import Divider from "@/components/common/Divider";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Contact from "@/components/section/contact/Contact";
import Doctors from "@/components/section/Doctors/Doctors";
import Hero from "@/components/section/Hero/Hero";
import Services from "@/components/section/servcies/Services";
import WhyChooseUs from "@/components/section/WhyChooseUs/WhyChooseUs";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Divider
        text="You Get Our 20+ More services..."
        linkText="EXPLORE ALL SERVICES"
        href="#"
      />
      <WhyChooseUs />
      <Doctors />
      <Divider
        text="You Get Our 100+ More Doctors..."
        linkText="EXPLORE ALL DOCTORS"
        href="#"
      />
      <Contact />
      <Footer />
    </main>
  )
}
