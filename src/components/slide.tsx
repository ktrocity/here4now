import React, { useState } from 'react';
import '../styles/styles.css';
import '../styles/mix.css';

const Slide = () => {
    const [value, setValue] = useState<number>(0);
    const [audioText, setAudioText] = useState<string>('Audio');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseFloat(event.target.value));
    };

    return (
        <div className="mix">
            <div>{audioText}</div>
            <div className='slider'>
                <input 
                    type='range' 
                    min='-10' 
                    max='20' 
                    step='0.001' 
                    value={value} 
                    onChange={handleChange} 
                />
            </div>
            <div>{Math.round(value)} dB</div>
            <button className='mute'></button>
        </div>
    );
}

export default Slide;
