import React from 'react';
import '../styles/styles.css';

interface PagesProps {
    setMixVisibility: (visible: boolean) => void;
    setShowVisibility: (visible: boolean) => void;
}

const Pages = ({ setMixVisibility, setShowVisibility, setVideoVisibility, setRecorderVisibility }) => {
    const hideComponents = () => {
        setShowVisibility(false);
        setMixVisibility(false);
        setVideoVisibility(false);
        setRecorderVisibility(false);
    };

    return (
        <>
            <button className="icon" onClick={() => { hideComponents(); setShowVisibility(true); }}>Show Feed</button>        
            <button className="icon" onClick={() => { hideComponents(); setMixVisibility(true); }}>Audio Mix</button>        
            <button className="icon" onClick={() => {hideComponents(); setVideoVisibility(true); }}>Projection</button>
            <button className="icon" onClick={() => {hideComponents(); setRecorderVisibility(true);  }}>Recorder</button>
            <button className="icon" onClick={hideComponents}>Shut Down</button>
        </>
    );
}

export default Pages;