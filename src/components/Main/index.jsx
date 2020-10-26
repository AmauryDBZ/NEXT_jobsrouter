import React, { useState } from "react";
import Searchbar from "../Searchbar";
import Card from '../Card';

const Main = () => {
  const [data, setData] = useState();

  const handleSearch = (query) => {
    fetch(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${query}`)
      .then((data) => data.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
  }
console.log(data);
  return (
    <div>
      <div>
        <Searchbar onSearch={handleSearch} />
      </div>
      <div>
        {data && data.map(job => (
            <Card
            id={job.uuid}
            name={job.normalized_job_title}
            parentId={job.parent_uuid}/>
          ))}
      </div>
    </div>
  )
}

export default Main;
