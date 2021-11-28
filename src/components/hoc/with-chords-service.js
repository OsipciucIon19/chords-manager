import React from "react";
import {ChordsServiceConsumer} from "../chords-service-context";

const withChordsService = () => (Wrapped) => {
    return (props) => {
        return (
            <ChordsServiceConsumer>
                {
                    (chordsService) => {
                        return (
                            <Wrapped {...props} chordsService={chordsService}/>
                        )
                    }
                }
            </ChordsServiceConsumer>
        )
    }
}

export default withChordsService;