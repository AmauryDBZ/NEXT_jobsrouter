import React from "react";
import { useParams } from "react-router-dom";


const Job = () => {
  let { jobSlug } = useParams();
  console.log(jobSlug);

  const fetchThisJob = () => {
    fetch(`http://api.dataatwork.org/v1/jobs/${jobSlug}/related_skills`)
      .then((data) => data.json())
      .then((data) => handleJob(data))
      .catch((error) => error.log(error))
  }

  const handleJob = (data) => {
    console.log(data);
  }

  return(
    <h1>{jobSlug}</h1>
  )
}

export default Job;
