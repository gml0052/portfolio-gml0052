import React, { Component } from 'react';
import Artwork from './Artwork';

import '../styles/ArtGrid.css';
import '../my-bootstrap';

import photo0 from '../assets/0.jpg';
import photo1 from '../assets/1.jpg';
import photo2 from '../assets/2.jpg';
import photo3 from '../assets/3.jpg';
import photo4 from '../assets/4.jpg';
import photo5 from '../assets/5.jpg';
import photo6 from '../assets/6.jpg';
import photo7 from '../assets/7.jpg';
import photo8 from '../assets/8.jpg';
import photo9 from '../assets/9.jpg';
import photo10 from '../assets/10.jpg';
import photo11 from '../assets/11.jpg';
import photo12 from '../assets/12.jpg';
import photo13 from '../assets/13.jpg';
import photo14 from '../assets/14.jpg';

class ArtGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const photos = [photo7, photo3, photo2, photo14, photo1,
                    photo5, photo6, photo0, photo8, photo4,
                    photo11, photo13, photo12, photo10, photo9];

    return (
      <div className="ArtGrid">
        <div className="card-columns">
          {<div className="ArtGrid-col">
                {photos.map(i => {
                  return <Artwork img={i}/>
                })}
          </div>}
        </div>
      </div>
    );
  }
}

export default ArtGrid;

