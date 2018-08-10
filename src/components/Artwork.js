import React from 'react';
import ArtworkBody from './ArtworkBody';
import '../styles/Artwork.css';
import '../my-bootstrap';

const Artwork = ({ img }) => (
    <div className="card artwork">
        <img className="card-img-top artwork-card-img" src={img} alt="Card cap"/>
        <ArtworkBody className="artwork-card-body"/>
    </div>
)

export default Artwork;