import Docked from './components/docked';
import Pages from './components/pages';
import Mix from './components/mix';
import Show from './components/show';
import Video from './components/video';
import Recorder from './components/recorder';
import Power from './components/power';


function App() {
    return (
        <div className="Flex">
            <div className="PageMenu">
                <Pages />
            </div>
            <div className="Controls">
                <Docked />
                <Mix />
            </div>
        </div>
    )
}

export default App;