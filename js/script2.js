import { card } from './card.js'
async function getData() {
    const response = await fetch('./../db/data2.json')
    const data = await response.json()
    console.log(data)

    data.forEach(data => {
        console.log(data.name)
        card(data.name, data.location, data.qty, data.img)
    })
}
getData()


