import '../styles/styles.css';
import '../styles/mix.css';
import Slide from './slide';


function Mix() {

    return (
        <>
            <div className="black">
                <div className="subs">
                    <Slide />
                    <Slide />
                    <Slide />
                </div>
                <div className="subs">
                    <div>
                        <h3>Advanced Settings</h3>
                        <button className='setting'>Advanced Settings</button>
                        <h3>Audio Faders</h3>
                        <button className='setting'>Playback Devices</button>
                        <button className='setting'>Microphones</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mix;