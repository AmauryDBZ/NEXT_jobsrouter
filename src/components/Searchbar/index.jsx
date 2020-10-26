import React, { useState } from "react";

const Searchbar = ({onSearch}) => {
  const [query, setQuery] = useState(null);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" id="search" onChange={handleSearch} />
        <button type="submit" className="btn btn-primary mb-2">
          Search
        </button>
      </div>
    </form>
  )
}

export default Searchbar;
