import Humain from "./Humain.js";
import Lieux from "./lieux.js";
import Doctor from "./doctor.js";

class Patients extends Humain {
    constructor(nom, maladie, argent, poche, etatSante, traitement){
        super(nom, argent)
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.poche = poche 
        this.etatSante = etatSante
        this.traitement = traitement
        this.goTo = (depart, arriver) => {
            let phraseDepart = `${this.nom} est actuelement a ${depart} et part vers ${arriver}`
            let phraseArrive = `${this.nom} est arriver a ${arriver}`
            console.log(phraseDepart);
            console.log(phraseArrive);
        }
        this.takeCare = (a) => {
            if (a.argent >= a.traitement[a]) {
                return "tu a droit a ton traitement"
            }else{
                return "tu n'a pas droit a ton traitement"
            }
        }
    }
}

let marcus = new Patients("Marcus", "mal indenté", 100, "vide", "malade", [])
let optimus = new Patients("Optimus", "unsave", 200, "vide", "malade", [])
let sangoku = new Patients("Sangoku", "404", 80, "vide", "malade", [])
let darthVader = new Patients("DarthVader", "azmatique", 110, "vide", "malade", [])
let semiColon = new Patients("SemiColon", "syntaxError", 60, "vide", "malade", [])
Patients = [marcus, optimus, sangoku, darthVader, semiColon]

let consultations = 50

let traitements = [
    {traitement : "ctrl+maj+f" , prix : 60},
    {traitement : "saveOnFocusChange" , prix : 100},
    {traitement : "checkLinkRelation" , prix : 35},
    {traitement : "ventoline" , prix : 40},
    {traitement : "f12+doc" , prix : 20}
]

export default Patients