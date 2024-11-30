import Hero from 'components/home/hero';
import MainLayout from 'layouts/main';
import Steps from 'components/home/steps';
import ArticleList from './articles/article-list';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Steps />
      {/* <Benefit /> */}
      <ArticleList />

      {/* <Services /> */}
      {/* <Testimonial />
      <CTA />
      <FAQ /> */}
    </MainLayout>
  );
}
