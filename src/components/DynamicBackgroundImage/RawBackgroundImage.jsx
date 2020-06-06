import React from 'react';
import './BackgroundImage.css'
class RawBackgroundImage extends React.Component {

  render () {
    const { imagePath } = this.props
    return (
      <div style={{position: "absolute", height:"100%", width: "100%", overflow: "hidden"}}>
        <img className="background" src={`./images/${imagePath}`} alt={imagePath}/>
      </div>
    )
  }
}
export default RawBackgroundImage;