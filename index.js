const main = document.querySelector("main");


const url = "http://ergast.com/api/f1/current/drivers.json"
fetch(url)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        const drivers = parsedResponse.MRData.DriverTable.Drivers.map(driver => {
            return {
                name: `${driver.givenName} ${driver.familyName}`,
                url: driver.url,
                nationality: driver.nationality
            }
        }).map(driver => {
            const $driver = document.createElement("div");
            $driver.innerHTML =`
                <p><a href="${driver.url}">${driver.name}</a><br>${driver.nationality}</p>
            `
            return $driver
        }).forEach($driver => {
            main.append($driver)
        })
        


        console.log(drivers)
    }).catch(error => {
        console.error(error.message)
    })
