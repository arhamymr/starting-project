import Hero from "components/hero";
import MainLayout from "layouts/main";
import { Project, Container, Card } from "components/card";

export default function Home({ projects, posts }) {
  return (
    <MainLayout>
      <Hero />
      <Container title="Blog Posts">
        {posts?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Container title="Featured Projects">
        {projects.map((item, index) => (
          <Project key={index} item={item} />
        ))}
      </Container>
    </MainLayout>
  );
}

export const getProjects = async () => {
  return "get projects";
};

export const getStaticProps = async () => {
  return {
    props: {
      projects: [],
      posts: [],
    },
  };
};
