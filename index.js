const main = document.querySelector("main");
const spinner = document.querySelector(".spinner")

/*function addDriverImage(driver) {
    const name = `${driver.name[0].toUpperCase()}${driver.name.slice(1)}`;
    const div =document.createElement("div")
    div.innerHTML = `
    <figure>
        <img src="${driver}"
    `
}*/

const url = "http://ergast.com/api/f1/current/drivers.json"
fetch(url)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {

        const drivers = parsedResponse.MRData.DriverTable.Drivers.map(driver => {
            return {
                name: `${driver.givenName} ${driver.familyName}`,
                url: driver.url
            }
        })


        console.log(drivers)
    }).catch(error => {
        console.error(error.message)
    })