import { series } from "./data.js"
import { serie } from "./serie.js";
let seriesTbody: HTMLElement = document.getElementById('TSeries')!; // Nodo tbody que tiene el id="courses"


renderSeriesInTable(series);
calcularPromedioTemp(series);
function renderSeriesInTable(series: serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML =   `<td> <img src="${s.getImagen()}"></td>
                            <td>${s.getId()}</td>
                            <td>${s.getNombre()}</td>
                            <td>${s.getCanal()}</td>
                            <td>${s.getDesc()}</td>
                            <td>${s.getNumTemp()}</td>
                            <td>${s.getLink()}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function calcularPromedioTemp(series: serie[]): void{
    let prom: number = 0;
    let cont: number = 0;
    let trElement = document.createElement("tr");
    series.forEach(s => {
        cont = cont+1;
        prom = prom + s.getNumTemp();
    });
    prom = prom/cont;
    trElement.innerHTML = `<td> Promedio de temporadas: ${prom} </td>`
    seriesTbody.appendChild(trElement);
}
