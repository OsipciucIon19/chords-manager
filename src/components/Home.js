import TextEditor from "./TextEditor";

export default function Home({addChords}) {
    return (
        <div className="home" style={{display: "block"}}>
            <h1>Add new song chords</h1>
            <form onSubmit={(event => event.preventDefault())}>
                <label htmlFor="name">
                    <div>Song Name</div>
                    <input type="text" id="name"/>
                </label>
                <label htmlFor="artist">
                    <div>Artist</div>
                    <input type="text" id="artist"/>
                </label>
                <TextEditor/>
                <button onClick={addChords}>Submit</button>
            </form>
        </div>
    )
}