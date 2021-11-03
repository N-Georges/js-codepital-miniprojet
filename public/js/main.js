import chat from "./modules/chat.js";
import Doctor from "./modules/doctor.js";
import Humain from "./modules/Humain.js";
import Patients from "./modules/patients.js";
import Lieux from "./modules/lieux.js"


//////////////////////// Instance ///////////////
// instance de la classe Doctor
let doctor = new Doctor("Debugger", 0, [chat])
let consultation = 50
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

// initialisation des patients dans la salle d'attente
Lieux[0].personnnes.push(Patients)
console.log(`tous patients sont en ${Lieux[0].nom} il y a ${Patients.length} patients`);
console.log(Lieux[0].personnnes)

// //////////////////////////////////////////////////////////////    version forEach     //////////////////////////////////////////////////////////////////////////////////////////////////////////////
let paye = (a, cout) => {
    // let a = consultations
    a.argent = a.argent - cout
    console.log(`${a.nom} a payer la consultation : ${cout}$`);
    doctor.argent += 50
    console.log(`portefeuille du docteur ${doctor.nom} : ${doctor.argent}`);
}
let goTo = (a, depart, arriver) => {
    let phraseDepart = `${a.nom} est actuelement a ${depart.nom} et part vers ${arriver.nom}`
    let phraseArrive = `${a.nom} est arriver a ${arriver.nom}`
    arriver.personnes.push(a.nom)
    console.log(phraseDepart);
    console.log(phraseArrive);
    console.log(arriver.personnes);
}

let patientOutPharma = (a, arriver) => {
    arriver.personnes.splice(0, 1)
}
let takeCare = (a) => {
    if (a.traitement[1] > a.argent) {
        console.log("tu a droit a ton traitement\ntu est guerris!");
        a.poche = a.traitement[0]
        console.log("ta poche contient ton traitement:"+" "+ a.poche +" "+"\nA bientot!");

    }else{
        console.log(`tu n'a pas droit a ton traitement car tu n'a que ${a.argent} et ton traitement coute ${a.traitement[1]}$`); 
        console.log("ta poche est:"+" "+a.poche);
        cimetiere.personnes.push(a.nom)
        pharmacie.personnes.splice(1)
        console.log("qui est a la pharmacie:"+" "+pharmacie.personnes);
        console.log("qui est a la au cimetiere:"+" "+cimetiere.personnes);

    }
}
let salleAttente = {nom :"salleAttente", personnes :[]}
let cabinet = {nom :"cabinet", personnes :[]}
let cimetiere = {nom :"cimetiere", personnes :[]}
let pharmacie = {nom :"pharmacie", personnes :[]}

let lieux = [salleAttente, cabinet, cimetiere, pharmacie]
let marcus = {nom : "Marcus", maladie :"mal indenté", argent : 100, poche : "vide", etatSante: "malade", traitement: []}
let optimus = {nom :"Optimus", maladie :"unsave", argent :200, poche :"vide", etatSante:"malade", traitement:[]}
let sangoku = {nom :"Sangoku", maladie :"404", argent :80, poche :"vide", etatSante:"malade", traitement:[]}
let darthVader = {nom :"DarthVader", maladie :"azmatique", argent :110, poche :"vide", etatSante:"malade", traitement:[]}
let semiColon = {nom :"SemiColon", maladie :"syntaxError", argent :60, poche :"vide", etatSante:"malade", traitement:[]}
let Patient = [marcus, optimus, sangoku, darthVader, semiColon]

Patient.forEach(el => {
    doctor.patientIn(el)
    chat.miaul()
    doctor.diagnostique(el)
    paye(el, consultation)
    doctor.patientOut(el)
    goTo(el, salleAttente, pharmacie)
    patientOutPharma(el, pharmacie)
    takeCare(el)
    console.log("________________________________Patient Suivant___________________________");
});




