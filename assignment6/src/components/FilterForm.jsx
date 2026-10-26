function FilterForm({ filter, onFilterChange }) {
  return (
    <form onSubmit={event => event.preventDefault()}>
      <label htmlFor="title-filter">Filter by title</label>
      <input
        id="title-filter"
        type="text"
        value={filter}
        onChange={event => onFilterChange(event.target.value)}
        placeholder="Enter a post title"
      />
    </form>
  )
}

export default FilterForm
