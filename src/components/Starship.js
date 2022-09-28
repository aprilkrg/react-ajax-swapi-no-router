import React, { Component } from "react"

export default class Starship extends Component {
    render() {
        console.log("PROPS:", this.props)
        return(
            <>
                <h2>{this.props.name}</h2>
                <h3>Class: {this.props.class}</h3>
                <p>Hyperdrive Rating: {this.props.hyperdriveRating}</p>
                <p>Cost: ${this.props.cost}</p>
                <a href={this.props.url}>more...</a>
            </>
        )
    }
}