import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    const { src, altText } = this.props;
    return <img src={src} alt={altText} />;
  }
}

export default ImageComponent;
