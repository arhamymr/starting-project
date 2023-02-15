import { Heading } from "@chakra-ui/react";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Layout from "layouts/blog";
import client from "../../.tina/__generated__/client";
import { useRouter } from "next/router";

const BlogPage = (props) => {
  const router = useRouter();
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

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
      <TinaMarkdown content={data.post.body} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.filename}.md` };
  try {
    const res = await client.queries.post(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch (e) {
    console.log("something wrong, error :" + e);
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
    },
  };
};

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();
  return {
    paths: postsListData.data.postConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename },
    })),
    fallback: false,
  };
};

export default BlogPage;
