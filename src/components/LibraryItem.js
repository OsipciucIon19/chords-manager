import React, {Fragment} from "react";

export default function LibraryItem({chords}) {
    const {title, artists} = chords;
    return (
        <Fragment>
            <span>
                {title}
            </span>
            <span>{
                artists.map((artist, i) => i === artists.length - 1 ? (<span key={artist}>{artist}</span>): <span key={artist}>{artist}, </span>)
            }</span>
        </Fragment>
    )
}