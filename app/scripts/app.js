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
                    question: "?? l'??poque pr??historique, avec laquelle de ces esp??ces les dinosaures partageaient-ils la Terre ?",
                    image: "./assets/images/questions/1.jpg",
                    bonne: "Aucune de ces r??ponses",
                    options: [
                        {
                            numero: 1,
                            reponse: "Humains",
                        },
                        {
                            numero: 2,
                            reponse: "Tigres ?? dents de sabre",
                        },
                        {
                            numero: 3,
                            reponse: "Aucune de ces r??ponses",
                        },
                        
                    ]
                },
                {
                    id: 2,
                    question: "Selon la plupart des scientifiques, ?? quoi servait la cr??te de Parasaurolophus ?",
                    image: "./assets/images/questions/2.jpg",
                    bonne: "?? distinguer les m??les des femelles et ?? communiquer.",
                    options: [
                        {
                            numero: 1,
                            reponse: "Elle servait de poign??e pour attraper les dinosaures les plus turbulents et de brise-vent lors de temp??tes.",
                        },
                        {
                            numero: 2,
                            reponse: "?? distinguer les m??les des femelles et ?? communiquer.",
                        },
                        {
                            numero: 3,
                            reponse: "?? respirer sous l???eau et se gratter.",
                        },
                        
                    ]
                },
                {
                    id: 3,
                    question: "Parmi ces continents, sur lequel trouve-t-on le plus de fossiles de dinosaures ?",
                    image: "./assets/images/questions/3.jpg",
                    bonne: "Am??rique du Nord",
                    options: [
                        {
                            numero: 1,
                            reponse: "Am??rique du Nord",
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
                    question: "Il y 2 000 ans, les premiers os de dinosaures ont ??t?? d??couverts en Chine. Les gens ne connaissaient pas les dinos ?? cette ??poque. Ils croyaient que c?????tait des os???",
                    image: "./assets/images/questions/4.jpg",
                    bonne: "Dragons",
                    options: [
                        {
                            numero: 1,
                            reponse: "??l??phants",
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
                    question: "Le plus rapide des dinosaures pouvait courir ??:",
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
                    question: "Les bras du tyrannosaure ??taient de quelle grandeur par rapport ?? sa t??te ?",
                    image: "./assets/images/questions/6.jpg",
                    bonne: "Plus courts",
                    options: [
                        {
                            numero: 1,
                            reponse: "Plus grands",
                        },
                        {
                            numero: 2,
                            reponse: "M??me grandeur",
                        },
                        {
                            numero: 3,
                            reponse: "Plus courts",
                        },
                        
                    ]
                },
                {
                    id: 7,
                    question: "Que signifie le mot ?? dinosaure ?? ?",
                    image: "./assets/images/questions/7.jpg",
                    bonne: "Terrible l??zard",
                    options: [
                        {
                            numero: 1,
                            reponse: "Terrible l??zard",
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
                    question: "Que mangeait le Tric??ratops ?",
                    image: "./assets/images/questions/8.jpg",
                    bonne: "V??g??taux",
                    options: [
                        {
                            numero: 1,
                            reponse: "Viande",
                        },
                        {
                            numero: 2,
                            reponse: "V??g??taux",
                        },
                        {
                            numero: 3,
                            reponse: "Poissons",
                        },
                        
                    ]
                },
                {
                    id: 9,
                    question: "Lequel de ces 3 dinosaures ??tait carnivore ?",
                    image: "./assets/images/questions/9.jpg",
                    bonne: "Spinosaurus",
                    options: [
                        {
                            numero: 1,
                            reponse: "Protoc??ratops",
                        },
                        {
                            numero: 2,
                            reponse: "Tric??ratops",
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
                    question: "Combien de cornes ?? le Tric??ratops ?",
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
                            reponse: "V??lociraptor",
                        },
                        {
                            numero: 3,
                            reponse: "Tric??ratops",
                        },
                        
                    ]
                },
                {
                    id: 13,
                    question: "Quel ??v??nement serait ?? l???origine de l???extinction des dinosaures ?",
                    image: "./assets/images/questions/13.jpg",
                    bonne: "Chute d???une m??t??orite",
                    options: [
                        {
                            numero: 1,
                            reponse: "??ruption volcanique",
                        },
                        {
                            numero: 2,
                            reponse: "??ge de glace",
                        },
                        {
                            numero: 3,
                            reponse: "Chute d???une m??t??orite",
                        },
                        
                    ]
                },
                {
                    id: 14,
                    question: "Combien le diplodocus pouvait mesurer en longeur ?",
                    image: "./assets/images/questions/14.jpg",
                    bonne: "40 m??tres",
                    options: [
                        {
                            numero: 1,
                            reponse: "40 m??tres",
                        },
                        {
                            numero: 2,
                            reponse: "60 m??tres",
                        },
                        {
                            numero: 3,
                            reponse: "80 m??tres",
                        },
                        
                    ]
                },
                {
                    id: 15,
                    question: "Quel dinosaure ??tait ?? peine plus gros qu???une dinde.",
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
                    bonne: "Il y a 230 millions d???ann??es",
                    options: [
                        {
                            numero: 1,
                            reponse: "Il y a 5 millions d???ann??es",
                        },
                        {
                            numero: 2,
                            reponse: "Il y a 65 millions d???ann??es",
                        },
                        {
                            numero: 3,
                            reponse: "Il y a 230 millions d???ann??es",
                        },
                        
                    ]
                },
                {
                    id: 17,
                    question: "Laquelle de ces p??riodes g??ologiques est la plus r??cente ?",
                    image: "./assets/images/questions/17.jpg",
                    bonne: "Le Cr??tac??",
                    options: [
                        {
                            numero: 1,
                            reponse: "Le Trias",
                        },
                        {
                            numero: 2,
                            reponse: "Le Cr??tac??",
                        },
                        {
                            numero: 3,
                            reponse: "Le Jurassique",
                        },
                        
                    ]
                },
                {
                    id: 18,
                    question: "?? quelle date remonte la d??couverte du premier fossile de dinosaure entier ?",
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
                    question: "Combien de T-Rex ont ??t?? d??couverts dans le monde depuis le premier en 1902 ?",
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
                    question: "Quelle ??tait la taille des cornes du tric??ratops ?",
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
                    message: "Cool, c'est un bon r??sultat.<br> Bravo!",
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
                    taille: "30 m??tres",
                    description: "D??couverts dans les ??tats de l'ouest et du centre des ??tats-Unis. L'Apatosaure ??tait un dinosaure herbivore appartenant ?? la famille des Diplodocidae. Il vivait ?? la fin du Jurassique, il y a environ 156 ?? 145 millions d'ann??es. Il ??tait caract??ris?? par un long cou et une queue effil??e, qui lui permettaient d'atteindre les feuilles et les branches les plus hautes pour se nourrir. Il avait ??galement des dents larges et plates pour broyer les v??g??taux. Les pattes ??taient relativement courtes et larges pour soutenir son corps massif. <br><br>L'Apatosaure ??tait un animal solitaire et lent, et ??tait sans doute vuln??rable aux attaques des pr??dateurs tels que l'Allosaurus. Cependant, il ??tait ??galement capable de se d??fendre avec sa queue en la fouettant avec force. Ses pieds massifs devaient supporter un poids corporel ??quivalent ?? celui de 4 ??l??phants. Les griffes robustes de gigantesques quadrup??des herbivores comme l'Apatausore devaients certes contribuer au support de leurs poids colossal, mais aussi ?? creuser des trous pour pondre leurs oeufs.",
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
                    taille: "30 m??tres",
                    description: "Le Brachiosaure ??tait un dinosaure herbivore appartenant ?? la famille des Sauropodomorpha. Il vivait ?? la fin du Jurassique, il y a environ 156 ?? 145 millions d'ann??es. Il mesurait environ 26 ?? 30 m??tres de longueur et pesait environ 80 tonnes. Il ??tait caract??ris?? par un long cou et des pattes tr??s longues, ce qui lui permettait de se nourrir de feuilles et de branches tr??s hautes sans avoir ?? se d??placer. Il avait une t??te petite et allong??e avec des dents larges et plates pour broyer les v??g??taux. <br><br>Le Brachiosaure ??tait un des plus grands dinosaures de tous les temps, et son long cou lui donnait un aspect distinctif et gracieux. Les scientifiques pensent que le Brachiosaure ??tait un animal paisible, et qu'il vivait en grandes populations. Quarante-cinq sp??cimens fossiles sont recens??s en 2008. D??couverts dans le Colorado. ",
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
                    taille: "20 m??tres",
                    description: "Le Brontosaure est en r??alit?? un nom erron?? couramment utilis?? pour d??crire un dinosaure herbivore appartenant ?? la famille des Diplodocidae. Il est souvent confondu avec l'Apatosaure, qui est son nom scientifique correct. Les caract??ristiques du Brontosaure (Apatosaure) incluent une longueur de 20 ?? 30 m??tres, un poids de 20 ?? 30 tonnes, un long cou et une queue effil??e pour atteindre les feuilles et les branches les plus hautes, des dents larges et plates pour broyer les v??g??taux, et des pattes relativement courtes et larges pour soutenir son corps massif. <br><br>Les scientifiques pensent que le Brontosaure (Apatosaure) ??tait un animal solitaire et lent, et ??tait sans doute vuln??rable aux attaques des pr??dateurs tels que l'Allosaurus. Cependant, il ??tait ??galement capable de se d??fendre avec sa queue en la fouettant avec force. Dans Les Pierrafeu, Fred Pierrafeu raffole des steaks de brontosaure.",
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
                    taille: "8 m??tres",
                    description: "le Camptosaurus ??tait un dinosaure herbivore appartenant ?? la famille des Camarasauridae. Il vivait ?? la fin du Jurassique, il y a environ 156 ?? 145 millions d'ann??es. Il mesurait environ 9 ?? 15 m??tres de longueur et pesait entre 5 ?? 10 tonnes. Il ??tait caract??ris?? par un long cou et une petite t??te, des jambes robustes et une queue massive. Il avait des dents larges et plates pour broyer les v??g??taux. <br><br>Le Camptosaurus ??tait un animal paisible et vivait en grandes populations. Les scientifiques pensent qu'il se nourrissait principalement de feuilles et de branches basses, et que son corps ??tait adapt?? pour un mode de vie terrestre et lent. Les os de son cr??ne ??taient ??pais, ce qui sugg??re qu'il pouvait r??sister aux attaques de pr??dateurs tels que l'Allosaurus.",
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
                    taille: "7 m??tres",
                    description: "D??couvert en Chine et en Arizona. Le Dilophosaurus ??tait un dinosaure carnivore de petite taille appartenant ?? la famille des Dilophosauridae. Il vivait ?? la fin du Triasique, il y a environ 201 ?? 145 millions d'ann??es. Il mesurait environ 2 ?? 7 m??tres de longueur et pesait entre 40 ?? 90 kg. Il ??tait caract??ris?? par des cr??tes osseuses sur sa t??te, des jambes muscl??es et une queue longue et flexible. Il avait des dents pointues et des crochets sur ses m??choires pour saisir et d??chirer sa proie. <br><br>Le Dilophosaurus ??tait un animal rapide et agile, capable de courir et de sauter pour attraper ses proies. Les scientifiques pensent qu'il se nourrissait principalement de petits animaux tels que des reptiles et des oiseaux. Il ??tait ??galement capable de projeter un venin toxique pour d??fendre son territoire et pour tuer ses proies. C'est l'un des plus anciens grands dinosaures pr??dateurs",
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
                    taille: "25 m??tres",
                    description: "Le Diplodocus ??tait un dinosaure herbivore appartenant ?? la famille des Diplodocidae. Il vivait ?? la fin du Jurassique, il y a environ 156 ?? 145 millions d'ann??es. Il ??tait caract??ris?? par un long cou qui pouvait atteindre 12 m??tres de long et une queue effil??e d'environ 18 m??tre de long et des jambes courtes et robustes. Le Diplodocus ??tait un herbivore strict et se nourrissait principalement de feuilles et de branches hautes, qu'il pouvait atteindre en tendant son long cou. <br><br>Le Diplodocus ??tait un animal lent et paisible, vivant en grandes populations. La structure de ses vert??bres cervicales ??tait unique, avec des ?? balles ?? et des ?? sockets ?? qui permettaient une grande flexibilit?? et une portance maximale. Les scientifiques pensent ??galement que le Diplodocus pouvait se d??fendre contre les pr??dateurs en utilisant sa queue effil??e comme un fouet. <br><br>Les fossiles de Diplodocus ont ??t?? d??couverts pour la premi??re fois aux ??tats-Unis dans le Colorado et le Wyoming, ?? la fin du XIXe si??cle. Depuis, des fossiles ont ??galement ??t?? d??couverts en Europe et en Afrique. Les restes de Diplodocus sont tr??s fr??quents et abondants, ce qui a permis aux scientifiques de mieux comprendre son anatomie, sa biologie et son comportement. Le Diplodocus est l'un des dinosaures les plus populaires et les plus connus de tous les temps, et il est largement utilis?? comme symbole de l'??ge des dinosaures.",
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
                    taille: "4.5 m??tres",
                    description: "Le Huayangosaurus est un dinosaure st??gosauriens qui vivait ?? la fin du Jurassique, il y a environ 156 ?? 145 millions d'ann??es. C'??tait l???un des plus petits st??gosaures. C'??tait un herbivore ?? quatre pattes et ??tait caract??ris?? par une plaque osseuse en forme de pointes sur son dos et une cr??te osseuse sur son cou. Il a ??galement deux grandes pointes sur ses ??paules. <br><br>Les scientifiques pensent que le Huayangosaurus ??tait un animal paisible qui vivait en petits groupes et se nourrissait de feuilles et de branches. Il ??tait ??quip?? de dents larges et plates pour broyer les v??g??taux, et de puissantes m??choires pour les m??cher. Il avait ??galement des jambes courtes et robustes, ce qui lui permettait de se d??placer lentement mais de mani??re stable. <br><br>Les fossiles de Huayangosaurus ont ??t?? d??couverts en Chine, o?? il est consid??r?? comme l'un des premiers dinosaures st??gosauriens connus. Les sp??cimens d??couverts sont tr??s bien pr??serv??s et ont fourni aux scientifiques de nombreux d??tails sur son anatomie et son comportement. Le Huayangosaurus est ??galement consid??r?? comme un anc??tre possible de nombreux autres dinosaures st??gosauriens, notamment les ceratopsiens.",
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
                    taille: "9 m??tres",
                    description: "Le Megalosaurus ??tait un genre de dinosaure carnivore appartenant ?? la famille des Tyrannosauro??dae, vivant ?? la fin du Jurassique en Europe. Il mesurait environ 6 ?? 9 m??tres de long et pesait jusqu'?? 3 tonnes. Il avait un cr??ne allong?? et une m??choire puissante ??quip??e de dents ac??r??es. Le Megalosaurus ??tait un pr??dateur redoutable, se nourrissant probablement de reptiles, de petits dinosaures et d'autres animaux. Il a ??t?? l'un des premiers dinosaures d??crits et ??tudi??s par les scientifiques, son nom signifiant 'l??zard g??ant'.",
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
                    taille: "9 m??tres",
                    description: "Le Stegosaurus ??tait un genre de dinosaure herbivore appartenant ?? la famille des Stegosauridae, vivant ?? la fin du Jurassique en Am??rique du Sud et en Europe. Il mesurait environ 4 ?? 9 m??tres de long et pesait environ 2 ?? 3 tonnes. Il ??tait caract??ris?? par sa carapace de plaque osseuse sur le dos et ses ??pines longues et pointues sur la queue. Le Stegosaurus se nourrissait probablement de feuilles et de branches d'arbres et d'arbustes ?? l'aide de sa petite t??te et de sa bouche b??ante. <br><br>On pense que les plaques sur son dos pouvaient servir de protection ou de moyen de signalisation pour les comportements sociaux et la d??fense. Le plus grand des dinosaures ?? plaques. L???un des dinosaures qui ont inspir??s Godzilla.",
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
                    taille: "13 m??tres",
                    description: "D??couverts dans la formation de Morrison.L'Allosaurus ??tait un grand dinosaure pr??dateur de la famille des th??ropodes, qui vivait ?? la fin du Jurassique, il y a environ 156 ?? 145 millions d'ann??es. Il avait un cr??ne massif avec 19 dents incurv??es et crant??es juste dans la m??choire sup??rieure, adapt??es pour d??chirer sa proie. Les pattes arri??re ??taient plus longues et plus muscl??es que les pattes avant, ce qui lui donnait une posture ??lanc??e. Les griffes ac??r??es sur ses pattes avant et arri??re ??taient utilis??es pour attraper et tenir sa proie. <br><br>L'Allosaurus ??tait un animal redoutable de son ??poque, mais ??tait ??galement en concurrence avec d'autres grands pr??dateurs tels que le Stegosaurus et le Ceratosaurus. Il y a des fossils d'allosaurus au 'Dinosaur National Monument' au ??tat-Unis d'Am??rique.",
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
                    taille: "2 m??tres",
                    description: "Le Lesothosaurus est un genre de dinosaures ornithischiens herbivores de la famille des Lesothosauridae. Ils ont v??cu au milieu du Jurassique, il y a environ 196 ?? 176 millions d'ann??es, en Afrique du Sud. Le Lesothosaurus mesuraient environ 1,5 m??tre de long et pesaient environ 20 kg. Ils ??taient bip??des, avec un museau court et une m??choire puissante pour broyer les feuilles dures et les tiges d'herbes. <br><br>Les d??couvertes r??centes montrent ??galement la pr??sence de dents en cr??te sur leur maxillaire sup??rieur, ce qui les distingue de nombreux autres dinosaures herbivores de cette p??riode. Le Lesothosaurus ??tait un dinosaures de petite taille et est consid??r?? comme l'un des premiers dinosaures ornithischiens.",
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
                    taille: "2 m??tres",
                    description: "L'Ozraptor est un genre ??teint de dinosaures theropodes appartenant ?? la famille des Dromaeosauridae. Ils ont v??cu en Australie durant le Cr??tac?? sup??rieur, il y a environ 96 ?? 100 millions d'ann??es. Ozraptor ??tait un pr??dateur de taille moyenne, mesurant environ 3 ?? 4 m??tres de longueur totale. Les restes fossiles incluent des os de la cuisse, du f??mur et de la hanche, indiquant une morphologie similaire ?? celle des dromaeosaurides connus tels que Velociraptor. <br><br>Malgr?? les d??couvertes r??centes, les informations sur Ozraptor sont limit??es et il reste encore beaucoup ?? d??couvrir sur cette esp??ce de dinosaure. Les scientifiques continuent ?? ??tudier les restes fossiles pour en apprendre davantage sur leur anatomie, leur mode de vie et leur place dans la cha??ne alimentaire de leur ??cosyst??me.",
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
                    biome: "a??rien",
                    poids: "1 Kg",
                    taille: "50 centim??tres",
                    description: "L'Archaeopteryx est un genre extinct de dinosaures b??tis comme des oiseaux qui a v??cu au Jurassique inf??rieur, il y a environ 150 ?? 145 millions d'ann??es. C'est consid??r?? comme l'un des premiers exemples connus de l'??volution des dinosaures en oiseaux, car il pr??sente des caract??ristiques des deux groupes. L'Archaeopteryx avait des plumes et des ailes, mais ??galement des dents, une queue osseuse et des griffes sur ses pattes, similaires ?? celles des dinosaures de son ??poque. <br><br>Les pal??ontologues continuent d'??tudier l'Archaeopteryx pour en savoir plus sur la transition entre les dinosaures et les oiseaux. L???Archaeopteryx est le premier Dinosaure-oiseau d??couvert au monde.",
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
                    biome: "a??rien",
                    poids: "2 Kg",
                    taille: "2 m??tres",
                    description: "Les Rhamphorhynchus ??taient une esp??ce de pt??rosaures volants qui ont v??cu au Jurassique moyen, il y a environ 160 ?? 145 millions d'ann??es. Les Rhamphorhynchus ??taient des reptiles volants munis d'ailes et avaient une longue queue osseuse et une longue cr??te osseuse sur leur dos. Son bec avait l'air d'une lance garnie de longue dents en forme d'aiguilles. Ils mesuraient environ 2 m??tre de long et ont ??t?? d??couverts en Allemagne. <br><br>Les Rhamphorhynchus ??taient des chasseurs de petits animaux et probablement des mangeurs de poissons, comme en t??moignent leurs dents pointues et leurs griffes ac??r??es. Les sp??cimens fossilis??s de Rhamphorhynchus sont importants pour les pal??ontologues qui ??tudient les premiers reptiles volants et l'??volution de la volont?? dans les dinosaures et les oiseaux. Le 'doigt de l'aile' ??tait 3 fois plus grand que son corps.",
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
                    biome: "a??rien",
                    poids: "2 Kg",
                    taille: "1 m??tres",
                    description: "Le Dimorphodon ??tait une esp??ce de pt??rosaures volants qui a v??cu au Jurassique sup??rieur, il y a environ 165 ?? 150 millions d'ann??es. Les Dimorphodons ??taient des reptiles volants dot??s d'ailes membraneuses et mesuraient environ 1,5 m??tre de long. Ils avaient une t??te allong??e avec des dents ac??r??es et des m??choires puissantes, adapt??es pour chasser de petits animaux et de poissons. Les Dimorphodons avaient ??galement une queue osseuse pour aider ?? stabiliser leur vol. <br><br>Les sp??cimens fossilis??s du Dimorphodon sont importants pour les pal??ontologues qui ??tudient l'??volution de la vol??e chez les reptiles volants et les premiers dinosaures volants. Son nom veut dire ?????Dent ?? deux formes ?? ?? cause de ses deux types de dents, ce qui est rare chez les reptiles.",
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
                    biome: "a??rien",
                    poids: "150 Kg",
                    taille: "1 m??tres",
                    description: "Le Pterodactyle ??tait une esp??ce de pt??rosaures volants qui a v??cu au Cr??tac?? sup??rieur, il y a environ 70 ?? 100 millions d'ann??es. Les Pterodactyles ??taient des reptiles volants dot??s d'ailes membraneuses et mesuraient de petite ?? grande taille, allant de 30 cm ?? plus de 3 m??tres d'envergure. Ils avaient une t??te allong??e avec un long bec et des dents, ainsi qu'un corps l??ger et une colonne vert??brale renforc??e pour le vol. <br><br>Les Pterodactyles pouvaient voler longtemps et loin pour chasser des proies comme des poissons, des crustac??s et d'autres petits animaux. Les sp??cimens fossilis??s de Pterodactyles sont importants pour les pal??ontologues qui ??tudient l'??volution de la volont?? chez les reptiles volants et les premiers dinosaures volants.",
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
                    taille: "7 m??tres",
                    description: "C'??tait le pr??dateur supr??me des mers du Jurassique. Son mode de propulsion ?? quatre nageoires est caract??ristique de tous les pl??siosaures. Le Liopleurodon ??tait une esp??ce de pl??siosaures marins qui a v??cu au Jurassique sup??rieur, il y a environ 160 ?? 145 millions d'ann??es. Les Liopleurodons ??taient des reptiles aquatiques dot??s d'un long cou, d'une t??te massive et d'un corps trapu, ce qui leur permettait de nager rapidement et de chasser des proies telles que des poissons, des crustac??s et des ammonites. Les Liopleurodons mesuraient entre 6 et 8 m??tres de long et ??taient les pr??dateurs les plus importants de leur ??poque. <br><br>Les sp??cimens fossilis??s de Liopleurodons sont importants pour les pal??ontologues qui ??tudient l'??volution des reptiles aquatiques et la biodiversit?? marine du Jurassique.",
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
                    taille: "13 m??tres",
                    description: "Le Pliosaurus funkei ??tait une esp??ce de pl??siosaures marins qui a v??cu au Kimm??ridgien, il y a environ 145 ?? 140 millions d'ann??es. Les Pliosaurus funkei ??taient des reptiles aquatiques dot??s d'un corps massif, d'un cou court et d'une t??te puissante avec des dents ac??r??es. Les Pliosaurus funkei mesuraient entre 12 et 15 m??tres de long et ??taient des pr??dateurs importants, capable de chasser de grands poissons et d'autres reptiles marins. <br><br>Les sp??cimens fossilis??s de Pliosaurus funkei sont importants pour les pal??ontologues qui ??tudient l'??volution des reptiles aquatiques et la biodiversit?? marine du Jurassique. Il est surnomm?? ?????Predator X ??.",
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
                    taille: "15 m??tres",
                    description: "Le plesiosaurus est un reptile marin qui vivait ?? l'??poque jurassique et qui peut ??tre consid??r?? comme l'anc??tre des dauphins et des baleines. Il ??tait reconnaissable par son corps allong?? avec quatre nageoires p??riph??riques et une nageoire dorsale. Les plesiosaurus pouvaient atteindre des longueurs de 10 ?? 15 m??tres et peser jusqu'?? 25 tonnes. Ils se nourrissaient principalement de poissons et de mollusques. On pense que les plesiosaurus se sont ??teints ?? la fin du Cr??tac?? il y a environ 65 millions d'ann??es. <br><br>Les plesiosaurus ??taient des animaux tr??s adapt??s ?? la vie marine. Ils avaient une forme allong??e qui leur permettait de nager rapidement et de man??uvrer avec une grande agilit?? dans l'eau. Ils avaient ??galement des branchies qui leur permettaient de respirer sous l'eau. Leur cou ??tait tr??s long et flexible, ce qui leur permettait d'atteindre des proies difficiles ?? localiser. Les plesiosaurus ??taient ??galement dot??s de dents tr??s pointues qui leur permettaient de capturer leurs proies. Les plesiosaurus pouvaient vivre dans des eaux tr??s profondes et ??taient capables de nager ?? des vitesses assez impressionnantes. <br><br>Il est ??galement sugg??r?? qu'ils ??taient capables de sauter ?? la surface de l'eau pour capturer des proies, comme le font les dauphins aujourd'hui. On pense que les plesiosaurus se sont ??teints ?? la fin du Cr??tac?? ?? cause des changements climatiques et de l'apparition des grands pr??dateurs terrestres.",
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
                    taille: "2 m??tres",
                    description: "Les Ichthyosaures ??taient des reptiles marins du groupe des dinosaures marins, il y a environ 245 ?? 90 millions d'ann??es. Les Ichthyosaures ??taient des reptiles aquatiques avec un corps effil?? et une nageoire caudale pour la propulsion, des membres adapt??s ?? la nage et une t??te allong??e avec des m??choires puissantes. Les fossiles montrent ??galement que certains Ichthyosaures avaient des nageoires dorsal et pectorale, ce qui les rendait encore plus semblables aux dauphins modernes. <br><br>Les Ichthyosaures ont ??t?? d??couverts pour la premi??re fois en 1811 en Grande-Bretagne et depuis, des fossiles ont ??t?? trouv??s dans les eaux Chinoise. En termes de comportement, les Ichthyosaures ??taient probablement des chasseurs actifs et rapides, utilisant leur vitesse et leur maniabilit?? pour attraper leur proie. Certaines esp??ces ont ??galement ??t?? trouv??es avec des oeufs et des nouveau-n??s, sugg??rant qu'ils ??taient des animaux sociaux et qu'ils ??levaient leurs petits. Il pouvait m??me voir dans les profondeurs, gr??ce ?? sa vue per??ante. <br><br>L'existence des Ichthyosaures a ??galement une importance consid??rable pour la compr??hension de l'??volution des reptiles et des dinosaures marins, montrant comment ces groupes d'animaux se sont adapt??s et ont prosp??r?? dans un environnement aquatique. Les Ichthyosaures sont consid??r??s comme des pr??curseurs des reptiles marins modernes tels que les tortues de mer et les alligators.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "2.6 tonnes",
                    taille: "10 m??tres",
                    description: "L'Amargasaurus ??tait un dinosaure sauropode qui vivait en Am??rique du Sud au Cr??tac?? inf??rieur, il y a environ 100 ?? 130 millions d'ann??es. Il mesurait environ 15 ?? 20 m??tres de long et pesait environ 4 ?? 6 tonnes. L'Amargasaurus appartenait ?? la famille des Dicraeosauridae, qui comprenait d'autres dinosaures ?? ??pines semblables, comme Dicraeosaurus. Il ??tait herbivore et se nourrissait probablement d'une vari??t?? de feuilles et de branches en utilisant sa grande t??te pour saisir les branches les plus ??lev??es. <br><br>Ce qui le diff??rencie des autres sauropodes, c'est la pr??sence de deux rang??es de longues et fines ??pines en forme de V sur son dos, qui pouvaient atteindre jusqu'?? 60 cm de long. On pense que ces ??pines ??taient peut-??tre utilis??es pour impressionner les pr??dateurs. La fonction exacte des ??pines reste cependant incertaine. Inspiration principale pour le Pok??mon Amagara et Dragmara.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "8 tonnes",
                    taille: "8 m??tres",
                    description: "L'Ankylosaurus ??tait un dinosaure ?? plaques qui vivait au Cr??tac?? sup??rieur, il y a environ 68 ?? 66 millions d'ann??es. C'??tait un dinosaure de la famille des ankylosaurid??s, une des derni??res esp??ces de dinosaures ?? plaques ?? avoir exist??. L'Ankylosaurus ??tait un herbivore, il se nourrissait de feuilles, de branches et de foug??res. Il mesurait environ 4 ?? 6 m??tres de long et pesait environ 4 ?? 6 tonnes. <br><br>Il ??tait principalement herbivore et se d??fendait gr??ce ?? son armure de plaques et de bosses, ainsi qu'?? une massue caudale tr??s lourde. Il poss??de une armure naturelle, sauf son ventre, qu???il devait prot??ger en se couchant au sol. Sa queue est en forme de massue pour se d??fendre des pr??dateurs.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "1.7 tonnes",
                    taille: "10 m??tres",
                    description: "Le Baryonyx est un genre de dinosaure carnivore qui a v??cu pendant l'Albien inf??rieur, il y a environ 130 ?? 125 millions d'ann??es. Il mesurait environ 10 m??tres de long et pesait environ 1,5 tonne. Le Baryonyx ??tait un dinosaure ?? m??choires puissantes avec de longues griffes sur ses pattes ant??rieures, probablement utilis??es pour attraper et tenir sa proie. Sa dentition sugg??re qu'il ??tait un pr??dateur de poissons. <br><br>Les restes les plus complets du Baryonyx ont ??t?? d??couverts en 1983 dans le sud de l'Angleterre, ce qui en fait l'un des rares dinosaures de ce genre connus en dehors de l'Am??rique du Nord. Le vilain principal dans L'??ge de glace 3 : Le Temps des dinosaures.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "15 tonnes",
                    taille: "14 m??tres",
                    description: "Le Carcharodontosaurus ??tait un grand dinosaure carnivore qui a v??cu pendant le Cr??tac?? sup??rieur, il y a environ 112 ?? 97 millions d'ann??es. Il mesurait environ 12 ?? 13 m??tres de long et pesait environ 7 ?? 8 tonnes. Le Carcharodontosaurus ??tait un dinosaure ?? m??choires puissantes dot?? de dents de plus de 7 cm de long, ce qui en faisait l'un des plus grands pr??dateurs de son ??poque. On pense que le Carcharodontosaurus ??tait un pr??dateur redoutable capable de chasser des proies importantes telles que les sauropodes. <br><br>Les restes du Carcharodontosaurus ont ??t?? d??couverts en Afrique du Nord et en Argentine. Les d??couvertes r??centes montrent que le Carcharodontosaurus ??tait plus r??pandu qu'on ne le pensait auparavant, avec des sp??cimens trouv??s en ??gypte et en Mauritanie. Le Carcharodontosaurus est consid??r?? comme un lointain cousin du Tyrannosaurus Rex.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "2 Tonnes",
                    taille: "9 m??tres",
                    description: "Le Carnotaurus ??tait un dinosaure carnivore de la famille des Abelisauridae qui a v??cu pendant le Cr??tac?? sup??rieur, il y a environ 70 ?? 68 millions d'ann??es. Il mesurait environ 8 ?? 9 m??tres de long et pesait environ 1 ?? 1,5 tonne. Le Carnotaurus ??tait connu pour ses cornes distinctes au-dessus de ses yeux, ce qui lui donnait un aspect tr??s reconnaissable. Les cornes ??taient probablement utilis??es pour impressionner les autres dinosaures ou pour se battre pour des partenaires ou des territoires. <br><br>Les restes les plus complets du Carnotaurus ont ??t?? d??couverts en Argentine en 1984. Les ??tudes sur les os et les fossiles ont r??v??l?? que le Carnotaurus ??tait un dinosaure tr??s agile dot?? de membres post??rieurs plus courts et plus forts que les membres ant??rieurs. On pense que le Carnotaurus ??tait un pr??dateur rapide qui chassait des proies plus petites telles que les dinosaures herbivores et les pt??rosaures. Son nom veut dire ?????taureau carnivore ?? ?? cause de ses cornes semblables ?? un taureau. Il a les bras plus petits qu???un t-rex.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "200 Kg",
                    taille: "6 m??tres",
                    description: "Le Gallimimus ??tait un dinosaure ornithomime, une forme de dinosaure sans dent, qui a v??cu pendant le Cr??tac?? sup??rieur, il y a environ 70 ?? 68 millions d'ann??es. Il mesurait environ 6 ?? 7 m??tres de long et pesait environ 500 kg. Le Gallimimus ??tait connu pour sa course effr??n??e sur ses deux jambes. Il avait une longue t??te effil??e avec un bec, de petits bras et des griffes tr??s courtes. Le Gallimimus ??tait probablement un animal omnivore qui se nourrissait de feuilles, de branches et d'autres parties tendres des plantes ainsi que de de petit vert??br?? et des insectes. <br><br>Les restes les plus complets du Gallimimus ont ??t?? d??couverts en Mongolie en 1971. Les d??couvertes ult??rieures ont montr?? que le Gallimimus ??tait largement r??pandu en Asie centrale et que ce genre comprenait plusieurs esp??ces. Les ??tudes sur les os et les fossiles du Gallimimus ont contribu?? ?? la compr??hension de la vie et des habitudes des dinosaures ornithomimes.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "1.6 tonnes",
                    taille: "4 m??tres",
                    description: "Le Minmi ??tait un dinosaure ankylosaurien qui a v??cu pendant le Cr??tac?? sup??rieur, il y a environ 95 ?? 90 millions d'ann??es. Il mesurait environ 4 m??tres de long et pesait environ 1,5 tonne. Le Minmi ??tait connu pour sa carapace de protection qui recouvrait son dos et ses flancs. La carapace ??tait form??e de plaques osseuses et de pics qui auraient prot??g?? le Minmi contre les pr??dateurs. Le Minmi ??tait probablement un animal herbivore qui se nourrissait de feuilles et d'autres parties tendres des plantes. Les restes les plus complets du Minmi ont ??t?? d??couverts en Australie en 1980. <br><br>Les d??couvertes ult??rieures ont montr?? que le Minmi ??tait end??mique en Australie et que ce genre comprenait plusieurs esp??ces. Les ??tudes sur les os et les fossiles du Minmi ont contribu?? ?? la compr??hension des dinosaures ankylosauriens et de la biodiversit?? de la vie sur Terre il y a des millions d'ann??es.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "3.6 tonnes",
                    taille: "10 m??tres",
                    description: "Le Parasaurolophus ??tait un dinosaure hadrosaurien, ??galement connu sous le nom de dinosaure ?? cr??te tubulaire, qui a v??cu pendant le Cr??tac?? sup??rieur, il y a environ 76 ?? 73 millions d'ann??es. Il mesurait environ 10 ?? 12 m??tres de long et pesait environ 2 ?? 4 tonnes. Le Parasaurolophus ??tait connu pour sa cr??te tubulaire sur sa t??te, qui mesurait environ 1,5 ?? 2 m??tres de long. La cr??te ??tait probablement utilis??e pour communiquer avec d'autres dinosaures ou pour impressionner des partenaires potentiels. <br><br>Les restes les plus complets du Parasaurolophus ont ??t?? d??couverts au Nouveau-Mexique aux ??tats-Unis en 1922. Les d??couvertes ult??rieures ont montr?? que le Parasaurolophus ??tait largement r??pandu dans l'ouest de l'Am??rique du Nord et que ce genre comprenait plusieurs esp??ces. Les ??tudes sur les os et les fossiles du Parasaurolophus ont contribu?? ?? la compr??hension des dinosaures hadrosauriens et de la biodiversit?? de la vie sur Terre il y a des millions d'ann??es.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "500 Kg",
                    taille: "5 m??tres",
                    description: "Les Protoceratops sont un genre de dinosaures herbivores appartenant ?? la famille des Ceratopsidae, vivant il y a environ 70 ?? 80 millions d'ann??es pendant le Cr??tac?? sup??rieur. Ils mesuraient environ 4 ?? 5 m??tres de long et pesaient environ 500 kilogrammes. Les Protoceratops ??taient des dinosaures ?? plaques et ??taient souvent confondus avec les Triceratops, qui ??taient des dinosaures plus grands et plus avanc??s. Les Protoceratops ??taient des herbivores et se nourrissaient probablement d'herbes, de feuilles et de petits arbustes. Leur cr??ne plat et large avec des bosses leur permettait de d??fendre leur territoire contre les pr??dateurs, comme le Tyrannosaurus Rex. <br><br>Des restes de nids de Protoceratops ont ??t?? trouv??s en Mongolie, sugg??rant que ces dinosaures pouvaient pondre des oeufs et s'occuper de leur prog??niture. Les Protoceratops ont ??galement ??t?? associ??s ?? des dinosaures ovipares, ce qui signifie qu'ils pondent des ??ufs plut??t que d'incuber leurs ??ufs comme les oiseaux modernes. <br><br>Enfin, les Protoceratops ont jou?? un r??le important dans la compr??hension de l'??volution des dinosaures ?? cornes et ?? plaques. De nombreux fossiles de Protoceratops ont ??t?? trouv??s en Mongolie et en Chine, ce qui a permis aux scientifiques d'en apprendre davantage sur leur anatomie, leur comportement et leur ??cologie.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "12 tonnes",
                    taille: "9 m??tres",
                    description: "Les Triceratops sont un genre de dinosaures herbivores appartenant ?? la famille des Ceratopsidae, vivant il y a environ 68 ?? 66 millions d'ann??es pendant le Cr??tac?? sup??rieur en Am??rique du Nord. Ils mesuraient environ 9 ?? 10 m??tres de long et pesaient environ 6 ?? 12 tonnes. Ils ??taient caract??ris??s par leur cr??ne large et ??pais avec trois cornes sur le front et une grande bosse sur la nuque. Les Triceratops ??taient des animaux sociaux et vivaient en groupes dans les r??gions herbues de l'Am??rique du Nord. Ils se nourrissaient principalement de feuilles, d'herbes et de petits arbustes. Leur cr??ne ??pais avec des cornes et des bosses leur permettait de se d??fendre contre les pr??dateurs, comme le Tyrannosaurus Rex. <br><br>Les restes fossiles du Triceratops ont ??t?? largement r??partis en Am??rique du Nord, ce qui a permis aux scientifiques d'en apprendre davantage sur leur anatomie, leur comportement et leur ??cologie. <br><br>Les Triceratops sont devenus l'un des dinosaures les plus c??l??bres et les plus connus au monde en raison de leur apparence distinctive et de leur importance pour la compr??hension de l'??volution des dinosaures ?? cornes et ?? plaques.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "9 Tonnes",
                    taille: "13 m??tres",
                    description: "Son nom veut dire ?????Roi des l??zards ??. Le Tyrannosaurus Rex (ou T. Rex) ??tait un gros pr??dateur carnivore vivant il y a environ 68 ?? 66 millions d'ann??es pendant le Cr??tac?? sup??rieur en Am??rique du Nord. Il mesurait environ 12 ?? 13 m??tres de long et pesait environ 6 ?? 9 tonnes. Il ??tait caract??ris?? par ses puissantes m??choires garnies de grandes dents ac??r??es, sa grosse t??te, son corps massif et ses courtes pattes avants. <br><br>Le T. Rex ??tait probablement le plus grand pr??dateur terrestre de son ??poque et ??tait capable de chasser et de tuer des proies consid??rables, telles que les Triceratops et les Edmontosaurus. On pense qu'il ??tait ??galement un animal opportuniste et qu'il se nourrissait de charognes et de proies bless??es ou malades. <br><br>Les restes fossiles du T. Rex ont ??t?? trouv??s en Am??rique du Nord, ce qui a permis aux scientifiques d'en apprendre davantage sur leur anatomie, leur comportement et leur ??cologie. <br><br>Le T. Rex est devenu l'un des dinosaures les plus c??l??bres et les plus connus au monde en raison de son apparence effrayante et de son r??le dans la culture populaire, en particulier dans les films de dinosaures. Les ??tudes g??n??tiques r??centes ont ??galement montr?? que le T. Rex est apparent?? aux oiseaux modernes, ce qui soul??ve des questions sur l'??volution des dinosaures et leur lien avec les oiseaux. il avait une esp??rance de vie d???environ 30 ans.",
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
                    ere: "Cr??tac??",
                    biome: "plaine",
                    poids: "20 Kg",
                    taille: "2 m??tres",
                    description: "Le Velociraptor est un dinosaure th??ropode de la famille des Dromaeosauridae, qui a v??cu il y a environ 75 ?? 71 millions d'ann??es au Cr??tac?? sup??rieur en Asie de l'Est. Il mesurait environ 1,5 ?? 2 m??tres de long pour une hauteur d'environ 1 m??tre ?? l'??paule et pesait environ 15 ?? 30 kg. Le Velociraptor ??tait un pr??dateur vif et agile dot?? de griffes ac??r??es sur ses pattes arri??re. Bien que le Velociraptor ait ??t?? connu pour chasser en meute, il n'y a pas suffisamment de preuves fossilis??es pour d??terminer avec certitude s'il vivait en groupes sociaux. <br><br>Certains scientifiques pensent que les Velociraptors pouvaient ??tre des animaux solitaires qui se rassemblaient seulement pour chasser. Le Velociraptor ??tait un pr??dateur opportuniste qui se nourrissait probablement de petits dinosaures, d'??ufs d'autres dinosaures et peut-??tre m??me de charognes. <br><br>Le Velociraptor avait une t??te longue et ??troite avec des dents ac??r??es adapt??es ?? la pr??dation. Il avait ??galement des griffes tranchantes sur ses pattes arri??re qui lui permettaient de saisir et de retenir sa proie. Ses pattes avant ??taient plus petites et plus faibles, mais pouvaient ??tre utilis??es pour tenir sa proie ou pour se d??fendre. Bien que le Velociraptor ait ??t?? dot?? d'un cerveau plus d??velopp?? que celui de la plupart des autres dinosaures de sa taille, il n'??tait probablement pas aussi intelligent que les oiseaux d'aujourd'hui, qui sont les descendants directs des dinosaures. <br><br>Le Velociraptor, ainsi que la plupart des autres dinosaures, a disparu il y a environ 65 millions d'ann??es, probablement ?? cause d'un impact m??t??orique sur Terre. Notez que la repr??sentation populaire du Velociraptor, notamment dans les films de la franchise 'Jurassic Park', est souvent exag??r??e en termes de taille et d'intelligence. Dans les films, le Velociraptor est pr??sent?? comme ??tant plus grand et plus intelligent qu'il ne l'??tait en r??alit??.",
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
                    ere: "Cr??tac??",
                    biome: "a??rien",
                    poids: "50 grammes",
                    taille: "15 centim??tres",
                    description: "Les Iberomesornis sont une esp??ce d'oiseaux primitifs qui ont v??cu en Espagne il y a environ 120 ?? 130 millions d'ann??es, pendant l'Albien, une p??riode du M??sozo??que. Ils appartiennent au groupe des Ornithuromorpha, qui est consid??r?? comme un anc??tre des oiseaux modernes. Les Iberomesornis ??taient de petits oiseaux, mesurant environ 15 ?? 20 cm de long, et se sont probablement nourris de petits insectes et de plantes. <br><br>C'est une des plus anciennes d??couvertes d'oiseaux au monde et a aider ?? comprendre l'??volution des oiseaux ?? partir des dinosaures. <br><br>Les Iberomesornis ont des caract??ristiques distinctes des oiseaux modernes, telles que des plumes plus grosses et des doigts articul??s sur leurs pattes. Cependant, ils ont ??galement des caract??ristiques similaires ?? celles des oiseaux modernes, telles que des os creux et l??gers, des plumes et des ailes. Les Iberomesornis sont un exemple important de l'??volution des oiseaux ?? partir des dinosaures et nous apportent des informations pr??cieuses sur les premiers stades de cette ??volution.",
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
                    ere: "Cr??tac??",
                    biome: "a??rien",
                    poids: "250 Kg",
                    taille: "15 m??tres",
                    description: "Le Quetzalcoatlus est un dinosaure pterosaure qui a v??cu ?? la fin du Cr??tac??, il y a environ 68 ?? 66 millions d'ann??es. Il ??tait l'un des plus grands volateurs connus de tous les temps, avec une envergure pouvant atteindre plus de 10 m??tres. Le Quetzalcoatlus est consid??r?? comme un azhdarchide, une famille de pterosaures caract??ris??e par leur long cou et leur bec effil??. Les scientifiques pensent que le Quetzalcoatlus se nourrissait de petits animaux, tels que les reptiles et les poissons, et peut-??tre m??me de petits mammif??res. <br><br>Les restes fossiles de Quetzalcoatlus ont ??t?? trouv??s dans les formations de s??diments de l'Ouest du Texas aux ??tats-Unis. Les scientifiques pensent que le Quetzalcoatlus ??tait un animal migrateur et que sa grande envergure lui permettait de voler sur de longues distances. En plus de sa taille imposante, le Quetzalcoatlus se distinguait par son cr??ne allong?? et son bec en forme de couteau. Les scientifiques pensent que ces adaptations ??taient probablement li??es ?? son r??gime alimentaire et ?? sa capacit?? ?? capturer et ?? manger de la nourriture. <br><br>Bien que les pterosaures en g??n??ral aient ??t?? tr??s r??pandus ?? leur ??poque, le genre Quetzalcoatlus est consid??r?? comme ??teint ?? la fin du Cr??tac??, probablement en raison de la grande extinction de masse qui a eu lieu ?? cette ??poque et qui a vu la disparition de plusieurs esp??ces animales et v??g??tales.",
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
                    ere: "Cr??tac??",
                    biome: "a??rien",
                    poids: "2 Kg",
                    taille: "1.2 m??tres",
                    description: "Le Microraptor ??tait un dinosaure de petite taille de la famille des dromaeosaurid??s qui a v??cu en Chine au Cr??tac?? inf??rieur, il y a environ 120 ?? 125 millions d'ann??es. Il ??tait remarquable pour ses plumes sur les membres ant??rieurs et post??rieurs, ce qui en faisait l'un des premiers dinosaures connus ?? avoir d??velopp?? des plumes. Les scientifiques pensent que le Microraptor ??tait capable de voler, bien que le m??canisme exact soit encore discut??. Certaines th??ories sugg??rent que le Microraptor a utilis?? ses plumes pour planer ou pour effectuer des vols courts et rapides pour ??chapper ?? ses pr??dateurs ou pour attraper ses proies. <br><br>Le Microraptor a ??galement ??t?? remarqu?? pour sa bi-couleur, avec des plumes noires sur le dessus et des plumes blanches en dessous, ce qui pourrait avoir une fonction camouflage ou d??fensive. Les restes fossiles de Microraptor ont ??t?? d??couverts dans les formations de s??diments de la Chine du Nord-Est.",
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
                    ere: "Cr??tac??",
                    biome: "a??rien",
                    poids: "25 Kg",
                    taille: "7 m??tres",
                    description: "Le Pteranodon ??tait un pterosaure qui a v??cu au Maastrichtien, il y a environ 70 ?? 80 millions d'ann??es. C'??tait l'un des plus grands pterosaures connus, avec une envergure pouvant atteindre jusqu'?? 7 m??tres. Le Pteranodon ??tait ??galement caract??ris?? par son cr??ne allong?? et sans dents et son long cou. Les scientifiques pensent que le Pteranodon ??tait un animal volant capable de parcourir de grandes distances gr??ce ?? son aile large et souple. Il est ??galement consid??r?? comme un piscivore, ce qui signifie qu'il se nourrissait principalement de poissons qu'il attrapait en plongeant dans l'eau. <br><br>Les restes fossiles de Pteranodon ont ??t?? trouv??s dans les formations de s??diments de l'Am??rique du Nord, notamment dans les ??tats du Kansas et du Missouri aux ??tats-Unis. Le Pteranodon est devenu l'un des pterosaures les plus connus gr??ce ?? ses caract??ristiques uniques et ?? sa large r??partition g??ographique.",
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
                    ere: "Cr??tac??",
                    biome: "aquatique",
                    poids: "150 Kg",
                    taille: "6 m??tres",
                    description: "Le Bonnerichthys ??tait un poisson pr??historique de la famille des ganoids, qui a v??cu au d??but du Permien, il y a environ 300 millions d'ann??es. Il ??tait caract??ris?? par sa carapace dure et ??cailleuse qui le prot??geait contre les pr??dateurs et les conditions environnementales difficiles. Le Bonnerichthys ??tait un poisson de fond qui se nourrissait probablement de petits organismes aquatiques et de plantes. <br><br>Les restes fossiles de Bonnerichthys ont ??t?? trouv??s dans les formations de s??diments de l'Europe de l'Est, notamment en Allemagne et en Tch??quie. Bien que le Bonnerichthys soit un poisson relativement peu connu, il joue un r??le important dans la compr??hension de l'??volution des poissons pr??historiques et de la diversit?? des formes de vie dans les oc??ans anciens. Les ??tudes sur les restes fossiles de Bonnerichthys peuvent aider les scientifiques ?? mieux comprendre les adaptations des poissons ?? leur environnement et ?? la vie dans l'oc??an il y a des centaines de millions d'ann??es.",
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
                    ere: "Cr??tac??",
                    biome: "aquatique",
                    poids: "2 tonnes",
                    taille: "10 m??tres",
                    description: "L'Elasmosaurus ??tait un pl??siosaure qui a v??cu au Maastrichtien, il y a environ 70 ?? 80 millions d'ann??es. C'??tait un reptile marin ?? long cou caract??ris?? par son long cou et sa petite t??te, qui contenait de petits dents pointues. L'Elasmosaurus mesurait environ 15 ?? 20 m??tres de long, avec un cou qui pouvait repr??senter plus de la moiti?? de sa longueur totale. Les scientifiques pensent que l'Elasmosaurus utilisait son long cou pour attraper des proies dans les eaux profondes, telles que des poissons, des crustac??s et d'autres reptiles marins. <br><br>Les restes fossiles d'Elasmosaurus ont ??t?? trouv??s dans les formations de s??diments des Am??riques du Nord et du Sud, ainsi que d'autres r??gions du monde. L'Elasmosaurus est devenu l'un des pl??siosaures les plus connus gr??ce ?? son aspect inhabituel et ?? sa distribution g??ographique large. Les ??tudes sur les restes fossiles d'Elasmosaurus peuvent aider les scientifiques ?? mieux comprendre l'??volution des reptiles marins et leur adaptation aux conditions de vie en mer.",
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
                    ere: "Cr??tac??",
                    biome: "aquatique",
                    poids: "2 Tonnes",
                    taille: "4 m??tres",
                    description: "L'Archelon ??tait une tortue g??ante qui a v??cu au Maastrichtien, il y a environ 70 ?? 80 millions d'ann??es. C'??tait une tortue marine caract??ris??e par sa carapace ??norme, qui pouvait atteindre jusqu'?? 4 m??tres de longueur. L'Archelon ??tait un animal flottant qui se nourrissait de mollusques, de crustac??s et d'autres animaux marins. Les scientifiques pensent que l'Archelon se d??pla??ait lentement et utilisait sa grosse carapace pour se prot??ger des pr??dateurs marins. <br><br>Les restes fossiles d'Archelon ont ??t?? trouv??s dans les formations de s??diments de l'Am??rique du Nord, notamment dans les ??tats du Dakota du Nord et du Dakota du Sud aux ??tats-Unis. L'Archelon est devenu l'une des tortues les plus connues de la p??riode pr??historique en raison de sa grande taille et de sa distribution g??ographique large. Les ??tudes sur les restes fossiles d'Archelon peuvent aider les scientifiques ?? mieux comprendre l'??volution des tortues marines et leur adaptation ?? la vie en mer.",
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
                    ere: "Cr??tac??",
                    biome: "aquatique",
                    poids: "15 Tonnes",
                    taille: "17 m??tres",
                    description: "Le Mosasaurus ??tait un reptile marin g??ant qui a v??cu au Maastrichtien, il y a environ 70 ?? 80 millions d'ann??es. Le Mosasaurus ??tait un reptile marin g??ant, avec une longueur allant jusqu'?? 17 m??tres pour les sp??cimens les plus grands. Il avait une t??te ??norme, large et aplatie, avec de grandes dents pointues et des m??choires puissantes. Son corps ??tait allong?? et similaire ?? celui d'un serpent, ce qui lui permettait de nager rapidement et de plonger pour chasser. Le Mosasaurus ??tait un pr??dateur redoutable qui se nourrissait de poissons, de crustac??s, de mollusques et d'autres reptiles marins. Les scientifiques pensent qu'il a chass?? ?? la surface de l'eau et plong?? pour attraper ses proies. De plus, la morphologie de sa t??te et de ses m??choires montre qu'il ??tait capable de capturer et de tenir de grosses proies dans sa bouche. <br><br>Les restes fossiles de Mosasaurus ont ??t?? trouv??s dans les formations de s??diments de l'Am??rique du Nord, d'Europe et d'Afrique, ce qui montre une distribution g??ographique large pour cette esp??ce. Les ??tudes sur les restes fossiles peuvent aider les scientifiques ?? mieux comprendre les conditions environnementales et les ??cosyst??mes marins de la p??riode pr??historique. <br><br>Le Mosasaurus est un membre important de la famille des mosasaurs, qui ont ??t?? les plus grands reptiles marins de la p??riode pr??historique. Les ??tudes sur les restes fossiles de Mosasaurus peuvent aider les scientifiques ?? mieux comprendre l'??volution des reptiles marins et leur adaptation ?? la vie en mer, ainsi que les changements environnementaux et ??cologiques qui se sont produits au cours de l'histoire de la Terre. Les ??tudes sur les restes fossiles de Mosasaurus peuvent aider les scientifiques ?? mieux comprendre l'??volution des reptiles marins et leur adaptation ?? la vie en mer.",
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
            bulle: "Salut moi c'est Rexy, je suis l?? pour t'aider, tu savais que tu pouvais immiter des dinosaure ?",

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
        // Defini la premi??re lettre du mot des dinosaures pour l'ordre alphabetique
        lettrePremiere(mot) {
            if (mot.substring(0, 1) == this.derniereLettre) {
                return false;
            } else {
                return true;
            }
        },
        // Affiche le modal information du dinosaure selectionn?? 
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
