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
                        <button className='setting'>Mix Mode</button>
                        <h3>Advanced Settings</h3>
                        <button className='setting'>Mix Mode</button>
                        <button className='setting'>Mix Mode</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mix;