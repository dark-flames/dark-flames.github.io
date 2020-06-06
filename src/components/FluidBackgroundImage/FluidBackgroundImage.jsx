import React from 'react';
import Img from 'gatsby-image';
import './BackgroundImage.css'
class FluidBackgroundImage extends React.Component {

  render () {
    const { image } = this.props
    return (
      <Img style={{position: "absolute"}}
           className="background"
           fluid={image.node.childImageSharp.fluid}
      />
    )
  }
}
export default FluidBackgroundImage;