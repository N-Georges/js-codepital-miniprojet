import chat from "./modules/chat.js";
import Doctor from "./modules/doctor.js";
import Humain from "./modules/Humain.js";
import Patients from "./modules/patients.js";
import Lieux from "./modules/lieux.js"

/////////////////////////////////////////////////////////////////// VOIR LIGNES 246 BOUCLES FOREACH ////////////////////////////////////////////////////////////////////////
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

// // envoie du patient dans le cabinet du docteur 
// doctor.patientIn(Patients[0].nom)
// chat.miaul()
// console.log(doctor.cabinet);

// // // // diagnostique du patient
// console.log(doctor.diagnostique(Patients[0]));

// // // patient paye la consultations
// console.log(`${Patients[0].nom} a comme argent : ${Patients[0].argent}$`);
// Patients[0].paye(consultation)
// doctor.argent += consultation
// console.log(`${Patients[0].nom} reste avec comme argent : ${Patients[0].argent}$`);


// // // // docteur qui ejecte le patient du cabinet
// doctor.patientOut(Patients[0].nom)
// // // verification du contenu de cabinet
// console.log(doctor.cabinet);
// // // patients quitte le cabinet pour aller a la pharmacie 
// Patients[0].goTo(Lieux[1].nom, Lieux[3].nom)
// Lieux[3].personnnes.push(Patients[0])

// // // // verification du contenu de pharmacie
// console.log(Lieux[3].personnnes);   

// // // // verification du prix que coute le traitement du patient
// console.log(`la pharmacie dis que le traitement de ${Patients[0].nom} coute ${Patients[0].traitement[1]}$`);

// // // // verifier si le patient a assez d'argent pour acheter son traitement
// console.log(Patients[0].takeCare());
// console.log("car tu n'a que"+" "+Patients[0].argent +"$");

// // // // envoie des patients qui ne save pas acheter leur traitement
// Patients[0].goTo(Lieux[3].nom, Lieux[2].nom)
// Lieux[2].personnnes.push(Patients[0])
// console.log(Lieux[2].personnnes);


// console.log("optimus__________________________________________________________________");

// /////////////////////////////////// patient suivant optimus
// // envoie du patient dans le cabinet du docteur 
// doctor.patientIn(Patients[1].nom)
// chat.miaul()
// console.log(doctor.cabinet);

// // // // diagnostique du patient
// console.log(doctor.diagnostique(Patients[1]));

// // // patient paye la consultations
// console.log(`${Patients[1].nom} a comme argent : ${Patients[1].argent}$`);
// Patients[1].paye(consultation)
// doctor.argent += consultation
// console.log(`${Patients[1].nom} reste avec comme argent : ${Patients[1].argent}$`);


// // // // docteur qui ejecte le patient du cabinet
// doctor.patientOut(Patients[1].nom)
// // // verification du contenu de cabinet
// console.log(doctor.cabinet);
// // // patients quitte le cabinet pour aller a la pharmacie 
// Patients[1].goTo(Lieux[1].nom, Lieux[3].nom)
// Lieux[3].personnnes.push(Patients[1])

// // // // verification du contenu de pharmacie
// console.log(Lieux[3].personnnes);   

// // // // verification du prix que coute le traitement du patient
// console.log(`la pharmacie dis que le traitement de ${Patients[1].nom} coute ${Patients[1].traitement[1]}$`);

// // // // verifier si le patient a assez d'argent pour acheter son traitement
// console.log(Patients[1].takeCare());
// console.log("car tu n'a que"+" "+Patients[1].argent +"$");

// // // // envoie des patients qui ne save pas acheter leur traitement
// Patients[1].goTo(Lieux[3].nom, Lieux[2].nom)
// Lieux[2].personnnes.push(Patients[1])
// console.log(Lieux[2].personnnes);





// console.log("sangoku___________________________________________________________________");

// /////////////////////////////////// patient suivant sangoku
// // envoie du patient dans le cabinet du docteur 
// doctor.patientIn(Patients[2].nom)
// chat.miaul()
// console.log(doctor.cabinet);

// // // // diagnostique du patient
// console.log(doctor.diagnostique(Patients[2]));

// // // patient paye la consultations
// console.log(`${Patients[2].nom} a comme argent : ${Patients[2].argent}$`);
// Patients[2].paye(consultation)
// doctor.argent += consultation
// console.log(`${Patients[2].nom} reste avec comme argent : ${Patients[2].argent}$`);


