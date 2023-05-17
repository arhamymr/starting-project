import Hero from "components/home/hero";
import MainLayout from "layouts/main";
import Benefit from "components/home/benefit";
import Steps from "components/home/steps";
import Services from "components/home/services";
import Testimonial from "components/home/testimonial";
import CTA from "components/home/cta";
import FAQ from "components/home/faq";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Benefit />
      <Steps />
      <Services />
      <Testimonial />
      <CTA />
      <FAQ />
    </MainLayout>
  );
}
