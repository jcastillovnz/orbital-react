import React, {useState, useEffect } from "react";
import PreloadImages from './Preload'

// You can play with this to adjust the sensitivity
// higher values make mouse less sensitive
const pixelsPerDegree = 2;

interface props {
  dir: string
  numImages?: number
}


const App =(props: props)=> {
const {dir, numImages} = props;
const [images, changeImages] = useState(Array);
const [imageIndex, changeImageIndex] = useState(0);
const [imagesPreloaded, changeimagesPreloaded] = useState(false);
const [dragging, changeDragging] = useState(false);
const [dragStartIndex, changeDragStartIndex] = useState(0);
const [dragStart, changeDragStart] = useState(0);

/*   const state = {
    dragging: false,
    imageIndex: 0,
    dragStartIndex: 0
  }; */

 



  const handleMouseMove = (e) => {
    console.log("state on draggin ", dragging)
    console.log("handle mouse move ->>>>, draggin: ", dragging)
    if (dragging===false) {
    //  alert("IS TRUE DRAGGIN IN MOVE")
      updateImageIndex(e.screenX);
     /// alert("is dragging")
      console.log("image index", imageIndex)
    }
  };

  const handleMouseDown = (e) => {
    e.persist();
   // ChangeStatusDraggin()
    changeDragging(true) //true
    changeDragStart(e.screenX)
    changeDragStartIndex(imageIndex)
    console.log("draggin set in true --->", dragging)
    //alert( dragging)
/*     this.setState(state => ({
      dragging: true,
      dragStart: e.screenX,
      dragStartIndex: state.imageIndex
    })); */
  };

  const handleMouseUp = () => {
    changeDragging(false)  // false
    console.log("draggin set in false --->", dragging)
  };

  const updateImageIndex = (currentPosition) => {
    console.log("updateImageIndex", currentPosition )
    const pixelsPerImage = pixelsPerDegree * (360 / numImages);
    // pixels moved
    let dx = (currentPosition - dragStart) / pixelsPerImage;
    let index = Math.floor(dx) % numImages;

    if (index < 0) {
      index = numImages + index - 1;
    }
    index = (index + dragStartIndex) % numImages;
    // console.log(index, dragStartIndex, numImages)
    if (index !== imageIndex) {
      //this.setState({ imageIndex: index });
      changeImageIndex(index)
    }
  };

  const preventDragHandler = e => {
    e.preventDefault();
  };


  const handlePreloadImages= () => {


    alert("preloader")

    
 /*    PreloadImages(images).then(() => {
      changeimagesPreloaded(true)
    console.log("Images preloaded", images)
    });
    console.log("manejador de preloaded") */
  }

  useEffect(() => {
    console.log("se monta fdsfdsf")
    alert("fdsdfdsss")
    handlePreloadImages();
  document.addEventListener("mousemove", handleMouseMove, false);
  document.addEventListener("mouseup", handleMouseUp, false);
      // returned function will be called on component unmount 
  return () => {
   console.log("se desmonta")
    document.removeEventListener('mousemove',handleMouseMove, false);
    document.removeEventListener("mouseup", handleMouseUp, false);
  }
  }, []); 


  

  const renderImage = () => {
    
    return (
      <div style={{position:'absolute',   
      width:'auto',
      display:'block',
      margin: '0 auto',
      'text-align': 'left', } as React.CSSProperties} className="react360">
      <img  style={{ 
       margin:'auto',
       position:'relative',
       height: '95vh',
       width:'auto',
       display:'flex',
       'justify-content': 'center',
       'align-items': 'center',
       'background-color': 'white',
       '-webkit-user-select': 'none',
       '-khtml-user-select': 'none',
       '-moz-user-select': 'none',
       '-ms-user-select': 'none',
       '-o-user-select':'none',
       'user-select': 'none',
       left:'82%',
       bottom:'150%',
       top:'-25%',
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
      <div style={{position:'fixed'}}>
        Metrics:
<ul>
<li>
Num images: {numImages}
  </li>
<li>
 Image index: {imageIndex}
  </li>
  <li>
  Dragging:{dragging? 'Is dragging': 'No draggin'}
  </li>
  <li>
  DragStart:{dragStart}
  </li>
  <li>
  DragStartIndex: {dragStartIndex}
  sdfds ffasfasfasfasf
  </li>
</ul>
      </div>  
        {renderImage()}
      </div>
    );

}

export default App;