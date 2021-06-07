import React from 'react';

class Business extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  render() {
    if (!this.props.business) return null;
    let {business} = this.props
    console.log(hello)
    return (
      <div className="business-container">
        <h1>HELLO</h1>
        <div>
          <h3>
            HELLO
            {business.business_name}

          </h3>
        </div>
      </div>
    )
  }
}

export default Business;
