import Hero from 'components/home/hero';
import MainLayout from 'layouts/main';
import Steps from 'components/home/steps';

export default function Home() {
  return (
    <MainLayout>
      <Steps />

      {/* <Services /> */}
      {/* <Testimonial />
      <CTA />
      <FAQ /> */}
    </MainLayout>
  );
}
