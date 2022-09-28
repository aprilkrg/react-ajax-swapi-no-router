import React, { Component } from "react"
import axios from "axios"

export default class Starships extends Component {
    state = {
        starships: []
    }

    // componentDidMount = async () => {
    async componentDidMount() {
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
        
        return(
            <>
                <h1>Starships</h1>
            </>
        )
    }
}