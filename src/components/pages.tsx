import React from 'react';
import '../styles/styles.css';

interface PagesProps {
    setMixVisibility: (visible: boolean) => void;
}

const Pages: React.FC<PagesProps> = ({ setMixVisibility }) => {
    const hideMix = () => setMixVisibility(false);

    return (
        <>
            <button className="icon" onClick={hideMix}>Show Feed</button>
            <button className="icon" onClick={() => setMixVisibility(true)}>Audio Mix</button>
            <button className="icon" onClick={hideMix}>Projection</button>
            <button className="icon" onClick={hideMix}>Recorder</button>
            <button className="icon" onClick={hideMix}>Shut Down</button>
        </>
    );
}

export default Pages;

