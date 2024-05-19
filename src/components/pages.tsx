import React from 'react';
import '../styles/styles.css';

const Pages = ({ setMixVisibility }) => {
    return (
        <>
            <button className="icon">Show Feed</button>
            <button className="icon" onClick={() => setMixVisibility(true)}>Audio Mix</button>
            <button className="icon">Projection</button>                
            <button className="icon">Recorder</button>
            <button className="icon">Shut Down</button>                
        </>
    );
}

export default Pages;
