import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skill from '../components/Skill';

const Job = () => {
  const [job, setJob] = useState();

  let { jobSlug } = useParams();

  const fetchThisJob = () => {
    fetch(`http://api.dataatwork.org/v1/jobs/${jobSlug}/related_skills`)
      .then((data) => data.json())
      .then((data) => setJob(data))
      .catch((error) => error.log(error))
  }

  useEffect(() => {
    fetchThisJob();
  }, []);

  return(
    <div>
      <div>
        {job &&
          <header>
            <h3>{job.job_title}</h3>
            <small>{job.job_uuid}</small>
          </header>
        }
      </div>
      <hr />
      <div>
        {job && <Skill skills={job.skills} />}
      </div>
    </div>
  )
}

export default Job;
