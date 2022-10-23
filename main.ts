import { series } from "./data.js"
import { serie } from "./serie.js";
let seriesTbody: HTMLElement = document.getElementById('TSeries')!; // Nodo tbody que tiene el id="courses"

function renderSeriesInTable(series: serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML =   `<td>${s.imagen}</td>
                            <td>${s.id}</td>
                            <td>${s.nombre}</td>
                            <td>${s.canal}</td>
                            <td>${s.desc}</td>
                            <td>${s.numTemp}</td>
                            <td>${s.link}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

renderSeriesInTable(series);
