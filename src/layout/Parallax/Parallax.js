import React from 'react';
import {Parallax, Background} from 'react-parallax';

const imgParallax = () =>(
    <div>
      <Parallax
      blur={0}
      bgImage={require('./images/1.jpg')}
      bgImageAlt=""
      strength={200}
      > 
      <div style={{ height: '500px' }} />
    </Parallax>
  </div>
);
export default imgParallax;


