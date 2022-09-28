import React, { Component } from "react"

export default class Starship extends Component {
    render() {
        console.log("PROPS:", this.props)
        return(
            <>
                <h2>{this.props.name}</h2>
            </>
        )
    }
}