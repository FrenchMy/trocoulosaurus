const inputSlider = document.querySelector("#myrange");
const output = document.querySelector("#value");
const meteorite = document.querySelector(".meteorite");
const imageMeteorite = document.querySelector(".img-meteorite");

//TOUTES LES CARTES
const ameriqueNordRotate = document.querySelector(".carte-ameriqueNord");
const ameriqueSudRotate = document.querySelector(".carte-ameriqueSud");
const afriqueRotate = document.querySelector(".carte-afrique");
const madagascarRotate = document.querySelector(".carte-madagascar");
const indeRotate = document.querySelector(".carte-inde");
const eurasieRotate = document.querySelector(".carte-eurasie");
const antarctiqueRotate = document.querySelector(".carte-antarctique");
const australieRotate = document.querySelector(".carte-australie");
const groenlandRotate = document.querySelector(".carte-groenland");

const ameriqueNord = document.querySelector(".ameriqueNord");
const ameriqueSud = document.querySelector(".ameriqueSud");
const afrique = document.querySelector(".afrique");
const madagascar = document.querySelector(".madagascar");
const inde = document.querySelector(".inde");
const eurasie = document.querySelector(".eurasie");
const antarctique = document.querySelector(".antarctique");
const australie = document.querySelector(".australie");
const groenland = document.querySelector(".groenland");

let valeurMin = -200;
let valeurMax = -66;
let lastValue = valeurMin;

let positions = [
  {
    //Pangéé 1
    afrique: {
      posX: 0,
      posY: 0,
      rot: 20,
    },
    madagascar: {
      posX: 0,
      posY: 0,
      rot: 25,
    },
    ameriqueNord: {
      posX: 0,
      posY: 0,
      rot: 20,
    },
    ameriqueSud: {
      posX: 0,
      posY: 0,
      rot: -20,
    },
    eurasie: {
      posX: 0,
      posY: 0,
      rot: 20,
    },
    antarctique: {
      posX: 0,
      posY: 0,
      rot: 0,
    },
    australie: {
      posX: 0,
      posY: 0,
      rot: 0,
    },
    inde: {
      posX: 0,
      posY: 0,
      rot: 50,
    },
    groenland: {
      posX: 0,
      posY: 0,
      rot: 15,
    },
  },
  {
    //Pangéé 2
    afrique: {
      posX: 0,
      posY: 0,
      rot: 15,
    },
    madagascar: {
      posX: 17,
      posY: 0,
      rot: 18,
    },
    ameriqueNord: {
      posX: -70,
      posY: 3,
      rot: 15,
    },
    ameriqueSud: {
      posX: 0,
      posY: 5,
      rot: -6,
    },
    eurasie: {
      posX: 50,
      posY: -2,
      rot: 15,
    },
    antarctique: {
      posX: -14,
      posY: 18,
      rot: 0,
    },
    australie: {
      posX: 0,
      posY: -20,
      rot: 0,
    },
    inde: {
      posX: -8,
      posY: -50,
      rot: -4,
    },
    groenland: {
      posX: 0,
      posY: 0,
      rot: 10,
    },
  },
  {
    //Pangéé 3
    afrique: {
      posX: 0,
      posY: 0,
      rot: 10,
    },
    madagascar: {
      posX: 33,
      posY: 0,
      rot: 11,
    },
    ameriqueNord: {
      posX: -140,
      posY: 6,
      rot: 10,
    },
    ameriqueSud: {
      posX: -124,
      posY: 10,
      rot: -6,
    },
    eurasie: {
      posX: 100,
      posY: -5,
      rot: 10,
    },
    antarctique: {
      posX: -26,
      posY: 37,
      rot: 0,
    },
    australie: {
      posX: 80,
      posY: -40,
      rot: 0,
    },
    inde: {
      posX: -15,
      posY: -50,
      rot: -7,
    },
    groenland: {
      posX: 0,
      posY: 0,
      rot: 5,
    },
  },
  {
    //Pangéé 4
    afrique: {
      posX: 0,
      posY: 0,
      rot: 5,
    },
    madagascar: {
      posX: 49,
      posY: 0,
      rot: 8,
    },
    ameriqueNord: {
      posX: -210,
      posY: 8,
      rot: 5,
    },
    ameriqueSud: {
      posX: -187,
      posY: 15,
      rot: 2,
    },
    eurasie: {
      posX: 150,
      posY: -7,
      rot: 5,
    },
    antarctique: {
      posX: -38,
      posY: 56,
      rot: 0,
    },
    australie: {
      posX: 165,
      posY: -60,
      rot: 0,
    },
    inde: {
      posX: -23,
      posY: -100,
      rot: -11,
    },
    groenland: {
      posX: 0,
      posY: 0,
      rot: 0,
    },
  },
  {
    //Pangéé 5
    afrique: {
      posX: 0,
      posY: 0,
      rot: 0,
    },
    madagascar: {
      posX: 65,
      posY: 0,
      rot: 0,
    },
    ameriqueNord: {
      posX: -280,
      posY: 10,
      rot: 0,
    },
    ameriqueSud: {
      posX: -250,
      posY: 20,
      rot: 10,
    },
    eurasie: {
      posX: 200,
      posY: -10,
      rot: 0,
    },
    antarctique: {
      posX: -50,
      posY: 75,
      rot: 0,
    },
    australie: {
      posX: 250,
      posY: -80,
      rot: 0,
    },
    inde: {
      posX: -30,
      posY: -150,
      rot: -15,
    },
    groenland: {
      posX: 0,
      posY: 0,
      rot: 0,
    },
  },
]

//ACTIVER LE RANGE SUR TACTILE
const range = new RangeTouch('input[type="range"]');


//TOUT LES DINO - points
const allosaurusPoint = document.querySelector(".allosaurus");
const amargasaurusPoint = document.querySelector(".amargasaurus");
const ankylosaurusPoint = document.querySelector(".ankylosaurus");
const apatosaurusPoint = document.querySelector(".apatosaurus");
const archaeopteryxPoint = document.querySelector(".archaeopteryx");
const archelonPoint = document.querySelector(".archelon");
const baryonyxPoint = document.querySelector(".baryonyx");
const bonnerichthysPoint = document.querySelector(".bonnerichthys");
const brachiosaurusPoint = document.querySelector(".brachiosaurus");
const brontosaurusPoint = document.querySelector(".brontosaurus");
const camptosaurusPoint = document.querySelector(".camptosaurus");
const carcharodontosaurusPoint = document.querySelector(".carcharodontosaurus");
const carnotaurusPoint = document.querySelector(".carnotaurus");
const dilophosaurusPoint = document.querySelector(".dilophosaurus");
const dimorphodonPoint = document.querySelector(".dimorphodon");
const diplodocusPoint = document.querySelector(".diplodocus");
const elasmosaurusPoint = document.querySelector(".elasmosaurus");
const gallimimusPoint = document.querySelector(".gallimimus");
const huayangosaurusPoint = document.querySelector(".huayangosaurus");
const hydrorionPoint = document.querySelector(".plesiosaurus");
const iberomesornisPoint = document.querySelector(".iberomesornis");
const ichthyosaurusPoint = document.querySelector(".ichthyosaurus");
const lesothosaurusPoint = document.querySelector(".lesothosaurus");
const liopleurodonPoint = document.querySelector(".liopleurodon");
const megalosaurusPoint = document.querySelector(".megalosaurus");
const microraptorPoint = document.querySelector(".microraptor");
const minmiPoint = document.querySelector(".minmi");
const mosasaurusPoint = document.querySelector(".mosasaurus");
const ozraptorPoint = document.querySelector(".ozraptor");
const parasaurolophusPoint = document.querySelector(".parasaurolophus");
const pliosaurusPoint = document.querySelector(".pliosaurus");
const protoceratopsPoint = document.querySelector(".protoceratops");
const pteranodonPoint = document.querySelector(".pteranodon");
const pterodactylePoint = document.querySelector(".pterodactyle");
const quetzalcoatlusPoint = document.querySelector(".quetzalcoatlus");
const rhamphorhynchusPoint = document.querySelector(".rhamphorhynchus");
const stegosaurusPoint = document.querySelector(".stegosaurus");
const triceratopsPoint = document.querySelector(".triceratops");
const tyrannosaurusPoint = document.querySelector(".tyrannosaurus");
const velociraptorPoint = document.querySelector(".velociraptor");

output.innerHTML = valeurMin;

