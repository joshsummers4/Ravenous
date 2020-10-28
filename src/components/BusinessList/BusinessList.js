import React from 'react'
import './BusinessList.css'
// import business from '../Business/Business.js'

class BusinessList extends React.Component{
  render() {
    return (  
      <div className="BusinessList">
        {
          this.props.businesses.map((business) => {
            return <business business={business} key={business.id} />;
          })      
        }
      </div>
    )
  }
}

export default BusinessList;