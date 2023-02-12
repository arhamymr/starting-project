import Hero from "components/hero";
import { Grid, Heading } from "@chakra-ui/react";
import MainLayout from "layouts/main";
import client from '.tina/__generated__/client'
import { Project, Container, Card } from 'components/card';
import { getPosts } from "./blog";

export default function Home({ projects, posts}) {
  return (
    <MainLayout>
      <Hero />
      <Container title="Blog Posts">
        {posts?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Container title="Projects">
        {projects.map((item, index) => (
          <Project key={index} item={item} />
        ))}
      </Container>
    </MainLayout>
  )
}

export const getProjects = async () => {
  const projectResponse = await client.queries.projectsConnection()
  return projectResponse.data.projectsConnection.edges.map((x) => {
    return { 
      title:x.node.title,
      id: x.node.id,
      slug: x.node._sys.filename,
      link: x.node.link,
      tag: x.node.tag,
      description: x.node.description,
    }
  })
}

export const getStaticProps = async ({ params }) => {
  let projects = []
  let posts = []

  try {
    projects = await getProjects()
    posts = await getPosts()
  } catch (e){
    console.log("Failed to load article, error: " + e)
  }

  return {
    props: {
      projects,
      posts,
    },
  }
}
