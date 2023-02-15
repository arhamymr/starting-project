
import Layout from 'layouts/blog'
import client from '.tina/__generated__/client'

import { Card, Container } from "components/card"
const Blogs = ({posts}) => {
  
  return (
      <Layout breadcrumb={[{
        link: "/blog",
        name: "Blog"
      }]}>
        <Container>
        {posts.map(item => <Card key={item.id} item={item}/>)}
        </Container>
      </Layout>
  )
}

export const getPosts = async () => {
  const postsResponse = await client.queries.postConnection()
  return postsResponse.data.postConnection.edges.map((x) => {
    return { 
      title:x.node.title,
      id: x.node.id,
      slug: x.node._sys.filename,
      overview: x.node.overview,
      draft: x.node.draft,
      body: x.node.body,
      author: x.node.author,
      tag: x.node.tag,
      cover: x.node.cover,
    }
  })
}

export const getStaticProps = async ({ params }) => {
  let posts = []
  
  try {
    posts = await getPosts()
  } catch (e){
    console.log("Failed to load article, error: " + e)
  }

  return {
    props: {
      posts,
    },
  }
}

export default Blogs

