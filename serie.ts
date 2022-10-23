export class serie {

    public nombre: string;
    public id: number;
    public numTemp: number;
    public canal: string;
    public desc: string;
    public link: string;
    public imagen: string;



    public constructor(pId: number, pNombre: string, pCanal: string, pNumTemp: number, pDesc: string, pLink: string, pImagen: string) {
        this.id = pId;
        this.nombre = pNombre;
        this.numTemp = pNumTemp;
        this.canal = pCanal;
        this.desc = pDesc;
        this.link = pLink;
        this.imagen = pImagen;
    }

    public getId(){
        return this.id;
    }

    public getNombre(){
        return this.nombre;
    }

    public getNumTemp(){
        return this.numTemp;
    }

    public getCanal(){
        return this.canal;
    }

    public getDesc(){
        return this.desc;
    }

    public getLink(){
        return this.link;
    }

    public getImagen(){
        return this.imagen;
    }
}