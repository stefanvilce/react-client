import React from 'react';

const Page = ({item}) => (
    <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <h2>{item.title}</h2>
          <h5>{item.subtitle}</h5>
        </div>
        <div className="card-action">
          <p>{item.shortDescription}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Page;