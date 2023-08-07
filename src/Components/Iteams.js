import React from "react";

function Iteams(props) {
  return (
    <div className="my-3">
      <div className="card" style={{width: "18rem"}}>
        <img src={props.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href="/newsdetail" className="btn btn-sm btn-primary">         
          Find Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default Iteams;