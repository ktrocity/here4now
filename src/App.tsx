import React, { useState } from 'react';
import Docked from './components/docked';
import Pages from './components/pages';
import Mix from './components/mix';
import Show from './components/show';
import Video from './components/video';
import Recorder from './components/recorder';
import Power from './components/power';

const App = () => {
    const [showVisible, setShowVisibility] = useState(false);
    const [mixVisible, setMixVisibility] = useState(false);
    const [videoVisible, setVideoVisibility] = useState(false);
    const [recorderVisible, setRecorderVisibility] = useState(false);

    return (
        <div className="Flex">
            <div className="PageMenu">
                <Pages setShowVisibility={setShowVisibility} setMixVisibility={setMixVisibility} setVideoVisibility={setVideoVisibility} setRecorderVisibility={setRecorderVisibility}/>
            </div>
            <div className="Controls">
                <Docked />
                {showVisible && <Show />}
                {mixVisible && <Mix />}
                {videoVisible && <Video />}
                {recorderVisible && <Recorder />}
            </div>
        </div>
    );
}

export default App;