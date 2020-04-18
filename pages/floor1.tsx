import React, { Component } from 'react';
import Layout from './components/Layout';
import React360 from './components/View360';

export default function r1() {
    return (
      <div>
    <Layout>
     
       <div style={{  
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  
    }}>
        <img
          className="icon-react360"
          alt=""
          src={'https://raw.githubusercontent.com/aldrinc/react-360-image/master/src/360_degrees.png'}
        />
        </div>
        <React360 dir="https://raw.githubusercontent.com/jcastillovnz/Carque-360/master/iframes/r3/img/r3/renders" numImages={31} />


    </Layout>
      </div>
    );
  }