import Hero from "components/home/hero";
import MainLayout from "layouts/main";
import Benefit from "components/home/benefit";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Benefit />
    </MainLayout>
  );
}
