import React, { Component } from "react"
import Starship from "./Starship"
import axios from "axios"

export default class Starships extends Component {
    state = {
        starships: []
    }

    componentDidMount = async () => {
        try {
            // console.log("THIS:", this)
            const response = await axios.get('https://swapi.dev/api/starships/')
			console.log("SHIPS:", response.data.results)
            this.setState({
                starships: response.data.results
            })
        } catch(err) {
            console.log(err)
        }
    }
    render() {
        const shipsInState = this.state.starships.map((ship, i) =>{ return(
            <Starship 
                key={`ship${i}`}
                name={ship.name}
            />
        )})
        return(
            <>
                <h1>Starships</h1>
                {shipsInState}
            </>
        )
    }
}