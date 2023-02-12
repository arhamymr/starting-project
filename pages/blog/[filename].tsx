
import { Heading } from '@chakra-ui/react';
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Layout from 'layouts/blog'
import client from '../../.tina/__generated__/client'

const BlogPage = (props) => {

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  console.log(data, 'data')
  
  return (
      <Layout>
        <Heading>
          {data.post.title}
        </Heading>
        <ContentSection content={data.post.body}></ContentSection>
      </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  let data = {}
  let query = {}
  let variables = { relativePath: `${params.filename}.md` }
  try {
    const res = await client.queries.post(variables)
    query = res.query
    data = res.data
    variables = res.variables
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
    },
  }
}

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection()
  return {
    paths: postsListData.data.postConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename },
    })),
    fallback: false,
  }
}

export default BlogPage

const PageSection = (props) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </>
  )
}

const components = {
  PageSection: PageSection,
}

const ContentSection = ({ content }) => {
  return <TinaMarkdown components={components} content={content} />
}