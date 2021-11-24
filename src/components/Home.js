import TextEditor from "./TextEditor";

export default function Home() {
    return (
        <div className="home" style={{display: "block"}}>
            <h1>Add new song chords</h1>
            <form>
                <label htmlFor="name">
                    <div>Song Name</div>
                    <input type="text" id="name"/>
                </label>
                <label htmlFor="artist">
                    <div>Artist</div>
                    <input type="text" id="artist"/>
                </label>
                <TextEditor/>
                <button>Submit</button>
            </form>
        </div>
    )
}