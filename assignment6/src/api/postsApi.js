export async function fetchPosts(signal) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    signal
  })

  if (!response.ok) {
    throw new Error('Could not load posts. Please try again later.')
  }

  return response.json()
}
