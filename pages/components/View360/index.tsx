import React, { useState, useEffect } from "react";
import PreloadImages from './Preload'

// You can play with this to adjust the sensitivity
// higher values make mouse less sensitive
const pixelsPerDegree = 2;
interface props {
  dir: string
  numImages?: number
}


const App = (props: props) => {
  const { dir, numImages } = props;

  const [images, setImages] = useState(Array);
  const [imageIndex, setImageIndex] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragStartIndex, setDragStartIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);

  const handleMouseMove = (e) => {
    if (dragging === false) {
      updateImageIndex(e.screenX);
    }
  };

  const handleMouseDown = (e) => {
    e.persist();
    setDragging(true)
    setDragStart(e.screenX)
    setDragStartIndex(imageIndex)
  };

  const handleMouseUp = () => {
    setDragging(false)  // false
  };

  const updateImageIndex = (currentPosition) => {
    const pixelsPerImage = pixelsPerDegree * (360 / numImages);
    let dx = (currentPosition - dragStart) / pixelsPerImage;
    let index = Math.floor(dx) % numImages;

    if (index < 0) {
      index = numImages + index - 1;
    }
    index = (index + dragStartIndex) % numImages;
    if (index !== imageIndex) {
      setImageIndex(index)
    }
  };

  const preventDragHandler = e => {
    e.preventDefault();
  };

  const handlePreloadImages = async () => {
    for(let i=0; i <= numImages -1; i++){
      const imageIndex = i
      const filePath = `${dir}/${imageIndex}.jpg`
      images.push(filePath)
  }
  const imagesLoaded = await  PreloadImages(images).then(() => {
      setImagesPreloaded(true)
    });
    console.log("imagesLoaded : ", imagesLoaded )
  }

  useEffect(() => {
    handlePreloadImages();
    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mouseup", handleMouseUp, false);
    // returned function will be called on component unmount 
    return () => {
      console.log("se desmonta")
      document.removeEventListener('mousemove', handleMouseMove, false);
      document.removeEventListener("mouseup", handleMouseUp, false);
    }
  }, []);

  const renderImage = () => {

    return (
      <div style={{
        position: 'absolute',
        width: 'auto',
        display: 'block',
        margin: '0 auto',
        'text-align': 'left',
      } as React.CSSProperties} className="react360">
        <img style={{
          margin: 'auto',
          position: 'relative',
          height: '95vh',
          width: 'auto',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
          'background-color': 'white',
          '-webkit-user-select': 'none',
          '-khtml-user-select': 'none',
          '-moz-user-select': 'none',
          '-ms-user-select': 'none',
          '-o-user-select': 'none',
          'user-select': 'none',
          left: '82%',
          bottom: '150%',
          top: '-25%',
          'transform': 'translate(-50%, 0)',
          '-ms-transform': 'translate(-50%, 0)',
          '-webkit-transform': 'translate(-50%, 0)',
          'z-index': 0
        } as React.CSSProperties}
          className="react-360-img"
          src={`${dir}/${imageIndex}.jpg`}
        /*  src={require(`${dir}/${imageIndex}.jpg`)} */
        />

      </div>
    );
  };


  return (
    <div
      className="react-360-img"
      onMouseDown={handleMouseDown}
      onDragStart={preventDragHandler}

    >
      <div style={{ position: 'fixed' }}>
        Metrics:
        <ul>
          <li>
            Num images: {numImages}
          </li>
          <li>
            Image index: {imageIndex}
          </li>
          <li>
            Dragging:{dragging ? 'Is dragging' : 'No draggin'}
          </li>
          <li>
            DragStart:{dragStart}
          </li>
          <li>
            imagesPreloaded:{imagesPreloaded}
          </li>
          <li>
            DragStartIndex: {dragStartIndex}
          </li>
        </ul>
      </div>
      {renderImage()}
    </div>
  );

}

export default App;