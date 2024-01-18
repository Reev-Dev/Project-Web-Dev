
const jumboPost = document.getElementById("jumbo-content");
let column = document.createElement("div");
column.classList.add('jumbo-post')

jumboPost.appendChild(column);

async function getData() {
    const data = await fetch("./../db/data.json");
    const dataJson = await data.json();
    console.log(dataJson);
    dataJson.cards[0].facilities.forEach((element) => {
        getAllData(element.img, element.title, element.qty);
    });
}
getData();

const getAllData = (img, title, qty) => {
    let cardContent = `
    <div class="postcard">
    <img src="${img}" alt="card-image" />
    <h4>${title}</h4>
    <h5>Jumlah : ${qty}</h5>
    <div class="info-card">
    <h6>Baik</h6>
    </div>
    </div>`;
    column.innerHTML += cardContent;
}
