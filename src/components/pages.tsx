import { useState } from "react";
import '../styles/styles.css';

function Pages() {

interface Props {
    onClick: () => void;
    
}
    return (
            <>
                <button className="icon" onClick={() => console.log('Clicked')}>Show Feed</button>
                <button className="icon">Audio Mix</button>
                <button className="icon">Projection</button>                
                <button className="icon">Recorder</button>
                <button className="icon">Shut Down</button>                
            </>
    );
}

export default Pages;