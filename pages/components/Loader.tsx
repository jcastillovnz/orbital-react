import React, { useEffect, useState } from 'react';



 const Logo = ()=> {
    useEffect(()=>{

  setShow(false)

    }, [])

  const [show, setShow] = useState(true);

if ( show===true ){ 
  return ( 
  <div style={{  
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',}}>
   <img
   className="icon-react360"
   alt=""
   src={'https://raw.githubusercontent.com/aldrinc/react-360-image/master/src/360_degrees.png'}
   />
   </div>
   )
}
return null



}

export default Logo;