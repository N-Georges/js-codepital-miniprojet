import Humain from "./Humain.js";
import chat from "./chat.js";
import Patients from "./patients.js";
class Doctor extends Humain{
    constructor(nom, argent, cabinet){
        super(nom, argent)
        this.nom = nom
        this.argent = argent
        this.cabinet = cabinet
        // this.salleAttente =  salleAttente
        this.diagnostique = (a) => {
            switch (a.maladie) {
                case diagnostique[0].maladie:
                    a.traitement.push(diagnostique[0].traitement)
                    a.traitement.push(traitements[0].prix)
                    console.log(`la maladie de ${a.nom} est ${diagnostique[0].maladie} et son traitement a prendre est ${diagnostique[0].traitement} et son prix coute ${traitements[0].prix}$`); 

                    break;
                case diagnostique[1].maladie:
                    a.traitement.push(diagnostique[1].traitement)
                    a.traitement.push(traitements[1].prix)
                    console.log(`la maladie de ${a.nom} est ${diagnostique[1].maladie} et son traitement a prendre est ${diagnostique[1].traitement} et son prix coute ${traitements[1].prix}$`);

                    break;
                case diagnostique[2].maladie:
                    a.traitement.push(diagnostique[2].traitement)
                    a.traitement.push(traitements[2].prix)
                    console.log(`la maladie de ${a.nom} est ${diagnostique[2].maladie} et son traitement a prendre est ${diagnostique[2].traitement} et son prix coute ${traitements[2].prix}$`);
                    
                    break;
                case diagnostique[3].maladie:
                    a.traitement.push(diagnostique[3].traitement)
                    a.traitement.push(traitements[3].prix)
                    console.log(`la maladie de ${a.nom} est ${diagnostique[3].maladie} et son traitement a prendre est ${diagnostique[3].traitement} et son prix coute ${traitements[3].prix}$`);
                    
                    break;
                case diagnostique[4].maladie:
                    a.traitement.push(diagnostique[4].traitement)
                    a.traitement.push(traitements[4].prix)
                    console.log(`la maladie de ${a.nom} est ${diagnostique[4].maladie} et son traitement a prendre est ${diagnostique[4].traitement} et son prix coute ${traitements[4].prix}$`); 

                    break;
                default:
                    break;
            }

        }

        this.patientIn = (a) => {
            this.cabinet.push(a.nom)
            console.log(this.cabinet);
            console.log(`${a.nom} entre dans le cabinet du docteur ${doctor.nom}`);
        }
        this.patientOut = (a) => {
            this.cabinet.splice([1])
            console.log(`${doctor.nom} a terminer la consultation de ${a.nom}\n${a.nom} sort du cabinet` );
        }
    }
}

let doctor = new Doctor("Debugger", 0, [chat])

let diagnostique = [
    {maladie : "mal indenté", traitement : "ctrl+maj+f"},
    {maladie : "unsave", traitement : "saveOnFocusChange"},
    {maladie : "404", traitement : "checkLinkRelation"},
    {maladie : "azmatique", traitement : "ventoline"},
    {maladie : "syntaxError", traitement : "f12+doc"}
]
let traitements = [
    {traitement : "ctrl+maj+f" , prix : 60},
    {traitement : "saveOnFocusChange" , prix : 100},
    {traitement : "checkLinkRelation" , prix : 35},
    {traitement : "ventoline" , prix : 40},
    {traitement : "f12+doc" , prix : 20}
]


/////////////////////////////////// test unitaire /////////////////////////////// 
// console.log(doctor.cabinet);

// doctor.cabinet.push(Patients[0])


export default Doctor