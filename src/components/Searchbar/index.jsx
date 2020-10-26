import React, { useState } from "react";

const Searchbar = ({getResult}) => {
  const [query, setQuery] = useState(null);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    fetchIt();
  }

  const fetchIt = () => {
    fetch(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${query}`)
      .then((data) => data.json())
      .then((data) => handleResult(data))
      .catch((error) => console.error(error))
  }

  const handleResult = (data) => {
    getResult(data);
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
