import React, { Component } from 'react';
import Layout from './components/Layout';
import React360 from './components/View360';

export default function r1() {
    return (
      <div>
    <Layout>
     
    <img
          className="icon-react360"
          alt=""
          src={'https://raw.githubusercontent.com/aldrinc/react-360-image/master/src/360_degrees.png'}
        />
        <React360 dir="./../assets/renders" numImages={31} />


    </Layout>
      </div>
    );
  }