import React, { Component } from "react"

export default class Pilot extends Component {
    render() {
        return(
            <>
                <h4>Pilot:</h4>
                <p>{this.props.name}</p>
            </>
        )
    }
}