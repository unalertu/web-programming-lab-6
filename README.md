# File organization

The Vite project is in `assignment6`.

- `src/api/postsApi.js` fetches posts from the API.
- `src/reducer/postsReducer.js` handles loading, success and error actions.
- `src/components/` contains `Post`, `PostList` and `FilterForm`.
- `src/App.jsx` loads posts, keeps the filter value and shows the correct UI state.
- `src/main.jsx` starts the app, and `src/index.css` adds basic styles.

# Challenges

Keeping loading, posts and errors together was the main part. The reducer handles these changes. The effect cancels its request during cleanup and ignores late responses. Filtered posts are calculated during render, so there is no second list to keep in state.
