import React, { Component } from "react";
//import "./React360.css";

// You can play with this to adjust the sensitivity
// higher values make mouse less sensitive
const pixelsPerDegree = 3;

const App =(props)=> {
const  defaultProps = { dir: "awair-360", numImages: 55 };

  const state = {
    dragging: false,
    imageIndex: 0,
    dragStartIndex: 0
  };

  componentDidMount = () => {
    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mouseup", handleMouseUp, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousemove", handleMouseMove, false);
    document.removeEventListener("mouseup", handleMouseUp, false);
  };

  const handleMouseDown = (e) => {
    e.persist();
    this.setState(state => ({
      dragging: true,
      dragStart: e.screenX,
      dragStartIndex: state.imageIndex
    }));
  };

  const handleMouseUp = () => {
    this.setState({ dragging: false });
  };

  const updateImageIndex = (currentPosition) => {
    let numImages = this.props.numImages;
    const pixelsPerImage = pixelsPerDegree * (360 / numImages);
    const { dragStart, imageIndex, dragStartIndex } = this.state;
    // pixels moved
    let dx = (currentPosition - dragStart) / pixelsPerImage;
    let index = Math.floor(dx) % numImages;

    if (index < 0) {
      index = numImages + index - 1;
    }
    index = (index + dragStartIndex) % numImages;
    // console.log(index, dragStartIndex, numImages)
    if (index !== imageIndex) {
      this.setState({ imageIndex: index });
    }
  };

  const handleMouseMove = (e) => {
    if (this.state.dragging) {
      updateImageIndex(e.screenX);
    }
  };

  const preventDragHandler = e => {
    e.preventDefault();
  };

  const renderImage = () => {
    const { imageIndex } = this.state;

    return (
      <div className="react360">
        <img
          className="react-360-img"
          alt=""
          src={require(`./${props.dir}/${imageIndex}.jpg`)}
        />
      </div>
    );
  };


    return (
      <div
        className="react-360-img"
        onMouseDown={this.handleMouseDown}
        onDragStart={this.preventDragHandler}
      >
        {this.renderImage()}
      </div>
    );

}

export default App;