// // // // docteur qui ejecte le patient du cabinet
// doctor.patientOut(Patients[2].nom)
// // // verification du contenu de cabinet
// console.log(doctor.cabinet);
// // // patients quitte le cabinet pour aller a la pharmacie 
// Patients[2].goTo(Lieux[1].nom, Lieux[3].nom)
// Lieux[3].personnnes.push(Patients[2])

// // // // verification du contenu de pharmacie
// console.log(Lieux[3].personnnes);   

// // // // verification du prix que coute le traitement du patient
// console.log(`la pharmacie dis que le traitement de ${Patients[2].nom} coute ${Patients[2].traitement[0]}$`);

// // // // verifier si le patient a assez d'argent pour acheter son traitement
// console.log(Patients[2].takeCare());
// console.log("car tu n'a que"+" "+Patients[2].argent +"$");

// // // // envoie des patients qui ne save pas acheter leur traitement
// Patients[2].goTo(Lieux[3].nom, Lieux[2].nom)
// Lieux[2].personnnes.push(Patients[2])
// console.log(Lieux[2].personnnes);





// console.log("darthVader___________________________________________________________________");
// /////////////////////////////////// patient suivant darthVader
// // envoie du patient dans le cabinet du docteur 
// doctor.patientIn(Patients[3].nom)
// chat.miaul()
// console.log(doctor.cabinet);

// // // // diagnostique du patient
// console.log(doctor.diagnostique(Patients[3]));

// // // patient paye la consultations
// console.log(`${Patients[3].nom} a comme argent : ${Patients[3].argent}$`);
// Patients[3].paye(consultation)
// doctor.argent += consultation
// console.log(`${Patients[3].nom} reste avec comme argent : ${Patients[3].argent}$`);


// // // // docteur qui ejecte le patient du cabinet
// doctor.patientOut(Patients[3].nom)
// // // verification du contenu de cabinet
// console.log(doctor.cabinet);
// // // patients quitte le cabinet pour aller a la pharmacie 
// Patients[3].goTo(Lieux[1].nom, Lieux[3].nom)
// Lieux[3].personnnes.push(Patients[3])

// // // // verification du contenu de pharmacie
// console.log(Lieux[3].personnnes);   

// // // // verification du prix que coute le traitement du patient
// console.log(`la pharmacie dis que le traitement de ${Patients[3].nom} coute ${Patients[3].traitement[1]}$`);

// // // // verifier si le patient a assez d'argent pour acheter son traitement
// console.log(Patients[2].takeCare());
// console.log("car tu n'a que"+" "+Patients[3].argent +"$");

// // // // envoie des patients qui ne save pas acheter leur traitement
// Patients[3].goTo(Lieux[3].nom, Lieux[2].nom)
// Lieux[2].personnnes.push(Patients[3])
// console.log(Lieux[2].personnnes);



// console.log("semiColon___________________________________________________________________");
// /////////////////////////////////// patient suivant semiColon
// // envoie du patient dans le cabinet du docteur 
// doctor.patientIn(Patients[4].nom)
// chat.miaul()
// console.log(doctor.cabinet);

// // // // diagnostique du patient
// console.log(doctor.diagnostique(Patients[4]));

// // // patient paye la consultations
// console.log(`${Patients[4].nom} a comme argent : ${Patients[4].argent}$`);
// Patients[4].paye(consultation)
// doctor.argent += consultation
// console.log(`${Patients[4].nom} reste avec comme argent : ${Patients[4].argent}$`);


// // // // docteur qui ejecte le patient du cabinet
// doctor.patientOut(Patients[4].nom)
// // // verification du contenu de cabinet
// console.log(doctor.cabinet);
// // // patients quitte le cabinet pour aller a la pharmacie 
// Patients[4].goTo(Lieux[1].nom, Lieux[3].nom)
// Lieux[3].personnnes.push(Patients[4])

// // // // verification du contenu de pharmacie
// console.log(Lieux[3].personnnes);   

// // // // verification du prix que coute le traitement du patient
// console.log(`la pharmacie dis que le traitement de ${Patients[4].nom} coute ${Patients[4].traitement[1]}$`);

// // // // verifier si le patient a assez d'argent pour acheter son traitement
// console.log(Patients[4].takeCare(Patients[4].traitement[1]));
// console.log("car tu n'a que"+" "+Patients[4].argent +"$");

// // // // envoie des patients qui ne save pas acheter leur traitement
// Patients[4].goTo(Lieux[3].nom, Lieux[2].nom)
// Lieux[2].personnnes.push(Patients[4])
// console.log(Lieux[2].personnnes);



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




