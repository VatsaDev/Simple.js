function think(statement) {
  console.log(statement);
}

function message(content) {
  alert(content);
}

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function mod(x, y) {
  return x % y;
}

function round(num) {
  return Math.floor(num);
}

function randomfrom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function power(level, num) {
  return Math.pow(num, level);
}

function equal(num1, num2) {
  if (num1 == num2) {
    return true;
  } else {
    return false;
  }
}

function question(content) {
  prompt(content);
}

function say(id, content) {
  $(id).text(content);
}

function addpage(id, content) {
  $(id).append(content);
}

function fadeout(id, sec) {
  var time = sec * 1000;
  $(id).fadeOut(time);
}

function fadein(id, sec) {
  var time = sec * 1000;
  $(id).fadeIn(time);
}

function wait(sec, func) {
  var time = sec * 1000;
  setTimeout(func, time);
}

function clickHandler(event) {
  console.log("Click! " + event.pageX + " " + event.pageY);
}

function clickPos(id) {
  $(id).click(clickHandler);
}

function mousefollow(id) {
  $("html").mousemove(function (event) {
    $(id).offset({ left: event.pageX, top: event.pageY });
  });
}

function clickfollow(id) {
  $("html").click(function (event) {
    $(id).offset({ left: event.pageX, top: event.pageY });
  });
}

//arrays
wordArray = [
  "vaporizing",
  "melting",
  "boiling",
  "very hot",
  "hot",
  "warm",
  "normal",
  "chill",
  "cold",
  "very cold",
  "freezing",
  "icey",
  "vaccum of space cold",
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Gnu",
  "Goat",
  "Goldfinch",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Goshawk",
  "Grasshopper",
  "Grouse",
  "Guanaco",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Human",
  "Hummingbird",
  "Hyena",
  "Ibex",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Jay",
  "Jellyfish",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Kouprey",
  "Kudu",
  "Lapwing",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Llama",
  "Lobster",
  "Locust",
  "Loris",
  "Louse",
  "Lyrebird",
  "Magpie",
  "Mallard",
  "Manatee",
  "Mandrill",
  "Mantis",
  "Marten",
  "Meerkat",
  "Mink",
  "Mole",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Mouse",
  "Mule",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Oryx",
  "Ostrich",
  "Otter",
  "Owl",
  "Oyster",
  "Panther",
  "Parrot",
  "Partridge",
  "Peafowl",
  "Pelican",
  "Penguin",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Red panda",
  "Reindeer",
  "Rhinoceros",
  "Rook",
  "Salamander",
  "Salmon",
  "Sand Dollar",
  "Sandpiper",
  "Sardine",
  "Scorpion",
  "Seahorse",
  "Seal",
  "Shark",
  "Sheep",
  "Shrew",
  "Skunk",
  "Snail",
  "Snake",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Stinkbug",
  "Stork",
  "Swallow",
  "Swan",
  "Tapir",
  "Tarsier",
  "Termite",
  "Tiger",
  "Toad",
  "Trout",
  "Turkey",
  "Turtle",
  "Viper",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Wasp",
  "Weasel",
  "Whale",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Wombat",
  "Woodcock",
  "Woodpecker",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
  "pizza",
  "berries",
  "pancakes",
  "cake",
  "ice cream",
  "chips",
  "waffles",
  "bacon",
  "chickpeas",
  "mushroom",
  "carrots",
  "raspberries",
  "tomatoes",
  "pie",
  "onion soup",
  "rabbit stew",
  "radish",
  "fish soup",
  "The God Creator of this Library, VatsaDev",
];

//func
function randomFromList(list) {
  var word = wordArray[Math.floor(Math.random() * wordArray.length)];
  return word;
}

//canvas
function canvasRectStroke(x, y, width, height, color, thickness) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.strokeRect(x, y, width, height);
}

function canvasRect(x, y, width, height, color) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function canvasBeginPath(color, thickness) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.beginPath();
}

function canvasMove(x, y) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.moveTo(x, y);
}

function canvasLine(x, y) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.lineTo(x, y);
}

function canvasClosePath() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.stroke();
}

function canvasFill(color) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fill();
}

function canvasArc(x,y,radius,startAngle,endAngle,clockwise,color, thickness) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.lineWidth = thickness;
  ctx.strokeStyle = color;
  ctx.arc(x, y, radius, startAngle, endAngle, clockwise);
}
