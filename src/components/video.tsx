import '../styles/styles.css';
import '../styles/video.css';

function Video() {

    return (
        <div className='black'>
            <div className='subs'>
                <div className='preview'>
                    <div className='preview1'>
                        <h3>Projector Preview Not Found</h3>
                    </div>
                    <div className='preview2'>
                        <p>Select a source to view it in the preview window. To send the selected source to the projector press the TAKE button on the right.</p>
                        <div className='source'>
                            <button className='setting'>BluRay Player</button>
                            <button className='setting'>Stage HDMI</button>
                            <button className='setting'>Booth HDMI</button>
                            <button className='take'>TAKE</button> 
                        </div>
                    </div>
                    <div className='preview3'>
                        <div className='source'>
                            <button className='transRew' />
                            <button className='transStop' />
                            <button className='transPlay' />
                            <button className='transPause' />
                            <button className='transFwd' />
                        </div>
                    </div>                    
                </div>
            </div>
            <div className='subs'>
                <div>
                    <h3>Projector Controls</h3>
                    <button className='setting'>remote</button>
                    <h3>Projector Controls</h3>
                    <button className='setting'>remote</button>
                    <button className='setting'>remote</button>
                    <button className='setting'>remote</button>
                </div>
            </div>
        </div>
    );
}

export default Video;