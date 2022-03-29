//Exercice 3
// Créer une phrase à l'aide du tableau mutlidimensionnel et des backticks
let tabMot = [
    ["hello", "je", "j'ai", "au revoir"],
    ["ans", "dans", "soif", "faim", "café"],
    ["toujours", "jamais", "matin", "soir"],
    ["parfois", "élève", "cours", "développement web"],
    ["ordinateur", "film", "nuit", "sommeil"],
    ["clavier", "téléphone", "voiture", "trajet"]
];
console.log(`${tabMot[0][0]} ${tabMot[0][1]} bois du ${tabMot[1][4]} dans ma ${tabMot[5][2]}.`);
console.log(`${tabMot[0][0]} ${tabMot[0][2]} ${tabMot[2][0]} ${tabMot[1][3]} durant le ${tabMot[3][2]} de ${tabMot[3][3]}.`);
// afficher tous les elements du tableau

for(let i = 0; i < tabMot.length; i++){
    for(let j = 0; j < tabMot[i].length; j++){
        console.log(tabMot[i][j]);
    }
}
