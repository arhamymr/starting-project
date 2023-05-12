import { Heading, Box } from "@chakra-ui/react";
import Layout from "layouts/blog";
import { useRouter } from "next/router";

const BlogPage = (props) => {
  const router = useRouter();

  const data = {
    post: {
      title: "title",
      body: "body",
    },
  };
  return (
    <Layout
      size={"container.md"}
      breadcrumb={[
        {
          link: "/blog",
          name: "Blog",
        },
        {
          link: `/blog/${router.query.filename}`,
          name: data.post.title,
        },
      ]}
    >
      <Heading as={"h1"} mb={8}>
        {data.post.title}
      </Heading>
      <Box>Body here</Box>
    </Layout>
  );
};

export default BlogPage;
