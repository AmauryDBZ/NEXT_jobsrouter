import React from 'react';

const Card = ({id, name, parentId}) => {

  const changeURL = () => {
    window.location.href += `job/${id}`
  }

  return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">uuid : {id}</h6>
          <button onClick={changeURL}>show more</button>
        </div>
      </div>
  )
}

export default Card;