inputSlider.oninput = function () {

  const range = Math.abs(valeurMin - valeurMax);
  const rangeValue = inputSlider.value * range;
  const currentData = positions[Math.round(inputSlider.value * (positions.length - 1))];

  const jurassicUn = inputSlider.value >= 0 && inputSlider.value <= 0.12;
  const jurassicDeux = inputSlider.value > 0.12 && inputSlider.value <= 0.37;
  const jurassicTrois = inputSlider.value > 0.37 && inputSlider.value <= 0.49;
  const cretaceUn = inputSlider.value >= 0.50 && inputSlider.value <= 0.62;
  const cretaceDeux = inputSlider.value > 0.62 && inputSlider.value <= 0.87;
  const cretaceTrois = inputSlider.value > 0.87 && inputSlider.value <= 1;

  //METEORITE
  output.innerHTML = Math.round(valeurMin + rangeValue);
  meteorite.style.left = inputSlider.value * 100 + '%';

  if (inputSlider.value > lastValue) {
    imageMeteorite.style.transform = "rotate(-90deg)";
  }

  if (inputSlider.value < lastValue) {
    imageMeteorite.style.transform = "rotate(90deg) scaleX(-1)";
  }


  //DEFINIR LE MOUVEMENT DES DINOS
  if (jurassicUn) {

    allosaurusPoint.style.top = "24%";
    allosaurusPoint.style.left = "34%";
    allosaurusPoint.style.display = "block";

    amargasaurusPoint.style.top = "0%";
    amargasaurusPoint.style.left = "0%";
    amargasaurusPoint.style.display = "none";

    ankylosaurusPoint.style.top = "0%";
    ankylosaurusPoint.style.left = "0%";
    ankylosaurusPoint.style.display = "none";

    apatosaurusPoint.style.top = "17%";
    apatosaurusPoint.style.left = "25%";
    apatosaurusPoint.style.display = "block";

    archaeopteryxPoint.style.top = "7%";
    archaeopteryxPoint.style.left = "32%";
    archaeopteryxPoint.style.display = "block";

    archelonPoint.style.top = "0%";
    archelonPoint.style.left = "0%";
    archelonPoint.style.display = "none";

    baryonyxPoint.style.top = "0%";
    baryonyxPoint.style.left = "0%";
    baryonyxPoint.style.display = "none";

    bonnerichthysPoint.style.top = "0%";
    bonnerichthysPoint.style.left = "0%";
    bonnerichthysPoint.style.display = "none";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "30%";
    brachiosaurusPoint.style.display = "block";

    brontosaurusPoint.style.top = "47%";
    brontosaurusPoint.style.left = "26%";
    brontosaurusPoint.style.display = "block";

    camptosaurusPoint.style.top = "32%";
    camptosaurusPoint.style.left = "37%";
    camptosaurusPoint.style.display = "block";

    carcharodontosaurusPoint.style.top = "0%";
    carcharodontosaurusPoint.style.left = "0%";
    carcharodontosaurusPoint.style.display = "none";

    carnotaurusPoint.style.top = "0%";
    carnotaurusPoint.style.left = "0%";
    carnotaurusPoint.style.display = "none";

    dilophosaurusPoint.style.top = "35%";
    dilophosaurusPoint.style.left = "60%";
    dilophosaurusPoint.style.display = "block";

    dimorphodonPoint.style.top = "15%";
    dimorphodonPoint.style.left = "33%";
    dimorphodonPoint.style.display = "block";

    diplodocusPoint.style.top = "26%";
    diplodocusPoint.style.left = "31%";
    diplodocusPoint.style.display = "block";

    elasmosaurusPoint.style.top = "0%";
    elasmosaurusPoint.style.left = "0%";
    elasmosaurusPoint.style.display = "none";

    gallimimusPoint.style.top = "0%";
    gallimimusPoint.style.left = "0%";
    gallimimusPoint.style.display = "none";

    huayangosaurusPoint.style.top = "30%";
    huayangosaurusPoint.style.left = "55%";
    huayangosaurusPoint.style.display = "block";

    hydrorionPoint.style.top = "29%";
    hydrorionPoint.style.left = "30%";
    hydrorionPoint.style.display = "block";

    iberomesornisPoint.style.top = "0%";
    iberomesornisPoint.style.left = "0%";
    iberomesornisPoint.style.display = "none";

    ichthyosaurusPoint.style.top = "40%";
    ichthyosaurusPoint.style.left = "63%";
    ichthyosaurusPoint.style.display = "block";

    lesothosaurusPoint.style.top = "69%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "block";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "block";

    megalosaurusPoint.style.top = "9%";
    megalosaurusPoint.style.left = "35%";
    megalosaurusPoint.style.display = "block";

    microraptorPoint.style.top = "0%";
    microraptorPoint.style.left = "0%";
    microraptorPoint.style.display = "none";

    minmiPoint.style.top = "0%";
    minmiPoint.style.left = "0%";
    minmiPoint.style.display = "none";

    mosasaurusPoint.style.top = "0%";
    mosasaurusPoint.style.left = "0%";
    mosasaurusPoint.style.display = "none";

    ozraptorPoint.style.top = "77%";
    ozraptorPoint.style.left = "65%";
    ozraptorPoint.style.display = "block";

    parasaurolophusPoint.style.top = "0%";
    parasaurolophusPoint.style.left = "0%";
    parasaurolophusPoint.style.display = "none";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "25%";
    pliosaurusPoint.style.display = "block";

    protoceratopsPoint.style.top = "0%";
    protoceratopsPoint.style.left = "0%";
    protoceratopsPoint.style.display = "none";

    pteranodonPoint.style.top = "0%";
    pteranodonPoint.style.left = "0%";
    pteranodonPoint.style.display = "none";

    pterodactylePoint.style.top = "28%";
    pterodactylePoint.style.left = "42%";
    pterodactylePoint.style.display = "block";

    quetzalcoatlusPoint.style.top = "0%";
    quetzalcoatlusPoint.style.left = "0%";
    quetzalcoatlusPoint.style.display = "none";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "35%";
    rhamphorhynchusPoint.style.display = "block";

    stegosaurusPoint.style.top = "55%";
    stegosaurusPoint.style.left = "25%";
    stegosaurusPoint.style.display = "block";

    triceratopsPoint.style.top = "0%";
    triceratopsPoint.style.left = "0%";
    triceratopsPoint.style.display = "none";

    tyrannosaurusPoint.style.top = "0%";
    tyrannosaurusPoint.style.left = "0%";
    tyrannosaurusPoint.style.display = "none";

    velociraptorPoint.style.top = "0%";
    velociraptorPoint.style.left = "0%";
    velociraptorPoint.style.display = "none";
    
  }else if (jurassicDeux) {

    allosaurusPoint.style.top = "24%";
    allosaurusPoint.style.left = "32%";
    allosaurusPoint.style.display = "block";

    amargasaurusPoint.style.top = "0%";
    amargasaurusPoint.style.left = "0%";
    amargasaurusPoint.style.display = "none";

    ankylosaurusPoint.style.top = "0%";
    ankylosaurusPoint.style.left = "0%";
    ankylosaurusPoint.style.display = "none";

    apatosaurusPoint.style.top = "19%";
    apatosaurusPoint.style.left = "19%";
    apatosaurusPoint.style.display = "block";

    archaeopteryxPoint.style.top = "8%";
    archaeopteryxPoint.style.left = "35%";
    archaeopteryxPoint.style.display = "block";

    archelonPoint.style.top = "0%";
    archelonPoint.style.left = "0%";
    archelonPoint.style.display = "none";

    baryonyxPoint.style.top = "0%";
    baryonyxPoint.style.left = "0%";
    baryonyxPoint.style.display = "none";

    bonnerichthysPoint.style.top = "0%";
    bonnerichthysPoint.style.left = "0%";
    bonnerichthysPoint.style.display = "none";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "26%";
    brachiosaurusPoint.style.display = "block";

    brontosaurusPoint.style.top = "44%";
    brontosaurusPoint.style.left = "28%";
    brontosaurusPoint.style.display = "block";

    camptosaurusPoint.style.top = "34%";
    camptosaurusPoint.style.left = "37%";
    camptosaurusPoint.style.display = "block";

    carcharodontosaurusPoint.style.top = "0%";
    carcharodontosaurusPoint.style.left = "0%";
    carcharodontosaurusPoint.style.display = "none";

    carnotaurusPoint.style.top = "0%";
    carnotaurusPoint.style.left = "0%";
    carnotaurusPoint.style.display = "none";

    dilophosaurusPoint.style.top = "32%";
    dilophosaurusPoint.style.left = "64%";
    dilophosaurusPoint.style.display = "block";

    dimorphodonPoint.style.top = "15%";
    dimorphodonPoint.style.left = "34%";
    dimorphodonPoint.style.display = "block";

    diplodocusPoint.style.top = "25%";
    diplodocusPoint.style.left = "26%";
    diplodocusPoint.style.display = "block";

    elasmosaurusPoint.style.top = "0%";
    elasmosaurusPoint.style.left = "0%";
    elasmosaurusPoint.style.display = "none";

    gallimimusPoint.style.top = "0%";
    gallimimusPoint.style.left = "0%";
    gallimimusPoint.style.display = "none";

    huayangosaurusPoint.style.top = "28%";
    huayangosaurusPoint.style.left = "58%";
    huayangosaurusPoint.style.display = "block";

    hydrorionPoint.style.top = "30%";
    hydrorionPoint.style.left = "31%";
    hydrorionPoint.style.display = "block";

    iberomesornisPoint.style.top = "0%";
    iberomesornisPoint.style.left = "0%";
    iberomesornisPoint.style.display = "none";

    ichthyosaurusPoint.style.top = "38%";
    ichthyosaurusPoint.style.left = "70%";
    ichthyosaurusPoint.style.display = "block";

    lesothosaurusPoint.style.top = "68%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "block";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "block";

    megalosaurusPoint.style.top = "8%";
    megalosaurusPoint.style.left = "32%";
    megalosaurusPoint.style.display = "block";

    microraptorPoint.style.top = "0%";
    microraptorPoint.style.left = "0%";
    microraptorPoint.style.display = "none";

    minmiPoint.style.top = "0%";
    minmiPoint.style.left = "0%";
    minmiPoint.style.display = "none";

    mosasaurusPoint.style.top = "0%";
    mosasaurusPoint.style.left = "0%";
    mosasaurusPoint.style.display = "none";

    ozraptorPoint.style.top = "77%";
    ozraptorPoint.style.left = "66%";
    ozraptorPoint.style.display = "block";

    parasaurolophusPoint.style.top = "0%";
    parasaurolophusPoint.style.left = "0%";
    parasaurolophusPoint.style.display = "none";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "20%";
    pliosaurusPoint.style.display = "block";

    protoceratopsPoint.style.top = "0%";
    protoceratopsPoint.style.left = "0%";
    protoceratopsPoint.style.display = "none";

    pteranodonPoint.style.top = "0%";
    pteranodonPoint.style.left = "0%";
    pteranodonPoint.style.display = "none";

    pterodactylePoint.style.top = "28%";
    pterodactylePoint.style.left = "40%";
    pterodactylePoint.style.display = "block";

    quetzalcoatlusPoint.style.top = "0%";
    quetzalcoatlusPoint.style.left = "0%";
    quetzalcoatlusPoint.style.display = "none";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "35%";
    rhamphorhynchusPoint.style.display = "block";

    stegosaurusPoint.style.top = "50%";
    stegosaurusPoint.style.left = "26%";
    stegosaurusPoint.style.display = "block";

    triceratopsPoint.style.top = "0%";
    triceratopsPoint.style.left = "0%";
    triceratopsPoint.style.display = "none";

    tyrannosaurusPoint.style.top = "0%";
    tyrannosaurusPoint.style.left = "0%";
    tyrannosaurusPoint.style.display = "none";

    velociraptorPoint.style.top = "0%";
    velociraptorPoint.style.left = "0%";
    velociraptorPoint.style.display = "none";
    
  }else if (jurassicTrois) {

    allosaurusPoint.style.top = "23%";
    allosaurusPoint.style.left = "27%";
    allosaurusPoint.style.display = "block";

    amargasaurusPoint.style.top = "72%";
    amargasaurusPoint.style.left = "27%";
    amargasaurusPoint.style.display = "none";

    ankylosaurusPoint.style.top = "54%";
    ankylosaurusPoint.style.left = "25%";
    ankylosaurusPoint.style.display = "none";

    apatosaurusPoint.style.top = "18%";
    apatosaurusPoint.style.left = "14%";
    apatosaurusPoint.style.display = "block";

    archaeopteryxPoint.style.top = "10%";
    archaeopteryxPoint.style.left = "40%";
    archaeopteryxPoint.style.display = "block";

    archelonPoint.style.top = "36%";
    archelonPoint.style.left = "15%";
    archelonPoint.style.display = "none";

    baryonyxPoint.style.top = "13%";
    baryonyxPoint.style.left = "34%";
    baryonyxPoint.style.display = "none";

    bonnerichthysPoint.style.top = "55%";
    bonnerichthysPoint.style.left = "80%";
    bonnerichthysPoint.style.display = "none";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "20%";
    brachiosaurusPoint.style.display = "block";

    brontosaurusPoint.style.top = "44%";
    brontosaurusPoint.style.left = "19%";
    brontosaurusPoint.style.display = "block";

    camptosaurusPoint.style.top = "34%";
    camptosaurusPoint.style.left = "37%";
    camptosaurusPoint.style.display = "block";

    carcharodontosaurusPoint.style.top = "30%";
    carcharodontosaurusPoint.style.left = "40%";
    carcharodontosaurusPoint.style.display = "none";

    carnotaurusPoint.style.top = "50%";
    carnotaurusPoint.style.left = "30%";
    carnotaurusPoint.style.display = "none";

    dilophosaurusPoint.style.top = "31%";
    dilophosaurusPoint.style.left = "68%";
    dilophosaurusPoint.style.display = "block";

    dimorphodonPoint.style.top = "14%";
    dimorphodonPoint.style.left = "34%";
    dimorphodonPoint.style.display = "block";

    diplodocusPoint.style.top = "25%";
    diplodocusPoint.style.left = "22%";
    diplodocusPoint.style.display = "block";

    elasmosaurusPoint.style.top = "34%";
    elasmosaurusPoint.style.left = "25%";
    elasmosaurusPoint.style.display = "none";

    gallimimusPoint.style.top = "50%";
    gallimimusPoint.style.left = "48%";
    gallimimusPoint.style.display = "none";

    huayangosaurusPoint.style.top = "26%";
    huayangosaurusPoint.style.left = "63%";
    huayangosaurusPoint.style.display = "block";

    hydrorionPoint.style.top = "20%";
    hydrorionPoint.style.left = "35%";
    hydrorionPoint.style.display = "block";

    iberomesornisPoint.style.top = "12%";
    iberomesornisPoint.style.left = "32%";
    iberomesornisPoint.style.display = "none";

    ichthyosaurusPoint.style.top = "38%";
    ichthyosaurusPoint.style.left = "72%";
    ichthyosaurusPoint.style.display = "block";

    lesothosaurusPoint.style.top = "67%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "block";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "block";

    megalosaurusPoint.style.top = "9%";
    megalosaurusPoint.style.left = "35%";
    megalosaurusPoint.style.display = "block";

    microraptorPoint.style.top = "30%";
    microraptorPoint.style.left = "68%";
    microraptorPoint.style.display = "none";

    minmiPoint.style.top = "72%";
    minmiPoint.style.left = "72%";
    minmiPoint.style.display = "none";

    mosasaurusPoint.style.top = "20%";
    mosasaurusPoint.style.left = "38%";
    mosasaurusPoint.style.display = "none";

    ozraptorPoint.style.top = "72%";
    ozraptorPoint.style.left = "72%";
    ozraptorPoint.style.display = "block";

    parasaurolophusPoint.style.top = "15%";
    parasaurolophusPoint.style.left = "18%";
    parasaurolophusPoint.style.display = "none";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "15%";
    pliosaurusPoint.style.display = "block";

    protoceratopsPoint.style.top = "16%";
    protoceratopsPoint.style.left = "45%";
    protoceratopsPoint.style.display = "none";

    pteranodonPoint.style.top = "10%";
    pteranodonPoint.style.left = "40%";
    pteranodonPoint.style.display = "none";

    pterodactylePoint.style.top = "28%";
    pterodactylePoint.style.left = "40%";
    pterodactylePoint.style.display = "block";

    quetzalcoatlusPoint.style.top = "43%";
    quetzalcoatlusPoint.style.left = "22%";
    quetzalcoatlusPoint.style.display = "none";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "28%";
    rhamphorhynchusPoint.style.display = "block";

    stegosaurusPoint.style.top = "54%";
    stegosaurusPoint.style.left = "20%";
    stegosaurusPoint.style.display = "block";

    triceratopsPoint.style.top = "26%";
    triceratopsPoint.style.left = "25%";
    triceratopsPoint.style.display = "none";

    tyrannosaurusPoint.style.top = "20%";
    tyrannosaurusPoint.style.left = "20%";
    tyrannosaurusPoint.style.display = "none";

    velociraptorPoint.style.top = "28%";
    velociraptorPoint.style.left = "58%";
    velociraptorPoint.style.display = "none";
    
  }else if (cretaceUn) {

    allosaurusPoint.style.top = "23%";
    allosaurusPoint.style.left = "27%";
    allosaurusPoint.style.display = "none";

    amargasaurusPoint.style.top = "72%";
    amargasaurusPoint.style.left = "27%";
    amargasaurusPoint.style.display = "block";

    ankylosaurusPoint.style.top = "54%";
    ankylosaurusPoint.style.left = "25%";
    ankylosaurusPoint.style.display = "block";

    apatosaurusPoint.style.top = "18%";
    apatosaurusPoint.style.left = "14%";
    apatosaurusPoint.style.display = "none";

    archaeopteryxPoint.style.top = "10%";
    archaeopteryxPoint.style.left = "40%";
    archaeopteryxPoint.style.display = "none";

    archelonPoint.style.top = "36%";
    archelonPoint.style.left = "15%";
    archelonPoint.style.display = "block";

    baryonyxPoint.style.top = "13%";
    baryonyxPoint.style.left = "34%";
    baryonyxPoint.style.display = "block";

    bonnerichthysPoint.style.top = "55%";
    bonnerichthysPoint.style.left = "80%";
    bonnerichthysPoint.style.display = "block";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "20%";
    brachiosaurusPoint.style.display = "none";

    brontosaurusPoint.style.top = "42%";
    brontosaurusPoint.style.left = "19%";
    brontosaurusPoint.style.display = "none";

    camptosaurusPoint.style.top = "29%";
    camptosaurusPoint.style.left = "33%";
    camptosaurusPoint.style.display = "none";

    carcharodontosaurusPoint.style.top = "30%";
    carcharodontosaurusPoint.style.left = "40%";
    carcharodontosaurusPoint.style.display = "block";

    carnotaurusPoint.style.top = "50%";
    carnotaurusPoint.style.left = "30%";
    carnotaurusPoint.style.display = "block";

    dilophosaurusPoint.style.top = "31%";
    dilophosaurusPoint.style.left = "68%";
    dilophosaurusPoint.style.display = "none";

    dimorphodonPoint.style.top = "15%";
    dimorphodonPoint.style.left = "34%";
    dimorphodonPoint.style.display = "none";

    diplodocusPoint.style.top = "26%";
    diplodocusPoint.style.left = "22%";
    diplodocusPoint.style.display = "none";

    elasmosaurusPoint.style.top = "34%";
    elasmosaurusPoint.style.left = "25%";
    elasmosaurusPoint.style.display = "block";

    gallimimusPoint.style.top = "50%";
    gallimimusPoint.style.left = "48%";
    gallimimusPoint.style.display = "block";

    huayangosaurusPoint.style.top = "26%";
    huayangosaurusPoint.style.left = "63%";
    huayangosaurusPoint.style.display = "none";

    hydrorionPoint.style.top = "20%";
    hydrorionPoint.style.left = "35%";
    hydrorionPoint.style.display = "none";

    iberomesornisPoint.style.top = "12%";
    iberomesornisPoint.style.left = "32%";
    iberomesornisPoint.style.display = "block";

    ichthyosaurusPoint.style.top = "38%";
    ichthyosaurusPoint.style.left = "72%";
    ichthyosaurusPoint.style.display = "none";

    lesothosaurusPoint.style.top = "67%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "none";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "none";

    megalosaurusPoint.style.top = "9%";
    megalosaurusPoint.style.left = "35%";
    megalosaurusPoint.style.display = "none";

    microraptorPoint.style.top = "30%";
    microraptorPoint.style.left = "68%";
    microraptorPoint.style.display = "block";

    minmiPoint.style.top = "72%";
    minmiPoint.style.left = "72%";
    minmiPoint.style.display = "block";

    mosasaurusPoint.style.top = "20%";
    mosasaurusPoint.style.left = "38%";
    mosasaurusPoint.style.display = "block";

    ozraptorPoint.style.top = "72%";
    ozraptorPoint.style.left = "72%";
    ozraptorPoint.style.display = "none";

    parasaurolophusPoint.style.top = "15%";
    parasaurolophusPoint.style.left = "18%";
    parasaurolophusPoint.style.display = "block";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "15%";
    pliosaurusPoint.style.display = "none";

    protoceratopsPoint.style.top = "16%";
    protoceratopsPoint.style.left = "45%";
    protoceratopsPoint.style.display = "block";

    pteranodonPoint.style.top = "10%";
    pteranodonPoint.style.left = "40%";
    pteranodonPoint.style.display = "block";

    pterodactylePoint.style.top = "26%";
    pterodactylePoint.style.left = "40%";
    pterodactylePoint.style.display = "none";

    quetzalcoatlusPoint.style.top = "45%";
    quetzalcoatlusPoint.style.left = "22%";
    quetzalcoatlusPoint.style.display = "block";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "28%";
    rhamphorhynchusPoint.style.display = "none";

    stegosaurusPoint.style.top = "54%";
    stegosaurusPoint.style.left = "20%";
    stegosaurusPoint.style.display = "none";

    triceratopsPoint.style.top = "25%";
    triceratopsPoint.style.left = "25%";
    triceratopsPoint.style.display = "block";

    tyrannosaurusPoint.style.top = "20%";
    tyrannosaurusPoint.style.left = "20%";
    tyrannosaurusPoint.style.display = "block";

    velociraptorPoint.style.top = "28%";
    velociraptorPoint.style.left = "58%";
    velociraptorPoint.style.display = "block";
    
  }else if (cretaceDeux) {

    allosaurusPoint.style.top = "23%";
    allosaurusPoint.style.left = "27%";
    allosaurusPoint.style.display = "none";

    amargasaurusPoint.style.top = "75%";
    amargasaurusPoint.style.left = "22%";
    amargasaurusPoint.style.display = "block";

    ankylosaurusPoint.style.top = "53%";
    ankylosaurusPoint.style.left = "21%";
    ankylosaurusPoint.style.display = "block";

    apatosaurusPoint.style.top = "18%";
    apatosaurusPoint.style.left = "14%";
    apatosaurusPoint.style.display = "none";

    archaeopteryxPoint.style.top = "10%";
    archaeopteryxPoint.style.left = "40%";
    archaeopteryxPoint.style.display = "none";

    archelonPoint.style.top = "33%";
    archelonPoint.style.left = "10%";
    archelonPoint.style.display = "block";

    baryonyxPoint.style.top = "14%";
    baryonyxPoint.style.left = "36%";
    baryonyxPoint.style.display = "block";

    bonnerichthysPoint.style.top = "55%";
    bonnerichthysPoint.style.left = "86%";
    bonnerichthysPoint.style.display = "block";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "20%";
    brachiosaurusPoint.style.display = "none";

    brontosaurusPoint.style.top = "42%";
    brontosaurusPoint.style.left = "19%";
    brontosaurusPoint.style.display = "none";

    camptosaurusPoint.style.top = "29%";
    camptosaurusPoint.style.left = "33%";
    camptosaurusPoint.style.display = "none";

    carcharodontosaurusPoint.style.top = "32%";
    carcharodontosaurusPoint.style.left = "40%";
    carcharodontosaurusPoint.style.display = "block";

    carnotaurusPoint.style.top = "51%";
    carnotaurusPoint.style.left = "25%";
    carnotaurusPoint.style.display = "block";

    dilophosaurusPoint.style.top = "31%";
    dilophosaurusPoint.style.left = "68%";
    dilophosaurusPoint.style.display = "none";

    dimorphodonPoint.style.top = "15%";
    dimorphodonPoint.style.left = "34%";
    dimorphodonPoint.style.display = "none";

    diplodocusPoint.style.top = "26%";
    diplodocusPoint.style.left = "22%";
    diplodocusPoint.style.display = "none";

    elasmosaurusPoint.style.top = "33%";
    elasmosaurusPoint.style.left = "20%";
    elasmosaurusPoint.style.display = "block";

    gallimimusPoint.style.top = "50%";
    gallimimusPoint.style.left = "48%";
    gallimimusPoint.style.display = "block";

    huayangosaurusPoint.style.top = "26%";
    huayangosaurusPoint.style.left = "63%";
    huayangosaurusPoint.style.display = "none";

    hydrorionPoint.style.top = "20%";
    hydrorionPoint.style.left = "35%";
    hydrorionPoint.style.display = "none";

    iberomesornisPoint.style.top = "16%";
    iberomesornisPoint.style.left = "33%";
    iberomesornisPoint.style.display = "block";

    ichthyosaurusPoint.style.top = "38%";
    ichthyosaurusPoint.style.left = "72%";
    ichthyosaurusPoint.style.display = "none";

    lesothosaurusPoint.style.top = "67%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "none";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "none";

    megalosaurusPoint.style.top = "9%";
    megalosaurusPoint.style.left = "35%";
    megalosaurusPoint.style.display = "none";

    microraptorPoint.style.top = "28%";
    microraptorPoint.style.left = "72%";
    microraptorPoint.style.display = "block";

    minmiPoint.style.top = "70%";
    minmiPoint.style.left = "78%";
    minmiPoint.style.display = "block";

    mosasaurusPoint.style.top = "22%";
    mosasaurusPoint.style.left = "32%";
    mosasaurusPoint.style.display = "block";

    ozraptorPoint.style.top = "72%";
    ozraptorPoint.style.left = "72%";
    ozraptorPoint.style.display = "none";

    parasaurolophusPoint.style.top = "13%";
    parasaurolophusPoint.style.left = "13%";
    parasaurolophusPoint.style.display = "block";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "15%";
    pliosaurusPoint.style.display = "none";

    protoceratopsPoint.style.top = "20%";
    protoceratopsPoint.style.left = "50%";
    protoceratopsPoint.style.display = "block";

    pteranodonPoint.style.top = "12%";
    pteranodonPoint.style.left = "38%";
    pteranodonPoint.style.display = "block";

    pterodactylePoint.style.top = "26%";
    pterodactylePoint.style.left = "40%";
    pterodactylePoint.style.display = "none";

    quetzalcoatlusPoint.style.top = "46%";
    quetzalcoatlusPoint.style.left = "16%";
    quetzalcoatlusPoint.style.display = "block";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "28%";
    rhamphorhynchusPoint.style.display = "none";

    stegosaurusPoint.style.top = "54%";
    stegosaurusPoint.style.left = "20%";
    stegosaurusPoint.style.display = "none";

    triceratopsPoint.style.top = "24%";
    triceratopsPoint.style.left = "19%";
    triceratopsPoint.style.display = "block";

    tyrannosaurusPoint.style.top = "18%";
    tyrannosaurusPoint.style.left = "15%";
    tyrannosaurusPoint.style.display = "block";

    velociraptorPoint.style.top = "26%";
    velociraptorPoint.style.left = "58%";
    velociraptorPoint.style.display = "block";
    
  }else if (cretaceTrois) {

    allosaurusPoint.style.top = "23%";
    allosaurusPoint.style.left = "27%";
    allosaurusPoint.style.display = "none";

    amargasaurusPoint.style.top = "75%";
    amargasaurusPoint.style.left = "16%";
    amargasaurusPoint.style.display = "block";

    ankylosaurusPoint.style.top = "53%";
    ankylosaurusPoint.style.left = "17%";
    ankylosaurusPoint.style.display = "block";

    apatosaurusPoint.style.top = "18%";
    apatosaurusPoint.style.left = "14%";
    apatosaurusPoint.style.display = "none";

    archaeopteryxPoint.style.top = "10%";
    archaeopteryxPoint.style.left = "40%";
    archaeopteryxPoint.style.display = "none";

    archelonPoint.style.top = "30%";
    archelonPoint.style.left = "3%";
    archelonPoint.style.display = "block";

    baryonyxPoint.style.top = "13%";
    baryonyxPoint.style.left = "34%";
    baryonyxPoint.style.display = "block";

    bonnerichthysPoint.style.top = "50%";
    bonnerichthysPoint.style.left = "96%";
    bonnerichthysPoint.style.display = "block";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "20%";
    brachiosaurusPoint.style.display = "none";

    brontosaurusPoint.style.top = "42%";
    brontosaurusPoint.style.left = "19%";
    brontosaurusPoint.style.display = "none";

    camptosaurusPoint.style.top = "29%";
    camptosaurusPoint.style.left = "33%";
    camptosaurusPoint.style.display = "none";

    carcharodontosaurusPoint.style.top = "34%";
    carcharodontosaurusPoint.style.left = "39%";
    carcharodontosaurusPoint.style.display = "block";

    carnotaurusPoint.style.top = "52%";
    carnotaurusPoint.style.left = "20%";
    carnotaurusPoint.style.display = "block";

    dilophosaurusPoint.style.top = "31%";
    dilophosaurusPoint.style.left = "68%";
    dilophosaurusPoint.style.display = "none";

    dimorphodonPoint.style.top = "15%";
    dimorphodonPoint.style.left = "34%";
    dimorphodonPoint.style.display = "none";

    diplodocusPoint.style.top = "26%";
    diplodocusPoint.style.left = "22%";
    diplodocusPoint.style.display = "none";

    elasmosaurusPoint.style.top = "27%";
    elasmosaurusPoint.style.left = "10%";
    elasmosaurusPoint.style.display = "block";

    gallimimusPoint.style.top = "50%";
    gallimimusPoint.style.left = "48%";
    gallimimusPoint.style.display = "block";

    huayangosaurusPoint.style.top = "26%";
    huayangosaurusPoint.style.left = "63%";
    huayangosaurusPoint.style.display = "none";

    hydrorionPoint.style.top = "20%";
    hydrorionPoint.style.left = "35%";
    hydrorionPoint.style.display = "none";

    iberomesornisPoint.style.top = "20%";
    iberomesornisPoint.style.left = "37%";
    iberomesornisPoint.style.display = "block";

    ichthyosaurusPoint.style.top = "38%";
    ichthyosaurusPoint.style.left = "72%";
    ichthyosaurusPoint.style.display = "none";

    lesothosaurusPoint.style.top = "67%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "none";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "none";

    megalosaurusPoint.style.top = "9%";
    megalosaurusPoint.style.left = "35%";
    megalosaurusPoint.style.display = "none";

    microraptorPoint.style.top = "25%";
    microraptorPoint.style.left = "75%";
    microraptorPoint.style.display = "block";

    minmiPoint.style.top = "65%";
    minmiPoint.style.left = "84%";
    minmiPoint.style.display = "block";

    mosasaurusPoint.style.top = "28%";
    mosasaurusPoint.style.left = "25%";
    mosasaurusPoint.style.display = "block";

    ozraptorPoint.style.top = "72%";
    ozraptorPoint.style.left = "72%";
    ozraptorPoint.style.display = "none";

    parasaurolophusPoint.style.top = "12%";
    parasaurolophusPoint.style.left = "7%";
    parasaurolophusPoint.style.display = "block";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "15%";
    pliosaurusPoint.style.display = "none";

    protoceratopsPoint.style.top = "20%";
    protoceratopsPoint.style.left = "55%";
    protoceratopsPoint.style.display = "block";

    pteranodonPoint.style.top = "16%";
    pteranodonPoint.style.left = "42%";
    pteranodonPoint.style.display = "block";

    pterodactylePoint.style.top = "26%";
    pterodactylePoint.style.left = "40%";
    pterodactylePoint.style.display = "none";

    quetzalcoatlusPoint.style.top = "44%";
    quetzalcoatlusPoint.style.left = "12%";
    quetzalcoatlusPoint.style.display = "block";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "28%";
    rhamphorhynchusPoint.style.display = "none";

    stegosaurusPoint.style.top = "54%";
    stegosaurusPoint.style.left = "20%";
    stegosaurusPoint.style.display = "none";

    triceratopsPoint.style.top = "24%";
    triceratopsPoint.style.left = "15%";
    triceratopsPoint.style.display = "block";

    tyrannosaurusPoint.style.top = "18%";
    tyrannosaurusPoint.style.left = "10%";
    tyrannosaurusPoint.style.display = "block";

    velociraptorPoint.style.top = "26%";
    velociraptorPoint.style.left = "64%";
    velociraptorPoint.style.display = "block";
    
  }

  //EURASIE
  gsap.to(eurasie, { x: (currentData.eurasie.posX + "px"), duration: 2 });
  gsap.to(eurasie, { y: (currentData.eurasie.posY + "px"), duration: 2 });
  gsap.to(eurasieRotate, { rotation: currentData.eurasie.rot, duration: 2 });


  //AMERIQUE DU NORD
  gsap.to(ameriqueNord, { x: (currentData.ameriqueNord.posX + 'px'), duration: 2 });
  gsap.to(ameriqueNord, { y: (currentData.ameriqueNord.posY + 'px'), duration: 2 });
  gsap.to(ameriqueNordRotate, { rotation: currentData.ameriqueNord.rot, duration: 2 });

  //AMÉRIQUE DU SUD
  gsap.to(ameriqueSud, { x: (currentData.ameriqueSud.posX + 'px'), duration: 2 });
  gsap.to(ameriqueSud, { y: (currentData.ameriqueSud.posY + 'px'), duration: 2 });
  gsap.to(ameriqueSudRotate, { rotation: currentData.ameriqueSud.rot, duration: 2 });


  //AFRIQUE
  gsap.to(afrique, { y: (currentData.afrique.posY + 'px'), duration: 2 });
  gsap.to(afrique, { x: (currentData.afrique.posX + 'px'), duration: 2 });
  gsap.to(afriqueRotate, { rotation: currentData.afrique.rot, duration: 2 });

  //MADAGASCAR
  gsap.to(madagascar, { x: (currentData.madagascar.posX + 'px'), duration: 2 });
  gsap.to(madagascar, { y: (currentData.madagascar.posY + 'px'), duration: 2 });
  gsap.to(madagascarRotate, { rotation: currentData.madagascar.rot, duration: 2 });

  //INDE

  gsap.to(inde, { x: (currentData.inde.posX + 'px'), duration: 2 });
  gsap.to(inde, { y: (currentData.inde.posY + 'px'), duration: 2 });
  gsap.to(indeRotate, { rotation: currentData.inde.rot, duration: 2 });

  //AUSTRALIE
  gsap.to(australie, { x: (currentData.australie.posX + 'px'), duration: 2 });
  gsap.to(australie, { y: (currentData.australie.posY + 'px'), duration: 2 });
  gsap.to(australieRotate, { rotation: currentData.australie.rot, duration: 2 });


  //GROENLAND

  gsap.to(groenland, { y: (currentData.groenland.posY + 'px'), duration: 2 });
  gsap.to(groenland, { x: (currentData.groenland.posX + 'px'), duration: 2 });
  gsap.to(groenlandRotate, { rotation: currentData.groenland.rot, duration: 2 });

  //ANTARCTIQUE
  gsap.to(antarctique, { x: (currentData.antarctique.posX + 'px'), duration: 2 });
  gsap.to(antarctique, { y: (currentData.antarctique.posY + 'px'), duration: 2 });
  gsap.to(antarctiqueRotate, { rotation: currentData.antarctique.rot, duration: 2 });


  lastValue = inputSlider.value;
}

