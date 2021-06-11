import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {searchBusinesses} from '../../actions/business_actions';
import { GoSearch } from "react-icons/go";



class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({query: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.query)
    this.props.searchBusinesses(this.state.query).then(() => this.props.history.push(`/businesses?query=${this.state.query}`))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="main-search-bar">
          <div className="find-input-wrapper">
            <span>
              <p>
                Find
              </p>
            </span>
            <input onChange={this.handleChange} type="text" placeholder="dessert, drinks, dinner..."/>
          </div>
          <div className="near-input-wrapper">
            <span>
              <p>
                Near
              </p>
            </span>
            <input type="text" placeholder="City" />
          </div>
          <button><GoSearch className="search-icon"/></button>
        </div>
      </form>
    )
  }
}

export default withRouter(connect(null, {searchBusinesses})(Search))