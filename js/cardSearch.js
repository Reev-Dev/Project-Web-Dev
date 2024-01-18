import { card } from "./card.js"
const url = window.location.search
const urlParams = new URLSearchParams(url)
const getQuery = urlParams.get('query')

console.log(getQuery)

async function getDataJson() {
    const response = await fetch('/../db/data2.json')
    const data = await response.json()

    const dataFilter = data.filter((data) => data.name.toLowerCase().includes(getQuery.toLowerCase()))


    if (dataFilter.length === 0) {
        document.getElementById('container-not-found').style.display = 'block'
    } else {
        dataFilter.forEach(data => {
            card(data.name, data.location, data.qty, data.img)
        })
    }

}

getDataJson()

