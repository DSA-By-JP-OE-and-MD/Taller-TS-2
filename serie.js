export class serie {
    constructor(pId, pNombre, pCanal, pNumTemp, pDesc, pLink, pImagen) {
        this.id = pId;
        this.nombre = pNombre;
        this.numTemp = pNumTemp;
        this.canal = pCanal;
        this.desc = pDesc;
        this.link = pLink;
        this.imagen = pImagen;
    }
    getId() {
        return this.id;
    }
    getNombre() {
        return this.nombre;
    }
    getNumTemp() {
        return this.numTemp;
    }
    getCanal() {
        return this.canal;
    }
    getDesc() {
        return this.desc;
    }
    getLink() {
        return this.link;
    }
    getImagen() {
        return this.imagen;
    }
}
