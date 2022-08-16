import { getWalkerCities, getCities } from "./database.js"

const walkerCities = getWalkerCities ()
const cities = getCities ()


export const filterWalkerCitiesByWalker = (walker) => {
    const assignments = []
    for (const assignment of walkerCities) {
        if (assignment.walkerId === walker.id) {  
            assignments.push(assignment)
        }
    }

    return assignments
} 
// const myTempObj = {
//     id: 5
// }
// const walkinSomeDogs = filterWalkerCitiesByWalker(myTempObj)

 export const assignedCityNames = (assignments) => {
    let cityNames = ""
    for (const assignment of assignments) {
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                cityNames = `${cityNames} and ${city.name}`
            }
        }
    }
    return cityNames
}