export async function card(name, location, qty, image) {
    const contentRow = `
    <div class="col-4 ">
        <div class="card shadow-lg" style="width: 18rem; border: 1px solid grey;" ">
        <div class="card-body d-flex justify-content-center">
            <img src="${image}" class="card-img-top img-fluid" alt="..." style="height:150px; width:160px;">
        </div>
        
        <div class="card-body">
            <h5 class="card-title text-center">${name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Jumlah: ${qty}</li>
            <li class="list-group-item">Lokasi: ${location}</li>
        </ul>
    </div>
    </div>
    `

    document.body.querySelector('#rowBox').innerHTML += contentRow
}
