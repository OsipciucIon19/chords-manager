// import React, {useEffect, useState} from "react";
// import {Editor} from "react-draft-wysiwyg";
// import {EditorState} from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import {
//     convertToRaw,
// } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
//
// export default function TextEditor() {
//     const [editorState, setEditorState] = useState(() =>
//         EditorState.createEmpty()
//     );
//
//     const htmlText = draftToHtml(
//         convertToRaw(editorState.getCurrentContent())
//     ).split('</p>')
//
//     useEffect(() => {
//         console.log(htmlText)
//
//         const preText = htmlText.map(word => word.includes('<p ') || word.includes('<p>') ? word.replace('<p', '<pre') : word)
//         const finalText = preText.map(word => word.includes('\n') ? word : word.concat('</pre>'))
//         console.log(finalText.join(''))
//     }, [htmlText]);
//     return (
//         <div style={{border: "1px solid black", padding: '2px', minHeight: '400px'}}>
//             <Editor
//                 editorState={editorState}
//                 onEditorStateChange={setEditorState}
//             />
//         </div>
//     );
// }

export default function TextEditor() {
    return (
        <div contentEditable={true}/>
    )
}