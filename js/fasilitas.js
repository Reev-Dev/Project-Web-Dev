


const heroContent = document.getElementById("heroContent");
let table = document.createElement("div");
table.classList.add("table");

heroContent.appendChild(table);

async function getTable() {
  const data = await fetch("./../db/data.json");
  const dataJson = await data.json();
  console.log(dataJson);
  dataJson.cards[0].facilities.forEach((element) => {
    getAllTable(element.title, element.qty);
  });
  dataJson.cards[1].inventory.forEach((element) => {
    getTableInventory(element.name)
  });
}
getTable();

const getAllTable = (location, qty) => {
  let cardContent = `
    <div class="container table">
    <div class="table-item">
        <div class="table-left d-flex">
          <div>
            <img src="assets/lab-image-full.jpg" alt="">
          </div>
          <div class="title-item">
            <div class="item-name">
              <h1>${location}</h1>
            </div>
            <div class="item-amount">
              <h3>Jumlah : ${qty}</h3>
            </div>
          </div>
        </div>
        <div class="inventory">
          <div class="title-inventory">
            <h4>Inventaris</h4>
          </div>
          <div class="list-inventory">
            <div class="list-column">
              <h6>Meja Guru</h6>
              <h6>Kursi Guru</h6>
              <h6>Meja Murid</h6>
            </div>
            <div class="list-column">
              <h6>Kursi Murid</h6>
              <h6>Komputer</h6>
              <h6>Laptop</h6>
            </div>
            <div class="list-column">
              <h6>Sapu</h6>
              <h6>Pengki</h6>
              <h6>Spidol</h6>
            </div>
            <div class="list-column">
              <h6>Proyektor</h6>
              <h6>AC</h6>
              <h6>White Board</h6>
            </div>
          </div>
        </div>
      </div>
      </div>`;
  table.innerHTML += cardContent;
}
