import Hero from "components/home/hero";
import MainLayout from "layouts/main";
import Benefit from "components/home/benefit";
import Steps from "components/home/steps";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Benefit />
      <Steps />
    </MainLayout>
  );
}
