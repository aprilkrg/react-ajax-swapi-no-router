import React, { Component } from "react"
import Pilot from "./Pilot"
import axios from "axios"

export default class Starship extends Component {
	state = {
		pilots: [],
	}
	componentDidMount = async () => {
		try {
			// console.log("LIST:", this.props.pilots)
			const urls = this.props.pilots.map((url) => axios.get(url))
			const promisedData = await Promise.all(urls)
			// console.log("DATA WHICH WAS PROMISED", promisedData)
			const shallowState = []
			promisedData.forEach((pilot) => {
				console.log("PILOT NAME:", pilot.data.name, pilot.data.url)
				if (pilot.data.name) {
					shallowState.push({
						name: pilot.data.name,
						url: pilot.data.url,
					})
				}
			})
			this.setState({
				pilots: shallowState,
			})
		} catch (err) {
			console.log(err)
		}
	}
	render() {
		// console.log("PROPS:", this.props)
        const pilotsInState = this.state.pilots.map((pilot, i) => {
            // console.log("PIRATE", pilot)
            return(
                <Pilot 
                    name={pilot.name}
                    url={pilot.url}
                />
            )
        })
        // console.log("pirates in space", pilotsInState)
		return (
			<>
				<h2>{this.props.name}</h2>
				<h3>Class: {this.props.class}</h3>
				<p>Hyperdrive Rating: {this.props.hyperdriveRating}</p>
				<p>Cost: ${this.props.cost}</p>
                {pilotsInState}
				<a href={this.props.url}>more...</a>
			</>
		)
	}
}
