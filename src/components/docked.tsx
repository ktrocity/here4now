import '../styles/styles.css';

function Docked() {

    return (
        <div className='title'>
            <h1>Page Title</h1>
            <div className='dockMenu'>
                <div>
                    <p>Show Feed</p>
                    <button className='feed'><p>Enabled</p></button>
                </div>
                <div>
                    <p>Chime Lobby</p>
                    <button className='chime'><p>Hold 3 Sec</p></button>
                </div>
            </div>
        </div>
    );
}

export default Docked;