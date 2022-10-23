export class serie {

    public nombre: string;
    public id: Number;
    public numTemp: Number;
    public canal: string;
    public desc: string;
    public link: string;
    public imagen: string;



    public constructor(pId: Number, pNombre: string, pCanal: string, pNumTemp: Number, pDesc: string, pLink: string, pImagen: string) {
        this.id = pId;
        this.nombre = pNombre;
        this.numTemp = pNumTemp;
        this.canal = pCanal;
        this.desc = pDesc;
        this.link = pLink;
        this.imagen = pImagen;
    }


}