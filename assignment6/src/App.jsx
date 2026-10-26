import { useEffect, useReducer } from 'react'
import { fetchPosts } from './api/postsApi.js'
import PostList from './components/PostList.jsx'
import { initialState, postsReducer } from './reducer/postsReducer.js'

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState)

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function loadPosts() {
      dispatch({ type: 'FETCH_START' })

      try {
        const posts = await fetchPosts(controller.signal)

        if (active) {
          dispatch({ type: 'FETCH_SUCCESS', payload: posts })
        }
      } catch (error) {
        if (active) {
          dispatch({ type: 'FETCH_ERROR', payload: error.message })
        }
      }
    }

    loadPosts()

    return () => {
      active = false
      controller.abort()
    }
  }, [])

  return (
    <main>
      <h1>Post Dashboard</h1>
      {state.loading ? (
        <p role="status">Loading posts...</p>
      ) : state.error ? (
        <p role="alert">Error: {state.error}</p>
      ) : state.posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <PostList posts={state.posts} />
      )}
    </main>
  )
}

export default App
