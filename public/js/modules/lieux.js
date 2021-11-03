import Patients from "./patients.js";

class Lieux {
    constructor(nom, personnnes){
        this.nom = nom
        this.personnnes = personnnes
    }
}


let salleAttente = new Lieux("salleAttente", [])
let cabinet = new Lieux("cabinet", [])
let cimetiere = new Lieux("cimetiere", [])
let pharmacie = new Lieux("pharmacie", [])

Lieux = [salleAttente, cabinet, cimetiere, pharmacie]




export default Lieux