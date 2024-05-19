import '../styles/styles.css';
import '../styles/mix.css';


function Slide() {

    return (
            <div className="mix">
                <div>audio</div>
                <div className='slider'>
                    <input type='range' min='0' max='1' step='0.001' />
                </div>
                <div>##db</div>
                <button>mute</button>
            </div>
    );
}

export default Slide;