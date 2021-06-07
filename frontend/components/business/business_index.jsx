import React from 'react';

const BusinessIndex = () => {
  return(

  )
};

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses();
  }
}

export default BusinessIndex;