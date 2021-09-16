
import React, { Component, useEffect } from 'react';
import Layout from './components/Layout';
import Loader from './components/Loader';
import Header from './components/Header';
import React360 from './components/View360';



export default function Index() {
  return (
    <Layout >
      <Header/>
        <Loader/>
        <React360 dir="https://raw.githubusercontent.com/jcastillovnz/Carque-360/master/iframes/r1/img/r1/renders/" numImages={31} />
    </Layout>
  );
}
