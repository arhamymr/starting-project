import Layout from "layouts/blog";

import { Card, Container } from "components/card";
const Blogs = ({ posts }) => {
  return (
    <Layout
      breadcrumb={[
        {
          link: "/blog",
          name: "Blog",
        },
      ]}
    >
      <Container>
        {posts.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Container>
    </Layout>
  );
};

export const getPosts = async () => {
  return "getpost";
};

export const getStaticProps = async ({ params }) => {
  let posts = [];

  return {
    props: {
      posts: [],
    },
  };
};

export default Blogs;
