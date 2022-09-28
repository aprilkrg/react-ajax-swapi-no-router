import React, { Component } from "react"

export default class Pilot extends Component {
    render() {
        return(
            <>
                <h4>Pilot:</h4>
                <p><a href={this.props.url}>{this.props.name}</a></p>
            </>
        )
    }
}