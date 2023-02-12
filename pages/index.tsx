import { Hero, SectionProject } from "views";
import MainLayout from "layouts/main";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <SectionProject />
    </MainLayout>
  )
}
