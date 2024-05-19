import React, { useState } from 'react';
import Docked from './components/docked';
import Pages from './components/pages';
import Mix from './components/mix';
import Show from './components/show';
import Video from './components/video';
import Recorder from './components/recorder';
import Power from './components/power';

const App: React.FC = () => {
    const [mixVisible, setMixVisibility] = useState(false);

    return (
        <div className="Flex">
            <div className="PageMenu">
                <Pages setMixVisibility={setMixVisibility} />
            </div>
            <div className="Controls">
                <Docked />
                {mixVisible && <Mix />}
            </div>
        </div>
    );
}

export default App;

