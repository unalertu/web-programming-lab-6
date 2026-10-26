import Post from './Post.jsx'

function PostList({ posts }) {
  return (
    <section aria-label="Posts">
      {posts.map(post => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </section>
  )
}

export default PostList
