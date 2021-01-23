import React from 'react'
import PropTypes from "prop-types";

class GoogleAds extends React.Component{
  render(){
    return(
      <>
      {this.props.layout === 'image' ? (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-adtest={true}
          data-ad-client='ca-pub-8392231848755121'
          data-ad-slot={this.props.slot}
          data-ad-format='auto'
          data-full-width-responsive='true'></ins>
      ) : (
        <ins className='adsbygoogle'
          style={{ display: 'block', 'textAlign': 'center' }}
          data-adtest={process.env.NODE_ENV !== 'production'}
          data-ad-layout='in-article'
          data-ad-format='fluid'
          data-ad-client='ca-pub-8392231848755121'
          data-ad-slot={this.props.slot}></ins>
      )}
  </>
    )
  }
}
// const GoogleAds = ({ slot, layout = 'image' }) => (
 
// )

GoogleAds.propTypes = {
  slot: PropTypes.string,
  layout: PropTypes.string
};
GoogleAds.defaultProps = {
  layout: 'image'
};
export default GoogleAds;
