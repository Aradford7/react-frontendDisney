import React from 'react';
import {Parallax, Background} from 'react-parallax';




export default class imgParallax extends React.Component {
  render(){
      
      return(
        <div>    
        <Parallax
        blur={0}
        bgImage={require('./images/1.jpg')}
        bgImageAlt= {require('./images/2.jpg')}
        strength={200}
        > 
        <div style={{ height: '500px' }} />
      </Parallax>
        </div>
      )
    }
  }