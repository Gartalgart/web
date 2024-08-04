const wordComputer = [
    "arbre", "maison", "chat", "chien", "école", "voiture", "bicyclette", "ordinateur", "téléphone", "livre",
    "plage", "montagne", "rivière", "forêt", "jardin", "fleur", "soleil", "lune", "étoile", "ciel",
    "nuage", "pluie", "neige", "vent", "orage", "cuisine", "salon", "chambre", "bureau", "salle de bain",
    "porte", "fenêtre", "toit", "mur", "sol", "plafond", "chaise", "table", "lit", "armoire",
    "miroir", "lavabo", "douche", "baignoire", "réfrigérateur", "four", "micro-ondes", "casserole", "poêle", "couteau",
    "fourchette", "cuillère", "assiette", "verre", "tasse", "bol", "bouteille", "carton", "sac", "chaussure",
    "pantalon", "chemise", "pull", "veste", "manteau", "écharpe", "chapeau", "gants", "montre", "bracelet",
    "collier", "boucles d'oreilles", "lunettes", "sac à dos", "valise", "parapluie", "vélo", "scooter", "moto", "camion",
    "bus", "train", "avion", "bateau", "hélicoptère", "fusée", "ambulance", "pompier", "police", "docteur",
    "infirmière", "dentiste", "pharmacie", "hôpital", "église", "mosquée", "temple", "banque", "poste", "mairie"
]

const sentenceComputer = [
    "Le chat dort.", "La maison est grande.", "Il fait beau aujourd'hui.", "J'aime lire des livres.", "La voiture est rapide.",
    "Il pleut dehors.", "Elle a un joli sourire.", "Le soleil brille.", "Nous allons à la plage.", "Les enfants jouent dans le parc.",
    "J'ai acheté du pain.", "Le café est chaud.", "Je vais au travail.", "Elle aime les fleurs.", "Le chien court.",
    "Il est temps de dormir.", "La lune est pleine.", "Ils sont amis.", "Nous mangeons du gâteau.", "Le jardin est vert.",
    "Je vois un oiseau.", "Elle danse bien.", "Il chante une chanson.", "Le film est intéressant.", "Je prends une photo.",
    "Elle porte une robe rouge.", "Il lit un journal.", "Nous faisons un pique-nique.", "Le lac est calme.", "Il écrit une lettre.",
    "Elle dessine un arbre.", "Le livre est sur la table.", "Ils regardent la télévision.", "Je bois de l'eau.", "Nous jouons au football.",
    "Le vent souffle fort.", "Elle aime cuisiner.", "Il conduit une moto.", "Le marché est animé.", "Nous visitons un musée.",
    "La forêt est dense.", "Elle écoute de la musique.", "Il porte un chapeau.", "La rue est vide.", "Nous partons en voyage.",
    "Le train arrive à l'heure.", "Elle fait du vélo.", "Il coupe du bois.", "Le ciel est bleu.", "Nous nageons dans la piscine.",
    "Elle lit un poème.", "Il bricole dans le garage.", "La salle de classe est silencieuse.", "Nous écrivons des cartes postales.",
    "Le bébé dort dans son berceau.", "Elle fait du shopping.", "Il travaille dans le jardin.", "Le dîner est prêt.", "Nous regardons les étoiles.",
    "Elle se brosse les cheveux.", "Il se rase le matin.", "Le chat grimpe à l'arbre.", "Nous jouons aux cartes.", "Elle fait de la peinture.",
    "Il joue du piano.", "Le bus est en retard.", "Nous écoutons la radio.", "Elle arrose les plantes.", "Il répare la voiture.",
    "Le bateau navigue sur la mer.", "Nous allons au cinéma.", "Elle fait du yoga.", "Il nettoie la maison.", "La fête commence.",
    "Nous allons à l'école.", "Elle joue avec le chien.", "Il prépare le petit déjeuner.", "Le magasin est ouvert.", "Nous faisons une promenade.",
    "Elle chante sous la douche.", "Il regarde un match de football.", "Le parc est calme.", "Nous cueillons des fleurs.", "Elle fait une sieste.",
    "Il joue aux échecs.", "Le concert commence bientôt.", "Nous mangeons des fruits.", "Elle lit une histoire.", "Il regarde par la fenêtre.",
    "Le téléphone sonne.", "Nous décorons la maison.", "Elle regarde un film.", "Il fait une randonnée.", "Le marché est fermé.",
    "Nous préparons le déjeuner.", "Elle écrit dans son journal.", "Il joue au tennis.", "Le train quitte la gare.", "Nous visitons des amis.",
    "Elle dessine des animaux.", "Il fait un puzzle.", "Le soleil se couche.", "Nous prenons des photos.", "Elle fait de la couture.",
    "Il bricole une étagère.", "Le vent se calme.", "Nous faisons du camping.", "Elle fait un gâteau.", "Il regarde des vidéos."
];


function getRandomWord(wordComputer, numWords){
    const shuffled = wordComputer.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, numWords)
}

function getRandomSentence(sentenceComputer, numSentences){
    const shuffled = sentenceComputer.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, numSentences)
}

