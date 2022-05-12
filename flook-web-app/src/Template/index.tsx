import React from 'react';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

export interface TemplateProps {
  Component: any;
  Carousel: any;
}

export const  AppTemplate = (props: TemplateProps) => {
  let { Component, Carousel } = props;
  return (
    <React.Fragment>
      <Header carousel={Carousel}/>
      <Component/>
      <Footer />
    </React.Fragment>
  )
}



