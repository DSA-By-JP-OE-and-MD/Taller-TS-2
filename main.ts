import { series } from "./data.js"
import { serie } from "./serie.js";
let seriesTbody: HTMLElement = document.getElementById('TSeries')!; // Nodo tbody que tiene el id="courses"
let CardSerie: HTMLElement = document.getElementById("Event")!;


renderSeriesInTable(series);
calcularPromedioTemp(series);

function renderSeriesInTable(series: serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.getId()}</td>
                            <td>${s.getNombre()}</td>
                            <td>${s.getCanal()}</td>`;
    trElement.addEventListener("click", function () { CardSerie.innerHTML = `<img class="img-fluid" src=${s.getImagen()}"><h1 class="card-title">${s.getNombre()}</h1><p class="card-text">${s.getDesc()}</p> <p>Numero de temporadas: ${s.getNumTemp()}</p><a href=${s.getLink()} class="card-link">${s.getLink()}</a>`; });
    seriesTbody.appendChild(trElement);
  });
}

function calcularPromedioTemp(series: serie[]): void {
  let prom: number = 0;
  let cont: number = 0;
  let trElement = document.createElement("tr");
  series.forEach(s => {
    cont = cont + 1;
    prom = prom + s.getNumTemp();
  });
  prom = prom / cont;
  trElement.innerHTML = `<td> Promedio de temporadas: ${prom} </td>`
  seriesTbody.appendChild(trElement);
}
