import React from 'react';
import {Parallax, Background} from 'react-parallax';
import Register from '../Register/Register'
const imgParallax = () =>(
    <div>
      <Parallax
      blur={0}
      bgImage={require('./images/1.jpg')}
      bgImageAlt="the cat"
      strength={200}>
      
    
      <div style={{ height: '500px' }} />
    </Parallax>
  </div>
);
export default imgParallax;


