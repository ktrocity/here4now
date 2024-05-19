import '../styles/styles.css';

function Docked() {

    return (
        <div className='title'>
            <h1>Page Title</h1>
            <div className='dockMenu'>
                <button className='feed'>Show Feed</button>
                <button className='chime'>Chime</button>
            </div>
        </div>
    );
}

export default Docked;