window.addEventListener("wheel", function(e) {

  if (e.deltaY > 0){
    inputSlider.valueAsNumber += 0.2;
  }else{
    inputSlider.value -= 0.2;
  }
  //e.preventDefault();
  e.stopPropagation();

  const range = Math.abs(valeurMin - valeurMax);
  const rangeValue = inputSlider.value * range;
  const currentData = positions[Math.round(inputSlider.value * (positions.length - 1))];

  const jurassicUn = inputSlider.value >= 0 && inputSlider.value <= 0.12;
  const jurassicDeux = inputSlider.value > 0.12 && inputSlider.value <= 0.37;
  const jurassicTrois = inputSlider.value > 0.37 && inputSlider.value <= 0.49;
  const cretaceUn = inputSlider.value >= 0.50 && inputSlider.value <= 0.62;
  const cretaceDeux = inputSlider.value > 0.62 && inputSlider.value <= 0.87;
  const cretaceTrois = inputSlider.value > 0.87 && inputSlider.value <= 1;

  //METEORITE
  output.innerHTML = Math.round(valeurMin + rangeValue);
  meteorite.style.left = inputSlider.value * 100 + '%';

  if (inputSlider.value > lastValue) {
    imageMeteorite.style.transform = "rotate(-90deg)";
  }

  if (inputSlider.value < lastValue) {
    imageMeteorite.style.transform = "rotate(90deg) scaleX(-1)";
  }


  //DEFINIR LE MOUVEMENT DES DINOS
  if (jurassicUn) {

    allosaurusPoint.style.top = "24%";
    allosaurusPoint.style.left = "34%";
    allosaurusPoint.style.display = "block";

    amargasaurusPoint.style.top = "0%";
    amargasaurusPoint.style.left = "0%";
    amargasaurusPoint.style.display = "none";

    ankylosaurusPoint.style.top = "0%";
    ankylosaurusPoint.style.left = "0%";
    ankylosaurusPoint.style.display = "none";

    apatosaurusPoint.style.top = "17%";
    apatosaurusPoint.style.left = "25%";
    apatosaurusPoint.style.display = "block";

    archaeopteryxPoint.style.top = "7%";
    archaeopteryxPoint.style.left = "32%";
    archaeopteryxPoint.style.display = "block";

    archelonPoint.style.top = "0%";
    archelonPoint.style.left = "0%";
    archelonPoint.style.display = "none";

    baryonyxPoint.style.top = "0%";
    baryonyxPoint.style.left = "0%";
    baryonyxPoint.style.display = "none";

    bonnerichthysPoint.style.top = "0%";
    bonnerichthysPoint.style.left = "0%";
    bonnerichthysPoint.style.display = "none";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "30%";
    brachiosaurusPoint.style.display = "block";

    brontosaurusPoint.style.top = "47%";
    brontosaurusPoint.style.left = "26%";
    brontosaurusPoint.style.display = "block";

    camptosaurusPoint.style.top = "32%";
    camptosaurusPoint.style.left = "37%";
    camptosaurusPoint.style.display = "block";

    carcharodontosaurusPoint.style.top = "0%";
    carcharodontosaurusPoint.style.left = "0%";
    carcharodontosaurusPoint.style.display = "none";

    carnotaurusPoint.style.top = "0%";
    carnotaurusPoint.style.left = "0%";
    carnotaurusPoint.style.display = "none";

    dilophosaurusPoint.style.top = "35%";
    dilophosaurusPoint.style.left = "60%";
    dilophosaurusPoint.style.display = "block";

    dimorphodonPoint.style.top = "15%";
    dimorphodonPoint.style.left = "33%";
    dimorphodonPoint.style.display = "block";

    diplodocusPoint.style.top = "26%";
    diplodocusPoint.style.left = "31%";
    diplodocusPoint.style.display = "block";

    elasmosaurusPoint.style.top = "0%";
    elasmosaurusPoint.style.left = "0%";
    elasmosaurusPoint.style.display = "none";

    gallimimusPoint.style.top = "0%";
    gallimimusPoint.style.left = "0%";
    gallimimusPoint.style.display = "none";

    huayangosaurusPoint.style.top = "30%";
    huayangosaurusPoint.style.left = "55%";
    huayangosaurusPoint.style.display = "block";

    hydrorionPoint.style.top = "29%";
    hydrorionPoint.style.left = "30%";
    hydrorionPoint.style.display = "block";

    iberomesornisPoint.style.top = "0%";
    iberomesornisPoint.style.left = "0%";
    iberomesornisPoint.style.display = "none";

    ichthyosaurusPoint.style.top = "40%";
    ichthyosaurusPoint.style.left = "63%";
    ichthyosaurusPoint.style.display = "block";

    lesothosaurusPoint.style.top = "69%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "block";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "block";

    megalosaurusPoint.style.top = "9%";
    megalosaurusPoint.style.left = "35%";
    megalosaurusPoint.style.display = "block";

    microraptorPoint.style.top = "0%";
    microraptorPoint.style.left = "0%";
    microraptorPoint.style.display = "none";

    minmiPoint.style.top = "0%";
    minmiPoint.style.left = "0%";
    minmiPoint.style.display = "none";

    mosasaurusPoint.style.top = "0%";
    mosasaurusPoint.style.left = "0%";
    mosasaurusPoint.style.display = "none";

    ozraptorPoint.style.top = "77%";
    ozraptorPoint.style.left = "65%";
    ozraptorPoint.style.display = "block";

    parasaurolophusPoint.style.top = "0%";
    parasaurolophusPoint.style.left = "0%";
    parasaurolophusPoint.style.display = "none";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "25%";
    pliosaurusPoint.style.display = "block";

    protoceratopsPoint.style.top = "0%";
    protoceratopsPoint.style.left = "0%";
    protoceratopsPoint.style.display = "none";

    pteranodonPoint.style.top = "0%";
    pteranodonPoint.style.left = "0%";
    pteranodonPoint.style.display = "none";

    pterodactylePoint.style.top = "28%";
    pterodactylePoint.style.left = "42%";
    pterodactylePoint.style.display = "block";

    quetzalcoatlusPoint.style.top = "0%";
    quetzalcoatlusPoint.style.left = "0%";
    quetzalcoatlusPoint.style.display = "none";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "35%";
    rhamphorhynchusPoint.style.display = "block";

    stegosaurusPoint.style.top = "55%";
    stegosaurusPoint.style.left = "25%";
    stegosaurusPoint.style.display = "block";

    triceratopsPoint.style.top = "0%";
    triceratopsPoint.style.left = "0%";
    triceratopsPoint.style.display = "none";

    tyrannosaurusPoint.style.top = "0%";
    tyrannosaurusPoint.style.left = "0%";
    tyrannosaurusPoint.style.display = "none";

    velociraptorPoint.style.top = "0%";
    velociraptorPoint.style.left = "0%";
    velociraptorPoint.style.display = "none";
    
  }else if (jurassicDeux) {

    allosaurusPoint.style.top = "24%";
    allosaurusPoint.style.left = "32%";
    allosaurusPoint.style.display = "block";

    amargasaurusPoint.style.top = "0%";
    amargasaurusPoint.style.left = "0%";
    amargasaurusPoint.style.display = "none";

    ankylosaurusPoint.style.top = "0%";
    ankylosaurusPoint.style.left = "0%";
    ankylosaurusPoint.style.display = "none";

    apatosaurusPoint.style.top = "19%";
    apatosaurusPoint.style.left = "19%";
    apatosaurusPoint.style.display = "block";

    archaeopteryxPoint.style.top = "8%";
    archaeopteryxPoint.style.left = "35%";
    archaeopteryxPoint.style.display = "block";

    archelonPoint.style.top = "0%";
    archelonPoint.style.left = "0%";
    archelonPoint.style.display = "none";

    baryonyxPoint.style.top = "0%";
    baryonyxPoint.style.left = "0%";
    baryonyxPoint.style.display = "none";

    bonnerichthysPoint.style.top = "0%";
    bonnerichthysPoint.style.left = "0%";
    bonnerichthysPoint.style.display = "none";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "26%";
    brachiosaurusPoint.style.display = "block";

    brontosaurusPoint.style.top = "44%";
    brontosaurusPoint.style.left = "28%";
    brontosaurusPoint.style.display = "block";

    camptosaurusPoint.style.top = "34%";
    camptosaurusPoint.style.left = "37%";
    camptosaurusPoint.style.display = "block";

    carcharodontosaurusPoint.style.top = "0%";
    carcharodontosaurusPoint.style.left = "0%";
    carcharodontosaurusPoint.style.display = "none";

    carnotaurusPoint.style.top = "0%";
    carnotaurusPoint.style.left = "0%";
    carnotaurusPoint.style.display = "none";

    dilophosaurusPoint.style.top = "32%";
    dilophosaurusPoint.style.left = "64%";
    dilophosaurusPoint.style.display = "block";

    dimorphodonPoint.style.top = "15%";
    dimorphodonPoint.style.left = "34%";
    dimorphodonPoint.style.display = "block";

    diplodocusPoint.style.top = "25%";
    diplodocusPoint.style.left = "26%";
    diplodocusPoint.style.display = "block";

    elasmosaurusPoint.style.top = "0%";
    elasmosaurusPoint.style.left = "0%";
    elasmosaurusPoint.style.display = "none";

    gallimimusPoint.style.top = "0%";
    gallimimusPoint.style.left = "0%";
    gallimimusPoint.style.display = "none";

    huayangosaurusPoint.style.top = "28%";
    huayangosaurusPoint.style.left = "58%";
    huayangosaurusPoint.style.display = "block";

    hydrorionPoint.style.top = "30%";
    hydrorionPoint.style.left = "31%";
    hydrorionPoint.style.display = "block";

    iberomesornisPoint.style.top = "0%";
    iberomesornisPoint.style.left = "0%";
    iberomesornisPoint.style.display = "none";

    ichthyosaurusPoint.style.top = "38%";
    ichthyosaurusPoint.style.left = "70%";
    ichthyosaurusPoint.style.display = "block";

    lesothosaurusPoint.style.top = "68%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "block";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "block";

    megalosaurusPoint.style.top = "8%";
    megalosaurusPoint.style.left = "32%";
    megalosaurusPoint.style.display = "block";

    microraptorPoint.style.top = "0%";
    microraptorPoint.style.left = "0%";
    microraptorPoint.style.display = "none";

    minmiPoint.style.top = "0%";
    minmiPoint.style.left = "0%";
    minmiPoint.style.display = "none";

    mosasaurusPoint.style.top = "0%";
    mosasaurusPoint.style.left = "0%";
    mosasaurusPoint.style.display = "none";

    ozraptorPoint.style.top = "77%";
    ozraptorPoint.style.left = "66%";
    ozraptorPoint.style.display = "block";

    parasaurolophusPoint.style.top = "0%";
    parasaurolophusPoint.style.left = "0%";
    parasaurolophusPoint.style.display = "none";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "20%";
    pliosaurusPoint.style.display = "block";

    protoceratopsPoint.style.top = "0%";
    protoceratopsPoint.style.left = "0%";
    protoceratopsPoint.style.display = "none";

    pteranodonPoint.style.top = "0%";
    pteranodonPoint.style.left = "0%";
    pteranodonPoint.style.display = "none";

    pterodactylePoint.style.top = "28%";
    pterodactylePoint.style.left = "40%";
    pterodactylePoint.style.display = "block";

    quetzalcoatlusPoint.style.top = "0%";
    quetzalcoatlusPoint.style.left = "0%";
    quetzalcoatlusPoint.style.display = "none";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "35%";
    rhamphorhynchusPoint.style.display = "block";

    stegosaurusPoint.style.top = "50%";
    stegosaurusPoint.style.left = "26%";
    stegosaurusPoint.style.display = "block";

    triceratopsPoint.style.top = "0%";
    triceratopsPoint.style.left = "0%";
    triceratopsPoint.style.display = "none";

    tyrannosaurusPoint.style.top = "0%";
    tyrannosaurusPoint.style.left = "0%";
    tyrannosaurusPoint.style.display = "none";

    velociraptorPoint.style.top = "0%";
    velociraptorPoint.style.left = "0%";
    velociraptorPoint.style.display = "none";
    
  }else if (jurassicTrois) {

    allosaurusPoint.style.top = "23%";
    allosaurusPoint.style.left = "27%";
    allosaurusPoint.style.display = "block";

    amargasaurusPoint.style.top = "72%";
    amargasaurusPoint.style.left = "27%";
    amargasaurusPoint.style.display = "none";

    ankylosaurusPoint.style.top = "54%";
    ankylosaurusPoint.style.left = "25%";
    ankylosaurusPoint.style.display = "none";

    apatosaurusPoint.style.top = "18%";
    apatosaurusPoint.style.left = "14%";
    apatosaurusPoint.style.display = "block";

    archaeopteryxPoint.style.top = "10%";
    archaeopteryxPoint.style.left = "40%";
    archaeopteryxPoint.style.display = "block";

    archelonPoint.style.top = "36%";
    archelonPoint.style.left = "15%";
    archelonPoint.style.display = "none";

    baryonyxPoint.style.top = "13%";
    baryonyxPoint.style.left = "34%";
    baryonyxPoint.style.display = "none";

    bonnerichthysPoint.style.top = "55%";
    bonnerichthysPoint.style.left = "80%";
    bonnerichthysPoint.style.display = "none";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "20%";
    brachiosaurusPoint.style.display = "block";

    brontosaurusPoint.style.top = "44%";
    brontosaurusPoint.style.left = "19%";
    brontosaurusPoint.style.display = "block";

    camptosaurusPoint.style.top = "34%";
    camptosaurusPoint.style.left = "37%";
    camptosaurusPoint.style.display = "block";

    carcharodontosaurusPoint.style.top = "30%";
    carcharodontosaurusPoint.style.left = "40%";
    carcharodontosaurusPoint.style.display = "none";

    carnotaurusPoint.style.top = "50%";
    carnotaurusPoint.style.left = "30%";
    carnotaurusPoint.style.display = "none";

    dilophosaurusPoint.style.top = "31%";
    dilophosaurusPoint.style.left = "68%";
    dilophosaurusPoint.style.display = "block";

    dimorphodonPoint.style.top = "14%";
    dimorphodonPoint.style.left = "34%";
    dimorphodonPoint.style.display = "block";

    diplodocusPoint.style.top = "25%";
    diplodocusPoint.style.left = "22%";
    diplodocusPoint.style.display = "block";

    elasmosaurusPoint.style.top = "34%";
    elasmosaurusPoint.style.left = "25%";
    elasmosaurusPoint.style.display = "none";

    gallimimusPoint.style.top = "50%";
    gallimimusPoint.style.left = "48%";
    gallimimusPoint.style.display = "none";

    huayangosaurusPoint.style.top = "26%";
    huayangosaurusPoint.style.left = "63%";
    huayangosaurusPoint.style.display = "block";

    hydrorionPoint.style.top = "20%";
    hydrorionPoint.style.left = "35%";
    hydrorionPoint.style.display = "block";

    iberomesornisPoint.style.top = "12%";
    iberomesornisPoint.style.left = "32%";
    iberomesornisPoint.style.display = "none";

    ichthyosaurusPoint.style.top = "38%";
    ichthyosaurusPoint.style.left = "72%";
    ichthyosaurusPoint.style.display = "block";

    lesothosaurusPoint.style.top = "67%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "block";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "block";

    megalosaurusPoint.style.top = "9%";
    megalosaurusPoint.style.left = "35%";
    megalosaurusPoint.style.display = "block";

    microraptorPoint.style.top = "30%";
    microraptorPoint.style.left = "68%";
    microraptorPoint.style.display = "none";

    minmiPoint.style.top = "72%";
    minmiPoint.style.left = "72%";
    minmiPoint.style.display = "none";

    mosasaurusPoint.style.top = "20%";
    mosasaurusPoint.style.left = "38%";
    mosasaurusPoint.style.display = "none";

    ozraptorPoint.style.top = "72%";
    ozraptorPoint.style.left = "72%";
    ozraptorPoint.style.display = "block";

    parasaurolophusPoint.style.top = "15%";
    parasaurolophusPoint.style.left = "18%";
    parasaurolophusPoint.style.display = "none";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "15%";
    pliosaurusPoint.style.display = "block";

    protoceratopsPoint.style.top = "16%";
    protoceratopsPoint.style.left = "45%";
    protoceratopsPoint.style.display = "none";

    pteranodonPoint.style.top = "10%";
    pteranodonPoint.style.left = "40%";
    pteranodonPoint.style.display = "none";

    pterodactylePoint.style.top = "28%";
    pterodactylePoint.style.left = "40%";
    pterodactylePoint.style.display = "block";

    quetzalcoatlusPoint.style.top = "43%";
    quetzalcoatlusPoint.style.left = "22%";
    quetzalcoatlusPoint.style.display = "none";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "28%";
    rhamphorhynchusPoint.style.display = "block";

    stegosaurusPoint.style.top = "54%";
    stegosaurusPoint.style.left = "20%";
    stegosaurusPoint.style.display = "block";

    triceratopsPoint.style.top = "26%";
    triceratopsPoint.style.left = "25%";
    triceratopsPoint.style.display = "none";

    tyrannosaurusPoint.style.top = "20%";
    tyrannosaurusPoint.style.left = "20%";
    tyrannosaurusPoint.style.display = "none";

    velociraptorPoint.style.top = "28%";
    velociraptorPoint.style.left = "58%";
    velociraptorPoint.style.display = "none";
    
  }else if (cretaceUn) {

    allosaurusPoint.style.top = "23%";
    allosaurusPoint.style.left = "27%";
    allosaurusPoint.style.display = "none";

    amargasaurusPoint.style.top = "72%";
    amargasaurusPoint.style.left = "27%";
    amargasaurusPoint.style.display = "block";

    ankylosaurusPoint.style.top = "54%";
    ankylosaurusPoint.style.left = "25%";
    ankylosaurusPoint.style.display = "block";

    apatosaurusPoint.style.top = "18%";
    apatosaurusPoint.style.left = "14%";
    apatosaurusPoint.style.display = "none";

    archaeopteryxPoint.style.top = "10%";
    archaeopteryxPoint.style.left = "40%";
    archaeopteryxPoint.style.display = "none";

    archelonPoint.style.top = "36%";
    archelonPoint.style.left = "15%";
    archelonPoint.style.display = "block";

    baryonyxPoint.style.top = "13%";
    baryonyxPoint.style.left = "34%";
    baryonyxPoint.style.display = "block";

    bonnerichthysPoint.style.top = "55%";
    bonnerichthysPoint.style.left = "80%";
    bonnerichthysPoint.style.display = "block";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "20%";
    brachiosaurusPoint.style.display = "none";

    brontosaurusPoint.style.top = "42%";
    brontosaurusPoint.style.left = "19%";
    brontosaurusPoint.style.display = "none";

    camptosaurusPoint.style.top = "29%";
    camptosaurusPoint.style.left = "33%";
    camptosaurusPoint.style.display = "none";

    carcharodontosaurusPoint.style.top = "30%";
    carcharodontosaurusPoint.style.left = "40%";
    carcharodontosaurusPoint.style.display = "block";

    carnotaurusPoint.style.top = "50%";
    carnotaurusPoint.style.left = "30%";
    carnotaurusPoint.style.display = "block";

    dilophosaurusPoint.style.top = "31%";
    dilophosaurusPoint.style.left = "68%";
    dilophosaurusPoint.style.display = "none";

    dimorphodonPoint.style.top = "15%";
    dimorphodonPoint.style.left = "34%";
    dimorphodonPoint.style.display = "none";

    diplodocusPoint.style.top = "26%";
    diplodocusPoint.style.left = "22%";
    diplodocusPoint.style.display = "none";

    elasmosaurusPoint.style.top = "34%";
    elasmosaurusPoint.style.left = "25%";
    elasmosaurusPoint.style.display = "block";

    gallimimusPoint.style.top = "50%";
    gallimimusPoint.style.left = "48%";
    gallimimusPoint.style.display = "block";

    huayangosaurusPoint.style.top = "26%";
    huayangosaurusPoint.style.left = "63%";
    huayangosaurusPoint.style.display = "none";

    hydrorionPoint.style.top = "20%";
    hydrorionPoint.style.left = "35%";
    hydrorionPoint.style.display = "none";

    iberomesornisPoint.style.top = "12%";
    iberomesornisPoint.style.left = "32%";
    iberomesornisPoint.style.display = "block";

    ichthyosaurusPoint.style.top = "38%";
    ichthyosaurusPoint.style.left = "72%";
    ichthyosaurusPoint.style.display = "none";

    lesothosaurusPoint.style.top = "67%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "none";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "none";

    megalosaurusPoint.style.top = "9%";
    megalosaurusPoint.style.left = "35%";
    megalosaurusPoint.style.display = "none";

    microraptorPoint.style.top = "30%";
    microraptorPoint.style.left = "68%";
    microraptorPoint.style.display = "block";

    minmiPoint.style.top = "72%";
    minmiPoint.style.left = "72%";
    minmiPoint.style.display = "block";

    mosasaurusPoint.style.top = "20%";
    mosasaurusPoint.style.left = "38%";
    mosasaurusPoint.style.display = "block";

    ozraptorPoint.style.top = "72%";
    ozraptorPoint.style.left = "72%";
    ozraptorPoint.style.display = "none";

    parasaurolophusPoint.style.top = "15%";
    parasaurolophusPoint.style.left = "18%";
    parasaurolophusPoint.style.display = "block";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "15%";
    pliosaurusPoint.style.display = "none";

    protoceratopsPoint.style.top = "16%";
    protoceratopsPoint.style.left = "45%";
    protoceratopsPoint.style.display = "block";

    pteranodonPoint.style.top = "10%";
    pteranodonPoint.style.left = "40%";
    pteranodonPoint.style.display = "block";

    pterodactylePoint.style.top = "26%";
    pterodactylePoint.style.left = "40%";
    pterodactylePoint.style.display = "none";

    quetzalcoatlusPoint.style.top = "45%";
    quetzalcoatlusPoint.style.left = "22%";
    quetzalcoatlusPoint.style.display = "block";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "28%";
    rhamphorhynchusPoint.style.display = "none";

    stegosaurusPoint.style.top = "54%";
    stegosaurusPoint.style.left = "20%";
    stegosaurusPoint.style.display = "none";

    triceratopsPoint.style.top = "25%";
    triceratopsPoint.style.left = "25%";
    triceratopsPoint.style.display = "block";

    tyrannosaurusPoint.style.top = "20%";
    tyrannosaurusPoint.style.left = "20%";
    tyrannosaurusPoint.style.display = "block";

    velociraptorPoint.style.top = "28%";
    velociraptorPoint.style.left = "58%";
    velociraptorPoint.style.display = "block";
    
  }else if (cretaceDeux) {

    allosaurusPoint.style.top = "23%";
    allosaurusPoint.style.left = "27%";
    allosaurusPoint.style.display = "none";

    amargasaurusPoint.style.top = "75%";
    amargasaurusPoint.style.left = "22%";
    amargasaurusPoint.style.display = "block";

    ankylosaurusPoint.style.top = "53%";
    ankylosaurusPoint.style.left = "21%";
    ankylosaurusPoint.style.display = "block";

    apatosaurusPoint.style.top = "18%";
    apatosaurusPoint.style.left = "14%";
    apatosaurusPoint.style.display = "none";

    archaeopteryxPoint.style.top = "10%";
    archaeopteryxPoint.style.left = "40%";
    archaeopteryxPoint.style.display = "none";

    archelonPoint.style.top = "33%";
    archelonPoint.style.left = "10%";
    archelonPoint.style.display = "block";

    baryonyxPoint.style.top = "14%";
    baryonyxPoint.style.left = "36%";
    baryonyxPoint.style.display = "block";

    bonnerichthysPoint.style.top = "55%";
    bonnerichthysPoint.style.left = "86%";
    bonnerichthysPoint.style.display = "block";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "20%";
    brachiosaurusPoint.style.display = "none";

    brontosaurusPoint.style.top = "42%";
    brontosaurusPoint.style.left = "19%";
    brontosaurusPoint.style.display = "none";

    camptosaurusPoint.style.top = "29%";
    camptosaurusPoint.style.left = "33%";
    camptosaurusPoint.style.display = "none";

    carcharodontosaurusPoint.style.top = "32%";
    carcharodontosaurusPoint.style.left = "40%";
    carcharodontosaurusPoint.style.display = "block";

    carnotaurusPoint.style.top = "51%";
    carnotaurusPoint.style.left = "25%";
    carnotaurusPoint.style.display = "block";

    dilophosaurusPoint.style.top = "31%";
    dilophosaurusPoint.style.left = "68%";
    dilophosaurusPoint.style.display = "none";

    dimorphodonPoint.style.top = "15%";
    dimorphodonPoint.style.left = "34%";
    dimorphodonPoint.style.display = "none";

    diplodocusPoint.style.top = "26%";
    diplodocusPoint.style.left = "22%";
    diplodocusPoint.style.display = "none";

    elasmosaurusPoint.style.top = "33%";
    elasmosaurusPoint.style.left = "20%";
    elasmosaurusPoint.style.display = "block";

    gallimimusPoint.style.top = "50%";
    gallimimusPoint.style.left = "48%";
    gallimimusPoint.style.display = "block";

    huayangosaurusPoint.style.top = "26%";
    huayangosaurusPoint.style.left = "63%";
    huayangosaurusPoint.style.display = "none";

    hydrorionPoint.style.top = "20%";
    hydrorionPoint.style.left = "35%";
    hydrorionPoint.style.display = "none";

    iberomesornisPoint.style.top = "16%";
    iberomesornisPoint.style.left = "33%";
    iberomesornisPoint.style.display = "block";

    ichthyosaurusPoint.style.top = "38%";
    ichthyosaurusPoint.style.left = "72%";
    ichthyosaurusPoint.style.display = "none";

    lesothosaurusPoint.style.top = "67%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "none";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "none";

    megalosaurusPoint.style.top = "9%";
    megalosaurusPoint.style.left = "35%";
    megalosaurusPoint.style.display = "none";

    microraptorPoint.style.top = "28%";
    microraptorPoint.style.left = "72%";
    microraptorPoint.style.display = "block";

    minmiPoint.style.top = "70%";
    minmiPoint.style.left = "78%";
    minmiPoint.style.display = "block";

    mosasaurusPoint.style.top = "22%";
    mosasaurusPoint.style.left = "32%";
    mosasaurusPoint.style.display = "block";

    ozraptorPoint.style.top = "72%";
    ozraptorPoint.style.left = "72%";
    ozraptorPoint.style.display = "none";

    parasaurolophusPoint.style.top = "13%";
    parasaurolophusPoint.style.left = "13%";
    parasaurolophusPoint.style.display = "block";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "15%";
    pliosaurusPoint.style.display = "none";

    protoceratopsPoint.style.top = "20%";
    protoceratopsPoint.style.left = "50%";
    protoceratopsPoint.style.display = "block";

    pteranodonPoint.style.top = "12%";
    pteranodonPoint.style.left = "38%";
    pteranodonPoint.style.display = "block";

    pterodactylePoint.style.top = "26%";
    pterodactylePoint.style.left = "40%";
    pterodactylePoint.style.display = "none";

    quetzalcoatlusPoint.style.top = "46%";
    quetzalcoatlusPoint.style.left = "16%";
    quetzalcoatlusPoint.style.display = "block";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "28%";
    rhamphorhynchusPoint.style.display = "none";

    stegosaurusPoint.style.top = "54%";
    stegosaurusPoint.style.left = "20%";
    stegosaurusPoint.style.display = "none";

    triceratopsPoint.style.top = "24%";
    triceratopsPoint.style.left = "19%";
    triceratopsPoint.style.display = "block";

    tyrannosaurusPoint.style.top = "18%";
    tyrannosaurusPoint.style.left = "15%";
    tyrannosaurusPoint.style.display = "block";

    velociraptorPoint.style.top = "26%";
    velociraptorPoint.style.left = "58%";
    velociraptorPoint.style.display = "block";
    
  }else if (cretaceTrois) {

    allosaurusPoint.style.top = "23%";
    allosaurusPoint.style.left = "27%";
    allosaurusPoint.style.display = "none";

    amargasaurusPoint.style.top = "75%";
    amargasaurusPoint.style.left = "16%";
    amargasaurusPoint.style.display = "block";

    ankylosaurusPoint.style.top = "53%";
    ankylosaurusPoint.style.left = "17%";
    ankylosaurusPoint.style.display = "block";

    apatosaurusPoint.style.top = "18%";
    apatosaurusPoint.style.left = "14%";
    apatosaurusPoint.style.display = "none";

    archaeopteryxPoint.style.top = "10%";
    archaeopteryxPoint.style.left = "40%";
    archaeopteryxPoint.style.display = "none";

    archelonPoint.style.top = "30%";
    archelonPoint.style.left = "3%";
    archelonPoint.style.display = "block";

    baryonyxPoint.style.top = "13%";
    baryonyxPoint.style.left = "34%";
    baryonyxPoint.style.display = "block";

    bonnerichthysPoint.style.top = "50%";
    bonnerichthysPoint.style.left = "96%";
    bonnerichthysPoint.style.display = "block";

    brachiosaurusPoint.style.top = "16%";
    brachiosaurusPoint.style.left = "20%";
    brachiosaurusPoint.style.display = "none";

    brontosaurusPoint.style.top = "42%";
    brontosaurusPoint.style.left = "19%";
    brontosaurusPoint.style.display = "none";

    camptosaurusPoint.style.top = "29%";
    camptosaurusPoint.style.left = "33%";
    camptosaurusPoint.style.display = "none";

    carcharodontosaurusPoint.style.top = "34%";
    carcharodontosaurusPoint.style.left = "39%";
    carcharodontosaurusPoint.style.display = "block";

    carnotaurusPoint.style.top = "52%";
    carnotaurusPoint.style.left = "20%";
    carnotaurusPoint.style.display = "block";

    dilophosaurusPoint.style.top = "31%";
    dilophosaurusPoint.style.left = "68%";
    dilophosaurusPoint.style.display = "none";

    dimorphodonPoint.style.top = "15%";
    dimorphodonPoint.style.left = "34%";
    dimorphodonPoint.style.display = "none";

    diplodocusPoint.style.top = "26%";
    diplodocusPoint.style.left = "22%";
    diplodocusPoint.style.display = "none";

    elasmosaurusPoint.style.top = "27%";
    elasmosaurusPoint.style.left = "10%";
    elasmosaurusPoint.style.display = "block";

    gallimimusPoint.style.top = "50%";
    gallimimusPoint.style.left = "48%";
    gallimimusPoint.style.display = "block";

    huayangosaurusPoint.style.top = "26%";
    huayangosaurusPoint.style.left = "63%";
    huayangosaurusPoint.style.display = "none";

    hydrorionPoint.style.top = "20%";
    hydrorionPoint.style.left = "35%";
    hydrorionPoint.style.display = "none";

    iberomesornisPoint.style.top = "20%";
    iberomesornisPoint.style.left = "37%";
    iberomesornisPoint.style.display = "block";

    ichthyosaurusPoint.style.top = "38%";
    ichthyosaurusPoint.style.left = "72%";
    ichthyosaurusPoint.style.display = "none";

    lesothosaurusPoint.style.top = "67%";
    lesothosaurusPoint.style.left = "45%";
    lesothosaurusPoint.style.display = "none";

    liopleurodonPoint.style.top = "60%";
    liopleurodonPoint.style.left = "60%";
    liopleurodonPoint.style.display = "none";

    megalosaurusPoint.style.top = "9%";
    megalosaurusPoint.style.left = "35%";
    megalosaurusPoint.style.display = "none";

    microraptorPoint.style.top = "25%";
    microraptorPoint.style.left = "75%";
    microraptorPoint.style.display = "block";

    minmiPoint.style.top = "65%";
    minmiPoint.style.left = "84%";
    minmiPoint.style.display = "block";

    mosasaurusPoint.style.top = "28%";
    mosasaurusPoint.style.left = "25%";
    mosasaurusPoint.style.display = "block";

    ozraptorPoint.style.top = "72%";
    ozraptorPoint.style.left = "72%";
    ozraptorPoint.style.display = "none";

    parasaurolophusPoint.style.top = "12%";
    parasaurolophusPoint.style.left = "7%";
    parasaurolophusPoint.style.display = "block";

    pliosaurusPoint.style.top = "38%";
    pliosaurusPoint.style.left = "15%";
    pliosaurusPoint.style.display = "none";

    protoceratopsPoint.style.top = "20%";
    protoceratopsPoint.style.left = "55%";
    protoceratopsPoint.style.display = "block";

    pteranodonPoint.style.top = "16%";
    pteranodonPoint.style.left = "42%";
    pteranodonPoint.style.display = "block";

    pterodactylePoint.style.top = "26%";
    pterodactylePoint.style.left = "40%";
    pterodactylePoint.style.display = "none";

    quetzalcoatlusPoint.style.top = "44%";
    quetzalcoatlusPoint.style.left = "12%";
    quetzalcoatlusPoint.style.display = "block";

    rhamphorhynchusPoint.style.top = "53%";
    rhamphorhynchusPoint.style.left = "28%";
    rhamphorhynchusPoint.style.display = "none";

    stegosaurusPoint.style.top = "54%";
    stegosaurusPoint.style.left = "20%";
    stegosaurusPoint.style.display = "none";

    triceratopsPoint.style.top = "24%";
    triceratopsPoint.style.left = "15%";
    triceratopsPoint.style.display = "block";

    tyrannosaurusPoint.style.top = "18%";
    tyrannosaurusPoint.style.left = "10%";
    tyrannosaurusPoint.style.display = "block";

    velociraptorPoint.style.top = "26%";
    velociraptorPoint.style.left = "64%";
    velociraptorPoint.style.display = "block";
    
  }

  //EURASIE
  gsap.to(eurasie, { x: (currentData.eurasie.posX + "px"), duration: 2 });
  gsap.to(eurasie, { y: (currentData.eurasie.posY + "px"), duration: 2 });
  gsap.to(eurasieRotate, { rotation: currentData.eurasie.rot, duration: 2 });


  //AMERIQUE DU NORD
  gsap.to(ameriqueNord, { x: (currentData.ameriqueNord.posX + 'px'), duration: 2 });
  gsap.to(ameriqueNord, { y: (currentData.ameriqueNord.posY + 'px'), duration: 2 });
  gsap.to(ameriqueNordRotate, { rotation: currentData.ameriqueNord.rot, duration: 2 });

  //AMÉRIQUE DU SUD
  gsap.to(ameriqueSud, { x: (currentData.ameriqueSud.posX + 'px'), duration: 2 });
  gsap.to(ameriqueSud, { y: (currentData.ameriqueSud.posY + 'px'), duration: 2 });
  gsap.to(ameriqueSudRotate, { rotation: currentData.ameriqueSud.rot, duration: 2 });


  //AFRIQUE
  gsap.to(afrique, { y: (currentData.afrique.posY + 'px'), duration: 2 });
  gsap.to(afrique, { x: (currentData.afrique.posX + 'px'), duration: 2 });
  gsap.to(afriqueRotate, { rotation: currentData.afrique.rot, duration: 2 });

  //MADAGASCAR
  gsap.to(madagascar, { x: (currentData.madagascar.posX + 'px'), duration: 2 });
  gsap.to(madagascar, { y: (currentData.madagascar.posY + 'px'), duration: 2 });
  gsap.to(madagascarRotate, { rotation: currentData.madagascar.rot, duration: 2 });

  //INDE

  gsap.to(inde, { x: (currentData.inde.posX + 'px'), duration: 2 });
  gsap.to(inde, { y: (currentData.inde.posY + 'px'), duration: 2 });
  gsap.to(indeRotate, { rotation: currentData.inde.rot, duration: 2 });

  //AUSTRALIE
  gsap.to(australie, { x: (currentData.australie.posX + 'px'), duration: 2 });
  gsap.to(australie, { y: (currentData.australie.posY + 'px'), duration: 2 });
  gsap.to(australieRotate, { rotation: currentData.australie.rot, duration: 2 });


  //GROENLAND

  gsap.to(groenland, { y: (currentData.groenland.posY + 'px'), duration: 2 });
  gsap.to(groenland, { x: (currentData.groenland.posX + 'px'), duration: 2 });
  gsap.to(groenlandRotate, { rotation: currentData.groenland.rot, duration: 2 });

  //ANTARCTIQUE
  gsap.to(antarctique, { x: (currentData.antarctique.posX + 'px'), duration: 2 });
  gsap.to(antarctique, { y: (currentData.antarctique.posY + 'px'), duration: 2 });
  gsap.to(antarctiqueRotate, { rotation: currentData.antarctique.rot, duration: 2 });


  lastValue = inputSlider.value;
});