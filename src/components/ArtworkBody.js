import React from 'react';
import '../styles/ArtworkBody.css';
import '../my-bootstrap';

const ArtworkBody = ({ isHovering }) => (
    <div className="ArtworkBody card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text">
            Description and any general information here.
        </p>
        <small className="text-muted">Medium and metadeta here?</small>
    </div>
)

export default ArtworkBody;