import React, {Component} from "react";
import {withChordsService} from "./hoc"
import LibraryItem from "./LibraryItem";
import {connect} from "react-redux";
import {chordsLoaded} from "../actions";

class Library extends Component {

    componentDidMount() {
        const {chordsService} = this.props
        const data = chordsService.getChordsList()

        this.props.chordsLoaded(data)
    }

    render() {
        const {chordsList} = this.props
        return (
            <ul>
                {
                    chordsList.map((chords) => {
                        return (
                            <li key={chords.id}><LibraryItem chords={chords}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({chordsList}) => {
    return {
        chordsList
    }
}

const mapDispatchToProps = {
    chordsLoaded
}

export default withChordsService()(
    connect(mapStateToProps, mapDispatchToProps)(Library)
)