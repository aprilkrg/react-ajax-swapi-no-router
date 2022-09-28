import React, { Component } from "react"
import Pilot from "./Pilot"

export default class Starship extends Component {
    render() {
        console.log("PROPS:", this.props)
        const pilotList = this.props.pilots.length > 0 ? <Pilot urls={this.props.pilots}/> : <p>No Pilots</p>
        return(
            <>
                <h2>{this.props.name}</h2>
                <h3>Class: {this.props.class}</h3>
                <p>Hyperdrive Rating: {this.props.hyperdriveRating}</p>
                <p>Cost: ${this.props.cost}</p>
                {pilotList}
                <a href={this.props.url}>more...</a>
            </>
        )
    }
}