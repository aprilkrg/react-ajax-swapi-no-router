const axios = require("axios")

const pilotsArr = []


const getPilots = async () => {
    try {
        // console.log(pilotsArr)
        const urls = pilotsArr.map((url) => {
            // console.log(url)
            axios.get(url)
        })
        // console.log("URLS", urls)
        const data = await Promise.all(urls)
        // console.log("DATA:", data)
        return data
    } catch(err) {
        console.warn(err)
    }
}

const getStarships = async () => {
    try {
        const url = "https://swapi.dev/api/starships"
        const response = await axios.get(url)
		// console.log("LENGTH:", response.data.results.length,"\nSHIPS:", response.data.results)
        response.data.results.map((ship) => {
            // console.log("PILOTS:", ship.pilots)
            if(ship.pilots.length) {
                ship.pilots.map((pilot) => {
                    pilotsArr.push(pilot)
                })
            }
        })
        // console.log(pilotsArr)
        const pilotData = getPilots()
        console.log("pilots in starship func", pilotData) // returns pending promise
        const data = await Promise.all(pilotData)
        console.log("data:", data)
    } catch (err) {
        console.warn(err)
    }
}
getStarships()
