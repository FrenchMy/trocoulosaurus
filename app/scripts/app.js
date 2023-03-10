const { createApp } = Vue

createApp({
    
    data() {
        return {
            // AFFICHAGE DE SECTION - SHOW BOOLEAN
            pageAnimation: true,
            pageCarte: false,
            pageJeux: false,
            pageBestiaire: false,
            pageImmitation: false,
            rexy: false,

            // DECLARATION CARTE
            cartes: [
                {
                    nom: "Amerique-du-nord",
                    container: "ameriqueNord",
                    image: "./assets/images/carte/amerique-nord.svg",
                    classe: "carte-ameriqueNord",
                },
                {
                    nom: "Amerique-du-sud",
                    container: "ameriqueSud",
                    image: "./assets/images/carte/amerique-sud.svg",
                    classe: "carte-ameriqueSud",
                },
                {
                    nom: "Eurasie",
                    container: "eurasie",
                    image: "./assets/images/carte/eurasie.svg",
                    classe: "carte-eurasie",
                },
                {
                    nom: "Madagascar",
                    container: "madagascar",
                    image: "./assets/images/carte/madagascar.svg",
                    classe: "carte-madagascar",
                },
                {
                    nom: "Afrique",
                    container: "afrique",
                    image: "./assets/images/carte/afrique.svg",
                    classe: "carte-afrique",
                },
                {
                    nom: "Australie",
                    container: "australie",
                    image: "./assets/images/carte/australie.svg",
                    classe: "carte-australie",
                },
                {
                    nom: "Inde",
                    container: "inde",
                    image: "./assets/images/carte/inde.svg",
                    classe: "carte-inde",
                },
                {
                    nom: "Groenland",
                    container: "groenland",
                    image: "./assets/images/carte/groenland.svg",
                    classe: "carte-groenland",
                },
                {
                    nom: "Antarctique",
                    container: "antarctique",
                    image: "./assets/images/carte/antarctique.svg",
                    classe: "carte-antarctique",
                },
            ],


            // DECLARATION QUIZ
            indexQuestionCourante: 0,
            reponseCourante: null,
            questionnaireCourant: [],
            questionCourante: [],
            copieQuestionnaire: [],
            questions: [
                {
                    id: 1,
                    question: "À l'époque préhistorique, avec laquelle de ces espèces les dinosaures partageaient-ils la Terre ?",
                    image: "./assets/images/questions/1.jpg",
                    bonne: "Aucune de ces réponses",
                    options: [
                        {
                            numero: 1,
                            reponse: "Humains",
                        },
                        {
                            numero: 2,
                            reponse: "Tigres à dents de sabre",
                        },
                        {
                            numero: 3,
                            reponse: "Aucune de ces réponses",
                        },
                        
                    ]
                },
                {
                    id: 2,
                    question: "Selon la plupart des scientifiques, à quoi servait la crête de Parasaurolophus ?",
                    image: "./assets/images/questions/2.jpg",
                    bonne: "À distinguer les mâles des femelles et à communiquer.",
                    options: [
                        {
                            numero: 1,
                            reponse: "Elle servait de poignée pour attraper les dinosaures les plus turbulents et de brise-vent lors de tempêtes.",
                        },
                        {
                            numero: 2,
                            reponse: "À distinguer les mâles des femelles et à communiquer.",
                        },
                        {
                            numero: 3,
                            reponse: "À respirer sous l’eau et se gratter.",
                        },
                        
                    ]
                },
                {
                    id: 3,
                    question: "Parmi ces continents, sur lequel trouve-t-on le plus de fossiles de dinosaures ?",
                    image: "./assets/images/questions/3.jpg",
                    bonne: "Amérique du Nord",
                    options: [
                        {
                            numero: 1,
                            reponse: "Amérique du Nord",
                        },
                        {
                            numero: 2,
                            reponse: "Afrique",
                        },
                        {
                            numero: 3,
                            reponse: "Asie",
                        },
                        
                    ]
                },
                {
                    id: 4,
                    question: "Il y 2 000 ans, les premiers os de dinosaures ont été découverts en Chine. Les gens ne connaissaient pas les dinos à cette époque. Ils croyaient que c’était des os…",
                    image: "./assets/images/questions/4.jpg",
                    bonne: "Dragons",
                    options: [
                        {
                            numero: 1,
                            reponse: "Éléphants",
                        },
                        {
                            numero: 2,
                            reponse: "Dragons",
                        },
                        {
                            numero: 3,
                            reponse: "Griffons",
                        },
                        
                    ]
                },
                {
                    id: 5,
                    question: "Le plus rapide des dinosaures pouvait courir à:",
                    image: "./assets/images/questions/5.jpg",
                    bonne: "70 km/h",
                    options: [
                        {
                            numero: 1,
                            reponse: "70 km/h",
                        },
                        {
                            numero: 2,
                            reponse: "100 km/h",
                        },
                        {
                            numero: 3,
                            reponse: "40 km/h",
                        },
                        
                    ]
                },
                {
                    id: 6,
                    question: "Les bras du tyrannosaure étaient de quelle grandeur par rapport à sa tête ?",
                    image: "./assets/images/questions/6.jpg",
                    bonne: "Plus courts",
                    options: [
                        {
                            numero: 1,
                            reponse: "Plus grands",
                        },
                        {
                            numero: 2,
                            reponse: "Même grandeur",
                        },
                        {
                            numero: 3,
                            reponse: "Plus courts",
                        },
                        
                    ]
                },
                {
                    id: 7,
                    question: "Que signifie le mot « dinosaure » ?",
                    image: "./assets/images/questions/7.jpg",
                    bonne: "Terrible lézard",
                    options: [
                        {
                            numero: 1,
                            reponse: "Terrible lézard",
                        },
                        {
                            numero: 2,
                            reponse: "Gros reptile",
                        },
                        {
                            numero: 3,
                            reponse: "Monstre vert",
                        },
                        
                    ]
                },
                {
                    id: 8,
                    question: "Que mangeait le Tricératops ?",
                    image: "./assets/images/questions/8.jpg",
                    bonne: "Végétaux",
                    options: [
                        {
                            numero: 1,
                            reponse: "Viande",
                        },
                        {
                            numero: 2,
                            reponse: "Végétaux",
                        },
                        {
                            numero: 3,
                            reponse: "Poissons",
                        },
                        
                    ]
                },
                {
                    id: 9,
                    question: "Lequel de ces 3 dinosaures était carnivore ?",
                    image: "./assets/images/questions/9.jpg",
                    bonne: "Spinosaurus",
                    options: [
                        {
                            numero: 1,
                            reponse: "Protocératops",
                        },
                        {
                            numero: 2,
                            reponse: "Tricératops",
                        },
                        {
                            numero: 3,
                            reponse: "Spinosaurus",
                        },
                        
                    ]
                },
                {
                    id: 10,
                    question: "Lequel de ces dinosaures vit sous l'eau ?",
                    image: "./assets/images/questions/10.jpg",
                    bonne: "Mosasaurus",
                    options: [
                        {
                            numero: 1,
                            reponse: "Mosasaurus",
                        },
                        {
                            numero: 2,
                            reponse: "Microraptor",
                        },
                        {
                            numero: 3,
                            reponse: "Tyrannosaurus Rex",
                        },
                        
                    ]
                },
                {
                    id: 11,
                    question: "Combien de cornes à le Tricératops ?",
                    image: "./assets/images/questions/11.jpg",
                    bonne: "3",
                    options: [
                        {
                            numero: 1,
                            reponse: "1",
                        },
                        {
                            numero: 2,
                            reponse: "3",
                        },
                        {
                            numero: 3,
                            reponse: "4",
                        },
                        
                    ]
                },
                {
                    id: 12,
                    question: "Quel dinosaure a une queue en forme de massue ?",
                    image: "./assets/images/questions/12.jpg",
                    bonne: "Ankylosaure",
                    options: [
                        {
                            numero: 1,
                            reponse: "Ankylosaure",
                        },
                        {
                            numero: 2,
                            reponse: "Vélociraptor",
                        },
                        {
                            numero: 3,
                            reponse: "Tricératops",
                        },
                        
                    ]
                },
                {
                    id: 13,
                    question: "Quel évènement serait à l’origine de l’extinction des dinosaures ?",
                    image: "./assets/images/questions/13.jpg",
                    bonne: "Chute d’une météorite",
                    options: [
                        {
                            numero: 1,
                            reponse: "Éruption volcanique",
                        },
                        {
                            numero: 2,
                            reponse: "Âge de glace",
                        },
                        {
                            numero: 3,
                            reponse: "Chute d’une météorite",
                        },
                        
                    ]
                },
                {
                    id: 14,
                    question: "Combien le diplodocus pouvait mesurer en longeur ?",
                    image: "./assets/images/questions/14.jpg",
                    bonne: "40 mètres",
                    options: [
                        {
                            numero: 1,
                            reponse: "40 mètres",
                        },
                        {
                            numero: 2,
                            reponse: "60 mètres",
                        },
                        {
                            numero: 3,
                            reponse: "80 mètres",
                        },
                        
                    ]
                },
                {
                    id: 15,
                    question: "Quel dinosaure était à peine plus gros qu’une dinde.",
                    image: "./assets/images/questions/15.jpg",
                    bonne: "Microraptor",
                    options: [
                        {
                            numero: 1,
                            reponse: "Diplodocus",
                        },
                        {
                            numero: 2,
                            reponse: "Microraptor",
                        },
                        {
                            numero: 3,
                            reponse: "T-rex",
                        },
                        
                    ]
                },
                {
                    id: 16,
                    question: "Quand les premiers dinosaures seraient-ils apparus sur Terre ?",
                    image: "./assets/images/questions/16.jpg",
                    bonne: "Il y a 230 millions d’années",
                    options: [
                        {
                            numero: 1,
                            reponse: "Il y a 5 millions d’années",
                        },
                        {
                            numero: 2,
                            reponse: "Il y a 65 millions d’années",
                        },
                        {
                            numero: 3,
                            reponse: "Il y a 230 millions d’années",
                        },
                        
                    ]
                },
                {
                    id: 17,
                    question: "Laquelle de ces périodes géologiques est la plus récente ?",
                    image: "./assets/images/questions/17.jpg",
                    bonne: "Le Crétacé",
                    options: [
                        {
                            numero: 1,
                            reponse: "Le Trias",
                        },
                        {
                            numero: 2,
                            reponse: "Le Crétacé",
                        },
                        {
                            numero: 3,
                            reponse: "Le Jurassique",
                        },
                        
                    ]
                },
                {
                    id: 18,
                    question: "À quelle date remonte la découverte du premier fossile de dinosaure entier ?",
                    image: "./assets/images/questions/18.jpg",
                    bonne: "1815",
                    options: [
                        {
                            numero: 1,
                            reponse: "1920",
                        },
                        {
                            numero: 2,
                            reponse: "1815",
                        },
                        {
                            numero: 3,
                            reponse: "1609",
                        },
                        
                    ]
                },
                {
                    id: 19,
                    question: "Combien de T-Rex ont été découverts dans le monde depuis le premier en 1902 ?",
                    image: "./assets/images/questions/19.jpg",
                    bonne: "Une cinquantaine",
                    options: [
                        {
                            numero: 1,
                            reponse: "Une dizaine",
                        },
                        {
                            numero: 2,
                            reponse: "Une cinquantaine",
                        },
                        {
                            numero: 3,
                            reponse: "Une centaine",
                        },
                        
                    ]
                },
                {
                    id: 20,
                    question: "Quelle était la taille des cornes du tricératops ?",
                    image: "./assets/images/questions/20.jpg",
                    bonne: "1.5m",
                    options: [
                        {
                            numero: 1,
                            reponse: "0.5m",
                        },
                        {
                            numero: 2,
                            reponse: "1.5m",
                        },
                        {
                            numero: 3,
                            reponse: "2m",
                        },
                        
                    ]
                },
            ],
            messageResultats: [
                {
                    message: "Ooooh nooooon...",
                    image: "./assets/images/questions/triste.svg",
                },
                {
                    message: "Cool, c'est un bon résultat.<br> Bravo!",
                    image: "./assets/images/questions/bonne.svg",
                },
                {
                    message: "Super, tu as une super connaissance des dinosaures.<br> Tu REX !!!",
                    image: "./assets/images/questions/wow.svg",
                },

            ],
            bonneReponse: null,
            questionValide: 0,
            valideQuestionSuivante: false,
            quizCommence: null,
            quizComplet: false,
            boutonQuestion: "Valider",
            messageQuiz: null,
            imageQuiz: null,
            resultat: null,

            // DECLARATION KONVA
            konvaCommence: null,
            pretAImprimer: null,

            // DECLARATION IMMITATION
            immitationCommence: null,
            

            // DECLARATION BESTIAIRE
            derniereLettre: '',
            dinoActive: null,
            modalDino: null,
            coloriageDino: null,
            sonActive: false,
            dinosaures: [
                {
                    nom: "apatosaurus",
                    alimentation: "Herbivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "25 tonnes",
                    taille: "30 mètres",
                    description: "Découverts dans les États de l'ouest et du centre des États-Unis. L'Apatosaure était un dinosaure herbivore appartenant à la famille des Diplodocidae. Il vivait à la fin du Jurassique, il y a environ 156 à 145 millions d'années. Il était caractérisé par un long cou et une queue effilée, qui lui permettaient d'atteindre les feuilles et les branches les plus hautes pour se nourrir. Il avait également des dents larges et plates pour broyer les végétaux. Les pattes étaient relativement courtes et larges pour soutenir son corps massif. <br><br>L'Apatosaure était un animal solitaire et lent, et était sans doute vulnérable aux attaques des prédateurs tels que l'Allosaurus. Cependant, il était également capable de se défendre avec sa queue en la fouettant avec force. Ses pieds massifs devaient supporter un poids corporel équivalent à celui de 4 éléphants. Les griffes robustes de gigantesques quadrupèdes herbivores comme l'Apatausore devaients certes contribuer au support de leurs poids colossal, mais aussi à creuser des trous pour pondre leurs oeufs.",
                    imagePath: "./assets/images/dinosaures/apatosaurus.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/apatosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/apatosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-prairie.mp4",
                    animationDino: "./assets/animations/dinosaures/apatosaurus.webm",
                },
                {
                    nom: "brachiosaurus",
                    alimentation: "Herbivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "50 tonnes",
                    taille: "30 mètres",
                    description: "Le Brachiosaure était un dinosaure herbivore appartenant à la famille des Sauropodomorpha. Il vivait à la fin du Jurassique, il y a environ 156 à 145 millions d'années. Il mesurait environ 26 à 30 mètres de longueur et pesait environ 80 tonnes. Il était caractérisé par un long cou et des pattes très longues, ce qui lui permettait de se nourrir de feuilles et de branches très hautes sans avoir à se déplacer. Il avait une tête petite et allongée avec des dents larges et plates pour broyer les végétaux. <br><br>Le Brachiosaure était un des plus grands dinosaures de tous les temps, et son long cou lui donnait un aspect distinctif et gracieux. Les scientifiques pensent que le Brachiosaure était un animal paisible, et qu'il vivait en grandes populations. Quarante-cinq spécimens fossiles sont recensés en 2008. Découverts dans le Colorado. ",
                    imagePath: "./assets/images/dinosaures/brachiosaurus.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/brachiosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/brachiosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-prairie.mp4",
                    animationDino: "./assets/animations/dinosaures/brachiosaurus.webm",
                },
                {
                    nom: "brontosaurus",
                    alimentation: "Herbivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "20 tonnes",
                    taille: "20 mètres",
                    description: "Le Brontosaure est en réalité un nom erroné couramment utilisé pour décrire un dinosaure herbivore appartenant à la famille des Diplodocidae. Il est souvent confondu avec l'Apatosaure, qui est son nom scientifique correct. Les caractéristiques du Brontosaure (Apatosaure) incluent une longueur de 20 à 30 mètres, un poids de 20 à 30 tonnes, un long cou et une queue effilée pour atteindre les feuilles et les branches les plus hautes, des dents larges et plates pour broyer les végétaux, et des pattes relativement courtes et larges pour soutenir son corps massif. <br><br>Les scientifiques pensent que le Brontosaure (Apatosaure) était un animal solitaire et lent, et était sans doute vulnérable aux attaques des prédateurs tels que l'Allosaurus. Cependant, il était également capable de se défendre avec sa queue en la fouettant avec force. Dans Les Pierrafeu, Fred Pierrafeu raffole des steaks de brontosaure.",
                    imagePath: "./assets/images/dinosaures/brontosaurus.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/brontosaure.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/brontosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-prairie.mp4",
                    animationDino: "./assets/animations/dinosaures/brontosaurus.webm",
                },
                {
                    nom: "camptosaurus",
                    alimentation: "Herbivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "2.5 tonnes",
                    taille: "8 mètres",
                    description: "le Camptosaurus était un dinosaure herbivore appartenant à la famille des Camarasauridae. Il vivait à la fin du Jurassique, il y a environ 156 à 145 millions d'années. Il mesurait environ 9 à 15 mètres de longueur et pesait entre 5 à 10 tonnes. Il était caractérisé par un long cou et une petite tête, des jambes robustes et une queue massive. Il avait des dents larges et plates pour broyer les végétaux. <br><br>Le Camptosaurus était un animal paisible et vivait en grandes populations. Les scientifiques pensent qu'il se nourrissait principalement de feuilles et de branches basses, et que son corps était adapté pour un mode de vie terrestre et lent. Les os de son crâne étaient épais, ce qui suggère qu'il pouvait résister aux attaques de prédateurs tels que l'Allosaurus.",
                    imagePath: "./assets/images/dinosaures/camptosaurus.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/camptosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/camptosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-jungle.mp4",
                    animationDino: "./assets/animations/dinosaures/camptosaurus.webm",
                },
                {
                    nom: "dilophosaurus",
                    alimentation: "Carnivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "400 Kg",
                    taille: "7 mètres",
                    description: "Découvert en Chine et en Arizona. Le Dilophosaurus était un dinosaure carnivore de petite taille appartenant à la famille des Dilophosauridae. Il vivait à la fin du Triasique, il y a environ 201 à 145 millions d'années. Il mesurait environ 2 à 7 mètres de longueur et pesait entre 40 à 90 kg. Il était caractérisé par des crêtes osseuses sur sa tête, des jambes musclées et une queue longue et flexible. Il avait des dents pointues et des crochets sur ses mâchoires pour saisir et déchirer sa proie. <br><br>Le Dilophosaurus était un animal rapide et agile, capable de courir et de sauter pour attraper ses proies. Les scientifiques pensent qu'il se nourrissait principalement de petits animaux tels que des reptiles et des oiseaux. Il était également capable de projeter un venin toxique pour défendre son territoire et pour tuer ses proies. C'est l'un des plus anciens grands dinosaures prédateurs",
                    imagePath: "./assets/images/dinosaures/dilophosaurus.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/dilophosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/dilophosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-savanne.mp4",
                    animationDino: "./assets/animations/dinosaures/dilophosaurus.webm",
                },
                {
                    nom: "diplodocus",
                    alimentation: "Herbivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "16 tonnes",
                    taille: "25 mètres",
                    description: "Le Diplodocus était un dinosaure herbivore appartenant à la famille des Diplodocidae. Il vivait à la fin du Jurassique, il y a environ 156 à 145 millions d'années. Il était caractérisé par un long cou qui pouvait atteindre 12 mètres de long et une queue effilée d'environ 18 mètre de long et des jambes courtes et robustes. Le Diplodocus était un herbivore strict et se nourrissait principalement de feuilles et de branches hautes, qu'il pouvait atteindre en tendant son long cou. <br><br>Le Diplodocus était un animal lent et paisible, vivant en grandes populations. La structure de ses vertèbres cervicales était unique, avec des « balles » et des « sockets » qui permettaient une grande flexibilité et une portance maximale. Les scientifiques pensent également que le Diplodocus pouvait se défendre contre les prédateurs en utilisant sa queue effilée comme un fouet. <br><br>Les fossiles de Diplodocus ont été découverts pour la première fois aux États-Unis dans le Colorado et le Wyoming, à la fin du XIXe siècle. Depuis, des fossiles ont également été découverts en Europe et en Afrique. Les restes de Diplodocus sont très fréquents et abondants, ce qui a permis aux scientifiques de mieux comprendre son anatomie, sa biologie et son comportement. Le Diplodocus est l'un des dinosaures les plus populaires et les plus connus de tous les temps, et il est largement utilisé comme symbole de l'âge des dinosaures.",
                    imagePath: "./assets/images/dinosaures/diplodocus.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/diplodocus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/diplodocus.png",
                    animationFond: "./assets/animations/paysages/fond-prairie.mp4",
                    animationDino: "./assets/animations/dinosaures/diplodocus.webm",
                },
                {
                    nom: "huayangosaurus",
                    alimentation: "Herbivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "3 tonnes",
                    taille: "4.5 mètres",
                    description: "Le Huayangosaurus est un dinosaure stégosauriens qui vivait à la fin du Jurassique, il y a environ 156 à 145 millions d'années. C'était l’un des plus petits stégosaures. C'était un herbivore à quatre pattes et était caractérisé par une plaque osseuse en forme de pointes sur son dos et une crête osseuse sur son cou. Il a également deux grandes pointes sur ses épaules. <br><br>Les scientifiques pensent que le Huayangosaurus était un animal paisible qui vivait en petits groupes et se nourrissait de feuilles et de branches. Il était équipé de dents larges et plates pour broyer les végétaux, et de puissantes mâchoires pour les mâcher. Il avait également des jambes courtes et robustes, ce qui lui permettait de se déplacer lentement mais de manière stable. <br><br>Les fossiles de Huayangosaurus ont été découverts en Chine, où il est considéré comme l'un des premiers dinosaures stégosauriens connus. Les spécimens découverts sont très bien préservés et ont fourni aux scientifiques de nombreux détails sur son anatomie et son comportement. Le Huayangosaurus est également considéré comme un ancêtre possible de nombreux autres dinosaures stégosauriens, notamment les ceratopsiens.",
                    imagePath: "./assets/images/dinosaures/huayangosaurus.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/huayangosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/huayangosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-prairie.mp4",
                    animationDino: "./assets/animations/dinosaures/huayangosaurus.webm",
                },
                {
                    nom: "megalosaurus",
                    alimentation: "Carnivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "3 tonnes",
                    taille: "9 mètres",
                    description: "Le Megalosaurus était un genre de dinosaure carnivore appartenant à la famille des Tyrannosauroïdae, vivant à la fin du Jurassique en Europe. Il mesurait environ 6 à 9 mètres de long et pesait jusqu'à 3 tonnes. Il avait un crâne allongé et une mâchoire puissante équipée de dents acérées. Le Megalosaurus était un prédateur redoutable, se nourrissant probablement de reptiles, de petits dinosaures et d'autres animaux. Il a été l'un des premiers dinosaures décrits et étudiés par les scientifiques, son nom signifiant 'lézard géant'.",
                    imagePath: "./assets/images/dinosaures/megalosaurus.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/megalosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/megalosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-savanne.mp4",
                    animationDino: "./assets/animations/dinosaures/megalosaurus.webm",
                },
                {
                    nom: "stegosaurus",
                    alimentation: "Herbivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "3 tonnes",
                    taille: "9 mètres",
                    description: "Le Stegosaurus était un genre de dinosaure herbivore appartenant à la famille des Stegosauridae, vivant à la fin du Jurassique en Amérique du Sud et en Europe. Il mesurait environ 4 à 9 mètres de long et pesait environ 2 à 3 tonnes. Il était caractérisé par sa carapace de plaque osseuse sur le dos et ses épines longues et pointues sur la queue. Le Stegosaurus se nourrissait probablement de feuilles et de branches d'arbres et d'arbustes à l'aide de sa petite tête et de sa bouche béante. <br><br>On pense que les plaques sur son dos pouvaient servir de protection ou de moyen de signalisation pour les comportements sociaux et la défense. Le plus grand des dinosaures à plaques. L’un des dinosaures qui ont inspirés Godzilla.",
                    imagePath: "./assets/images/dinosaures/stegosaurus.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/stegosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/stegosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-savanne.mp4",
                    animationDino: "./assets/animations/dinosaures/stegosaurus.webm",
                },
                {
                    nom: "allosaurus",
                    alimentation: "Carnivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "2 tonnes",
                    taille: "13 mètres",
                    description: "Découverts dans la formation de Morrison.L'Allosaurus était un grand dinosaure prédateur de la famille des théropodes, qui vivait à la fin du Jurassique, il y a environ 156 à 145 millions d'années. Il avait un crâne massif avec 19 dents incurvées et crantées juste dans la mâchoire supérieure, adaptées pour déchirer sa proie. Les pattes arrière étaient plus longues et plus musclées que les pattes avant, ce qui lui donnait une posture élancée. Les griffes acérées sur ses pattes avant et arrière étaient utilisées pour attraper et tenir sa proie. <br><br>L'Allosaurus était un animal redoutable de son époque, mais était également en concurrence avec d'autres grands prédateurs tels que le Stegosaurus et le Ceratosaurus. Il y a des fossils d'allosaurus au 'Dinosaur National Monument' au État-Unis d'Amérique.",
                    imagePath: "./assets/images/dinosaures/allosaurus.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/allosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/allosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-savanne.mp4",
                    animationDino: "./assets/animations/dinosaures/allosaurus.webm",
                },
                {
                    nom: "lesothosaurus",
                    alimentation: "Herbivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "20 Kg",
                    taille: "2 mètres",
                    description: "Le Lesothosaurus est un genre de dinosaures ornithischiens herbivores de la famille des Lesothosauridae. Ils ont vécu au milieu du Jurassique, il y a environ 196 à 176 millions d'années, en Afrique du Sud. Le Lesothosaurus mesuraient environ 1,5 mètre de long et pesaient environ 20 kg. Ils étaient bipèdes, avec un museau court et une mâchoire puissante pour broyer les feuilles dures et les tiges d'herbes. <br><br>Les découvertes récentes montrent également la présence de dents en crête sur leur maxillaire supérieur, ce qui les distingue de nombreux autres dinosaures herbivores de cette période. Le Lesothosaurus était un dinosaures de petite taille et est considéré comme l'un des premiers dinosaures ornithischiens.",
                    imagePath: "./assets/images/dinosaures/lesothosaurus.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/huayangosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/lesothosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-jungle.mp4",
                    animationDino: "./assets/animations/dinosaures/lesothosaurus.webm",
                },
                {
                    nom: "ozraptor",
                    alimentation: "Carnivore",
                    ere: "jurassique",
                    biome: "plaine",
                    poids: "100 Kg",
                    taille: "2 mètres",
                    description: "L'Ozraptor est un genre éteint de dinosaures theropodes appartenant à la famille des Dromaeosauridae. Ils ont vécu en Australie durant le Crétacé supérieur, il y a environ 96 à 100 millions d'années. Ozraptor était un prédateur de taille moyenne, mesurant environ 3 à 4 mètres de longueur totale. Les restes fossiles incluent des os de la cuisse, du fémur et de la hanche, indiquant une morphologie similaire à celle des dromaeosaurides connus tels que Velociraptor. <br><br>Malgré les découvertes récentes, les informations sur Ozraptor sont limitées et il reste encore beaucoup à découvrir sur cette espèce de dinosaure. Les scientifiques continuent à étudier les restes fossiles pour en apprendre davantage sur leur anatomie, leur mode de vie et leur place dans la chaîne alimentaire de leur écosystème.",
                    imagePath: "./assets/images/dinosaures/ozraptor.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/ozraptor.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/ozraptor.png",
                    animationFond: "./assets/animations/paysages/fond-savanne.mp4",
                    animationDino: "./assets/animations/dinosaures/ozraptor.webm",
                },
                {
                    nom: "archaeopteryx",
                    alimentation: "Carnivore, Insectivore",
                    ere: "jurassique",
                    biome: "aérien",
                    poids: "1 Kg",
                    taille: "50 centimètres",
                    description: "L'Archaeopteryx est un genre extinct de dinosaures bâtis comme des oiseaux qui a vécu au Jurassique inférieur, il y a environ 150 à 145 millions d'années. C'est considéré comme l'un des premiers exemples connus de l'évolution des dinosaures en oiseaux, car il présente des caractéristiques des deux groupes. L'Archaeopteryx avait des plumes et des ailes, mais également des dents, une queue osseuse et des griffes sur ses pattes, similaires à celles des dinosaures de son époque. <br><br>Les paléontologues continuent d'étudier l'Archaeopteryx pour en savoir plus sur la transition entre les dinosaures et les oiseaux. L’Archaeopteryx est le premier Dinosaure-oiseau découvert au monde.",
                    imagePath: "./assets/images/dinosaures/archaeopteryx.svg",
                    imageAlim: "./assets/images/divers/carnivore-insectivore.png",
                    effetSonor: "./assets/audios/archaeopteryx-microraptor.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/archaeopteryx.png",
                    animationFond: "./assets/animations/paysages/fond-ciel.mp4",
                    animationDino: "./assets/animations/dinosaures/archaeopteryx.webm",
                },
                {
                    nom: "rhamphorhynchus",
                    alimentation: "Piscivore, Insectivore",
                    ere: "jurassique",
                    biome: "aérien",
                    poids: "2 Kg",
                    taille: "2 mètres",
                    description: "Les Rhamphorhynchus étaient une espèce de ptérosaures volants qui ont vécu au Jurassique moyen, il y a environ 160 à 145 millions d'années. Les Rhamphorhynchus étaient des reptiles volants munis d'ailes et avaient une longue queue osseuse et une longue crête osseuse sur leur dos. Son bec avait l'air d'une lance garnie de longue dents en forme d'aiguilles. Ils mesuraient environ 2 mètre de long et ont été découverts en Allemagne. <br><br>Les Rhamphorhynchus étaient des chasseurs de petits animaux et probablement des mangeurs de poissons, comme en témoignent leurs dents pointues et leurs griffes acérées. Les spécimens fossilisés de Rhamphorhynchus sont importants pour les paléontologues qui étudient les premiers reptiles volants et l'évolution de la volonté dans les dinosaures et les oiseaux. Le 'doigt de l'aile' était 3 fois plus grand que son corps.",
                    imagePath: "./assets/images/dinosaures/rhamphorhynchus.svg",
                    imageAlim: "./assets/images/divers/piscivore-insectivore.png",
                    effetSonor: "./assets/audios/rhamphorhynchus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/rhamphorhynchus.png",
                    animationFond: "./assets/animations/paysages/fond-ciel.mp4",
                    animationDino: "./assets/animations/dinosaures/rhamphorhynchus.webm",
                },
                {
                    nom: "dimorphodon",
                    alimentation: "Piscivore, Insectivore",
                    ere: "jurassique",
                    biome: "aérien",
                    poids: "2 Kg",
                    taille: "1 mètres",
                    description: "Le Dimorphodon était une espèce de ptérosaures volants qui a vécu au Jurassique supérieur, il y a environ 165 à 150 millions d'années. Les Dimorphodons étaient des reptiles volants dotés d'ailes membraneuses et mesuraient environ 1,5 mètre de long. Ils avaient une tête allongée avec des dents acérées et des mâchoires puissantes, adaptées pour chasser de petits animaux et de poissons. Les Dimorphodons avaient également une queue osseuse pour aider à stabiliser leur vol. <br><br>Les spécimens fossilisés du Dimorphodon sont importants pour les paléontologues qui étudient l'évolution de la volée chez les reptiles volants et les premiers dinosaures volants. Son nom veut dire « Dent à deux formes » à cause de ses deux types de dents, ce qui est rare chez les reptiles.",
                    imagePath: "./assets/images/dinosaures/dimorphodon.svg",
                    imageAlim: "./assets/images/divers/piscivore-insectivore.png",
                    effetSonor: "./assets/audios/dimorphodon.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/dimorphodon.png",
                    animationFond: "./assets/animations/paysages/fond-ciel.mp4",
                    animationDino: "./assets/animations/dinosaures/dimorphodon.webm",
                },
                {
                    nom: "pterodactyle",
                    alimentation: "Carnivore",
                    ere: "jurassique",
                    biome: "aérien",
                    poids: "150 Kg",
                    taille: "1 mètres",
                    description: "Le Pterodactyle était une espèce de ptérosaures volants qui a vécu au Crétacé supérieur, il y a environ 70 à 100 millions d'années. Les Pterodactyles étaient des reptiles volants dotés d'ailes membraneuses et mesuraient de petite à grande taille, allant de 30 cm à plus de 3 mètres d'envergure. Ils avaient une tête allongée avec un long bec et des dents, ainsi qu'un corps léger et une colonne vertébrale renforcée pour le vol. <br><br>Les Pterodactyles pouvaient voler longtemps et loin pour chasser des proies comme des poissons, des crustacés et d'autres petits animaux. Les spécimens fossilisés de Pterodactyles sont importants pour les paléontologues qui étudient l'évolution de la volonté chez les reptiles volants et les premiers dinosaures volants.",
                    imagePath: "./assets/images/dinosaures/pterodactyle.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/pterodactyle.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/pterodactyle.png",
                    animationFond: "./assets/animations/paysages/fond-ciel.mp4",
                    animationDino: "./assets/animations/dinosaures/pterodactyle.webm",
                },
                {
                    nom: "liopleurodon",
                    alimentation: "Carnivore",
                    ere: "jurassique",
                    biome: "aquatique",
                    poids: "1.7 tonnes",
                    taille: "7 mètres",
                    description: "C'était le prédateur suprême des mers du Jurassique. Son mode de propulsion à quatre nageoires est caractéristique de tous les plésiosaures. Le Liopleurodon était une espèce de plésiosaures marins qui a vécu au Jurassique supérieur, il y a environ 160 à 145 millions d'années. Les Liopleurodons étaient des reptiles aquatiques dotés d'un long cou, d'une tête massive et d'un corps trapu, ce qui leur permettait de nager rapidement et de chasser des proies telles que des poissons, des crustacés et des ammonites. Les Liopleurodons mesuraient entre 6 et 8 mètres de long et étaient les prédateurs les plus importants de leur époque. <br><br>Les spécimens fossilisés de Liopleurodons sont importants pour les paléontologues qui étudient l'évolution des reptiles aquatiques et la biodiversité marine du Jurassique.",
                    imagePath: "./assets/images/dinosaures/liopleurodon.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/liopleurodon.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/liopleurodon.png",
                    animationFond: "./assets/animations/paysages/fond-eau.mp4",
                    animationDino: "./assets/animations/dinosaures/liopleurodon.webm",
                },
                {
                    nom: "pliosaurus",
                    alimentation: "Carnivore",
                    ere: "jurassique",
                    biome: "aquatique",
                    poids: "2 tonnes",
                    taille: "13 mètres",
                    description: "Le Pliosaurus funkei était une espèce de plésiosaures marins qui a vécu au Kimméridgien, il y a environ 145 à 140 millions d'années. Les Pliosaurus funkei étaient des reptiles aquatiques dotés d'un corps massif, d'un cou court et d'une tête puissante avec des dents acérées. Les Pliosaurus funkei mesuraient entre 12 et 15 mètres de long et étaient des prédateurs importants, capable de chasser de grands poissons et d'autres reptiles marins. <br><br>Les spécimens fossilisés de Pliosaurus funkei sont importants pour les paléontologues qui étudient l'évolution des reptiles aquatiques et la biodiversité marine du Jurassique. Il est surnommé « Predator X ».",
                    imagePath: "./assets/images/dinosaures/pliosaurus.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/pliosaurus-mosasaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/pliosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-eau.mp4",
                    animationDino: "./assets/animations/dinosaures/pliosaurus.webm",
                },
                {
                    nom: "plesiosaurus",
                    alimentation: "Piscivore",
                    ere: "jurassique",
                    biome: "aquatique",
                    poids: "25 Tonnes",
                    taille: "15 mètres",
                    description: "Le plesiosaurus est un reptile marin qui vivait à l'époque jurassique et qui peut être considéré comme l'ancêtre des dauphins et des baleines. Il était reconnaissable par son corps allongé avec quatre nageoires périphériques et une nageoire dorsale. Les plesiosaurus pouvaient atteindre des longueurs de 10 à 15 mètres et peser jusqu'à 25 tonnes. Ils se nourrissaient principalement de poissons et de mollusques. On pense que les plesiosaurus se sont éteints à la fin du Crétacé il y a environ 65 millions d'années. <br><br>Les plesiosaurus étaient des animaux très adaptés à la vie marine. Ils avaient une forme allongée qui leur permettait de nager rapidement et de manœuvrer avec une grande agilité dans l'eau. Ils avaient également des branchies qui leur permettaient de respirer sous l'eau. Leur cou était très long et flexible, ce qui leur permettait d'atteindre des proies difficiles à localiser. Les plesiosaurus étaient également dotés de dents très pointues qui leur permettaient de capturer leurs proies. Les plesiosaurus pouvaient vivre dans des eaux très profondes et étaient capables de nager à des vitesses assez impressionnantes. <br><br>Il est également suggéré qu'ils étaient capables de sauter à la surface de l'eau pour capturer des proies, comme le font les dauphins aujourd'hui. On pense que les plesiosaurus se sont éteints à la fin du Crétacé à cause des changements climatiques et de l'apparition des grands prédateurs terrestres.",
                    imagePath: "./assets/images/dinosaures/hydrorion.svg",
                    imageAlim: "./assets/images/divers/piscivore.png",
                    effetSonor: "./assets/audios/pliosaurus-mosasaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/hydrorion.png",
                    animationFond: "./assets/animations/paysages/fond-eau.mp4",
                    animationDino: "./assets/animations/dinosaures/hydrorion.webm",
                },
                {
                    nom: "ichthyosaurus",
                    alimentation: "Carnivore",
                    ere: "jurassique",
                    biome: "aquatique",
                    poids: "90 Kg",
                    taille: "2 mètres",
                    description: "Les Ichthyosaures étaient des reptiles marins du groupe des dinosaures marins, il y a environ 245 à 90 millions d'années. Les Ichthyosaures étaient des reptiles aquatiques avec un corps effilé et une nageoire caudale pour la propulsion, des membres adaptés à la nage et une tête allongée avec des mâchoires puissantes. Les fossiles montrent également que certains Ichthyosaures avaient des nageoires dorsal et pectorale, ce qui les rendait encore plus semblables aux dauphins modernes. <br><br>Les Ichthyosaures ont été découverts pour la première fois en 1811 en Grande-Bretagne et depuis, des fossiles ont été trouvés dans les eaux Chinoise. En termes de comportement, les Ichthyosaures étaient probablement des chasseurs actifs et rapides, utilisant leur vitesse et leur maniabilité pour attraper leur proie. Certaines espèces ont également été trouvées avec des oeufs et des nouveau-nés, suggérant qu'ils étaient des animaux sociaux et qu'ils élevaient leurs petits. Il pouvait même voir dans les profondeurs, grâce à sa vue perçante. <br><br>L'existence des Ichthyosaures a également une importance considérable pour la compréhension de l'évolution des reptiles et des dinosaures marins, montrant comment ces groupes d'animaux se sont adaptés et ont prospéré dans un environnement aquatique. Les Ichthyosaures sont considérés comme des précurseurs des reptiles marins modernes tels que les tortues de mer et les alligators.",
                    imagePath: "./assets/images/dinosaures/ichthyosaurus.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/bonnerichthys.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/ichthyosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-eau.mp4",
                    animationDino: "./assets/animations/dinosaures/ichthyosaurus.webm",
                },
                {
                    nom: "amargasaurus",
                    alimentation: "Herbivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "2.6 tonnes",
                    taille: "10 mètres",
                    description: "L'Amargasaurus était un dinosaure sauropode qui vivait en Amérique du Sud au Crétacé inférieur, il y a environ 100 à 130 millions d'années. Il mesurait environ 15 à 20 mètres de long et pesait environ 4 à 6 tonnes. L'Amargasaurus appartenait à la famille des Dicraeosauridae, qui comprenait d'autres dinosaures à épines semblables, comme Dicraeosaurus. Il était herbivore et se nourrissait probablement d'une variété de feuilles et de branches en utilisant sa grande tête pour saisir les branches les plus élevées. <br><br>Ce qui le différencie des autres sauropodes, c'est la présence de deux rangées de longues et fines épines en forme de V sur son dos, qui pouvaient atteindre jusqu'à 60 cm de long. On pense que ces épines étaient peut-être utilisées pour impressionner les prédateurs. La fonction exacte des épines reste cependant incertaine. Inspiration principale pour le Pokémon Amagara et Dragmara.",
                    imagePath: "./assets/images/dinosaures/amargasaurus.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/amargasaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/amargasaurus.png",
                    animationFond: "./assets/animations/paysages/fond-jungle.mp4",
                    animationDino: "./assets/animations/dinosaures/amargasaurus.webm",
                },
                {
                    nom: "ankylosaurus",
                    alimentation: "Herbivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "8 tonnes",
                    taille: "8 mètres",
                    description: "L'Ankylosaurus était un dinosaure à plaques qui vivait au Crétacé supérieur, il y a environ 68 à 66 millions d'années. C'était un dinosaure de la famille des ankylosauridés, une des dernières espèces de dinosaures à plaques à avoir existé. L'Ankylosaurus était un herbivore, il se nourrissait de feuilles, de branches et de fougères. Il mesurait environ 4 à 6 mètres de long et pesait environ 4 à 6 tonnes. <br><br>Il était principalement herbivore et se défendait grâce à son armure de plaques et de bosses, ainsi qu'à une massue caudale très lourde. Il possède une armure naturelle, sauf son ventre, qu’il devait protéger en se couchant au sol. Sa queue est en forme de massue pour se défendre des prédateurs.",
                    imagePath: "./assets/images/dinosaures/ankylosaurus.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/ankylosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/ankylosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-jungle.mp4",
                    animationDino: "./assets/animations/dinosaures/ankylosaurus.webm",
                },
                {
                    nom: "baryonyx",
                    alimentation: "Piscivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "1.7 tonnes",
                    taille: "10 mètres",
                    description: "Le Baryonyx est un genre de dinosaure carnivore qui a vécu pendant l'Albien inférieur, il y a environ 130 à 125 millions d'années. Il mesurait environ 10 mètres de long et pesait environ 1,5 tonne. Le Baryonyx était un dinosaure à mâchoires puissantes avec de longues griffes sur ses pattes antérieures, probablement utilisées pour attraper et tenir sa proie. Sa dentition suggère qu'il était un prédateur de poissons. <br><br>Les restes les plus complets du Baryonyx ont été découverts en 1983 dans le sud de l'Angleterre, ce qui en fait l'un des rares dinosaures de ce genre connus en dehors de l'Amérique du Nord. Le vilain principal dans L'Âge de glace 3 : Le Temps des dinosaures.",
                    imagePath: "./assets/images/dinosaures/baryonyx.svg",
                    imageAlim: "./assets/images/divers/piscivore.png",
                    effetSonor: "./assets/audios/baryonyx.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/baryonyx.png",
                    animationFond: "./assets/animations/paysages/fond-jungle.mp4",
                    animationDino: "./assets/animations/dinosaures/baryonyx.webm",
                },
                {
                    nom: "carcharodontosaurus",
                    alimentation: "Carnivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "15 tonnes",
                    taille: "14 mètres",
                    description: "Le Carcharodontosaurus était un grand dinosaure carnivore qui a vécu pendant le Crétacé supérieur, il y a environ 112 à 97 millions d'années. Il mesurait environ 12 à 13 mètres de long et pesait environ 7 à 8 tonnes. Le Carcharodontosaurus était un dinosaure à mâchoires puissantes doté de dents de plus de 7 cm de long, ce qui en faisait l'un des plus grands prédateurs de son époque. On pense que le Carcharodontosaurus était un prédateur redoutable capable de chasser des proies importantes telles que les sauropodes. <br><br>Les restes du Carcharodontosaurus ont été découverts en Afrique du Nord et en Argentine. Les découvertes récentes montrent que le Carcharodontosaurus était plus répandu qu'on ne le pensait auparavant, avec des spécimens trouvés en Égypte et en Mauritanie. Le Carcharodontosaurus est considéré comme un lointain cousin du Tyrannosaurus Rex.",
                    imagePath: "./assets/images/dinosaures/carcharodontosaurus.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/carcharodontosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/carcharodontosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-savanne.mp4",
                    animationDino: "./assets/animations/dinosaures/carcharodontosaurus.webm",
                },
                {
                    nom: "carnotaurus",
                    alimentation: "Carnivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "2 Tonnes",
                    taille: "9 mètres",
                    description: "Le Carnotaurus était un dinosaure carnivore de la famille des Abelisauridae qui a vécu pendant le Crétacé supérieur, il y a environ 70 à 68 millions d'années. Il mesurait environ 8 à 9 mètres de long et pesait environ 1 à 1,5 tonne. Le Carnotaurus était connu pour ses cornes distinctes au-dessus de ses yeux, ce qui lui donnait un aspect très reconnaissable. Les cornes étaient probablement utilisées pour impressionner les autres dinosaures ou pour se battre pour des partenaires ou des territoires. <br><br>Les restes les plus complets du Carnotaurus ont été découverts en Argentine en 1984. Les études sur les os et les fossiles ont révélé que le Carnotaurus était un dinosaure très agile doté de membres postérieurs plus courts et plus forts que les membres antérieurs. On pense que le Carnotaurus était un prédateur rapide qui chassait des proies plus petites telles que les dinosaures herbivores et les ptérosaures. Son nom veut dire « taureau carnivore » à cause de ses cornes semblables à un taureau. Il a les bras plus petits qu’un t-rex.",
                    imagePath: "./assets/images/dinosaures/carnotaurus.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/carnotaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/carnotaurus.png",
                    animationFond: "./assets/animations/paysages/fond-jungle.mp4",
                    animationDino: "./assets/animations/dinosaures/carnotaurus.webm",
                },
                {
                    nom: "gallimimus",
                    alimentation: "Omnivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "200 Kg",
                    taille: "6 mètres",
                    description: "Le Gallimimus était un dinosaure ornithomime, une forme de dinosaure sans dent, qui a vécu pendant le Crétacé supérieur, il y a environ 70 à 68 millions d'années. Il mesurait environ 6 à 7 mètres de long et pesait environ 500 kg. Le Gallimimus était connu pour sa course effrénée sur ses deux jambes. Il avait une longue tête effilée avec un bec, de petits bras et des griffes très courtes. Le Gallimimus était probablement un animal omnivore qui se nourrissait de feuilles, de branches et d'autres parties tendres des plantes ainsi que de de petit vertébré et des insectes. <br><br>Les restes les plus complets du Gallimimus ont été découverts en Mongolie en 1971. Les découvertes ultérieures ont montré que le Gallimimus était largement répandu en Asie centrale et que ce genre comprenait plusieurs espèces. Les études sur les os et les fossiles du Gallimimus ont contribué à la compréhension de la vie et des habitudes des dinosaures ornithomimes.",
                    imagePath: "./assets/images/dinosaures/gallimimus.svg",
                    imageAlim: "./assets/images/divers/omnivore.png",
                    effetSonor: "./assets/audios/galliminus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/gallimimus.png",
                    animationFond: "./assets/animations/paysages/fond-prairie.mp4",
                    animationDino: "./assets/animations/dinosaures/gallimimus.webm",
                },
                {
                    nom: "minmi",
                    alimentation: "Herbivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "1.6 tonnes",
                    taille: "4 mètres",
                    description: "Le Minmi était un dinosaure ankylosaurien qui a vécu pendant le Crétacé supérieur, il y a environ 95 à 90 millions d'années. Il mesurait environ 4 mètres de long et pesait environ 1,5 tonne. Le Minmi était connu pour sa carapace de protection qui recouvrait son dos et ses flancs. La carapace était formée de plaques osseuses et de pics qui auraient protégé le Minmi contre les prédateurs. Le Minmi était probablement un animal herbivore qui se nourrissait de feuilles et d'autres parties tendres des plantes. Les restes les plus complets du Minmi ont été découverts en Australie en 1980. <br><br>Les découvertes ultérieures ont montré que le Minmi était endémique en Australie et que ce genre comprenait plusieurs espèces. Les études sur les os et les fossiles du Minmi ont contribué à la compréhension des dinosaures ankylosauriens et de la biodiversité de la vie sur Terre il y a des millions d'années.",
                    imagePath: "./assets/images/dinosaures/minmi.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/minmi.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/minmi.png",
                    animationFond: "./assets/animations/paysages/fond-savanne.mp4",
                    animationDino: "./assets/animations/dinosaures/minmi.webm",
                },
                {
                    nom: "parasaurolophus",
                    alimentation: "Herbivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "3.6 tonnes",
                    taille: "10 mètres",
                    description: "Le Parasaurolophus était un dinosaure hadrosaurien, également connu sous le nom de dinosaure à crête tubulaire, qui a vécu pendant le Crétacé supérieur, il y a environ 76 à 73 millions d'années. Il mesurait environ 10 à 12 mètres de long et pesait environ 2 à 4 tonnes. Le Parasaurolophus était connu pour sa crête tubulaire sur sa tête, qui mesurait environ 1,5 à 2 mètres de long. La crête était probablement utilisée pour communiquer avec d'autres dinosaures ou pour impressionner des partenaires potentiels. <br><br>Les restes les plus complets du Parasaurolophus ont été découverts au Nouveau-Mexique aux États-Unis en 1922. Les découvertes ultérieures ont montré que le Parasaurolophus était largement répandu dans l'ouest de l'Amérique du Nord et que ce genre comprenait plusieurs espèces. Les études sur les os et les fossiles du Parasaurolophus ont contribué à la compréhension des dinosaures hadrosauriens et de la biodiversité de la vie sur Terre il y a des millions d'années.",
                    imagePath: "./assets/images/dinosaures/parasaurolophus.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/parasaurolophus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/parasaurolophus.png",
                    animationFond: "./assets/animations/paysages/fond-jungle.mp4",
                    animationDino: "./assets/animations/dinosaures/parasaurolophus.webm",
                },
                {
                    nom: "protoceratops",
                    alimentation: "Herbivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "500 Kg",
                    taille: "5 mètres",
                    description: "Les Protoceratops sont un genre de dinosaures herbivores appartenant à la famille des Ceratopsidae, vivant il y a environ 70 à 80 millions d'années pendant le Crétacé supérieur. Ils mesuraient environ 4 à 5 mètres de long et pesaient environ 500 kilogrammes. Les Protoceratops étaient des dinosaures à plaques et étaient souvent confondus avec les Triceratops, qui étaient des dinosaures plus grands et plus avancés. Les Protoceratops étaient des herbivores et se nourrissaient probablement d'herbes, de feuilles et de petits arbustes. Leur crâne plat et large avec des bosses leur permettait de défendre leur territoire contre les prédateurs, comme le Tyrannosaurus Rex. <br><br>Des restes de nids de Protoceratops ont été trouvés en Mongolie, suggérant que ces dinosaures pouvaient pondre des oeufs et s'occuper de leur progéniture. Les Protoceratops ont également été associés à des dinosaures ovipares, ce qui signifie qu'ils pondent des œufs plutôt que d'incuber leurs œufs comme les oiseaux modernes. <br><br>Enfin, les Protoceratops ont joué un rôle important dans la compréhension de l'évolution des dinosaures à cornes et à plaques. De nombreux fossiles de Protoceratops ont été trouvés en Mongolie et en Chine, ce qui a permis aux scientifiques d'en apprendre davantage sur leur anatomie, leur comportement et leur écologie.",
                    imagePath: "./assets/images/dinosaures/protoceratops.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/protoceratops.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/protoceratops.png",
                    animationFond: "./assets/animations/paysages/fond-prairie.mp4",
                    animationDino: "./assets/animations/dinosaures/protoceratops.webm",
                },
                {
                    nom: "triceratops",
                    alimentation: "Herbivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "12 tonnes",
                    taille: "9 mètres",
                    description: "Les Triceratops sont un genre de dinosaures herbivores appartenant à la famille des Ceratopsidae, vivant il y a environ 68 à 66 millions d'années pendant le Crétacé supérieur en Amérique du Nord. Ils mesuraient environ 9 à 10 mètres de long et pesaient environ 6 à 12 tonnes. Ils étaient caractérisés par leur crâne large et épais avec trois cornes sur le front et une grande bosse sur la nuque. Les Triceratops étaient des animaux sociaux et vivaient en groupes dans les régions herbues de l'Amérique du Nord. Ils se nourrissaient principalement de feuilles, d'herbes et de petits arbustes. Leur crâne épais avec des cornes et des bosses leur permettait de se défendre contre les prédateurs, comme le Tyrannosaurus Rex. <br><br>Les restes fossiles du Triceratops ont été largement répartis en Amérique du Nord, ce qui a permis aux scientifiques d'en apprendre davantage sur leur anatomie, leur comportement et leur écologie. <br><br>Les Triceratops sont devenus l'un des dinosaures les plus célèbres et les plus connus au monde en raison de leur apparence distinctive et de leur importance pour la compréhension de l'évolution des dinosaures à cornes et à plaques.",
                    imagePath: "./assets/images/dinosaures/triceratops.svg",
                    imageAlim: "./assets/images/divers/herbivore.png",
                    effetSonor: "./assets/audios/triceratops.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/triceratops.png",
                    animationFond: "./assets/animations/paysages/fond-prairie.mp4",
                    animationDino: "./assets/animations/dinosaures/triceratops.webm",
                },
                {
                    nom: "tyrannosaurus",
                    alimentation: "Carnivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "9 Tonnes",
                    taille: "13 mètres",
                    description: "Son nom veut dire « Roi des lézards ». Le Tyrannosaurus Rex (ou T. Rex) était un gros prédateur carnivore vivant il y a environ 68 à 66 millions d'années pendant le Crétacé supérieur en Amérique du Nord. Il mesurait environ 12 à 13 mètres de long et pesait environ 6 à 9 tonnes. Il était caractérisé par ses puissantes mâchoires garnies de grandes dents acérées, sa grosse tête, son corps massif et ses courtes pattes avants. <br><br>Le T. Rex était probablement le plus grand prédateur terrestre de son époque et était capable de chasser et de tuer des proies considérables, telles que les Triceratops et les Edmontosaurus. On pense qu'il était également un animal opportuniste et qu'il se nourrissait de charognes et de proies blessées ou malades. <br><br>Les restes fossiles du T. Rex ont été trouvés en Amérique du Nord, ce qui a permis aux scientifiques d'en apprendre davantage sur leur anatomie, leur comportement et leur écologie. <br><br>Le T. Rex est devenu l'un des dinosaures les plus célèbres et les plus connus au monde en raison de son apparence effrayante et de son rôle dans la culture populaire, en particulier dans les films de dinosaures. Les études génétiques récentes ont également montré que le T. Rex est apparenté aux oiseaux modernes, ce qui soulève des questions sur l'évolution des dinosaures et leur lien avec les oiseaux. il avait une espérance de vie d’environ 30 ans.",
                    imagePath: "./assets/images/dinosaures/t-rex.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/tyrannosaurus-rex.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/t-rex.png",
                    animationFond: "./assets/animations/paysages/fond-savanne.mp4",
                    animationDino: "./assets/animations/dinosaures/tyrannosaurus.webm",
                },
                {
                    nom: "velociraptor",
                    alimentation: "Carnivore",
                    ere: "Crétacé",
                    biome: "plaine",
                    poids: "20 Kg",
                    taille: "2 mètres",
                    description: "Le Velociraptor est un dinosaure théropode de la famille des Dromaeosauridae, qui a vécu il y a environ 75 à 71 millions d'années au Crétacé supérieur en Asie de l'Est. Il mesurait environ 1,5 à 2 mètres de long pour une hauteur d'environ 1 mètre à l'épaule et pesait environ 15 à 30 kg. Le Velociraptor était un prédateur vif et agile doté de griffes acérées sur ses pattes arrière. Bien que le Velociraptor ait été connu pour chasser en meute, il n'y a pas suffisamment de preuves fossilisées pour déterminer avec certitude s'il vivait en groupes sociaux. <br><br>Certains scientifiques pensent que les Velociraptors pouvaient être des animaux solitaires qui se rassemblaient seulement pour chasser. Le Velociraptor était un prédateur opportuniste qui se nourrissait probablement de petits dinosaures, d'œufs d'autres dinosaures et peut-être même de charognes. <br><br>Le Velociraptor avait une tête longue et étroite avec des dents acérées adaptées à la prédation. Il avait également des griffes tranchantes sur ses pattes arrière qui lui permettaient de saisir et de retenir sa proie. Ses pattes avant étaient plus petites et plus faibles, mais pouvaient être utilisées pour tenir sa proie ou pour se défendre. Bien que le Velociraptor ait été doté d'un cerveau plus développé que celui de la plupart des autres dinosaures de sa taille, il n'était probablement pas aussi intelligent que les oiseaux d'aujourd'hui, qui sont les descendants directs des dinosaures. <br><br>Le Velociraptor, ainsi que la plupart des autres dinosaures, a disparu il y a environ 65 millions d'années, probablement à cause d'un impact météorique sur Terre. Notez que la représentation populaire du Velociraptor, notamment dans les films de la franchise 'Jurassic Park', est souvent exagérée en termes de taille et d'intelligence. Dans les films, le Velociraptor est présenté comme étant plus grand et plus intelligent qu'il ne l'était en réalité.",
                    imagePath: "./assets/images/dinosaures/velociraptor.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/velociraptor.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/velociraptor.png",
                    animationFond: "./assets/animations/paysages/fond-prairie.mp4",
                    animationDino: "./assets/animations/dinosaures/velociraptor.webm",
                },
                {
                    nom: "iberomesornis",
                    alimentation: "Insectivore",
                    ere: "Crétacé",
                    biome: "aérien",
                    poids: "50 grammes",
                    taille: "15 centimètres",
                    description: "Les Iberomesornis sont une espèce d'oiseaux primitifs qui ont vécu en Espagne il y a environ 120 à 130 millions d'années, pendant l'Albien, une période du Mésozoïque. Ils appartiennent au groupe des Ornithuromorpha, qui est considéré comme un ancêtre des oiseaux modernes. Les Iberomesornis étaient de petits oiseaux, mesurant environ 15 à 20 cm de long, et se sont probablement nourris de petits insectes et de plantes. <br><br>C'est une des plus anciennes découvertes d'oiseaux au monde et a aider à comprendre l'évolution des oiseaux à partir des dinosaures. <br><br>Les Iberomesornis ont des caractéristiques distinctes des oiseaux modernes, telles que des plumes plus grosses et des doigts articulés sur leurs pattes. Cependant, ils ont également des caractéristiques similaires à celles des oiseaux modernes, telles que des os creux et légers, des plumes et des ailes. Les Iberomesornis sont un exemple important de l'évolution des oiseaux à partir des dinosaures et nous apportent des informations précieuses sur les premiers stades de cette évolution.",
                    imagePath: "./assets/images/dinosaures/iberomesornis.svg",
                    imageAlim: "./assets/images/divers/insectivore.png",
                    effetSonor: "./assets/audios/iberomesornis.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/iberomesornis.png",
                    animationFond: "./assets/animations/paysages/fond-jungle.mp4",
                    animationDino: "./assets/animations/dinosaures/iberomesornis.webm",
                },
                {
                    nom: "quetzalcoatlus",
                    alimentation: "Carnivore",
                    ere: "Crétacé",
                    biome: "aérien",
                    poids: "250 Kg",
                    taille: "15 mètres",
                    description: "Le Quetzalcoatlus est un dinosaure pterosaure qui a vécu à la fin du Crétacé, il y a environ 68 à 66 millions d'années. Il était l'un des plus grands volateurs connus de tous les temps, avec une envergure pouvant atteindre plus de 10 mètres. Le Quetzalcoatlus est considéré comme un azhdarchide, une famille de pterosaures caractérisée par leur long cou et leur bec effilé. Les scientifiques pensent que le Quetzalcoatlus se nourrissait de petits animaux, tels que les reptiles et les poissons, et peut-être même de petits mammifères. <br><br>Les restes fossiles de Quetzalcoatlus ont été trouvés dans les formations de sédiments de l'Ouest du Texas aux États-Unis. Les scientifiques pensent que le Quetzalcoatlus était un animal migrateur et que sa grande envergure lui permettait de voler sur de longues distances. En plus de sa taille imposante, le Quetzalcoatlus se distinguait par son crâne allongé et son bec en forme de couteau. Les scientifiques pensent que ces adaptations étaient probablement liées à son régime alimentaire et à sa capacité à capturer et à manger de la nourriture. <br><br>Bien que les pterosaures en général aient été très répandus à leur époque, le genre Quetzalcoatlus est considéré comme éteint à la fin du Crétacé, probablement en raison de la grande extinction de masse qui a eu lieu à cette époque et qui a vu la disparition de plusieurs espèces animales et végétales.",
                    imagePath: "./assets/images/dinosaures/quetzalcoatlus.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/quetzalcoatlus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/quetzalcoatlus.png",
                    animationFond: "./assets/animations/paysages/fond-ciel.mp4",
                    animationDino: "./assets/animations/dinosaures/quetzalcoatlus.webm",
                },
                {
                    nom: "microraptor",
                    alimentation: "Carnivore, Insectivore",
                    ere: "Crétacé",
                    biome: "aérien",
                    poids: "2 Kg",
                    taille: "1.2 mètres",
                    description: "Le Microraptor était un dinosaure de petite taille de la famille des dromaeosauridés qui a vécu en Chine au Crétacé inférieur, il y a environ 120 à 125 millions d'années. Il était remarquable pour ses plumes sur les membres antérieurs et postérieurs, ce qui en faisait l'un des premiers dinosaures connus à avoir développé des plumes. Les scientifiques pensent que le Microraptor était capable de voler, bien que le mécanisme exact soit encore discuté. Certaines théories suggèrent que le Microraptor a utilisé ses plumes pour planer ou pour effectuer des vols courts et rapides pour échapper à ses prédateurs ou pour attraper ses proies. <br><br>Le Microraptor a également été remarqué pour sa bi-couleur, avec des plumes noires sur le dessus et des plumes blanches en dessous, ce qui pourrait avoir une fonction camouflage ou défensive. Les restes fossiles de Microraptor ont été découverts dans les formations de sédiments de la Chine du Nord-Est.",
                    imagePath: "./assets/images/dinosaures/microraptor.svg",
                    imageAlim: "./assets/images/divers/carnivore-insectivore.png",
                    effetSonor: "./assets/audios/archaeopteryx-microraptor.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/microraptor.png",
                    animationFond: "./assets/animations/paysages/fond-ciel.mp4",
                    animationDino: "./assets/animations/dinosaures/microraptor.webm",
                },
                {
                    nom: "pteranodon",
                    alimentation: "Piscivore",
                    ere: "Crétacé",
                    biome: "aérien",
                    poids: "25 Kg",
                    taille: "7 mètres",
                    description: "Le Pteranodon était un pterosaure qui a vécu au Maastrichtien, il y a environ 70 à 80 millions d'années. C'était l'un des plus grands pterosaures connus, avec une envergure pouvant atteindre jusqu'à 7 mètres. Le Pteranodon était également caractérisé par son crâne allongé et sans dents et son long cou. Les scientifiques pensent que le Pteranodon était un animal volant capable de parcourir de grandes distances grâce à son aile large et souple. Il est également considéré comme un piscivore, ce qui signifie qu'il se nourrissait principalement de poissons qu'il attrapait en plongeant dans l'eau. <br><br>Les restes fossiles de Pteranodon ont été trouvés dans les formations de sédiments de l'Amérique du Nord, notamment dans les États du Kansas et du Missouri aux États-Unis. Le Pteranodon est devenu l'un des pterosaures les plus connus grâce à ses caractéristiques uniques et à sa large répartition géographique.",
                    imagePath: "./assets/images/dinosaures/pteranodon.svg",
                    imageAlim: "./assets/images/divers/piscivore.png",
                    effetSonor: "./assets/audios/pteranodon.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/pteranodon.png",
                    animationFond: "./assets/animations/paysages/fond-ciel.mp4",
                    animationDino: "./assets/animations/dinosaures/pteranodon.webm",
                },
                {
                    nom: "bonnerichthys",
                    alimentation: "Piscivore",
                    ere: "Crétacé",
                    biome: "aquatique",
                    poids: "150 Kg",
                    taille: "6 mètres",
                    description: "Le Bonnerichthys était un poisson préhistorique de la famille des ganoids, qui a vécu au début du Permien, il y a environ 300 millions d'années. Il était caractérisé par sa carapace dure et écailleuse qui le protégeait contre les prédateurs et les conditions environnementales difficiles. Le Bonnerichthys était un poisson de fond qui se nourrissait probablement de petits organismes aquatiques et de plantes. <br><br>Les restes fossiles de Bonnerichthys ont été trouvés dans les formations de sédiments de l'Europe de l'Est, notamment en Allemagne et en Tchéquie. Bien que le Bonnerichthys soit un poisson relativement peu connu, il joue un rôle important dans la compréhension de l'évolution des poissons préhistoriques et de la diversité des formes de vie dans les océans anciens. Les études sur les restes fossiles de Bonnerichthys peuvent aider les scientifiques à mieux comprendre les adaptations des poissons à leur environnement et à la vie dans l'océan il y a des centaines de millions d'années.",
                    imagePath: "./assets/images/dinosaures/bonnerichthys.svg",
                    imageAlim: "./assets/images/divers/piscivore.png",
                    effetSonor: "./assets/audios/bonnerichthys.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/bonnerichthys.png",
                    animationFond: "./assets/animations/paysages/fond-eau.mp4",
                    animationDino: "./assets/animations/dinosaures/bonnerichthys.webm",
                },
                {
                    nom: "elasmosaurus",
                    alimentation: "Piscivore",
                    ere: "Crétacé",
                    biome: "aquatique",
                    poids: "2 tonnes",
                    taille: "10 mètres",
                    description: "L'Elasmosaurus était un plésiosaure qui a vécu au Maastrichtien, il y a environ 70 à 80 millions d'années. C'était un reptile marin à long cou caractérisé par son long cou et sa petite tête, qui contenait de petits dents pointues. L'Elasmosaurus mesurait environ 15 à 20 mètres de long, avec un cou qui pouvait représenter plus de la moitié de sa longueur totale. Les scientifiques pensent que l'Elasmosaurus utilisait son long cou pour attraper des proies dans les eaux profondes, telles que des poissons, des crustacés et d'autres reptiles marins. <br><br>Les restes fossiles d'Elasmosaurus ont été trouvés dans les formations de sédiments des Amériques du Nord et du Sud, ainsi que d'autres régions du monde. L'Elasmosaurus est devenu l'un des plésiosaures les plus connus grâce à son aspect inhabituel et à sa distribution géographique large. Les études sur les restes fossiles d'Elasmosaurus peuvent aider les scientifiques à mieux comprendre l'évolution des reptiles marins et leur adaptation aux conditions de vie en mer.",
                    imagePath: "./assets/images/dinosaures/elasmosaurus.svg",
                    imageAlim: "./assets/images/divers/piscivore.png",
                    effetSonor: "./assets/audios/elasmosaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/elasmosaurus.png",
                    animationFond: "./assets/animations/paysages/fond-eau.mp4",
                    animationDino: "./assets/animations/dinosaures/elasmosaurus.webm",
                },
                {
                    nom: "archelon",
                    alimentation: "Omnivore",
                    ere: "Crétacé",
                    biome: "aquatique",
                    poids: "2 Tonnes",
                    taille: "4 mètres",
                    description: "L'Archelon était une tortue géante qui a vécu au Maastrichtien, il y a environ 70 à 80 millions d'années. C'était une tortue marine caractérisée par sa carapace énorme, qui pouvait atteindre jusqu'à 4 mètres de longueur. L'Archelon était un animal flottant qui se nourrissait de mollusques, de crustacés et d'autres animaux marins. Les scientifiques pensent que l'Archelon se déplaçait lentement et utilisait sa grosse carapace pour se protéger des prédateurs marins. <br><br>Les restes fossiles d'Archelon ont été trouvés dans les formations de sédiments de l'Amérique du Nord, notamment dans les États du Dakota du Nord et du Dakota du Sud aux États-Unis. L'Archelon est devenu l'une des tortues les plus connues de la période préhistorique en raison de sa grande taille et de sa distribution géographique large. Les études sur les restes fossiles d'Archelon peuvent aider les scientifiques à mieux comprendre l'évolution des tortues marines et leur adaptation à la vie en mer.",
                    imagePath: "./assets/images/dinosaures/archelon.svg",
                    imageAlim: "./assets/images/divers/omnivore.png",
                    effetSonor: "./assets/audios/archelon.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/archelon.png",
                    animationFond: "./assets/animations/paysages/fond-eau.mp4",
                    animationDino: "./assets/animations/dinosaures/archelon.webm",
                },
                {
                    nom: "mosasaurus",
                    alimentation: "Carnivore",
                    ere: "Crétacé",
                    biome: "aquatique",
                    poids: "15 Tonnes",
                    taille: "17 mètres",
                    description: "Le Mosasaurus était un reptile marin géant qui a vécu au Maastrichtien, il y a environ 70 à 80 millions d'années. Le Mosasaurus était un reptile marin géant, avec une longueur allant jusqu'à 17 mètres pour les spécimens les plus grands. Il avait une tête énorme, large et aplatie, avec de grandes dents pointues et des mâchoires puissantes. Son corps était allongé et similaire à celui d'un serpent, ce qui lui permettait de nager rapidement et de plonger pour chasser. Le Mosasaurus était un prédateur redoutable qui se nourrissait de poissons, de crustacés, de mollusques et d'autres reptiles marins. Les scientifiques pensent qu'il a chassé à la surface de l'eau et plongé pour attraper ses proies. De plus, la morphologie de sa tête et de ses mâchoires montre qu'il était capable de capturer et de tenir de grosses proies dans sa bouche. <br><br>Les restes fossiles de Mosasaurus ont été trouvés dans les formations de sédiments de l'Amérique du Nord, d'Europe et d'Afrique, ce qui montre une distribution géographique large pour cette espèce. Les études sur les restes fossiles peuvent aider les scientifiques à mieux comprendre les conditions environnementales et les écosystèmes marins de la période préhistorique. <br><br>Le Mosasaurus est un membre important de la famille des mosasaurs, qui ont été les plus grands reptiles marins de la période préhistorique. Les études sur les restes fossiles de Mosasaurus peuvent aider les scientifiques à mieux comprendre l'évolution des reptiles marins et leur adaptation à la vie en mer, ainsi que les changements environnementaux et écologiques qui se sont produits au cours de l'histoire de la Terre. Les études sur les restes fossiles de Mosasaurus peuvent aider les scientifiques à mieux comprendre l'évolution des reptiles marins et leur adaptation à la vie en mer.",
                    imagePath: "./assets/images/dinosaures/mosasaurus.svg",
                    imageAlim: "./assets/images/divers/carnivore.png",
                    effetSonor: "./assets/audios/pliosaurus-mosasaurus.mp3",
                    coloriage: "./assets/images/dinosaures/coloriages/mosasaurus.png",
                    animationFond: "./assets/animations/paysages/fond-eau.mp4",
                    animationDino: "./assets/animations/dinosaures/mosasaurus.webm",
                },
            ],
            alphabet: [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z"

            ],

            // DECLARATION REXY
            rexPresent: false,
            bulle: "Salut moi c'est Rexy, je suis là pour t'aider, tu savais que tu pouvais immiter des dinosaure ?",

            messageDino: [
                "message1",
                "message2",
                "message3",
                "message4",
            ],
            
        }
    },
    methods: {
        /* ************************************************ */
        /* ************************************************ */
        /* *******************AFFICHAGE******************** */
        /* ************************************************ */
        /* ************************************************ */

        // Affichage de section
        afficherPageAnimation(){
            this.pageAnimation = true;
            this.pageCarte = false;
            this.pageJeux = false;
            this.pageBestiaire = false;
            this.rexy = false;
        },
        afficherPageCarte(){
            this.pageAnimation = false;
            this.pageCarte = true;
            this.pageJeux = false;
            this.pageBestiaire = false; 
            this.rexy = true;

        },
        afficherPageJeux(){
            this.pageAnimation = false;
            this.pageCarte = false;
            this.pageJeux = true;
            this.pageBestiaire = false;
            this.rexy = true;

            this.resetJeux();
            this.genererQuestionnaire();
        },
        afficherPageBestiaire(){
            this.pageAnimation = false;
            this.pageCarte = false;
            this.pageJeux = false;
            this.pageBestiaire = true; 
            this.rexy = true;

        },

        // Affichage du petit dino
        apparaitreRex(){
            this.rexPresent = true;
        },
        cacheRex(){
            this.rexPresent = false;
        },


        /* ************************************************ */
        /* ************************************************ */
        /* *******************BESTIAIRE******************** */
        /* ************************************************ */
        /* ************************************************ */

        // Defini la lettre courante pour afficher la lettre en haut
        lettreCourante(mot) {
            if (mot.substring(0, 1) == this.derniereLettre) {
                return '';
            } else {
                this.derniereLettre = mot.substring(0, 1);
                return this.derniereLettre;
            }
        },
        // Defini la première lettre du mot des dinosaures pour l'ordre alphabetique
        lettrePremiere(mot) {
            if (mot.substring(0, 1) == this.derniereLettre) {
                return false;
            } else {
                return true;
            }
        },
        // Affiche le modal information du dinosaure selectionné 
        afficherInfoDino(dino) {
            const corps = document.querySelector("body");
            corps.classList.add("scroll-hidden");
            this.dinoActive = true;
            this.modalDino = dino;

        },
        fermerInfoDino(){
            const corps = document.querySelector("body");
            corps.classList.remove("scroll-hidden");
            this.dinoActive = null;
            this.modalDino = null;
        },
        // Affiche le coloriage en impression
        afficherColoriage(dino) {
            this.coloriageDino = dino;
            setTimeout(()=> {window.print()}, 1000);
            
        },
        // Active le cri du dinosaure
        activerSon(sound) {
            this.sonActive = true;
            if (sound) {
                let audio = new Audio(sound);
                audio.play();
                audio.addEventListener("ended", ()=>{
                    this.sonActive = false;
                })
                
            }
            
        },


        /* ************************************************ */
        /* ************************************************ */
        /* ********************MINI-JEUX******************* */
        /* ************************************************ */
        /* ************************************************ */

        /* **************************** */
        /* *************QUIZ*********** */
        /* **************************** */

        // Generation des 5 questions aleatoires du questionnaire
        genererQuestionnaire() {
            this.copieQuestionnaire = this.questions.slice();
            const min = 0;
            let max = this.copieQuestionnaire.length;
            this.questionnaireCourant = [];

            for (let i = 0; i < 5; i++) {
                const aleatoire = Math.floor(Math.random() * (max - min)) + min;
                this.questionnaireCourant.push(this.copieQuestionnaire.splice(aleatoire, 1));
                max = this.copieQuestionnaire.length;
            }
            this.updateQuestionCourante();
        },
        // Reinitialise le quiz
        resetJeux(){
            this.indexQuestionCourante = 0;
            this.questionnaireCourant = [];
            this.questionCourante = [];
            this.copieQuestionnaire = [];
            this.questionValide = 0;
            this.quizCommence = null;
            this.quizComplet = false;
            this.boutonQuestion = "Valider";
            this.messageQuiz = "";
            this.resultat = null;
            this.bonneReponse = null;
            this.valideQuestionSuivante = false;
            this.reponseCourante = null;

            this.immitationCommence = null;

            this.konvaCommence = null;

            this.genererQuestionnaire();
        },
        // Affiche le modal du quiz
        afficherQuiz() {
            this.quizComplet = false;
            this.resetJeux();
            this.quizCommence = true;
            this.indexQuestionCourante = 0;
        },
        calculerPoint() {
            this.resultat = this.questionValide;
        },
        // Calcule le resultat final et affiche le resultat
        finirQuiz(){
            
            this.quizComplet = true;
            this.quizCommence = false;
            this.valideQuestionSuivante = false;
            this.boutonQuestion = "Valider";

            if (this.questionValide <= 1) {
                this.messageQuiz = this.messageResultats[0].message;
                this.imageQuiz = this.messageResultats[0].image;
            }else if(this.questionValide > 1 && this.questionValide <= 3){
                this.messageQuiz = this.messageResultats[1].message;
                this.imageQuiz = this.messageResultats[1].image;
            }else if(this.questionValide > 3){
                this.messageQuiz = this.messageResultats[2].message;
                this.imageQuiz = this.messageResultats[2].image;
            }

            
        },

        definirReponseCourante(reponse){
            this.reponseCourante = reponse;
        },
        // Calcule si la reponse est la bonne ou pas
        definirReponse(){
            if (this.questionCourante[0].bonne == this.reponseCourante) {
                this.bonneReponse = true;
                this.questionValide++;
            } else {
                this.bonneReponse = false;
            }
        },

        // Valide si la reponse est bonne pour affecter une class
        validationBonneReponse(reponse){
            if (this.reponseCourante == null || this.valideQuestionSuivante == false) {
                return "";
            }else{
                return this.questionCourante[0].bonne == reponse ? 'bonne' : 'mauvaise';
            }
        },
        // Change de question
        questionSuivante() {
            if (this.valideQuestionSuivante == true) {
                return;
            }
            this.valideQuestionSuivante = true;
            this.definirReponse();

            if (this.indexQuestionCourante == 3) {
                setTimeout(() => {
                    this.boutonQuestion = "Terminer";
                }, 3000);
            }
            if (this.indexQuestionCourante >= 4) {
                setTimeout(() => {
                    this.updateQuestionCourante();
                    this.finirQuiz();
                    this.valideQuestionSuivante = false;
                }, 3000);
                
            } else {
                setTimeout(() => {
                    this.indexQuestionCourante++;
                    this.updateQuestionCourante();
                    this.valideQuestionSuivante = false;

                }, 3000);
                
            }

        },
        // Initialise la question
        updateQuestionCourante(){
            this.questionCourante = this.questionnaireCourant[this.indexQuestionCourante];
        },

        /* **************************** */
        /* **********IMMITATION******** */
        /* **************************** */
        // Affiche le modal du EL-5
        afficherImmitation() {
            this.resetJeux();
            this.immitationCommence = true;
            
        },


        /* **************************** */
        /* ************KONVA*********** */
        /* **************************** */
        // Affiche le modal du CANVAS
        afficherKonva() {
            this.resetJeux();
            this.konvaCommence = true;
        },
        imprimerColoriage() {
            this.pretAImprimer = true;
            setTimeout(()=> {window.print()}, 1000);
            
        },

    },
    computed: {
        // Tri les dinosaures en ordre alphabetique
        dinosauresFiltre() {
            const dinosauresCourrant = this.dinosaures.filter((dino) => {
                return dino.nom.substring(0, 1) == this.derniereLettre;
            })
            return dinosauresCourrant.sort((a, b) => {
                if (a.nom < b.nom) return -1;
                if (a.nom > b.nom) return 1;
                return 0;
            });
        },
    },

    mounted() {
        // Defini un nouveau questionnaire au lancement de l'application
        this.genererQuestionnaire();

        // Timer de 6sec pour le temps d'animation avant de changer de page
        if (this.pageAnimation = true) {
            setTimeout(() => {
                afficherPageCarte();
            }, 6000);
        }
        
        
    }
}).mount('#app')
