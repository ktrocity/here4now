function Note() {

const items = ["keli","Jeff","Barry","Jess"];

    return (
        <>
            <h1>hello</h1>
            <div>
                {items.map((item) => (<h1 key="{item}">{item}</h1>))}     
            </div>
        </>
    );
}

export default Note;