import React from 'react';

const BusinessCard = (props) => {
  return (
    <div className="business-card-container">
      <div className="business-card">
        <p>
          {props.business.business_name}
        </p>
      </div>    
    </div>
  )
};

export default BusinessCard;