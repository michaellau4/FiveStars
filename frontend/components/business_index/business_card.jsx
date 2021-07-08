import React from 'react';

const BusinessCard = (props) => {
  return (
    <div className="business-card-container">
      <div className="business-card">
        <h3>
          {props.business.business_name}
        </h3>
        <div>
          {props.business.tags.map((tag) => (
            <div key={tag.id}>{tag.tag}</div>
          ))}
        </div>
      </div>    
    </div>
  )
};

export default BusinessCard;